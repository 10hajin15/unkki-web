import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';
import iconHomeImg from '../img/icon-home.png';

const Read = () => {
  let navigate = useNavigate();

  const [accountId, setAccountId] = useState('');
  const [accountPwd, setAccountPwd] = useState('');

  const onChangeId = (e) => {
    setAccountId(e.target.value);
  };

  const onChangePwd = (e) => {
    setAccountPwd(e.target.value);
  };

  const onNextButtonClick = () => {
    if(accountId.trim() === '' || accountPwd.trim() === ''){
      alert('아이디와 비밀번호를 입력해 주세요!');
      return;
    }

  axios
    .get("https://52.78.60.246:8080/readRollingpaper",
    {
      params: {
        account_id: accountId,
        account_pwd: accountPwd
      }
    })
    .then((result) => {
      navigate("/readId",
        { state:
          {
            id:result.data._id,
            title:result.data.rollingpaper_title,
            subTitle:result.data.rollingpaper_subtitle,
            exp:result.data.exp,
            letters:result.data.letters
          }
        });
    })
    .catch(function (error) {
      alert("해당 롤링페이퍼를 찾을 수 없습니다. 닉네임과 비밀번호를 한 번 더 확인해 주세요!");
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
        <div className="read-title">롤링페이퍼 보러가기</div>
        <div className="account-area">
          <div className="account-id-area">
            <div className="account-value">닉네임</div>
            <label>
              <input className="account-input" type="text" value={accountId} onChange={onChangeId} placeholder="닉네임을 입력해 주세요."/>
            </label>
          </div>
          <div className="account-pwd-area">
            <div className="account-value">비밀번호</div>
            <input className="account-input" type="password" value={accountPwd} onChange={onChangePwd} placeholder="비밀번호를 입력해 주세요." />
          </div>
        </div>
        <div className="next-area">
            <button className="next-area button-read-id" onClick={onNextButtonClick}>다음</button>
        </div>
      </div>
    </>
  );
}

export default Read;
