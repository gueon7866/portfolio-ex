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
        끊임없이 배우고, 더 나은 코드를 고민합니다.<br />
        React와 Node를 기반으로 한 풀스택 환경에서<br />
        사용자 중심의 경험을 구현하며,<br />
        새로운 기술을 두려워하지 않고 도전합니다.<br />
        오늘보다 나은 개발자가 되기 위해 성장합니다.

      </p>
      <div className="arrow">
        ⬇
      </div>
    </div>
  )
}

export default Hero