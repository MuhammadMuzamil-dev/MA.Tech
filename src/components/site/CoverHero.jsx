import React from "react";
import { portfolioData } from "../../data/portfolioData";

const CoverHero = () => {
  return (
    <section id="home" className="cover cover--unique">
      <div className="cover__mesh cover__mesh--one" />
      <div className="cover__mesh cover__mesh--two" />
      <div className="cover__grid" />
      <div className="cover__content" data-reveal="hero">
        <p className="cover__eyebrow" data-reveal-child>
          {portfolioData.profile.title}
        </p>
        <h1 className="cover__title" data-reveal-child>
          {portfolioData.profile.name}
        </h1>
        <p className="cover__lead" data-reveal-child>
          Building modern React interfaces, practical full-stack products, and portfolio experiences that feel clean, confident, and intentional.
        </p>
        <div className="cover__text-group" data-reveal-child>
          <p className="cover__text">{portfolioData.profile.bio}</p>
          <div className="cover__meta-strip">
            <span>{portfolioData.profile.location}</span>
            <span>{portfolioData.profile.status}</span>
            <span>{portfolioData.profile.stats[0].value} projects</span>
          </div>
        </div>
        <div className="cover__actions" data-reveal-child>
          <a className="cover__primary" href={portfolioData.profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="cover__secondary" href={`mailto:${portfolioData.profile.email}`}>
            Email Me
          </a>
          <a className="cover__secondary" href={portfolioData.profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoverHero;
