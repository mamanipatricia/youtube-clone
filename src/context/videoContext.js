import { useReducer, createContext, useContext } from "react";

const VideoContext = createContext();

const actionTypes = {
  NEXT_VIDEO: "NEXT_VIDEO",
};

export default function VideoContextProvider({ children }) {
  const videoReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.NEXT_VIDEO:
        return { ...state, nextVideoId: action.nextVideoId };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };
  const [state, dispatch] = useReducer(videoReducer, { nextVideoId: "" });
  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error("useVideo must be used within an VideoProvider component");
  }
  return context;
}
