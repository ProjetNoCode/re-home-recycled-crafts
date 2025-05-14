
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
        title: "Subscribed!",
        description: "Thank you for joining our newsletter.",
      });
      setEmail('');
    } else {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-craft-clay/10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-craft-earth mb-4">
            Join Our Community
          </h2>
          <p className="text-craft-earth/80">
            Subscribe to our newsletter for exclusive offers, new arrivals, and behind-the-scenes looks at our creative process.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8">
            <Input
              type="email"
              placeholder="Your email address"
              className="border-craft-clay/20 focus:border-craft-moss"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="bg-craft-moss hover:bg-craft-moss/90 text-white">
              Subscribe
            </Button>
          </form>
          
          <Separator className="bg-craft-clay/30 my-8" />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-serif font-medium text-lg text-craft-earth mb-2">Visit Our Studio</h3>
              <p className="text-craft-earth/70">123 Artisan Lane<br />Craftville, CA 90210</p>
            </div>
            <div>
              <h3 className="font-serif font-medium text-lg text-craft-earth mb-2">Opening Hours</h3>
              <p className="text-craft-earth/70">Monday - Friday: 10am - 6pm<br />Saturday: 11am - 4pm</p>
            </div>
            <div>
              <h3 className="font-serif font-medium text-lg text-craft-earth mb-2">Get in Touch</h3>
              <p className="text-craft-earth/70">hello@reborncrafts.com<br />(555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
