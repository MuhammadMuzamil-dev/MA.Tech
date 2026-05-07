import React from "react";
import { portfolioData } from "../../data/portfolioData";

const PortfolioProficiencySection = () => {
  return (
    <section className="portfolio-section portfolio-section--skills">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Skill Snapshot</p>
          <h2>A sharper look at the tools, strengths, and areas where Muzamil already delivers with confidence.</h2>
        </div>

        <div className="skills-hybrid-grid">
          <div className="stack-panel" data-reveal>
            <p className="stack-copy" data-reveal-child>
              This section keeps the stronger personality of Muzamil&apos;s earlier portfolio by showing not only what he uses, but where his confidence level is currently strongest.
            </p>
            <div className="skill-cluster-grid">
              <div className="skill-cluster" data-reveal-child>
                <strong>Frontend</strong>
                <p>{portfolioData.skills.frontend.join(", ")}</p>
              </div>
              <div className="skill-cluster" data-reveal-child>
                <strong>Backend</strong>
                <p>{portfolioData.skills.backend.join(", ")}</p>
              </div>
              <div className="skill-cluster" data-reveal-child>
                <strong>Database</strong>
                <p>{portfolioData.skills.database.join(", ")}</p>
              </div>
              <div className="skill-cluster" data-reveal-child>
                <strong>Tools</strong>
                <p>{portfolioData.skills.tools.join(", ")}</p>
              </div>
            </div>
          </div>

          <div className="proficiency-panel" data-reveal>
            <div className="proficiency-panel__header" data-reveal-child>
              <strong>Top Skills</strong>
              <span>Current confidence level</span>
            </div>

            <div className="proficiency-list">
              {portfolioData.skills.topSkills.map((skill, index) => (
                <div key={skill.name} className="proficiency-item" data-reveal-child style={{ "--skill-width": `${skill.level}%`, transitionDelay: `${index * 90}ms` }}>
                  <div className="proficiency-item__meta">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="proficiency-bar">
                    <div className="proficiency-bar__fill" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioProficiencySection;
