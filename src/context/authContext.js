import { createContext, useState, useContext } from "react";
import { useGoogleLogin, useGoogleLogout } from "react-google-login";
import { clientId } from "../config";
import RecordService from "../services/RecordService";
import { refreshTokenSetup } from "../Utils/refreshToken";

const AuthContext = createContext();
export default AuthContext;

const SCOPES =
  "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.channel-memberships.creator https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtubepartner-channel-audit";

export function AuthContextProvider({ children }) {
  // GOOGLE LOGIN HOOKS INITIALIZATIONS
  /*------------------------
        onLogoutSuccess
  --------------------------
  */
  const onLogoutSuccess = async (_res) => {
    const recordService = new RecordService();
    await recordService.createRecord({
      action: "logout",
    });
    localStorage.removeItem("userId");

    location.assign("/");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setLoggedIn(false);
  };

  const onFailure = (_res) => {
    console.log(`Failed to login. 😢`);
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
    const recordService = new RecordService();

    const responseRecord = await recordService.createUser({
      name: res.profileObj.name,
      email: res.profileObj.email,
    });
    if (responseRecord) {
      localStorage.setItem("userId", responseRecord.data._id);
      await recordService.createRecord({
        action: "login",
      });
    }

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

  const [started, setStarted] = useState(false);

  return (
    <AuthContext.Provider
      value={{ loggedIn, user, signIn, signOut, started, setStarted }}
    >
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
