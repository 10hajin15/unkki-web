import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import iconHomeImg from '../img/icon-home.png';

const CreateAccount = () => {

  const [accountId, setAccountId] = useState('');
  const [accountPwd, setAccountPwd] = useState('');
  const [duplication, setDuplication] = useState(''); // 'duplication', 'notDuplication'

  const onChangeId = (e) => {
    setAccountId(e.target.value);
  };

  const onChangePwd = (e) => {
    setAccountPwd(e.target.value);
  };

  const onConfirmButtonClick = (e) => {
    if(accountId.trim() === ''){
      alert('닉네임을 입력해 주세요!');
      return;
    }
    
    axios
      .get('http://localhost:8080/confirmAccountId',
      {
        params: {
          account_id: accountId
        }
      })
      .then((result) => {
        if (result.data.result === 'Y') {
          setDuplication('notDuplication');
        } else {
          setDuplication('duplication');
        }
      })
      .catch(() => {
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
        <div className="account-area">
          <div className="account-id-area">
            <div className="account-value">닉네임</div>
            <label>
              <input className="account-input" type="text" value={accountId} onChange={onChangeId} placeholder="닉네임을 입력해 주세요."/>
              <button className="check-id-button" onClick={onConfirmButtonClick}>중복확인</button>
            </label>
            {
              duplication === ""
              ? <div className="check-id-result"></div>
              : duplication === "notDuplication" 
                ? <div className="check-id-result" style={{color:"#123FD6"}}>사용 가능한 닉네임입니다.</div>
                : <div className="check-id-result" style={{color:"#A61F12"}}>이미 사용 중인 닉네임입니다.</div>
            }
          </div>
          <div className="account-pwd-area">
            <div className="account-value">비밀번호</div>
            <input className="account-input" type="password" value={accountPwd} onChange={onChangePwd} placeholder="비밀번호를 입력해 주세요." />
          </div>
        </div>
        <div className="next-area">
            {
              duplication==="notDuplication" && accountPwd !==""
              ? <Link to="/createRollingpaper" state={{ accountId, accountPwd }} className="button-create-rollingpaper">다음</Link>
              : <Link to="/createAccount" className="button-create-rollingpaper">다음</Link>
            }
        </div>
      </div>
    </>
  );
}

export default CreateAccount;