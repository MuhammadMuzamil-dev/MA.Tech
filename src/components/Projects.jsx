import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const TiltCard = ({ children, className }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <motion.div
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = ["All", "Frontend", "Full Stack", "Backend"];
  const filteredProjects = filter === "All" ? portfolioData.projects : portfolioData.projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="relative overflow-hidden py-20">
      <div className="bg-grid-soft absolute inset-0 bg-[length:50px_50px]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">Selected Work</h2>
          <p className="text-muted-foreground">Some things I've built.</p>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={filter === category ? "bg-primary hover:bg-primary/90" : "border-white/10 hover:bg-white/5"}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={project.featured ? "md:col-span-2 md:row-span-2" : ""}
            >
              <TiltCard className="h-full">
                <Card className="group flex h-full flex-col overflow-hidden border-white/10 bg-card/40 backdrop-blur-sm transition-colors hover:border-primary/50">
                  <CardHeader className="flex-1">
                    <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-blue-500/20 text-muted-foreground md:h-full">
                      <span className="text-3xl font-bold opacity-70">{project.title.slice(0, 2)}</span>
                    </div>
                    <CardTitle className="text-2xl transition-colors group-hover:text-primary">{project.title}</CardTitle>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-background/50 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-4">
                    <a href={project.github} className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10" aria-label={`${project.title} GitHub`}>
                      <Github className="h-4 w-4" />
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
                      Live Demo <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardFooter>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            View All on GitHub <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
