import React from "react";
import { Link } from "react-router-dom";
import titleImg from './img/title.png';
import unkkiMainImg from './img/unkki-main.png'

const Home = () => {
  return (
    <>
        <div className="main">
          <div>
            <img className="main-title"  src={titleImg} alt="타이틀"/>
            <img className="main-unkki" src={unkkiMainImg} alt="메인운끼"/>
            <div className="main-exp"><span>"운끼"는 당신에게 온 메시지를 전달해 주는 배달부예요.</span></div>
          </div>
          <div className="buttons">
            <div className="button-show">
              <Link to="/read" className="button-show-text">보러가기</Link>
            </div>
            <div className="button-create">
              <Link to="/createAccount" className="button-create-text">만들기</Link>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;