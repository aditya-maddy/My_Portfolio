import React from 'react';
import { motion } from 'framer-motion';

export default function SkillBadge({ skill, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05 }}
      className="px-5 py-3 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl text-card-foreground font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-default"
    >
      {skill}
    </motion.div>
  );
}