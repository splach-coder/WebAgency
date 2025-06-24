import React, { useState } from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", { email, name });
    // Reset form
    setEmail("");
    setName("");
  };

  return (
    <footer className="bg-sage-deepest text-white relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[20vw] font-bold text-sage-darker/60 select-none whitespace-nowrap">
          -WeReact-
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Team photo and newsletter signup */}
          <div className="">
            {/* Newsletter signup */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-sage-light mb-2">
                  SIGN UP FOR OUR NEWSLETTER AND
                </h3>
                <h3 className="text-2xl font-bold text-sage-light mb-2">
                  STAY UP TO DATE WITH THE COOL
                </h3>
                <h3 className="text-2xl font-bold text-sage-light">
                  STUFF WE'RE COOKING UP.
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-sage-light/50 pb-2 text-white placeholder-sage-light/70 focus:outline-none focus:border-sage-light transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-sage-light/50 pb-2 text-white placeholder-sage-light/70 focus:outline-none focus:border-sage-light transition-colors"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="bg-sage-light hover:bg-sage-dark text-sage-darker px-8 py-3 rounded-sm font-semibold transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Navigation and social */}
          <div className="flex flex-col justify-between">
            {/* Navigation */}
            <nav className="space-y-6">
              <ul className="space-y-4 text-right">
                <li>
                  <a
                    href="#home"
                    className="text-4xl lg:text-5xl font-bold text-sage-light hover:text-sage-dark transition-colors duration-200"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-4xl lg:text-5xl font-bold text-sage-light hover:text-sage-dark transition-colors duration-200"
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-4xl lg:text-5xl font-bold text-sage-light hover:text-sage-dark transition-colors duration-200"
                  >
                    SERVICES
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    className="text-4xl lg:text-5xl font-bold text-sage-light hover:text-sage-dark transition-colors duration-200"
                  >
                    WORK
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-4xl lg:text-5xl font-bold text-sage-light hover:text-sage-dark transition-colors duration-200"
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Social links and copyright */}
        <div className="mt-10 space-y-5">
          <div className="text-sage-light/70 flex gap-4">
            <a
              href="#"
              className="text-sage-light hover:text-white transition-colors duration-200"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="text-sage-light hover:text-white transition-colors duration-200"
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-sage-light hover:text-white transition-colors duration-200"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>

          <div className="text-sage-light/70 text-sm">
            <p>© WeReact LLC 2025 ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
