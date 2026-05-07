import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const Skills = () => {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const renderChips = (skills) => (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <motion.div key={skill} whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }} transition={{ type: "spring", stiffness: 400 }}>
          <Badge variant="secondary" className="cursor-default border border-white/10 bg-card px-4 py-2 text-sm font-medium hover:border-primary/50">
            {skill}
          </Badge>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="bg-secondary/20 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="mb-4 text-4xl font-bold">Technical Arsenal</h2>
          <div className="h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            {Object.entries(portfolioData.skills)
              .filter(([key]) => key !== "topSkills")
              .map(([category, skills], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="mb-4 text-xl font-semibold capitalize text-primary">{category}</h3>
                  {renderChips(skills)}
                </motion.div>
              ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-white/5 bg-card/30 p-8"
          >
            <h3 className="mb-8 text-xl font-semibold">Proficiency</h3>
            <div className="space-y-6">
              {portfolioData.skills.topSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="mb-2 flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-background">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
