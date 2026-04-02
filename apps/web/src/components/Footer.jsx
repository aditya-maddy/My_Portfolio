import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/aditya-maddy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-background/50 hover:bg-background transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-mern/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-background/50 hover:bg-background transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Aditya Sudhir Mahadik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}