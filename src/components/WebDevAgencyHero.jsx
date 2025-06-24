import React, { useState, useEffect } from 'react';

const WebDevAgencyHero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    "CUSTOM WEB DEVELOPMENT",
    "E-COMMERCE SOLUTIONS", 
    "MOBILE APPLICATIONS",
    "UI/UX DESIGN",
    "BRAND IDENTITY"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-light via-white to-sage-light relative overflow-hidden" id='about'>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-sage-dark rounded-full opacity-10 blur-3xl transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-sage-darker rounded-full opacity-15 blur-2xl transition-all duration-700 ease-out"
          style={{
            transform: `translate(${mousePos.x * -0.015}px, ${mousePos.y * -0.015}px)`,
            right: '15%',
            bottom: '25%'
          }}
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-sage-dark transform rotate-45 opacity-20 animate-pulse hidden md:block" />
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-sage-darker rounded-full opacity-25 animate-bounce hidden lg:block" />
        <div className="absolute top-1/2 right-8 w-16 h-64 bg-gradient-to-b from-sage-dark to-sage-deeper opacity-30 transform -rotate-12 hidden md:block" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            
            {/* Section Label */}
            <div className="flex items-center space-x-2 text-sage-darker font-medium tracking-wider">
              <div className="w-8 h-px bg-sage-darker"></div>
              <span className="text-sm uppercase">What We Create</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-sage-deepest leading-none tracking-tight">
                WEB
                <br />
                <span className="text-sage-dark">SOLUTIONS</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-sage-darker leading-relaxed max-w-xl">
              FROM CONCEPT TO LAUNCH, WE CRAFT DIGITAL EXPERIENCES THAT DRIVE RESULTS AND CAPTIVATE YOUR AUDIENCE ACROSS ALL TOUCHPOINTS.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-sage-dark hover:bg-sage-deeper text-white px-8 py-4 rounded-none font-bold tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10"><a href="#contact">LET'S BUILD SOMETHING AMAZING!</a></span>
                <div className="absolute inset-0 bg-sage-deepest transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>

            {/* Services List */}
            <div className="hidden md:block pt-8">
              <div className="space-y-2">
                {services.map((service, index) => (
                  <div 
                    key={service}
                    className={`text-sage-darker font-medium tracking-wide transform transition-all duration-500 hover:text-sage-deepest hover:translate-x-2 cursor-pointer ${
                      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                  >
                    → {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className={`relative transform transition-all duration-1200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            
            {/* Main Visual Container */}
            <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
              
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-light to-sage-default rounded-3xl transform rotate-3 hover:rotate-6 transition-transform duration-500"></div>
              
              {/* Code Window Mockup */}
              <div className="absolute top-8 right-8 w-48 h-32 bg-sage-deepest rounded-lg shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="p-3">
                  <div className="flex space-x-1 mb-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-sage-light rounded opacity-60"></div>
                    <div className="w-3/4 h-1 bg-sage-default rounded opacity-40"></div>
                    <div className="w-1/2 h-1 bg-sage-light rounded opacity-60"></div>
                    <div className="w-5/6 h-1 bg-sage-default rounded opacity-40"></div>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute bottom-12 left-12 w-24 h-44 bg-white rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 border-4 border-sage-darker">
                <div className="p-2 h-full">
                  <div className="w-full h-2 bg-sage-light rounded-full mb-2"></div>
                  <div className="space-y-1">
                    <div className="w-full h-6 bg-sage-default rounded opacity-60"></div>
                    <div className="w-3/4 h-4 bg-sage-light rounded opacity-40"></div>
                    <div className="w-1/2 h-4 bg-sage-default rounded opacity-60"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-sage-dark rounded-full animate-ping opacity-20"></div>
              <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-sage-darker transform rotate-45 animate-pulse opacity-30"></div>
              
              {/* Large Typography Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[8rem] md:text-[12rem] font-black text-sage-deepest opacity-5 select-none transform hover:scale-110 transition-transform duration-500">
                  DEV
                </div>
              </div>
            </div>

            {/* Bottom CTA for Mobile */}
            <div className="mt-8 text-right">
              <p className="text-sage-darker text-sm mb-2 uppercase tracking-wider">
                Ready to Level Up Your Digital Presence?
              </p>
              <div className="w-full h-px bg-sage-default"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sage-dark rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sage-dark rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default WebDevAgencyHero;