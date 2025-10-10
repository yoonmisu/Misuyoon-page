import React from "react";
import "../styles/Projects.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import quickpickImg from "../assets/quickpick.png";
import chilldoorImg from "../assets/chilldoor.png";
import gstarImg from "../assets/gstar.png";
import verdeImg from "../assets/verde.png";

const projects = [
  { id: 1, img: quickpickImg, title: "Quickpick", info: "#교내 클론 웹페이지 경진대회 우수상", tags: ["Design", "Frontend"] },
  { id: 2, img: chilldoorImg, title: "Chilldoor", info: "#Dormmate 팀 프로젝트", tags: ["Design", "Frontend"] },
  { id: 3, img: gstarImg, title: "Mutopia", info: "#G-STAR 역량 강화 경진대회 (진행중)", tags: ["3D Modeling", "Design", "Unity"] },
  { id: 4, img: verdeImg, title: "Verde", info: "#통합 과학 웹 개발 팀 프로젝트 (진행중)", tags: ["PM", "Design", "Frontend"] },
];

function Project() {
  const scrollRef = React.useRef(null);

  return (
    <div className="project-container">
      <div className="project-header">
        <h2 className="project-title">📂 PROJECTS</h2>
        <p className="project-title">|</p>
      </div>

      <div className="project-scroll" ref={scrollRef}>
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
           <div className="project-image" style={{ backgroundImage: `url(${p.img})` }}></div>
            <div className="project-info">
              <h3>{p.title}</h3>
              <p className="info">{p.info}</p>
              <div className="tags">
                {p.tags.map((tag) => (
                  <span key={tag} className={`tag project-${p.id}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-hint">
        <span> ＜----- DRAG & SCROLL -----＞ </span>
      </div>
    </div>
  );
}

export default Project;
