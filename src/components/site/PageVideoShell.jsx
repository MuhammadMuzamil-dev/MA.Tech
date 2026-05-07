import React from "react";

const PageVideoShell = ({ children }) => {
  return (
    <div className="portfolio-video-area">
      <div className="portfolio-video-area__background">
        <div className="portfolio-video-area__media" />
        <div className="portfolio-video-area__overlay" />
        <div className="portfolio-video-area__grain" />
      </div>
      <div className="portfolio-video-area__content">{children}</div>
    </div>
  );
};

export default PageVideoShell;
