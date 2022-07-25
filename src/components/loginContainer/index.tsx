import React, { useState } from 'react';
import {
   useApolloClient,
   useLazyQuery,
   useMutation,
   useQuery,
   useReactiveVar,
} from '@apollo/client';
import { Grid, Theme, IconButton, InputAdornment } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
// import { useFirebaseContext } from '../auth/firebase/FirebaseContext';
import { useAuthContext } from '../auth/authProvider/AuthContext';
import GET_USER_DATA from '../../queries/GET_USER_DATA';
import Account from '../auth/Account';
import TextInput from '../form/TextInput';
import { Google } from './config';
import { OIDC_LOGIN, VERIFY_CAPTCHA } from './queries/mutations';
import { COMPANY_PROVIDER, VALIDATE_COMPANY_TOKEN } from './queries/queries';

import loginImage from '../../asset/img/signin.png';
import { makeStyles } from '@mui/styles';
import { DASHBOARD, FORGOT_PASSWORD } from '../../constants/routes';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Formik } from 'formik';
import { loginInitialValues, loginValidationSchema } from './loginSchema';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ReCAPTCHA from 'react-google-recaptcha';
import LoadingButton from '@mui/lab/LoadingButton';
import companyIdentity from './externalIDPs/companyIdentity';
import IdleTimer from '../auth/idleTimer/IdleTimer';
const CAPTCHA_KEY = '6LehR5YgAAAAAGUaPsAswViBvBRwEzovKmnrDW3i';

