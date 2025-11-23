import construction1 from "@/assets/construction-1.jpg";
import construction2 from "@/assets/construction-2.jpg";
import { useState } from "react";

const ConstructionGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Construction Progress
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch our row houses take shape with quality craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div 
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedMedia(construction1)}
            >
              <img 
                src={construction1} 
                alt="Construction site view showing brick walls and concrete pillars" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">Ground Floor Development</p>
              </div>
            </div>

            <div 
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedMedia(construction2)}
            >
              <img 
                src={construction2} 
                alt="Construction workers building row houses with brick walls" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">Wall Construction Progress</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <video 
              controls 
              className="w-full aspect-video object-cover"
              poster={construction1}
            >
              <source src="/construction-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl font-light"
              onClick={() => setSelectedMedia(null)}
            >
              ×
            </button>
            <img 
              src={selectedMedia} 
              alt="Construction site full view" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ConstructionGallery;
