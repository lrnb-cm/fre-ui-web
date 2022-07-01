import React, { useState } from 'react';
import { Grid, Theme } from '@mui/material';

import { Formik } from 'formik';
import Account from '../auth/Account';
import { makeStyles } from '@mui/styles';

import TextInput from '../form/TextInput';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {
   resetPwdInitialValues,
   resetPwdValidationSchema,
} from './resetPasswordSchema';
import resetPwdImage from '../../asset/img/resetpassword.png';
import { LOGIN } from '../../constants/routes';
import PasswordStrengthBar from 'react-password-strength-bar';
import LoadingButton from '@mui/lab/LoadingButton';

const Alert = React.forwardRef(function Alert(props: any, ref: any) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme: Theme) => ({
   resetbtn: {
      padding: '15px 16px',
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
      '&:hover': {
         backgroundColor: '#3758CC',
      },
   },
   pwdLink: {
      textDecoration: 'underline',
   },
}));

export default function ResetPassword() {
   const classes = useStyles();

   const [open, setOpen] = useState(false);
   const [isDisabled, setIsDisabled] = useState(true);
   const [loading, setLoading] = useState(false);

   const handleClose = () => setOpen(false);

   const passwordScore = (score: number) => {
      if (score >= 3) {
         setIsDisabled(false);
      } else {
         setIsDisabled(true);
      }
   };
   return (
      <Formik
         initialValues={resetPwdInitialValues}
         validationSchema={resetPwdValidationSchema}
         onSubmit={(values) => {
            console.log({ values });
            setLoading(true);
            if (values.password !== values.passwordConfirm) {
               setLoading(false);
               return setOpen(true);
            }
            setLoading(false);
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
                     Password not same
                  </Alert>
               </Snackbar>
               <Account
                  altLink={LOGIN}
                  altText="Already have an account?"
                  altLinkText="Login"
                  headingText="Reset Password"
                  bodyText="Enter your new password."
                  image={resetPwdImage}
               >
                  <Grid item xs={24}>
                     <TextInput
                        label="New password"
                        placeholder="Enter new pasword"
                        id="password"
                        value={values.password}
                        onChange={handleChange('password')}
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
                  <Grid item xs={24} sx={{ height: '20px' }}>
                     {values.password && (
                        <PasswordStrengthBar
                           password={values.password}
                           onChangeScore={passwordScore}
                        />
                     )}
                  </Grid>
                  <Grid
                     item
                     xs={24}
                     sx={{
                        '&.MuiGrid-item': {
                           paddingTop: '0px',
                        },
                     }}
                  >
                     <TextInput
                        label="Confirm new password"
                        placeholder="Confirm new pasword"
                        id="passwordConfirm"
                        value={values.passwordConfirm}
                        onChange={handleChange('passwordConfirm')}
                        sx={{
                           '.MuiInputBase-input': {
                              border:
                                 touched.passwordConfirm &&
                                 errors.passwordConfirm
                                    ? '1px solid red'
                                    : '1px solid #ced4da',
                           },
                           '.MuiInputBase-input:focus': {
                              borderColor:
                                 touched.passwordConfirm &&
                                 errors.passwordConfirm
                                    ? 'red'
                                    : '#3758CC',
                              boxShadow:
                                 touched.passwordConfirm &&
                                 errors.passwordConfirm
                                    ? 'none'
                                    : 'rgb(55 88 204 / 25%) 0 0 0 0.2rem',
                           },
                        }}
                     />
                  </Grid>
                  <Grid item xs={24}>
                     <LoadingButton
                        type="submit"
                        loading={loading}
                        disabled={isDisabled}
                        className={classes.resetbtn}
                        sx={{
                           '.MuiLoadingButton-root': {},
                           '&.MuiLoadingButton-loadingIndicator': {
                              color: '#fff',
                           },
                        }}
                     >
                        Reset Password
                     </LoadingButton>
                  </Grid>
               </Account>
            </form>
         )}
      </Formik>
   );
}