const Alert = React.forwardRef(function Alert(props: any, ref: any) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme: Theme) => ({
   btn: {
      width: '79px',
      height: '48px',
      background: '#3758CC',
      borderRadius: '16px',
      fontFamily: theme.typography.fontFamilyBold,
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: theme.custom.pxToRem(18),
      lineHeight: '100%',
      color: '#FFFFFF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      border: 'none',
      textTransform: 'capitalize',
      [theme.breakpoints.down('md')]: {
         width: '100%',
      },
      '&:hover': {
         backgroundColor: '#3758CC',
      },
   },
   pwdLink: {
      textDecoration: 'underline',
   },
}));
export default function LoginComp() {
   const classes = useStyles();

   const [login] = useMutation(OIDC_LOGIN);
   const [verifyCaptcha] = useLazyQuery(VERIFY_CAPTCHA);
   const [getCompanyProvider] = useLazyQuery(COMPANY_PROVIDER);
   const [validateCompanyToken] = useLazyQuery(VALIDATE_COMPANY_TOKEN);

   const apolloClient = useApolloClient();
   const navigate = useNavigate();
   const { setUser } = useAuthContext();

   const [showPassword, setShowPassword] = useState(false);
   const [isDisabled, setIsDisabled] = useState(true);
   const [loading, setLoading] = useState(false);

   const [notify, setNotify] = useState({
      open: false,
      error: 'Incorrect Email or Password!',
   });

   const handleLogin = (payload: any) => {
      setLoading(true);
      login({
         variables: {
            provider: payload.state,
            payload: JSON.stringify(payload),
         },
      })
         .then((data) => {
            const user = {
               company: {
                  company_name: data.data.loginProvider.company,
               },
               saml: {
                  group: data.data.loginProvider.group,
                  role: data.data.loginProvider.group,
                  access: [],
               },
               token: data.data.loginProvider.token,
            };
            setUser(user);

            //store session token
            sessionStorage.setItem('user', JSON.stringify(user));

            setLoading(false);

            //navigate to dashboard
            navigate(DASHBOARD);
         })
         .catch(() => {
            setNotify({
               open: true,
               error: 'Incorrect Email or Password!',
            });
            setLoading(false);
         });
   };

   const handleCompanyIdp = async (values: any) => {
      setLoading(true);

      try {
         //1. query for company identity provider
         const identity = await getCompanyProvider({
            variables: {
               identity: values.company,
            },
         });
         console.log('identity', identity);
         // console.log('identity', identity?.data?.getCompanyProvider);
         if (!identity?.data?.getCompanyProvider) {
            setLoading(false);

            return setNotify({
               open: true,
               error: 'Company not yet register, contact your administrator.',
            });
         }
         //2.instantiates company identity
         const data: any = await companyIdentity(
            identity?.data?.getCompanyProvider,
            values
         );

         //3. send both token and Saml details for validation to server
         const userDetails = JSON.stringify({
            ...data,
            company: identity?.data?.getCompanyProvider,
         });
         // console.log('data-saml', userDetails);
         const userWithToken = await validateCompanyToken({
            variables: {
               payload: userDetails,
            },
         });

         console.log(
            'userWithToken?.data?.validateCompanyToken',
            userWithToken?.data?.validateCompanyToken
         );

         if (userWithToken?.data?.validateCompanyToken?.success) {
            //1. set user context
            setUser({
               ...userWithToken?.data?.validateCompanyToken,
            });

            //store session token
            sessionStorage.setItem(
               'lilli_user',
               JSON.stringify(userWithToken?.data?.validateCompanyToken)
            );

            setLoading(false);

            //navigate to dashboard
            navigate(DASHBOARD);
         }
      } catch (err) {
         setLoading(false);

         console.log('err', err);
      }
   };
   const handleClose = () => setNotify({ open: false, error: '' });
   const onCaptchaChange = async (val: any) => {
      const response = await verifyCaptcha({
         variables: {
            captchaToken: val,
         },
      });
      if (response) {
         setIsDisabled(false);
      }
   };
   return (
      <Formik
         initialValues={loginInitialValues}
         validationSchema={loginValidationSchema}
         validate={(values) => {
            const errors: any = {};
            if (!values.email) {
               errors.email = 'Required';
            } else if (
               !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
               errors.email = 'Invalid email address';
            }
            return errors;
         }}
         onSubmit={(values) => {
            console.log({ values });
            if (values.company) {
               return handleCompanyIdp(values);
            }
            console.log('after-company');

            handleLogin({ ...values, state: 'standard' });
         }}
      >
         {({ handleChange, handleSubmit, touched, errors, values }) => (
            <form onSubmit={handleSubmit}>
               <Snackbar
                  open={notify.open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
               >
                  <Alert
                     onClose={handleClose}
                     severity="error"
                     sx={{ width: '100%' }}
                  >
                     {notify.error}
                  </Alert>
               </Snackbar>
               <Account
                  altLink="/register"
                  altText="Don't have an account?"
                  altLinkText="Register"
                  headingText="Welcome Back"
                  bodyText="We look forward you are a part of our awesome product helping you Master Returns Management."
                  image={loginImage}
               >
                  <Grid item xs={24}>
                     <TextInput
                        label="Company identity"
                        placeholder="Enter company identity"
                        id="company"
                        value={values.company}
                        onChange={handleChange('company')}
                        sx={{
                           '.MuiInputBase-input': {
                              border: '1px solid #ced4da',
                           },
                           '.MuiInputBase-input:focus': {
                              borderColor: '#3758CC',
                              boxShadow: 'rgb(55 88 204 / 25%) 0 0 0 0.2rem',
                           },
                        }}
                     />
                  </Grid>
                  <Grid item xs={24}>
                     <TextInput
                        label="Your email address"
                        placeholder="Enter email address"
                        id="email"
                        autoComplete="username"
                        value={values.email}
                        onChange={handleChange('email')}
                        sx={{
                           '.MuiInputBase-input': {
                              border:
                                 touched.email && errors.email
                                    ? '1px solid red'
                                    : '1px solid #ced4da',
                           },
                           '.MuiInputBase-input:focus': {
                              borderColor:
                                 touched.email && errors.email
                                    ? 'red'
                                    : '#3758CC',
                              boxShadow:
                                 touched.email && errors.email
                                    ? 'none'
                                    : 'rgb(55 88 204 / 25%) 0 0 0 0.2rem',
                           },
                        }}
                     />
                  </Grid>
                  <Grid item xs={24}>
                     <TextInput
                        label="Your password"
                        placeholder="Enter password"
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                           <InputAdornment position="end">
                              <IconButton
                                 aria-label="toggle password visibility"
                                 onClick={(e) => {
                                    //preventDefault so the input's active styles remain
                                    e.preventDefault();
                                    setShowPassword(!showPassword);
                                 }}
                                 onMouseDown={(e) => {
                                    //preventDefault so the input's active styles remain
                                    e.preventDefault();
                                    setShowPassword(!showPassword);
                                 }}
                                 edge="end"
                              >
                                 {showPassword ? (
                                    <VisibilityOff />
                                 ) : (
                                    <Visibility />
                                 )}
                              </IconButton>
                           </InputAdornment>
                        }
                        sx={{
                           '.MuiInputBase-input': {
                              border:
                                 touched.password && errors.password
                                    ? '1px solid red'
                                    : '1px solid #ced4da',
                           },
                           '.MuiInputBase-input:focus': {
                              borderColor:
                                 touched.password && errors.password
                                    ? 'red'
                                    : '#3758CC',
                              boxShadow:
                                 touched.password && errors.password
                                    ? 'none'
                                    : 'rgb(55 88 204 / 25%) 0 0 0 0.2rem',
                           },
                        }}
                     />
                  </Grid>
                  <Grid
                     item
                     xs={24}
                     alignItems="flex-end"
                     sx={{ display: 'flex', justifyContent: 'flex-end' }}
                  >
                     <Link to={FORGOT_PASSWORD} className={classes.pwdLink}>
                        Forgot Password?
                     </Link>
                  </Grid>
                  <Grid item xs={24}>
                     <ReCAPTCHA
                        sitekey={CAPTCHA_KEY}
                        onChange={onCaptchaChange}
                        size="normal"
                     />
                  </Grid>
                  <Grid item xs={24}>
                     <LoadingButton
                        type="submit"
                        loading={loading}
                        disabled={isDisabled}
                        className={classes.btn}
                        sx={{
                           '.MuiLoadingButton-root': {},
                           '.MuiLoadingButton-loadingIndicator': {
                              color: '#fff',
                           },
                        }}
                     >
                        Login
                     </LoadingButton>
                  </Grid>
                  <IdleTimer />
               </Account>
            </form>
         )}
      </Formik>
   );
}
