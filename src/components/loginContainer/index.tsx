import { Button } from "@mui/material";
import { useMutation, useReactiveVar } from "@apollo/client";
import { localState } from "./state/loginState";
import { OIDC_LOGIN } from "./queries/mutations";
import { Google } from "./config";
import { useEffect, useState } from "react";

export default function LoginComp() {
  const [login, { data, loading, error }] = useMutation(OIDC_LOGIN);
  const state = useReactiveVar(localState);

  const [email, setEmail] = useState(localStorage.getItem("email"));
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    if (email === "" || (email && !email.match(mailformat)) || email === null) {
      const newEmail = String(
        process.env.NODE_ENV === "test"
          ? "wconnatser@lilliirnb.com"
          : prompt("Enter Email Address:")
      );
      if (newEmail.match(mailformat)) {
        setEmail(newEmail);
        localStorage.setItem("email", newEmail);
      }
    }
  }, [email]);

  const payload = {
    redirect_uri: Google.REDIRECT_URI,
    scope: Google.SCOPE,
    login_hint: email,
    prompt: "consent",
    state: state.provider || "google",
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
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login with Google
      </Button>
    </div>
  );
}
