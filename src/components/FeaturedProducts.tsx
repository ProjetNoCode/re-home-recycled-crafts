
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Amber Glass Table Lamp",
    description: "Crafted from reclaimed amber glass bottles with a handwoven shade.",
    price: "$129",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Lighting",
    isNew: true,
  },
  {
    id: 2,
    name: "Driftwood Candle Holder",
    description: "Shaped from weathered driftwood collected from local beaches.",
    price: "$49",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Candles",
    isNew: false,
  },
  {
    id: 3,
    name: "Patchwork Ceramic Vase",
    description: "A unique vase made from pieces of broken ceramics in beautiful colors.",
    price: "$85",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Vases",
    isNew: true,
  },
  {
    id: 4,
    name: "Recycled Metal Wall Art",
    description: "Abstract wall art created from salvaged metal pieces with natural patina.",
    price: "$159",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Home Decor",
    isNew: false,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="featured" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-craft-earth mb-4">
            Featured Creations
          </h2>
          <p className="text-craft-earth/80 max-w-2xl mx-auto">
            Discover our most popular handcrafted pieces, each one unique and sustainably made.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-craft-clay/10 hover:shadow-md transition-all group">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.isNew && (
                  <Badge className="absolute top-3 right-3 bg-craft-moss text-white">
                    New Arrival
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2 bg-craft-sand/50 border-craft-clay/20">
                  {product.category}
                </Badge>
                <h3 className="font-serif font-medium text-lg text-craft-earth mb-1">{product.name}</h3>
                <p className="text-craft-earth/70 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium text-craft-earth">{product.price}</span>
                  <Button variant="outline" className="border-craft-moss text-craft-moss hover:bg-craft-moss hover:text-white">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-craft-moss hover:bg-craft-moss/90 text-white px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
