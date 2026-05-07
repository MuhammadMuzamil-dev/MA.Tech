import React from "react";
import { portfolioData } from "../../data/portfolioData";

const PortfolioExperienceSection = () => {
  return (
    <section className="portfolio-section portfolio-section--journey">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Journey</p>
          <h2>A mix of study, internships, and hands-on digital work that shaped how Muzamil builds today.</h2>
        </div>

        <div className="journey-timeline">
          {portfolioData.experience.map((item, index) => (
            <article
              key={item.id}
              className={`journey-card ${index % 2 === 0 ? "journey-card--offset" : ""}`}
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` }}
            >
              <div className="journey-card__badge">{item.period}</div>
              <strong className="journey-card__title">{item.role}</strong>
              <span className="journey-card__company">{item.company}</span>
              <ul className="journey-card__list">
                {item.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioExperienceSection;
