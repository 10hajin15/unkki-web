import React, { useState } from "react";
import "../styles/modal-message.css";
import axios from 'axios';
import unkkiHiImg from "../img/unkki-hi.png";
import unkkiHeartImg from "../img/unkki-heart.png";

const ModalMessage = (props) => {
  const { open, close, dbId } = props;
  const [cardType, setCardType] = useState('HI');   // 'HI' 'HEART'
  const [messageContents, setMessageContents] = useState('');
  const [writer, setWriter] = useState('익명');

  const onChangeMessageContents = (e) => {
    setMessageContents(e.target.value);
  }

  const onChangeMessageWriter = (e) => {
    setWriter(e.target.value);
  }

  const onSendMessageButtonClick = () => {
    axios
    .post("http://52.78.60.246:8080/sendMessage", {
      _id: dbId,
      letters: {
        cardType: cardType,
        messageContents: messageContents,
        writer: writer
      } 
    })
    .then(function (response) {
      console.log("ok");
    })
    .catch(function (error) {
      alert("메시지를 보낼 수 없습니다. 다시 한 번 시도해 주세요!");
    })
  }

  const onChangeImgType = () => {
    if (cardType === 'HI') setCardType('HEART');
    else if(cardType === 'HEART') setCardType('HI');
  }

  return (
    <>
      <div
        className={
          open ? "message-modal-openModal message-modal" : "message-modal"
        }
      >
        {open ? (
          <>
            <section className="message-modal-section">
              <div className="message-modal-area">
                <main className="message-modal-main">
                  <header className="message-modal-header">
                    <button className="message-modal-close" onClick={close}>
                      &times;
                    </button>
                  </header>
                  <div className="send-message-unkki">
                    <button className="unkki-img-button" onClick={onChangeImgType}>&lt;</button>
                    {
                      cardType === 'HI'
                      ? <img className="send-message-unkki-img" src={unkkiHiImg} alt="hi"/>
                      : <img className="send-message-unkki-img" src={unkkiHeartImg} alt="heart"/>
                    }
                    
                    <button className="unkki-img-button" onClick={onChangeImgType}>&gt;</button>
                  </div>
                  <div>
                    <textarea className="send-message-text" placeholder="따뜻한 메시지를 보내주세요!" onChange={onChangeMessageContents}></textarea>
                    <div className="writer-area">
                      <input className="message-writer" type="text" placeholder="운끼" onChange={onChangeMessageWriter}></input>
                      <span>로부터</span>
                    </div>
                  </div>
                </main>
              </div>
              <button className="send-message-button" onClick={() => {
                onSendMessageButtonClick();
                close();
              }}>보내기</button>
            </section>
          </>
        ) : null}
      </div>
    </>
  );
};

export default ModalMessage;
