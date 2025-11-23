import { MapPin, School, ShoppingBag, Hospital, Building2, Leaf } from "lucide-react";

const LocationFeatures = () => {
  const features = [
    {
      icon: School,
      title: "Near Amity University",
      description: "Walking distance to premier educational institution",
    },
    {
      icon: Building2,
      title: "Gomtinagar Extension",
      description: "Prime location in developing area of Lucknow",
    },
    {
      icon: ShoppingBag,
      title: "Shopping & Dining",
      description: "Easy access to markets and restaurants",
    },
    {
      icon: Hospital,
      title: "Healthcare",
      description: "Hospitals and clinics nearby",
    },
    {
      icon: MapPin,
      title: "Connectivity",
      description: "Well-connected to major city roads",
    },
    {
      icon: Leaf,
      title: "Green Spaces",
      description: "Peaceful residential environment",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Prime Location Benefits
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need within reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationFeatures;
