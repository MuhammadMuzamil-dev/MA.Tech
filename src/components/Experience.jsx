import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const Experience = () => {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="bg-secondary/20 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold">Experience & Education</h2>
          <div className="h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {portfolioData.experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col gap-8 pl-8 md:gap-16 md:pl-0 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
              >
                <div className="absolute left-0 top-4 z-10 h-4 w-4 -translate-x-[7px] rounded-full border-4 border-background bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)] md:left-1/2 md:-translate-x-1/2" />

                <div className="md:w-1/2">
                  <div className="rounded-lg border border-white/5 bg-card p-6 shadow-lg transition-colors hover:border-primary/30">
                    <span className="mb-2 block text-sm font-medium text-primary">{item.period}</span>
                    <h3 className="mb-1 text-xl font-bold">{item.role}</h3>
                    <p className="mb-4 text-sm font-medium text-muted-foreground">{item.company}</p>
                    <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground marker:text-primary">
                      {item.description.map((desc) => (
                        <li key={desc}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
