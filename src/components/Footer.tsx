
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Footer = () => {
  return (
    <footer className="bg-craft-moss/10 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif font-semibold text-craft-earth mb-4">Reborn Crafts</h3>
            <p className="text-craft-earth/70 mb-4">
              Donner une nouvelle vie aux objets abandonnés grâce à l'artisanat durable.
            </p>
            
            <div className="w-32 mx-auto md:mx-0">
              <AspectRatio ratio={1} className="bg-white rounded-md overflow-hidden">
                <img 
                  src="/lovable-uploads/d943e908-713b-475b-a8d2-90d2fc7b392f.png" 
                  alt="Scannez notre QR code" 
                  className="object-cover"
                />
              </AspectRatio>
              <p className="text-center text-xs mt-2 text-craft-earth/70">Scannez pour visiter notre boutique</p>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-craft-earth mb-4">Boutique</h4>
            <ul className="space-y-2 text-craft-earth/70">
              <li><a href="#" className="hover:text-craft-moss transition-colors">Tous les Produits</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Éclairage</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Bougies</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Vases</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Décoration</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-craft-earth mb-4">À Propos</h4>
            <ul className="space-y-2 text-craft-earth/70">
              <li><a href="#" className="hover:text-craft-moss transition-colors">Notre Histoire</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Durabilité</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Processus de Création</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Témoignages</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-craft-earth mb-4">Assistance</h4>
            <ul className="space-y-2 text-craft-earth/70">
              <li><a href="#" className="hover:text-craft-moss transition-colors">Contactez-nous</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Livraison & Retours</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Guide d'Entretien</a></li>
              <li><a href="#" className="hover:text-craft-moss transition-colors">Politique de Confidentialité</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-craft-clay/20 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-craft-earth/60 text-sm">
          <p>© 2025 Reborn Crafts. Tous droits réservés.</p>
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
