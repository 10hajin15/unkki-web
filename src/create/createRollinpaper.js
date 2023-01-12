import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import iconHomeImg from '../img/icon-home.png';

const CreateRollingpaper = () => {
  const location = useLocation();
  const accountId = location.state.accountId;
  const accountPwd = location.state.accountPwd;

  let navigate = useNavigate();

  const [subTitle, setSubTitle] = useState('');
  const [title, setTitle] = useState('');
  const [exp, setExp] = useState('');

  const onChangeSubtitle = (e) => {
    setSubTitle(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeExp = (e) => {
    setExp(e.target.value);
  };

  const onSaveButtonClick = () => {
    if(title.trim() === ''){
      alert('롤링페이퍼의 이름을 입력해 주세요!');
      return;
    }

    axios
    .post("http://52.78.60.246:8080/createAccountNRollingpaper", {
      account_id: `${accountId}`,
      account_pwd: `${accountPwd}`,
      rollingpaper_title: `${title}`,
      rollingpaper_subtitle: `${subTitle}`,
      exp: `${exp}`,
      letters: []
    })
    .then(function (response) {
      navigate("/createUnkki",{state:{account_id: accountId, account_pwd:accountPwd, title:title,subTitle:subTitle,exp:exp}});
    })
    .catch(function (error) {
      alert("롤링페이퍼를 만들 수 없습니다! 닉네임이 중복되었는지 확인해 주세요.");
    })

  }

  return (
    <>
      <div className="main">
        <div className="top-space"></div>
        <div className="icon-area">
            <a href="/">
              <div className="home-icon">
                <img className="home-icon-image" src={iconHomeImg}></img>
              </div>
            </a>
        </div>
        <div className="create-title">롤링페이퍼 만들기</div>
        <div className="create-rollingpaper-contents">
          <div className="rollingpaper-input-area">
            <input className="subtitle-input" type="text" value={subTitle} onChange={onChangeSubtitle} placeholder="ex) 2023년 새해를 맞아 / 사랑스러운 / 귀염뽀짝한"/>
            <span className="subtitle-input-sub">,</span>
          </div>
          <div className="rollingpaper-input-area">
            <input className="title-input" type="text" value={title} onChange={onChangeTitle} placeholder="이름"/>
            <span className="title-input-sub">에게</span>
          </div>
          <div className="rollingpaper-input-area">
            <div className="exp-input-sub">나만의 롤링페이퍼 규칙이 있다면</div>
            <textarea className="exp-input" value={exp} onChange={onChangeExp} placeholder='"칸을 아끼지 마세요❣"등등 자유롭게 규칙을 정해보세요!'></textarea>
          </div>
        </div>
        <div>
          <button className="next-area button-create-rollingpaper" onClick={onSaveButtonClick}>저장</button>
        </div>
      </div>
    </>
  );
}

export default CreateRollingpaper;
