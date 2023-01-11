import React from "react";
import { Link, useLocation } from "react-router-dom";
import iconHomeImg from '../img/icon-home.png';
import iconLinkImg from "../img/icon-link.png";
import streetLightImg from '../img/streetlight-off.png';
import postImg from "../img/post-close.png";

const ReadId = () => {
  const location = useLocation();

  const id = location.state.id;
  const subTitle = location.state.subTitle;
  const title = location.state.title;
  const exp = location.state.exp;
  const letters = location.state.letters;

  const onCopyLinkClick = () => {
    let copyLink = `http://www.unkki.com/sendMessage?${id}`;

    if(typeof(navigator.clipboard)=='undefined') {
      console.log('navigator.clilpboard');
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
        console.log("Success Copied!");
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
                <img
                  className="home-icon-image"
                  src={iconHomeImg}
                  alt="HOME"
                ></img>
              </div>
            </a>
            <div className="link-icon" onClick={onCopyLinkClick}>
              <img
                className="link-icon-image"
                src={iconLinkImg}
                alt="링크복사"
              ></img>
            </div>
          </div>
          <div className="rollingpaper-header">
            <div className="rollingpaper-header-text">{subTitle}</div>
            <div className="rollingpaper-header-text">
              <span className="header-text-title">{title}</span>
              <span>에게</span>
            </div>
            <div className="rollingpaper-header-text header-text-exp">
              {exp}
            </div>
          </div>
          <div className="rollingpaper-contents">
            <div className="rollingpaper-img-area rollingpaper-img-light">
              <img
                className="rollingpaper-img"
                src={streetLightImg}
              />
            </div>
            <div>
              <div className="rollingpaper-img-post-sub">
                우체통을 눌러보세요!
              </div>
              <div className="rollingpaper-img-area rollingpaper-img-post">
                <Link
                  to="/readLetters"
                  state={{ id, subTitle, title, exp, letters }}
                  className="rollingpaper-img"
                >
                  <img
                    src={postImg}
                    className="rollingpaper-img"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadId;
