
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-craft-sand/50 backdrop-blur-sm sticky top-0 z-50 border-b border-craft-clay/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/2fc9e376-2918-4bdb-82bf-556008747a61.png" 
                alt="Façonnette Logo" 
                className="h-8 md:h-10 w-auto"
              />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#categories" className="text-craft-earth hover:text-craft-moss transition-colors">Produits</a>
            <a href="#about" className="text-craft-earth hover:text-craft-moss transition-colors">Notre Histoire</a>
            <a href="#featured" className="text-craft-earth hover:text-craft-moss transition-colors">Nouveautés</a>
            <a href="#contact" className="text-craft-earth hover:text-craft-moss transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex">
            <Button asChild className="bg-craft-moss hover:bg-craft-moss/90 text-white">
              <a href="https://www.etsy.com/shop/faconnette" target="_blank" rel="noopener noreferrer">
                Acheter Maintenant
              </a>
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-craft-earth p-2"
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-craft-sand/95 backdrop-blur-sm transition-all duration-300 ease-in-out border-b border-craft-clay/20",
        isMenuOpen ? "max-h-64 py-4" : "max-h-0 overflow-hidden py-0"
      )}>
        <div className="container-custom flex flex-col space-y-4 px-4">
          <a href="#categories" className="text-craft-earth py-2 border-b border-craft-clay/10" onClick={() => setIsMenuOpen(false)}>Produits</a>
          <a href="#about" className="text-craft-earth py-2 border-b border-craft-clay/10" onClick={() => setIsMenuOpen(false)}>Notre Histoire</a>
          <a href="#featured" className="text-craft-earth py-2 border-b border-craft-clay/10" onClick={() => setIsMenuOpen(false)}>Nouveautés</a>
          <a href="#contact" className="text-craft-earth py-2 border-b border-craft-clay/10" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <Button asChild className="bg-craft-moss hover:bg-craft-moss/90 text-white w-full" onClick={() => setIsMenuOpen(false)}>
            <a href="https://www.etsy.com/shop/faconnette" target="_blank" rel="noopener noreferrer">
              Acheter Maintenant
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
