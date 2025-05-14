
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Inscrit !",
        description: "Merci de vous être abonné à notre newsletter.",
      });
      setEmail('');
    } else {
      toast({
        title: "Erreur",
        description: "Veuillez entrer votre adresse email.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-craft-clay/10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-craft-earth mb-4">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-craft-earth/80">
            Abonnez-vous à notre newsletter pour des offres exclusives, des nouveautés et des aperçus en coulisses de notre processus créatif.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8">
            <Input
              type="email"
              placeholder="Votre adresse email"
              className="border-craft-clay/20 focus:border-craft-moss"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="bg-craft-moss hover:bg-craft-moss/90 text-white">
              S'abonner
            </Button>
          </form>
          
          <Separator className="bg-craft-clay/30 my-8" />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-serif font-medium text-lg text-craft-earth mb-2">Visitez Notre Atelier</h3>
              <p className="text-craft-earth/70">123 Rue des Artisans<br />Villeartisanale, 75001</p>
            </div>
            <div>
              <h3 className="font-serif font-medium text-lg text-craft-earth mb-2">Heures d'Ouverture</h3>
              <p className="text-craft-earth/70">Lundi - Vendredi : 10h - 18h<br />Samedi : 11h - 16h</p>
            </div>
            <div>
              <h3 className="font-serif font-medium text-lg text-craft-earth mb-2">Contactez-nous</h3>
              <p className="text-craft-earth/70">bonjour@reborncrafts.com<br />01 23 45 67 89</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
