import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useVoice } from "../../../hooks/useVoice";
import Icon from "../../Icon/Icon";
import styles from "./ModalMic.module.css";

export const ModalMic = ({ isOpen, closeModal, onChangedText }) => {
  const { text, isListening, abortListen, startListening, voiceSupported } =
    useVoice();

  const [message, setMessage] = useState(
    "To search by voice, go to your browser settings and allow access to the microphone."
  );
  const [isDenied, setIsDenied] = useState(false);

  const toggleListen = () => {
    if (isListening) {
      abortListen();
      setMessage("Microphone off. Try again.");
    } else {
      if (!isDenied) {
        setMessage("Listening...");
        startListening();
      }
    }
  };

  useEffect(() => {
    if (text) {
      onChangedText(text);
      onRequestCloseModal();
    }
  }, [text]);

  const onRequestCloseModal = () => {
    abortListen();
    closeModal();
  };

  const onAfterOpen = () => {
    navigator.permissions.query({ name: "microphone" }).then((result) => {
      if (result.state == "prompt") {
        startListening();
      }
      if (result.state == "granted") {
        setIsDenied(false);
        setMessage("Listening...");
        startListening();
      }
      if (result.state == "denied") {
        setIsDenied(true);
      }
      result.onchange = function (event) {
        if (event.currentTarget.state === "denied") {
          setIsDenied(true);
        }
        if (event.currentTarget.state === "granted") {
          setIsDenied(false);
          setMessage("Listening...");
        }
      };
    });
  };

  if (!voiceSupported) {
    return (
      <div>
        <h1>
          Voice recognition is not supported by your browser, please retry with
          a supported browser e.g. Chrome
        </h1>
      </div>
    );
  }

  return (
    <div className={styles.modalContainer}>
      <Modal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestCloseModal}
        className={styles.modal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        style={{
          content: {
            maxWidth: "592px",
            maxHeight: "416px",
            top: "40%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            overflow: "hidden",
            zIndex: 1000,
          },
          overlay: {
            backgroundColor: "rgba(203,213,224,0.7)",
            backdropFilter: "blur(0.3rem)",
            zIndex: 20000,
          },
        }}
      >
        <div>
          <div className={styles.closeButtonContainer}>
            <button
              className={styles.closeButton}
              onClick={onRequestCloseModal}
            >
              <Icon name="CLOSE" />
            </button>
          </div>
          <div>
            <div className={styles.modalTextContent}>
              <span className={styles.title}> Search by voice</span>
              <span className={styles.text}>{message}</span>
            </div>
            <div className={styles.body}></div>
            <div className={styles.micButtonContainer}>
              <div
                onClick={toggleListen}
                className={`${styles.micButton} ${
                  isListening ? styles.micButtonActive : ""
                }`}
              >
                <Icon name="MIC" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
