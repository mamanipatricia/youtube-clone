import Modal from "react-modal";
import Icon from "../../Icon/Icon";
import styles from "./ModalMic.module.css";

export const ModalMic = ({ isOpen, onAfterOpen, onRequestClose }) => {
  return (
    <div className={styles.modalContainer}>
      <Modal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
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
            <button className={styles.closeButton} onClick={onRequestClose}>
              <Icon name="CLOSE" />
            </button>
          </div>
          <div>
            <div className={styles.modalTextContent}>
              <span className={styles.title}> Search by voice</span>
              <span className={styles.text}>
                To search by voice, go to your browser settings and allow access
                to the microphone.
              </span>
            </div>
            <div className={styles.body}></div>
            <div className={styles.micButtonContainer}>
              <div className={styles.micButton}>
                <Icon onClick={isOpen} name="MIC" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
