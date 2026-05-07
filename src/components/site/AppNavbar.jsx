import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (isOpen) {
      closeTimerRef.current = window.setTimeout(() => {
        setIsOpen(false);
      }, 5000);
    }

    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__brand">
        <NavLink to="/" end onClick={closeMenu}>
          Muhammad Muzamil Ali
        </NavLink>
        <span>React | Full Stack | Problem Solving</span>
      </div>

      <button
        type="button"
        className={`navbar__toggle ${isOpen ? "navbar__toggle--open" : ""}`}
        onClick={() => setIsOpen((value) => !value)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-links"
      >
        <span />
        <span />
        <span />
      </button>

      <ul id="mobile-nav-links" className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
        <li>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" onClick={closeMenu}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
        <li>
          <a
            className="navbar__button"
            href="https://linkedin.com/in/muzamil"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default AppNavbar;
