
import React from 'react';
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-craft-sage/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Artisan working on a recycled craft piece" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square rounded-lg overflow-hidden shadow-xl hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Handcrafted home decor pieces from recycled materials" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-craft-earth mb-6">
              Our Story & Crafting Process
            </h2>
            
            <Separator className="bg-craft-clay/30 my-6" />
            
            <div className="space-y-6 text-craft-earth/80">
              <p>
                Founded with a passion for sustainability and artisanal craftsmanship, our journey began by seeing the beauty and potential in objects others had discarded.
              </p>
              <p>
                Each piece in our collection is handcrafted using recycled materials - from glass bottles transformed into elegant vases, to reclaimed wood fashioned into unique lighting fixtures.
              </p>
              <p>
                Our creative process honors both the original materials and sustainable practices, resulting in one-of-a-kind pieces that bring character and conscious design to your home.
              </p>
              
              <div className="pt-4">
                <h3 className="font-serif text-xl text-craft-earth mb-4">Our Values</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Sustainability", "Craftsmanship", "Uniqueness", "Mindful Creation", "Waste Reduction", "Local Sourcing"].map((value, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-craft-moss"></span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
