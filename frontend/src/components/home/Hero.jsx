import React from 'react'
import "./styles/Hero.scss"
const Hero = () => {
  return (
    <div className='inner hero-inner'>
      <h1 className="tit">
        <span>
          developer
        </span>
        <span>

          back <span className="star-spin"><i className="star">✱</i></span> front
        </span>
        <span>
          portfolio
        </span>
      </h1>
      <p className="txt">
        끊임없이 배우며 더 나은 코드를 고민합니다.<br />
        React와 Node로 사용자 중심의 경험을 구현합니다.<br />
        새로운 기술에 도전하며 성장하는 개발자입니다.
      </p>
      <div className="arrow">
        ⬇
      </div>
    </div>
  )
}

export default Hero