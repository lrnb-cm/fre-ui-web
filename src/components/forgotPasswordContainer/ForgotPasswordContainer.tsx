import React, { useState } from 'react';
import { Grid, Theme, IconButton, InputAdornment } from '@mui/material';

import { Formik } from 'formik';
import Account from '../auth/Account';
import { makeStyles } from '@mui/styles';

import TextInput from '../form/TextInput';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {
  forgotPwdInitialValues,
  forgotPwdValidationSchema,
} from './forgotPwdSchema';
import forgotPwdImage from '../../asset/img/forgotpassword.png';

const Alert = React.forwardRef(function Alert(props: any, ref: any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme: Theme) => ({
  btn: {
    // width: '79px',
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
  },
  pwdLink: {
    textDecoration: 'underline',
  },
}));

export default function ForgotPassword() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Formik
      initialValues={forgotPwdInitialValues}
      validationSchema={forgotPwdValidationSchema}
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
              Incorrect Email
            </Alert>
          </Snackbar>
          <Account
            altLink="/login"
            altText="Already have an account?"
            altLinkText="Login"
            headingText="Forgot Password?"
            bodyText="Enter the email address you used when you joined and we’ll send you instructions to reset your password."
            image={forgotPwdImage}
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
              <button className={classes.btn} type="submit">
                Send Reset Instruction
              </button>
            </Grid>
          </Account>
        </form>
      )}
    </Formik>
  );
}
