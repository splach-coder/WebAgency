import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "THE SITE THEY BUILT FOR US LOOKS STUNNING AND LOADS LIGHTNING FAST. OUR CUSTOMERS NOTICED THE DIFFERENCE IMMEDIATELY.",
      author: "AYMAN ZOUHIR",
      role: "FOUNDER, CASA CRAFTS",
    },
    {
      id: 2,
      text: "THE TEAM UNDERSTOOD OUR BRAND FROM DAY ONE. THE DESIGN IS CLEAN, MODERN, AND EXACTLY WHAT WE ENVISIONED.",
      author: "LINA EL FADILI",
      role: "MARKETING MANAGER, RABAT BOUTIQUE HOTEL",
    },
    {
      id: 3,
      text: "FROM STRATEGY TO LAUNCH, THEY HANDLED EVERYTHING. SEO, MOBILE OPTIMIZATION, CUSTOM CMS—ALL DONE RIGHT.",
      author: "YOUSSEF BENALI",
      role: "CO-FOUNDER, MOROCCAN MADE",
    },
    {
      id: 4,
      text: "WE SAW A 40% INCREASE IN LEADS AFTER LAUNCH. THEIR WORK ISN’T JUST BEAUTIFUL, IT PERFORMS.",
      author: "FATIMA HARRAK",
      role: "OPERATIONS DIRECTOR, ATLAS LEGAL",
    },
  ];

  // Auto-advance functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="relative w-full min-h-[500px] bg-sage-light overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[12rem] font-bold text-sage/10 select-none tracking-wider">
          WeReact
        </span>
      </div>

      {/* Testimonial Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <div className="mb-16 text-center">
            <div className="relative overflow-hidden h-32 flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out transform ${
                    index === currentIndex
                      ? "translate-x-0 opacity-100"
                      : index < currentIndex
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <p className="text-lg lg:text-2xl font-medium text-sage-deepest leading-relaxed max-w-4xl px-4">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Author Cards - Staggered Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex items-center p-6 rounded-xl transition-all duration-300 transform ${
                  index === currentIndex
                    ? "bg-white border-2 border-sage shadow-xl scale-[1.02]"
                    : "bg-white/90 border border-gray-200 hover:border-sage cursor-pointer"
                } ${index === 1 ? "lg:translate-y-8" : ""} ${
                  index === 2 ? "lg:translate-y-4" : ""
                }`}
                onClick={() => goToSlide(index)}
              >
                {/* Avatar */}
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-sage to-sage-dark flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  {index === currentIndex && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-sage-deepest rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800 text-base truncate">
                        {testimonial.author}
                      </h4>
                      <p className="text-sage-dark text-xs font-medium uppercase tracking-wider mt-1">
                        {testimonial.role}
                      </p>
                    </div>

                    {/* Play/Pause Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (index === currentIndex) {
                          togglePause();
                        }
                      }}
                      className={`ml-3 p-2 rounded-full transition-all duration-200 ${
                        index === currentIndex
                          ? "bg-sage text-white hover:bg-sage-dark shadow-md"
                          : "bg-gray-100 text-gray-400 hover:bg-sage hover:text-white"
                      }`}
                      aria-label={
                        isPaused && index === currentIndex ? "Play" : "Pause"
                      }
                    >
                      {isPaused && index === currentIndex ? (
                        <Play size={16} />
                      ) : (
                        <Pause size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-sage-light hover:bg-sage hover:text-white hover:border-sage transition-all duration-200"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Slide Indicators */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-sage scale-125"
                  : "bg-sage-light hover:bg-sage"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-sage-light hover:bg-sage hover:text-white hover:border-sage transition-all duration-200"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-sage-light">
        <div
          className={`h-full bg-sage transition-all duration-100 ${
            isPaused ? "animation-pause" : ""
          }`}
          style={{
            width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

const TestimonialSliderSection = ({
  sectionNumber = "03",
  title = "CLIENT WORDS",
  subtitle = "EACH PROJECT REPRESENTS OUR COMMITMENT TO EXCELLENCE AND INNOVATION.",
}) => {
  return (
    <section className="bg-sage-light py-16 space-y-6 px-6 h-min-screen">
      <div className="">
        {/* Header */}
        <div className="">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-sage-darker/60 text-lg font-light">
              /{sectionNumber}
            </span>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-sage-deepest mb-4">
                {title}
              </h2>
              <p className="text-sage-darker text-lg max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-sage-light">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSliderSection;
