import { useApolloClient } from "@apollo/client";
import { Button, Grid, IconButton, InputAdornment } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebaseContext } from "../../contexts/FirebaseContext";
import { useUserContext } from "../../contexts/UserContext";
import Lock from "../../icons/Lock";
import SolidLock from "../../icons/SolidLock";
import GET_USER_DATA from "../../queries/GET_USER_DATA";
import TextInput from "../form/TextInput";
import Account from "../layouts/Account";

export default function LoginComp() {
  const firebase = useFirebaseContext();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const { setUserContext } = useUserContext();
  const [loginEmail, setLoginEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFirebaseLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!firebase)
      throw new Error(
        "useFirebaseContext must be within FirebaseContext.Provider"
      );

    // GCP Identity Platform / Firebase email/password authentication
    const auth = getAuth(firebase);
    signInWithEmailAndPassword(auth, loginEmail, password)
      .then(async (res) => {
        // Get then set the idToken (& email) in localStorage
        const idToken = await res.user.getIdToken();
        localStorage.setItem("idToken", idToken);
        localStorage.setItem("email", res.user.email || "");

        console.log(
          idToken,
          "idToken in signInWithEmailAndPassword.then - fetching data now.."
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
        navigate("/");
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
      >
        <Grid item>
          <TextInput
            label="Email"
            id="email"
            type="email"
            autoComplete="username"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            inputProps={{ autoComplete: "username" }}
          />
        </Grid>
        <Grid item>
          <TextInput
            label="Password"
            id="password"
            type={showPassword ? "text" : "password"}
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
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Login with Email
          </Button>
        </Grid>
      </Account>
    </form>
  );
}
