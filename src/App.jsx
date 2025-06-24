import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import TextPressure from "./components/animations/TextPressure";
import TestimonialSliderSection from "./components/TestimonialSliderSection";
import ProjectsSection from "./components/Section";
import ContactSection from "./components/ContactSection";
import WebDevAgencyHero from "./components/WebDevAgencyHero";
import Footer from "./components/Footer/Footer";
import TechStackSection from "./components/TechStackSection";

// Mobile Block Component
const MobileBlockScreen = () => {
  const [dots, setDots] = useState(".");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Animated dots for "working" effect
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "." : prev + ".");
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-light via-white to-sage-default relative overflow-hidden flex items-center justify-center p-6">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-sage-dark rounded-full opacity-10 blur-3xl animate-pulse top-10 -left-20" />
        <div className="absolute w-48 h-48 bg-sage-darker rounded-full opacity-15 blur-2xl animate-ping bottom-20 -right-16" />
        <div className="absolute w-32 h-32 bg-sage-deepest rounded-full opacity-20 blur-xl animate-bounce top-1/2 right-1/4" />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-8 w-16 h-16 bg-sage-dark transform rotate-45 opacity-20 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-24 left-8 w-12 h-12 bg-sage-darker rounded-full opacity-25 animate-bounce" />
        <div className="absolute top-1/3 left-4 w-8 h-32 bg-gradient-to-b from-sage-dark to-sage-deeper opacity-30 transform -rotate-12" />
      </div>

      <div className={`relative z-10 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        
        {/* Phone Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-20 h-32 bg-sage-deepest rounded-2xl flex flex-col items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <div className="w-12 h-20 bg-sage-light rounded-lg m-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-default to-sage-dark opacity-30"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-sage-darker rounded-full opacity-40"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-sage-darker rounded-full opacity-40"></div>
              </div>
            </div>
            
            {/* Construction/Working Indicator */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-sage-dark rounded-full flex items-center justify-center animate-pulse">
              <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-black text-sage-deepest leading-tight tracking-tight">
            MOBILE MAGIC
            <br />
            <span className="text-sage-dark">IN PROGRESS</span>
          </h1>
          
          <div className="space-y-4">
            <p className="text-lg text-sage-darker font-medium">
              Our team is crafting something
              <br />
              <span className="text-sage-deepest font-bold">absolutely wild</span> for mobile
            </p>
            
            <div className="flex items-center justify-center space-x-1 text-sage-dark">
              <span className="text-xl font-bold">Working hard</span>
              <span className="text-xl font-bold w-8 text-left">{dots}</span>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 space-y-4">
          <div className="w-full max-w-xs mx-auto bg-sage-light rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-sage-dark to-sage-deeper rounded-full animate-pulse" style={{ width: '78%' }}></div>
          </div>
          <p className="text-sm text-sage-darker font-medium">78% Complete</p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 space-y-4">
          <p className="text-sage-darker font-medium">
            For the best experience, visit us on desktop
          </p>
          
          <button 
            onClick={() => window.location.reload()}
            className="group bg-sage-dark hover:bg-sage-deeper text-white px-6 py-3 rounded-none font-bold tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
          >
            <span className="relative z-10">REFRESH & CHECK AGAIN</span>
            <div className="absolute inset-0 bg-sage-deepest transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        {/* Fun Fact */}
        <div className="mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-sage-default/30">
          <p className="text-sm text-sage-darker">
            💡 <span className="font-semibold">Fun fact:</span> We're building a mobile experience so smooth, 
            it'll make your thumb do a happy dance!
          </p>
        </div>

        {/* Social Proof */}
        <div className="mt-6">
          <p className="text-xs text-sage-darker/70 font-medium tracking-wider uppercase">
            Join 10,000+ users waiting for the mobile launch
          </p>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-sage-dark rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-sage-dark rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-sage-dark rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      {/* Mobile Block Screen - Shows only on small screens */}
      <div className="block md:hidden">
        <MobileBlockScreen />
      </div>

      {/* Main App Content - Shows only on medium screens and up */}
      <div className="hidden md:block min-h-screen bg-sage-light relative overflow-hidden">
        <Header />
        <main className="z-10">
          <div className="relative min-h-screen">
            <img
              src="/images/images.jpg"
              alt="background image"
              className="absolute top-0 left-0 w-full h-full"
            />
            <div className="grid grid-cols-3 relative w-full">
              <div className="relative col-span-1 h-[550px] border-r pl-16 pt-28 bg-sage-light border-sage-dark">
                <TextPressure
                  textColor="#000000"
                  text="WE DESIGN & BUILD"
                  minFontSize={86}
                />
                <TextPressure
                  textColor="#3A5A40"
                  text="IMPACTFUL DIGITAL"
                  minFontSize={112}
                />
                <TextPressure
                  textColor="#000000"
                  text="EXPERIENCES"
                  minFontSize={86}
                />
              </div>
              <div className="col-span-1 h-[510px] border-r bg-sage-light border-sage-dark"></div>
              <div className="col-span-1 h-[470px] bg-sage-light border-sage-dark flex items-end ">
                <span className=" text-md font-bold font-mono text-left p-6">
                  {" "}
                  OUR TEAM COMBINES STRATEGIC THINKING <br /> WITH CUTTING-EDGE
                  DESIGN TO CREATE EXPERIENCES <br /> THAT RESONATE WITH YOUR
                  AUDIENCE.
                </span>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <WebDevAgencyHero /> 

          {/* Project Section */}
          <ProjectsSection />  

          {/* Project Section */}
          <TechStackSection />

          {/* Testimonial Section */}
          <TestimonialSliderSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Footer Section */}
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;