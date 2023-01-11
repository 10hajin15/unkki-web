import React from "react";
import "../styles/modal-letter.css";
import unkkiHiImg from "../img/unkki-hi.png";
import unkkiHeartImg from "../img/unkki-heart.png";

const Modal = (props) => {
  const { open, close, showLetters } = props;

  let cardType = showLetters.cardType;
  let messageContent = showLetters.messageContents;
  let writer = showLetters.writer;

  return (
    <>
      <div
        className={
          open ? "letter-modal-openModal letter-modal" : "letter-modal"
        }
      >
        {open ? (
          <>
            <div className="modal-letter-area">
              <div id="capture">
                <section className="letter-modal-section">
                  <header className="letter-modal-header">
                    <button className="letter-modal-close" onClick={close}>
                      &times;
                    </button>
                  </header>
                  <main className="letter-modal-main">
                    <div className="message-unkki">
                      {cardType === "HI" ? (
                        <img
                          className="message-unkki-img"
                          src={unkkiHiImg}
                          alt="hi"
                        />
                      ) : (
                        <img
                          className="message-unkki-img"
                          src={unkkiHeartImg}
                          alt="hi"
                        />
                      )}
                    </div>
                    <div className="message-contents">
                      <div className="message-text">{messageContent}</div>
                      <div className="show-message-writer-area">
                        <span>{writer}</span>
                        <span>로부터</span>
                      </div>
                    </div>
                  </main>
                </section>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Modal;
