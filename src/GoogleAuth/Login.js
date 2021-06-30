import SignInButton from "../components/UI/SignInButton/SignInButton";
import { useAuth } from "../context/authContext";

export default function Login() {
  const { loggedIn, signIn } = useAuth();
  return (
    <>
      {loggedIn ? null : (
        <SignInButton
          clicked={signIn}
          icon="GOOGLE"
          text="Sign in with Google"
        />
      )}
    </>
  );
}
