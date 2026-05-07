import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData } from "../data/portfolioData";

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % portfolioData.profile.roles.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] animate-blob rounded-full bg-primary/20 blur-[120px]" />
        <div className="animation-delay-2000 absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] animate-blob rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="animation-delay-4000 absolute right-[20%] top-[20%] h-[300px] w-[300px] animate-blob rounded-full bg-violet-500/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-6">
            <Badge variant="secondary" className="px-4 py-1.5 text-xs font-medium tracking-normal">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              {portfolioData.profile.status}
            </Badge>
          </motion.div>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Hi, I'm <br />
            <span className="text-gradient">{portfolioData.profile.name}</span>
          </h1>

          <div className="mb-8 min-h-12">
            <h2 className="text-2xl font-light text-muted-foreground md:text-3xl">
              I'm a <span className="font-semibold text-primary">{portfolioData.profile.roles[currentRoleIndex]}</span>
            </h2>
          </div>

          <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">{portfolioData.profile.bio}</p>

          <div className="mb-12 flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="projects" smooth duration={500} className="flex cursor-pointer items-center gap-2">
                View My Work <ArrowDown className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 dark:text-white">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
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
            <a href={`mailto:${portfolioData.profile.email}`} aria-label="Email Muzamil">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative h-72 w-72 md:h-96 md:w-96">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-primary to-blue-500 opacity-40 blur-2xl" />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-white/10 bg-card">
              <span className="text-6xl" role="img" aria-label="developer">
                {"</>"}
              </span>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-full border border-white/10 bg-card p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">2+</div>
                <div className="text-xs text-muted-foreground">Years Exp.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
