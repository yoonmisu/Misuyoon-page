import React from "react";
import "../styles/Finish.css";
import profile from "../assets/contact.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import velog from "../assets/velog.png";

function Account() {
  return (
    <div className="account-container">
      <div className="image-section">
        <img src={profile} alt="contact"/>
      </div>

      <div className="account-info">
        <h2 className="portfolio-title">💕 My Account</h2>
        <h2 className="portfolio-title">|</h2>

        <div className="account-item">
          <img src={instagram} alt="Instagram" className="icon" />
          <span className="social">Instagram </span>
          <a href="https://www.instagram.com/adorabl._318/" target="_blank" rel="noreferrer" className="link">
            @adorabl._318 </a>
        </div>

        <div className="account-item">
          <img src={github} alt="Github" className="icon" />
          <span className="social">Github </span>
          <a href="https://github.com/yoonmisu" target="_blank" rel="noreferrer" className="link">
            yoonmisu </a>
        </div>

        <div className="account-item">
          <img src={velog} alt="Velog" className="icon" />
          <span className="social">Velog </span>
          <a href="https://velog.io/@yoonmisu/posts" target="_blank" rel="noreferrer" className="link">
            minim09u.log </a>
        </div>
      </div>
    </div>
  );
}

export default Account;

