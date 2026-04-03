import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Phone, Download, Code, Database, Wrench, Layout } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard.jsx';
import SkillBadge from '@/components/SkillBadge.jsx';
import TechStackCard from '@/components/TechStackCard.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import profileImg2 from "/media/images/Aditya2.jpeg";
import profileImg3 from "/media/images/Aditya3.jpeg";

const HomePage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'Todo App',
      description: 'A full-featured task management application with CRUD operations, local storage persistence, and real-time updates. Built with React hooks for state management.',
      techStack: ['React', 'JavaScript', 'CSS', 'LocalStorage'],
      liveDemo: 'https://react-todo-app-roan-seven.vercel.app/',
      github: 'https://github.com/aditya-maddy'
    },
    {
      title: 'Calculator App',
      description: 'Scientific calculator with advanced mathematical operations, memory functions, and responsive design. Implements complex calculation logic with error handling.',
      techStack: ['React', 'JavaScript', 'CSS'],
      liveDemo: 'https://calculator-app-ashen-two.vercel.app/',
      github: 'https://github.com/aditya-maddy'
    },
    {
      title: 'Notes App',
      description: 'Note-taking application with rich text editing, categorization, search functionality, and data persistence using browser storage.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveDemo: '#',
      github: 'https://github.com/aditya-maddy'
    },
    {
      title: 'Theme Switcher',
      description: 'Dynamic theme management system with multiple color schemes, dark/light mode toggle, and persistent user preferences across sessions.',
      techStack: ['React', 'Context API', 'CSS Variables'],
      liveDemo: 'https://theme-switcher-zeta-swart.vercel.app/',
      github: 'https://github.com/aditya-maddy'
    }
  ];

  const techStacks = [
    {
      category: 'Frontend',
      icon: Layout,
      technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Responsive Design']
    },
    {
      category: 'Backend',
      icon: Code,
      technologies: ['Node.js', 'Express.js', 'REST APIs', 'Authentication']
    },
    {
      category: 'Database',
      icon: Database,
      technologies: ['MongoDB', 'Mongoose', 'Database Design', 'CRUD Operations']
    },
    {
      category: 'Tools',
      icon: Wrench,
      technologies: ['Git', 'GitHub', 'VS Code', 'npm', 'Postman']
    }
  ];

  const skills = [
    'JavaScript',
    'C++',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST APIs',
    'CRUD Operations',
    'Git & GitHub',
    'Data Structures',
    'Algorithms',
    'Problem Solving'
  ];

  return (
    <>
      <Helmet>
        <title>Aditya Sudhir Mahadik - Full Stack Developer | MERN Stack</title>
        <meta name="description" content="Full Stack Developer specializing in MERN stack development. Building modern, scalable web applications with React, Node.js, Express, and MongoDB." />
      </Helmet>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507146815454-9faa99d579aa"
            alt="Modern workspace with laptop and code"
            className="w-full h-full object-cover"
          /> 
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ letterSpacing: '-0.02em' }}
              >
                Aditya Sudhir Mahadik
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl md:text-2xl text-gray-200 mb-4 font-medium"
              >
                Full Stack Developer | MERN Stack
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                I build modern, scalable web applications using the MERN stack.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 font-medium"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-white/10 text-white backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 active:scale-[0.98] transition-all duration-200 font-medium"
                >
                  Contact Me
                </a>
                <a
                  href="https://github.com/aditya-maddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 text-white backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 active:scale-[0.98] transition-all duration-200 font-medium flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-mern/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 text-white backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 active:scale-[0.98] transition-all duration-200 font-medium flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </motion.div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center ">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-60 lg:h-80">
                <div className="profile-glow" />
                <img
                  src={profileImg3}
                  alt="Aditya Sudhir Mahadik"
                  className="profile-img-hero w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto lg:mx-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:max-w-md lg:h-[500px]"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-6 transition-transform hover:rotate-0 duration-500" />
              <img
                src={profileImg3}
                alt="Aditya Sudhir Mahadik working"
                className="profile-img-about w-full h-full relative z-10 "
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
                About me
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full stack developer with expertise in building modern web applications using the MERN stack. My journey in software development combines strong problem-solving skills with a deep understanding of both frontend and backend technologies.
                </p>
                <p>
                  With proficiency in React.js for creating dynamic user interfaces, Node.js and Express.js for robust server-side applications, and MongoDB for efficient data management, I deliver complete end-to-end solutions. My foundation in C++ and data structures enables me to write optimized, scalable code that performs well under real-world conditions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tech stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build modern web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStacks.map((stack, index) => (
              <TechStackCard
                key={stack.category}
                category={stack.category}
                icon={stack.icon}
                technologies={stack.technologies}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Featured projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my skills in full stack development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                liveDemo={project.liveDemo}
                github={project.github}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Core competencies and technical skills
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={skill} skill={skill} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Learning journey
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Full Stack Web Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Completed comprehensive training in MERN stack development, covering React.js for frontend, Node.js and Express.js for backend, and MongoDB for database management. Built multiple real-world projects implementing authentication, CRUD operations, and RESTful APIs.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Data Structures and Algorithms
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Studied fundamental and advanced data structures and algorithms using C++. Developed strong problem-solving skills through implementation of various algorithms, optimization techniques, and complexity analysis.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Resume
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download my resume to learn more about my experience and qualifications
            </p>
            <button
            onClick={() => window.open("./media/public/C.V.pdf", "_blank")}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 font-medium text-lg shadow-md"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Get in touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold text-secondary-foreground mb-6">
                Contact information
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-secondary-foreground mb-1">Email</p>
                  <a
                    href="mailto:adityamahadik6530@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    adityamahadik6530@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-secondary-foreground mb-1">Phone</p>
                  <a
                    href="tel:7021985217"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    7021985217
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-secondary-foreground mb-1">GitHub</p>
                  <a
                    href="https://github.com/aditya-maddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    github.com/aditya-maddy
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-secondary-foreground mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/aditya-mern/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    linkedin.com/in/aditya-mern
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                Send a message
              </h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 active:scale-95 transition-all duration-200 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
};

export default HomePage;