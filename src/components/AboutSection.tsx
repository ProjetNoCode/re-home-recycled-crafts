
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
                alt="Artisan travaillant sur une pièce artisanale recyclée" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square rounded-lg overflow-hidden shadow-xl hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Pièces de décoration artisanales fabriquées à partir de matériaux recyclés" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-craft-earth mb-6">
              Notre Histoire et Processus de Création
            </h2>
            
            <Separator className="bg-craft-clay/30 my-6" />
            
            <div className="space-y-6 text-craft-earth/80">
              <p>
                Fondés avec une passion pour la durabilité et l'artisanat, notre voyage a commencé en voyant la beauté et le potentiel dans des objets que d'autres avaient jetés.
              </p>
              <p>
                Chaque pièce de notre collection est fabriquée à la main en utilisant des matériaux recyclés - des bouteilles en verre transformées en vases élégants, aux bois récupérés façonnés en luminaires uniques.
              </p>
              <p>
                Notre processus créatif honore à la fois les matériaux d'origine et les pratiques durables, résultant en des pièces uniques qui apportent caractère et design conscient à votre maison.
              </p>
              
              <div className="pt-4">
                <h3 className="font-serif text-xl text-craft-earth mb-4">Nos Valeurs</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Durabilité", "Artisanat", "Originalité", "Création Consciente", "Réduction des Déchets", "Approvisionnement Local"].map((value, index) => (
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
