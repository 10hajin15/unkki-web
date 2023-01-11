import React, { useState } from "react";
import ModalMessage from "./modalMessage";
import axios from "axios";
import iconHomeImg from '../img/icon-home.png';
import iconLinkImg from "../img/icon-link.png";
import streetLightImg from '../img/streetlight-off.png';
import postImg from "../img/post-close.png";

const SendMessage = () => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [exp, setExp] = useState('');

  let dbId = window.location.search;
  dbId = dbId.replace('?','');
  
  axios
    .get('http://52.78.60.246:8080/sendMessage',
    {
      params: {
        dbId: dbId
      }
    })
    .then((result) => {
      setTitle(result.data.rollingpaper_title)
      setSubTitle(result.data.rollingpaper_subtitle)
      setExp(result.data.exp);
    })
    .catch(() => {
      console.log("실패")
    })
  
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

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
            <a href="/createAccount">
              <div className="link-icon">
                <img className="link-icon-image" src={iconLinkImg} alt="링크복사"></img>
              </div>
            </a>
          </div>
          <div className="rollingpaper-header">
            <div className="rollingpaper-header-text">{subTitle}</div>
            <div className="rollingpaper-header-text"><span className="header-text-title">{title}</span><span>에게</span></div>
            <div className="rollingpaper-header-text header-text-exp">{exp}</div>
          </div>
          <div className="rollingpaper-contents">
            <div className="rollingpaper-img-area rollingpaper-img-light"><img className="rollingpaper-img" src={streetLightImg} /></div>
            <div>
              <div className="rollingpaper-img-post-sub">우체통을 눌러보세요!</div>
              <div className="rollingpaper-img-area rollingpaper-img-post">
                  <img src={postImg} onClick={openModal} className="rollingpaper-img click-post"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalMessage open={modalOpen} close={closeModal} dbId={dbId}></ModalMessage>

    </>
  )
}

export default SendMessage;