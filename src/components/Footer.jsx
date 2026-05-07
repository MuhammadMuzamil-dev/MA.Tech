import React from "react";
import { Github, Heart, Linkedin } from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-xl font-bold">
              Muzamil<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-muted-foreground">Building digital experiences with passion and precision.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
            <Link to="home" smooth className="cursor-pointer transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="about" smooth className="cursor-pointer transition-colors hover:text-primary">
              About
            </Link>
            <Link to="projects" smooth className="cursor-pointer transition-colors hover:text-primary">
              Projects
            </Link>
            <Link to="contact" smooth className="cursor-pointer transition-colors hover:text-primary">
              Contact
            </Link>
          </div>

          <div className="flex gap-4">
            <a href={portfolioData.profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href={portfolioData.profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 border-t border-white/5 pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Muhammad Muzamil Ali. All rights reserved.</p>
          <span className="text-primary">|</span>
          <p>
            Made with <Heart className="inline h-3 w-3 fill-primary text-primary" /> in React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
