import { createContext, useState, useContext } from "react";
import { useGoogleLogin, useGoogleLogout } from "react-google-login";
import { refreshTokenSetup } from "../Utils/refreshToken";

const AuthContext = createContext();
export default AuthContext;

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const SCOPES =
  "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.force-ssl";

export function AuthContextProvider({ children }) {
  // GOOGLE LOGIN HOOKS INITIALIZATIONS
  /*------------------------
        onLogoutSuccess
  --------------------------
  */
  const onLogoutSuccess = (_res) => {
    location.assign("/");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setLoggedIn(false);
  };

  const onFailure = (_res) => {
    alert(`Failed to login. 😢`);
  };

  const { signOut } = useGoogleLogout({
    onLogoutSuccess: onLogoutSuccess,
    onFailure: onFailure,
    clientId: clientId,
  });
  /*------------------------
        onSuccess
  --------------------------
  */
  const onSuccess = async (res) => {
    localStorageHandle(res);
    refreshTokenSetup(res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess: onSuccess,
    onFailure: onFailure,
    clientId: clientId,
    autoLoad: false,
    isSignedIn: true,
    accessType: "offline",
    scope: SCOPES,
    // theme: "dark",
    // responseType: "code",
    // prompt: "consent",
  });

  /*-----------------------------------------
      LOGGED IN MANAGEMENT IN LOCAL STORAGE
  -------------------------------------------
  */
  // accessToken lazy initialization
  const [loggedIn, setLoggedIn] = useState(() =>
    Boolean(localStorage.getItem("accessToken"))
  );

  const user = JSON.parse(localStorage.getItem("user"));

  const localStorageHandle = (res) => {
    const user = {
      name: res.profileObj.name,
      email: res.profileObj.email,
      imageUrl: res.profileObj.imageUrl,
    };
    localStorage.setItem("accessToken", res.accessToken);
    localStorage.setItem("user", JSON.stringify(user));

    setLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// custom hook to export the authContext value such as loggedIn, user, signIn, signOut
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider component");
  }
  return context;
}
