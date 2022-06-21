import { useApolloClient, useMutation, useReactiveVar } from '@apollo/client';
import { Button, Grid, Theme, IconButton, InputAdornment } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebaseContext } from '../../contexts/FirebaseContext';
import { useUserContext } from '../../contexts/UserContext';
import Lock from '../../icons/Lock';
import SolidLock from '../../icons/SolidLock';
import GET_USER_DATA from '../../queries/GET_USER_DATA';
import Account from '../auth/Account';
import TextInput from '../form/TextInput';
import { Google } from './config';
import { OIDC_LOGIN } from './queries/mutations';
import { localState } from './state/loginState';
import loginImage from '../../asset/img/signin.png';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { FORGOT_PASSWORD } from '../../constants/routes';

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
  },
  pwdLink: {
    textDecoration: 'underline',
  },
}));
export default function LoginComp() {
  const classes = useStyles();

  const [login, { data, loading, error }] = useMutation(OIDC_LOGIN);
  const state = useReactiveVar(localState);
  const firebase = useFirebaseContext();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const { setUserContext } = useUserContext();
  const [loginEmail, setLoginEmail] = useState(
    localStorage.getItem('email') || ''
  );
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState(localStorage.getItem('email'));
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // useEffect(() => {
  //   if (email === "" || (email && !email.match(mailformat)) || email === null) {
  //     const newEmail = String(prompt("Enter Email Address:"));
  //     if (newEmail.match(mailformat)) {
  //       setEmail(newEmail);
  //       localStorage.setItem("email", newEmail);
  //     }
  //   }
  // }, [email]);

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

  const handleFirebaseLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!firebase)
      throw new Error(
        'useFirebaseContext must be within FirebaseContext.Provider'
      );

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

  return (
    <form onSubmit={handleFirebaseLogin}>
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
            label="Email"
            id="email"
            type="email"
            autoComplete="username"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            inputProps={{ autoComplete: 'username' }}
          />
        </Grid>
        <Grid item xs={24}>
          <TextInput
            label="Password"
            id="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <div className={classes.btn}>Login</div>
        </Grid>
      </Account>
    </form>
  );
}
