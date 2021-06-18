import { useState, useEffect } from "react";

let speech;
if (window.webkitSpeechRecognition) {
  //  eslint-disable-next-line
  const SpeechRecognition = webkitSpeechRecognition;
  speech = new SpeechRecognition();
  speech.continuous = false;
} else {
  speech = null;
}

const useVoice = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  const abortListen = () => {
    speech.abort();
  };

  const startListening = () => {
    if (!isListening) {
      setIsListening(true);
      speech.start();
    }
  };
  const endListening = () => {
    if (isListening) {
      setIsListening(false);
      speech.stop();
    }
  };

  useEffect(() => {
    if (!speech) return;
    speech.onresult = (event) => {
      setText(event.results[event.results.length - 1][0].transcript);
      setIsListening(false);
      speech.stop();
    };

    speech.onerror = (_event) => {
      setIsListening(false);
      speech.abort();
    };
  }, []);

  return {
    text,
    isListening,
    abortListen,
    startListening,
    endListening,
    voiceSupported: speech !== null,
  };
};

export { useVoice };
