import React from "react";
import { portfolioData } from "../../data/portfolioData";

const PortfolioProjectsSection = () => {
  return (
    <section className="portfolio-section">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Projects</p>
          <h2>Selected work that shows frontend polish, product thinking, and full-stack curiosity.</h2>
        </div>

        <div className="project-grid-unique">
          {portfolioData.projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-spotlight ${project.featured ? "project-spotlight--featured" : ""}`}
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` }}
            >
              <div className="project-spotlight__header">
                <span className="project-spotlight__category">{project.category}</span>
                <strong>{project.title}</strong>
              </div>
              <p>{project.description}</p>
              <div className="project-spotlight__stack">
                {project.tech.map((item) => (
                  <span key={`${project.id}-${item}`} className="stack-pill stack-pill--small">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjectsSection;
