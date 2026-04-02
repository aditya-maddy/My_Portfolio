import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, techStack, liveDemo, github, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-semibold text-card-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 active:scale-[0.98] transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          )}
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}