import {
  alpha,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Link,
  OutlinedInput,
  styled,
  Typography,
} from '@mui/material';
import { Google } from './config';
import { localState } from './state/loginState';
import { OIDC_LOGIN } from './queries/mutations';
import { useEffect, useState } from 'react';
import { useMutation, useReactiveVar } from '@apollo/client';
import Account from '../auth/Account';
import TextInput from '../form/TextInput';
import { useFirebaseContext } from '../../contexts/FirebaseContext';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Lock from '../../icons/Lock';
import SolidLock from '../../icons/SolidLock';

export default function LoginComp() {
  const [login, { data, loading, error }] = useMutation(OIDC_LOGIN);
  const state = useReactiveVar(localState);
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const firebase = useFirebaseContext();

  const [email, setEmail] = useState(localStorage.getItem('email'));
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    if (email === '' || (email && !email.match(mailformat)) || email === null) {
      const newEmail = String(prompt('Enter Email Address:'));
      if (newEmail.match(mailformat)) {
        setEmail(newEmail);
        localStorage.setItem('email', newEmail);
      }
    }
  }, [email]);

  const payload = {
    redirect_uri: Google.REDIRECT_URI,
    scope: Google.SCOPE,
    login_hint: email,
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

  const handleFirebaseLogin = () => {
    if (!firebase)
      throw new Error(
        'useFirebaseContext must be within FirebaseContext.Provider'
      );

    const auth = getAuth(firebase);
    signInWithEmailAndPassword(auth, loginEmail, password)
      .then((res) => {
        console.log(res, 'res');
      })
      .catch((error) => {
        //Todo: handle login error
        console.error(error.message);
      });
  };
  return (
    <Account
      altLink="/register"
      altText="Don't have an account?"
      altLinkText="Register"
      headingText="Welcome Back"
      bodyText="We look forward you are a part of our awesome product helping you Master Returns Management."
    >
      <Grid item>
        <TextInput
          label="Email"
          id="email"
          type="email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          inputProps={{ autoComplete: 'username' }}
        />
      </Grid>
      <Grid item>
        <TextInput
          label="Password"
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          inputProps={{ autoComplete: 'current-password' }}
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
                {showPassword ? <Lock /> : <SolidLock />}
              </IconButton>
            </InputAdornment>
          }
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={handleFirebaseLogin}
        >
          Login with Email
        </Button>
      </Grid>
      {/* <Grid item>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login with Google
        </Button>
      </Grid> */}
    </Account>
  );
}
