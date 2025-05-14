
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import AboutSection from '@/components/AboutSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <CategorySection />
        <AboutSection />
        <FeaturedProducts />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
