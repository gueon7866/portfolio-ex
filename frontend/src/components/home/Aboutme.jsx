import React from 'react'
import "./styles/Aboutme.scss"
import aboutMe from '../../utils/aboutme'
const Aboutme = () => {
  const profile = aboutMe.basic
  const skills = aboutMe.skills
  const exper = aboutMe.experiences
  const interests = aboutMe.interests
  return (
    <div className='inner aboutme-inner'>
      <h1 className="tit">
        <span className="star-spin"><i className="star">✱</i></span>
        aboutMe
      </h1>
      <div className="t-wrap">
        <h2 className="sub-tit">
          profile
        </h2>
        <p className="txt">
          작은 인터랙션 하나에도 마음을 담고,<br />
          따뜻한 경험을 만드는 웹을 지향합니다.
        </p>
      </div>

      <div className="about-container">
        <div className="in-wrap profile-wrap">
          <h4 className='list-lst'>profile</h4>
          <ul className="lst">
            <li>
              <strong>이름</strong>: {profile.name}
            </li>
            <li>
              <strong>나이</strong>: {profile.age}
            </li>
            <li>
              <strong>사는곳</strong>: {profile.location}
            </li>
            <li>
              <strong>MBTI</strong>: {profile.mbti}
            </li>
          </ul>
        </div>
        <div className="in-wrap skills-wrap">
          <h4 className='list-lst'>Skills</h4>
          <ul className="lst">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="in-wrap exper-wrap">
          <h4 className='list-lst'>      💼 Experiences</h4>
          <ul className="lst">
            {exper.map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </div>
        <div className="in-wrap interests-wrap">
          <h4 className='list-lst'>           🌱 Interests</h4>
          <ul className="lst">
            {interests.map((int, i) => (
              <li key={i}>{int}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aboutme