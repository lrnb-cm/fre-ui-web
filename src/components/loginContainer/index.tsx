import React, { useState } from 'react';
import { useApolloClient, useMutation, useReactiveVar } from '@apollo/client';
import { Grid, Theme, IconButton, InputAdornment } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { useFirebaseContext } from '../../contexts/FirebaseContext';
import { useUserContext } from '../../contexts/UserContext';
import GET_USER_DATA from '../../queries/GET_USER_DATA';
import Account from '../auth/Account';
import TextInput from '../form/TextInput';
import { Google } from './config';
import { OIDC_LOGIN } from './queries/mutations';
import { localState } from './state/loginState';
import loginImage from '../../asset/img/signin.png';
import { makeStyles } from '@mui/styles';
import { FORGOT_PASSWORD } from '../../constants/routes';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Formik } from 'formik';
import { loginInitialValues, loginValidationSchema } from './loginSchema';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ReCAPTCHA from 'react-google-recaptcha';

const CAPTCHA_KEY = '6LeMY44gAAAAALcXMfA5lB-t0AuypZTs5PqB9I-b';

// '6Lc5cY4gAAAAAIji4TT4AeYKkRZnyVjTSrk7O9zf';
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
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  pwdLink: {
    textDecoration: 'underline',
  },
}));
export default function LoginComp() {
  const classes = useStyles();

  const [login, { loading, error }] = useMutation(OIDC_LOGIN);
  const state = useReactiveVar(localState);
  const firebase = useFirebaseContext();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const { setUserContext } = useUserContext();

  const [showPassword, setShowPassword] = useState(false);

  const [open, setOpen] = useState(false);
  const payload = {
    redirect_uri: Google.REDIRECT_URI,
    scope: Google.SCOPE,
    login_hint: 'email',
    prompt: 'consent',
    state: state.provider || 'google',
  };

  const handleLogin = () => {
    login({
      variables: {
        provider: payload.state,
        payload: JSON.stringify(payload),
      },
    }).then((d: any) => window.location.assign(d.data.loginProvider.url));
  };

  if (loading) return <p> loading</p>;
  if (error) return <p> error</p>;

  const handleFirebaseLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!firebase)
      throw new Error(
        'useFirebaseContext must be within FirebaseContext.Provider'
      );
    const loginEmail = 'sample@yahoo.com';
    const password = 'gghhj';
    // GCP Identity Platform / Firebase email/password authentication
    const auth = getAuth(firebase);
    signInWithEmailAndPassword(auth, loginEmail, password)
      .then(async (res) => {
        // Get then set the idToken (& email) in localStorage
        const idToken = await res.user.getIdToken();
        localStorage.setItem('idToken', idToken);
        localStorage.setItem('email', res.user.email || '');

        console.log(
          idToken,
          'idToken in signInWithEmailAndPassword.then - fetching data now..'
        );

        // Todo: add error handling if user does not exist in our database?
        // Get basic user data and permissions and set them to the user context
        const userData = await apolloClient.query({
          query: GET_USER_DATA,
          variables: {
            filters: { email: res.user.email },
          },
        });
        setUserContext({
          ...userData.data.getUser,
          idToken,
          userCredential: res,
        });

        //Todo: where should the user be redirected to after logging in?
        navigate('/secure-route');
      })
      .catch((error) => {
        //Todo: handle login error
        console.error(error.message);
      });
  };

  const handleClose = () => setOpen(false);
  const onCaptchaChange = (val: any) => {
    console.log('onCaptchaChange', val);
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
        setOpen(true);
        handleLogin();
      }}
    >
      {({ handleChange, handleSubmit, touched, errors, values }) => (
        <form onSubmit={handleSubmit}>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: '100%' }}
            >
              Incorrect Email or Password!
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
                      touched.email && errors.email ? 'red' : '#3758CC',
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
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
                      touched.password && errors.password ? 'red' : '#3758CC',
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
              <button className={classes.btn} type="submit">
                Login
              </button>
            </Grid>
          </Account>
        </form>
      )}
    </Formik>
  );
}
