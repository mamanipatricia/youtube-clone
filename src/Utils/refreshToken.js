let idSetTimeout = "";
let firsSetTimeout = "";

export const refreshTokenSetup = (res) => {
  // Timing to renew access token
  let refreshTiming = (res?.tokenObj?.expires_in || 3600 - 5 * 60) * 1000;
  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    localStorage.setItem("accessToken", newAuthRes.access_token);

    //clear timeout
    clearTimeout(idSetTimeout);
    // Setup the other timer after the first one
    idSetTimeout = setTimeout(refreshToken, refreshTiming);
  };

  // Setup first refresh timer
  clearTimeout(firsSetTimeout);

  firsSetTimeout = setTimeout(refreshToken, refreshTiming);
};
