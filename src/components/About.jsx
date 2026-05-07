import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const About = () => {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="relative bg-background py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid items-center gap-16 md:grid-cols-2"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-white/5 bg-gradient-to-br from-primary/10 to-blue-500/10 p-8">
              <div className="bg-grid-soft absolute inset-0 bg-[length:20px_20px]" />
              <div className="relative z-10 text-center">
                <div className="mx-auto mb-4 flex h-40 w-40 items-center justify-center rounded-full border-4 border-primary/20 bg-card">
                  <span className="text-5xl font-bold text-primary">M</span>
                </div>
                <h3 className="text-2xl font-bold">Innovator</h3>
                <p className="text-muted-foreground">Building the future</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="mb-6 text-4xl font-bold">About Me</h2>
            <div className="mb-8 space-y-4 leading-relaxed text-muted-foreground">
              {portfolioData.profile.longBio.split(". ").map((sentence, index) => sentence && <p key={index}>{sentence.replace(/\.$/, "")}.</p>)}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {portfolioData.profile.stats.map((stat) => (
                <Card key={stat.label} className="border-white/5 bg-card/50">
                  <CardContent className="p-4 text-center">
                    <div className="text-gradient mb-1 text-3xl font-bold">{stat.value}</div>
                    <div className="text-xs uppercase tracking-normal text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
