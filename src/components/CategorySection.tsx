
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Flame, Flower, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: 1,
    title: "Éclairage",
    description: "Lampes et luminaires artisanaux qui transforment n'importe quel espace.",
    icon: Lightbulb,
    bgColor: "bg-craft-sage/10",
  },
  {
    id: 2,
    title: "Bougies",
    description: "Bougeoirs durables fabriqués à partir de matériaux recyclés.",
    icon: Flame,
    bgColor: "bg-craft-clay/10",
  },
  {
    id: 3,
    title: "Vases",
    description: "Vases uniques qui donnent une nouvelle vie au verre et à la céramique récupérés.",
    icon: Flower,
    bgColor: "bg-craft-moss/10",
  },
  {
    id: 4,
    title: "Décoration",
    description: "Pièces d'accent qui ajoutent de la personnalité à n'importe quelle pièce de votre maison.",
    icon: Home,
    bgColor: "bg-craft-sand/20",
  },
];

const CategorySection = () => {
  return (
    <section id="categories" className="section-padding bg-gradient-to-b from-background to-craft-sand/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-craft-earth mb-4">
            Nos Collections Artisanales
          </h2>
          <p className="text-craft-earth/80 max-w-2xl mx-auto">
            Chaque pièce est soigneusement fabriquée à partir de matériaux recyclés, leur donnant un nouveau but et une nouvelle beauté.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden border-craft-clay/10 hover:shadow-md transition-all">
              <CardContent className={cn("p-6 flex flex-col items-center text-center", category.bgColor)}>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                  <category.icon className="w-8 h-8 text-craft-moss" />
                </div>
                <h3 className="text-xl font-serif font-medium text-craft-earth mb-2">{category.title}</h3>
                <p className="text-craft-earth/70">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
