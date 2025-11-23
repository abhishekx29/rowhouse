import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Modern row houses construction" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-4 animate-slide-up border border-white/20">
            <MapPin className="w-4 h-4" />
            <span>Premium Location - Hasemau, Lucknow</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-slide-up drop-shadow-2xl" style={{ animationDelay: "0.1s" }}>
            Row Houses in Making
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-light animate-slide-up drop-shadow-lg" style={{ animationDelay: "0.2s" }}>
            Near Amity University<br />
            Gomtinagar Extension, Lucknow
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg"
              onClick={scrollToGallery}
            >
              View Construction Progress
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
              onClick={() => window.location.href = 'tel:+918953888880'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: 8953888880
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <div className="text-3xl font-bold text-white mb-2">Modern Design</div>
              <p className="text-white/80">Contemporary architecture</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <div className="text-3xl font-bold text-white mb-2">Prime Location</div>
              <p className="text-white/80">Near Amity University</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <div className="text-3xl font-bold text-white mb-2">Quality Build</div>
              <p className="text-white/80">Premium materials</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/80 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
