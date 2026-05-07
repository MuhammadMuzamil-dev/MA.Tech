import React from "react";

const PortfolioPageIntro = ({ kicker, title, body }) => {
  return (
    <section className="portfolio-page-intro">
      <div className="section-shell">
        <div className="page-intro-card" data-reveal>
          <p className="section-kicker">{kicker}</p>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPageIntro;
