import React from "react";
import { useAuth } from "../context/authContext";

function Logout() {
  const { signOut, loggedIn } = useAuth();

  return (
    <>
      {loggedIn && (
        <button onClick={signOut} className="button">
          <img src="icons/google.svg" alt="google login" className="icon" />
          <span className="buttonText">Sign out</span>
        </button>
      )}
    </>
  );
}

export default Logout;
