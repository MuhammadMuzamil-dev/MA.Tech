import React from "react";
import { portfolioData } from "../../data/portfolioData";

const allSkills = [
  ...portfolioData.skills.frontend,
  ...portfolioData.skills.backend,
  ...portfolioData.skills.database,
  ...portfolioData.skills.tools,
];

const PortfolioStackSection = () => {
  return (
    <section className="portfolio-section">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Tech Comfort Zone</p>
          <h2>Technical enough to design cleaner UIs, support stronger builds, and keep learning fast.</h2>
        </div>

        <div className="stack-panel" data-reveal>
          <p className="stack-copy">
            Muzamil works most confidently around React-driven frontend work, modern styling systems, practical backend foundations, and everyday collaboration tools that support real project delivery.
          </p>
          <div className="stack-list">
            {allSkills.map((skill, index) => (
              <span key={`${skill}-${index}`} className="stack-pill" data-reveal style={{ "--reveal-delay": `${index * 45}ms` }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioStackSection;
