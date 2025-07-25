
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-craft-sage/30 to-craft-sand/30 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 z-0"></div>
      
      <div className="container-custom min-h-[85vh] flex flex-col justify-center relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-craft-earth mb-6">
            Des objets uniques faits main pour la déco maison
          </h1>
          <p className="text-lg md:text-xl text-craft-earth/80 mb-8">
            Pièces de décoration uniques et durables qui donnent une nouvelle vie aux matériaux recyclés.
            Chaque objet raconte une histoire de transformation et de création consciente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-craft-moss hover:bg-craft-moss/90 text-white px-8 py-6 text-lg">
              <a href="https://www.etsy.com/shop/faconnette" target="_blank" rel="noopener noreferrer">
                Explorer la Collection
              </a>
            </Button>
            <Button variant="outline" asChild className="border-craft-clay text-craft-earth hover:bg-craft-clay/10 px-8 py-6 text-lg">
              <a href="#about">Notre Processus</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
