
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Candle, Vase, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: 1,
    title: "Lighting",
    description: "Handcrafted lamps and lighting fixtures that transform any space.",
    icon: Lightbulb,
    bgColor: "bg-craft-sage/10",
  },
  {
    id: 2,
    title: "Candles",
    description: "Sustainable candle holders made from upcycled materials.",
    icon: Candle,
    bgColor: "bg-craft-clay/10",
  },
  {
    id: 3,
    title: "Vases",
    description: "Unique vases that give new life to discarded glass and ceramics.",
    icon: Vase,
    bgColor: "bg-craft-moss/10",
  },
  {
    id: 4,
    title: "Home Decor",
    description: "Accent pieces that add personality to any room in your home.",
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
            Our Handmade Collections
          </h2>
          <p className="text-craft-earth/80 max-w-2xl mx-auto">
            Every piece is carefully crafted from recycled materials, giving them new purpose and beauty.
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
