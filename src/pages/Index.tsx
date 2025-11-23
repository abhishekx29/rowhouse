import Hero from "@/components/Hero";
import ConstructionGallery from "@/components/ConstructionGallery";
import LocationFeatures from "@/components/LocationFeatures";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ConstructionGallery />
      <LocationFeatures />
      <ContactSection />
      
      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Red Bricks Engineers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
