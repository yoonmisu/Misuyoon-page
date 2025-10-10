import React from "react";
import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="about-container">
      <h6 className="hello">안녕하세요! 디자이너 & 프론트엔드 윤미수 입니다.</h6>
      <div className="quote-box">
        <p className="quote-text">
         🧡 _  “사용자의 시선에서 직관적이고 감각적인 인터페이스를 디자인 하고 구현까지 이어갑니다.”
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
            <span className="desc">통합과학 웹개발 프로젝트 (진행중)</span>
          </div>
          <div className="career-item">
            <span className="year">2025</span>
            <span className="desc">G-STAR 역량 강화 경진대회 (진행중)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
