import React from "react";
import { portfolioData } from "../../data/portfolioData";

const ContactSection = () => {
  return (
    <section id="contact" className="portfolio-section portfolio-section--contact">
      <div className="section-shell contact-panel" data-reveal>
        <div className="section-heading">
          <p className="section-kicker">Contact</p>
          <h2>Let’s build thoughtful digital products, cleaner interfaces, and stronger frontend experiences.</h2>
        </div>
        <p className="contact-copy" data-reveal>
          If you are looking for a React developer who is still growing fast, understands product presentation, and enjoys turning ideas into real working interfaces, Muzamil would love to connect.
        </p>
        <div className="contact-actions" data-reveal>
          <a href={portfolioData.profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${portfolioData.profile.email}`}>Email</a>
          <a href={portfolioData.profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
