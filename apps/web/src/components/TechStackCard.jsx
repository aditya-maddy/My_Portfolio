import React from 'react';
import { motion } from 'framer-motion';

export default function TechStackCard({ category, icon: Icon, technologies, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-card-foreground">{category}</h3>
      </div>
      
      <ul className="space-y-2">
        {technologies.map((tech, index) => (
          <li key={index} className="flex items-center gap-2 text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>{tech}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}