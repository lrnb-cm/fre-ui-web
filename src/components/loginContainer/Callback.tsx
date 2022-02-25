import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Google, Salesforce } from "./config";
import { GET_USER_AT_CLIENT } from "./queries/queries";

export default function LoginCallback() {
  const { data, loading, error } = useQuery(GET_USER_AT_CLIENT, {
    variables: { email: localStorage.getItem('email') }
  });
  useEffect(() => {
    const code = (window.location.search.match(/code=([^&]+)/) || [])[1];
    const state = (window.location.search.match(/state=([^&]+)/) || [])[1];
    const qParams = [
      `code=${code}`,
      `redirect_uri=${
      state === "google" ? Google.REDIRECT_URI : Salesforce.REDIRECT_URI
      }`,
      `scope=${state === "google" ? Google.SCOPE : Salesforce.SCOPE}`
    ].join("&");
    fetch(`/api/auth-from-code/${state}?${qParams}`, {
      credentials: "include"
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(console.error);
  }, []);
  if (loading) return <p> loading</p>;
  if (error) return <p> error</p>;
  const url = '/validated'
  window.location.href != window.location.hostname 
  || `${window.location.hostname}:3000/` + url 
  && window.location.replace(url)
  return <p>
    API Key -&gt; {data.userProvider.ApiKey}
  </p>;
};