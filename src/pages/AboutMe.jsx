import React from "react";
import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="about-container">
      <h6 className="hello">안녕하세요, UX/UI Designer & Frontend Developer 윤미수 입니다</h6>
      <div className="quote-box">
        <p className="quote-text">
        “픽셀 하나에 경험을 담고, 코드 한 줄에 미를 더합니다”
        </p>
      </div>

      <div className="about-content">
        <div className="info-section">
          <h3 className="section-title">📢 INFO</h3>
          <p className="section-title">|</p>

          <div className="info-item">
            <span className="label">❝ Name</span>
            <span className="value name">윤미수 (Yoon Mi Su)</span>
          </div>
          <div className="info-item">
            <span className="label">📞 Phone</span>
            <span className="value">010-2073-1293</span>
          </div>
          <div className="info-item">
            <span className="label">✉️ Email</span>
            <span className="value">ymisu9@gmail.com</span>
          </div>
          <div className="info-item">
            <span className="label">🏫 School</span>
            <span className="value">
              부산소프트웨어마이스터고등학교 재학중 (2025.03 ~ 2028.01)
            </span>
          </div>
        </div>

        <div className="career-section">
          <h3 className="section-title">🏆 CAREER & 🌱 ACTIVITY</h3>
          <p className="section-title">|</p>

          <div className="career-item">
            <span className="year">2025</span>
            <span className="desc">SW마이스터고 연합 아이디어톤 참가</span>
          </div>
          <div className="career-item">
            <span className="year">2025</span>
            <span className="desc">교내 클론 웹페이지 경진대회 <b>우수상</b></span>
          </div>
          <div className="career-item">
            <span className="year">2025</span>
            <span className="desc">전공동아리 '아라' 인턴 활동</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
