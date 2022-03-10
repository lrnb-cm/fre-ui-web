import { Button } from "@mui/material";
import { useMutation, useReactiveVar } from "@apollo/client";
import { localState } from "./state/loginState";
import { OIDC_LOGIN } from "./queries/mutations";
import { Google } from "./config";

let emails = localStorage.getItem('email')
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (emails === '' || emails && !emails.match(mailformat) || emails === null) {
  emails = String(prompt("Enter Email Address:"))
}
emails && emails.match(mailformat) && localStorage.setItem('email', emails)

export default function LoginComp() {
  const [login, { data, loading, error }] = useMutation(OIDC_LOGIN);
  const state = useReactiveVar(localState);
  const payload = {
    redirect_uri: Google.REDIRECT_URI,
    scope: Google.SCOPE,
    login_hint: emails,
    prompt: 'consent',
    state: state.provider || 'google'
  }

  const handleLogin = () => {
    login({ variables: { provider: state.provider || payload.state, payload: JSON.stringify(payload) } })
    .then((d: any) => window.location.assign(d.data.loginProvider.url))
  }

  if (loading) return <p> loading</p>;
  if (error) return <p> error</p>;
  return (
    <div>
      <Button 
        variant="contained" color="primary" 
        onClick={handleLogin}
      >
        Login with Google
      </Button>
    </div>
  );
};