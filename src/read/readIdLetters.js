import React, { useState } from "react";
import { useLocation } from "react-router";
import Modal from "./modalLetter";
import iconHomeImg from '../img/icon-home.png';
import iconLinkImg from "../img/icon-link.png";
import letterImg from "../img/letter.png";

const ReadLetters = () => {
  const location = useLocation();

  const id = location.state.id;
  const subTitle = location.state.subTitle;
  const title = location.state.title;
  const exp = location.state.exp;
  const letters = location.state.letters;
  
  const [modalOpen, setModalOpen] = useState(false);
  const [showLetters, setShowLetters] = useState({});

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const onShowLetterButton = (value) => {
    for (let i = 0; i < letters.length; i++) {
      if(letters[i]._id === value) {
        setShowLetters(letters[i])
      }
    }
  }

  const onCopyLinkClick = () => {
    let copyLink = `https://www.unkki.com/sendMessage?${id}`;

    if(typeof(navigator.clipboard)=='undefined') {
      let textArea = document.createElement('textarea');
      textArea.value = copyLink;
      textArea.style.position = 'fixed';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        let successful = document.execCommand('copy');
        let msg = successful ? "링크가 복사되었습니다." : "링크를 복사에 실패하였습니다.";
        alert(msg);
      } catch (err) {
        alert("링크를 복사에 실패하였습니다.");
      }
      document.body.removeChild(textArea);
    } else {
      navigator.clipboard.writeText(copyLink)
      .then(() => {
        alert("링크가 복사되었습니다.");
      })
      .catch(() => console.log("Fail Copied!")) 
    }     
  };

  return (
    <>
      <div className="main">
        <div className="top-space"></div>
        <div className="main-layout">
          <div className="icon-area">
            <a href="/">
              <div className="home-icon">
                <img className="home-icon-image" src={iconHomeImg} alt="HOME"></img>
              </div>
            </a>
            <div className="link-icon" onClick={onCopyLinkClick}>
              <img className="link-icon-image" src={iconLinkImg} alt="링크복사"></img>
            </div>
          </div>
          <div className="rollingpaper-header">
            <div className="rollingpaper-header-text">{subTitle}</div>
            <div className="rollingpaper-header-text"><span className="header-text-title">{title}</span><span>에게</span></div>
            <div className="rollingpaper-header-text header-text-exp">{exp}</div>
          </div>
          <div className="letters-area">
            <div className="letters-area-row letters-sub">편지를 눌러보세요!</div>
            <div className="letters-layout">
              <div className="letters-area-row letters-row">
                {
                  letters.map((value) => (
                  <div className="letters" key={value._id}>
                    <img className="letter-img" onClick={() => {openModal(); onShowLetterButton(value._id);}} src={letterImg} alt="편지"/>
                    <span className="letter-nickname">{value.writer}</span>
                  </div>
                ))
                } 
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={modalOpen} close={closeModal} showLetters={showLetters}></Modal>
    </>
  );
}

export default ReadLetters;
