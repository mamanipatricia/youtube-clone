import React from "react";
import { useGoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../Utils/refreshToken";
import SignInButton from "../components/UI/SignInButton/SignInButton";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {
  const onSuccess = async (res) => {
    const { accessToken } = res;
    localStorage.setItem("accessToken", accessToken);
    alert(
      `Logged in successfully welcome ${res?.profileObj?.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess: onSuccess,
    onFailure,
    autoLoad: false,
    clientId,
    isSignedIn: false,
    accessType: "offline",
    // responseType: "code",
    // prompt: "consent",
    scope:
      "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.force-ssl",
  });

  return (
    <SignInButton clicked={signIn} icon="GOOGLE" text="Sign in with Google" />
  );
}

export default Login;
