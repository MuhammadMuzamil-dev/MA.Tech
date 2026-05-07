import React from "react";
import { portfolioData } from "../../data/portfolioData";

const responsibilityItems = [
  "Build responsive React interfaces with reusable components and practical UI structure.",
  "Translate ideas into polished portfolio, dashboard, and productivity-style web experiences.",
  "Work across frontend and backend layers while growing deeper into the MERN stack.",
  "Apply digital marketing thinking to make products more useful, presentable, and conversion-aware.",
  "Use structured debugging and problem-solving to turn rough concepts into working features.",
  "Ship portfolio projects that show learning velocity, technical range, and product sense.",
];

const PortfolioServicesSection = () => {
  return (
    <section id="experience" className="portfolio-section portfolio-section--muted">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">What I Do</p>
          <h2>Frontend craft, full-stack growth, project execution, and practical product thinking in one place.</h2>
        </div>

        <div className="responsibility-grid">
          {responsibilityItems.map((item, index) => (
            <article key={item} className="responsibility-card" data-reveal style={{ "--reveal-delay": `${index * 70}ms` }}>
              <p>{item}</p>
            </article>
          ))}
        </div>

        <div className="project-showcase" data-reveal>
          <div className="section-heading section-heading--compact">
            <p className="section-kicker">Selected Projects</p>
            <h2>Projects that reflect momentum across frontend, full-stack, and interface design.</h2>
          </div>
          <div className="responsibility-grid">
            {portfolioData.projects.map((project, index) => (
              <article key={project.id} className="responsibility-card" data-reveal style={{ "--reveal-delay": `${index * 70}ms` }}>
                <strong className="project-card__title">{project.title}</strong>
                <span className="project-card__meta">{project.category}</span>
                <p>{project.description}</p>
                <div className="stack-list stack-list--compact">
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
      </div>
    </section>
  );
};

export default PortfolioServicesSection;
