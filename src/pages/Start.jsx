import React, { useState } from "react";
import "../styles/Start.css";
import profile from "../assets/me.png";

function Start() {

  return (
    <div className="container" id="start">

      <section className="content">
        <div className="text-section">
          <h2 className="portfolio-title">PORTFOLIO</h2>
          <p className="portfolio-title">|</p>
          <p className="intro">
            <strong>아름다움</strong>을 넘어 <br />
            더 나은 <strong>사용자 경험</strong>을 위해 끝까지 고민하는, <br />
            디자이너 & 프론트엔드 <span class="half-highlight">&nbsp;윤미수&nbsp;</span> 입니다!
          </p>
        </div>
        <div className="image-content">
          <img src={profile} alt="me"/>
        </div>
      </section>
    </div>
  );
}

export default Start;
