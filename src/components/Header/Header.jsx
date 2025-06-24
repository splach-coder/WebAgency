import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'backdrop-blur-md' : ''}`}>
      <div className="container mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="flex space-x-16">
            <a
              href="#about"
              className="text-gray-900 font-medium tracking-wider text-sm hover:text-sage-dark transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#services"
              className="text-gray-900 font-medium tracking-wider text-sm hover:text-sage-dark transition-colors"
            >
              SERVICES
            </a>
            <a
              href="#work"
              className="text-gray-900 font-medium tracking-wider text-sm hover:text-sage-dark transition-colors"
            >
              WORK
            </a>
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-2xl font-black text-sage-darker">
              -WeReact-
            </h1>
          </div>

          {/* Right Button */}
          <button className=" bg-sage-dark hover:bg-sage-darker text-white px-10 py-3 font-medium tracking-widest text-sm transition-colors">
            <a href="#contact">LET'S TALK</a>
          </button>
        </div>
      </div>
    </header>
  )
}