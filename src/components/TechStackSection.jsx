import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';


const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('tech-stack-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const techStack = {
    frontend: {
      title: "Frontend",
      description: "Crafting beautiful, responsive user interfaces",
      technologies: [
        { name: "React", description: "Modern UI library", icon: "logos:react", level: 95 },
        { name: "Next.js", description: "Full-stack React framework", icon: "logos:nextjs-icon", level: 90 },
        { name: "TypeScript", description: "Typed JavaScript at scale", icon: "logos:typescript-icon", level: 88 },
        { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: "logos:tailwindcss-icon", level: 92 },
        { name: "Framer Motion", description: "Animation library for React", icon: "logos:framer", level: 85 },
        { name: "Three.js", description: "3D rendering in the browser", icon: "logos:threejs-icon", level: 78 }
      ]
    },
    backend: {
      title: "Backend",
      description: "Robust server-side solutions",
      technologies: [
        { name: "Node.js", description: "JavaScript runtime", icon: "logos:nodejs-icon", level: 90 },
        { name: "Python", description: "General-purpose language", icon: "logos:python", level: 85 },
        { name: "Express.js", description: "Minimalist web framework", icon: "simple-icons:express", level: 88 },
        { name: "MongoDB", description: "Document database", icon: "logos:mongodb-icon", level: 82 },
        { name: "PostgreSQL", description: "Advanced SQL database", icon: "logos:postgresql", level: 80 },
        { name: "GraphQL", description: "Flexible API query language", icon: "logos:graphql", level: 75 }
      ]
    },
    tools: {
      title: "Tools & DevOps",
      description: "Modern development workflow",
      technologies: [
        { name: "Docker", description: "Containerization platform", icon: "logos:docker-icon", level: 85 },
        { name: "AWS", description: "Cloud service provider", icon: "logos:aws", level: 80 },
        { name: "Git", description: "Version control system", icon: "logos:git-icon", level: 95 },
        { name: "Figma", description: "Design collaboration tool", icon: "logos:figma", level: 90 },
        { name: "Webpack", description: "JavaScript bundler", icon: "logos:webpack", level: 78 },
        { name: "Jest", description: "Testing framework", icon: "logos:jest", level: 82 }
      ]
    },
    mobile: {
      title: "Mobile",
      description: "Cross-platform mobile solutions",
      technologies: [
        { name: "React Native", description: "React for mobile", icon: "logos:react", level: 85 },
        { name: "Flutter", description: "Google’s UI toolkit", icon: "logos:flutter", level: 75 },
        { name: "Expo", description: "React Native tooling", icon: "simple-icons:expo", level: 80 },
        { name: "Swift", description: "iOS development", icon: "logos:swift", level: 70 },
        { name: "Kotlin", description: "Android development", icon: "logos:kotlin", level: 68 },
        { name: "PWA", description: "Progressive Web Apps", icon: "simple-icons:pwa", level: 88 }
      ]
    }
  };  

  const categories = Object.keys(techStack);

  return (
    <section id="tech-stack-section" className="py-20 bg-gradient-to-b from-sage-light via-white to-sage-default relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-sage-dark rounded-full opacity-5 blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-sage-deeper rounded-full opacity-10 blur-2xl animate-ping" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sage-default rounded-full opacity-3 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-2 text-sage-darker font-medium tracking-wider mb-4">
            <div className="w-8 h-px bg-sage-darker"></div>
            <span className="text-sm uppercase">Our Technology Stack</span>
            <div className="w-8 h-px bg-sage-darker"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-sage-deepest mb-6 leading-tight">
            CUTTING-EDGE
            <br />
            <span className="text-sage-dark">TECHNOLOGIES</span>
          </h2>
          
          <p className="text-lg md:text-xl text-sage-darker max-w-3xl mx-auto leading-relaxed">
            We leverage the latest technologies and frameworks to build scalable, 
            performant, and maintainable digital solutions that drive real business results.
          </p>
        </div>

        {/* Category Navigation */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 font-bold tracking-wider uppercase transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-sage-dark text-white shadow-2xl'
                  : 'bg-white text-sage-dark hover:bg-sage-light border-2 border-sage-default'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {techStack[category].title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* Category Description */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-sage-deepest mb-4">
              {techStack[activeCategory].title}
            </h3>
            <p className="text-sage-darker text-lg max-w-2xl mx-auto">
              {techStack[activeCategory].description}
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {techStack[activeCategory].technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 border border-sage-light hover:border-sage-default ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                
                {/* Tech Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon icon={tech.icon} width="32" height="32" />
                </div>

                {/* Tech Info */}
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-sage-deepest group-hover:text-sage-dark transition-colors duration-300">
                    {tech.name}
                  </h4>
                  
                  <p className="text-sage-darker text-sm leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Skill Level Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-sage-darker">Proficiency</span>
                      <span className="text-xs font-bold text-sage-dark">{tech.level}%</span>
                    </div>
                    
                    <div className="w-full bg-sage-light rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-sage-dark to-sage-deeper rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${tech.level}%` : '0%',
                          transitionDelay: `${index * 150 + 800}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-sage-dark/5 to-sage-deeper/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="space-y-6">
            <p className="text-sage-darker font-medium text-lg">
              Ready to leverage these technologies for your project?
            </p>
            
            <button className="group bg-sage-dark hover:bg-sage-deeper text-white px-8 py-4 font-bold tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <span className="relative z-10">LET'S BUILD TOGETHER</span>
              <div className="absolute inset-0 bg-sage-deepest transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;