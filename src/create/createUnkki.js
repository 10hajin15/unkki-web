import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import streetLightImg from '../img/streetlight-off.png';
import postImg from "../img/post-close.png";
import iconHomeImg from '../img/icon-home.png';
import iconLinkImg from "../img/icon-link.png";

const CreateUnkki = () => {
  const location = useLocation();

  const accountId = location.state.account_id;
  const accountPwd = location.state.account_pwd;
  const subTitle = location.state.subTitle;
  const title = location.state.title;
  const exp = location.state.exp;

  const [id, setId] = useState('');

  axios
    .get("http://52.78.60.246:8080/readRollingpaper",
    {
      params: {
        account_id: accountId,
        account_pwd: accountPwd
      }
    })
    .then((result) => {
      setId(result.data._id);
    })
    .catch(function (error) {
      alert("롤링페이퍼 만들기에 실패하셨습니다. 다시 한 번 시도해 주세요!");
    })

  const onCopyLinkClick = () => {
    let copyLink = `http://www.unkki.com/sendMessage?${id}`;

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
          <div className="rollingpaper-contents">
            <div className="rollingpaper-img-area rollingpaper-img-light"><img className="rollingpaper-img" src={streetLightImg} /></div>
            <div>
              <div className="rollingpaper-img-sub">링크 아이콘을 눌러 복사한 링크를 주변에 공유해 보세요!</div>
              <div className="rollingpaper-img-area rollingpaper-img-post">
                  <img src={postImg} className="rollingpaper-img"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUnkki;