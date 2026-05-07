import React from "react";
import { portfolioData } from "../../data/portfolioData";

const PortfolioAboutSection = () => {
  return (
    <section id="about" className="portfolio-section">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">About Me</p>
          <h2>Driving frontend delivery with calm execution, technical growth, and strong product instincts.</h2>
        </div>

        <div className="about-grid">
          <div className="about-card" data-reveal>
            <p>{portfolioData.profile.bio}</p>
            <p>
              Based in {portfolioData.profile.location}, Muzamil is currently growing through BSCS studies while building practical React and MERN projects with a clean, problem-solving mindset.
            </p>
          </div>

          <div className="about-card" data-reveal>
            <p>
              His edge comes from combining frontend engineering with digital marketing awareness, which helps him think not only about how a product is built, but also how it is presented, understood, and improved.
            </p>
            <div className="metric-row">
              {portfolioData.profile.stats.map((stat, index) => (
                <div key={stat.label} className="metric-card" data-reveal style={{ "--reveal-delay": `${index * 70}ms` }}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioAboutSection;
