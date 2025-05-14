
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-craft-moss/10 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif font-semibold text-craft-earth mb-4">Reborn Crafts</h3>
            <p className="text-craft-earth/70 mb-4">
              Bringing new life to discarded objects through sustainable craftsmanship.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-craft-earth mb-4">Shop</h4>
            <ul className="space-y-2 text-craft-earth/70">
              <li><a href="#" className="hover:text-craft-moss transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Lighting</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Candles</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Vases</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Home Decor</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-craft-earth mb-4">About</h4>
            <ul className="space-y-2 text-craft-earth/70">
              <li><a href="#" className="hover:text-craft-moss transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Crafting Process</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-craft-earth mb-4">Support</h4>
            <ul className="space-y-2 text-craft-earth/70">
              <li><a href="#" className="hover:text-craft-moss transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-craft-clay/20 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-craft-earth/60 text-sm">
          <p>© 2025 Reborn Crafts. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-craft-moss transition-colors">Instagram</a>
            <a href="#" className="hover:text-craft-moss transition-colors">Pinterest</a>
            <a href="#" className="hover:text-craft-moss transition-colors">Facebook</a>
            <a href="#" className="hover:text-craft-moss transition-colors">Etsy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
