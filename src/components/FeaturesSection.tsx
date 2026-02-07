import { motion } from "framer-motion";
import { Calendar, MapPin, Star, Clock, Scissors, Users } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Schedule appointments in seconds with our intuitive booking system.",
  },
  {
    icon: MapPin,
    title: "Find Nearby",
    description: "Discover top-rated barbers near your location with real-time availability.",
  },
  {
    icon: Star,
    title: "Top Reviews",
    description: "Read authentic reviews and choose the best barbers with confidence.",
  },
  {
    icon: Clock,
    title: "No Wait Time",
    description: "Skip the queue with scheduled appointments and real-time updates.",
  },
  {
    icon: Scissors,
    title: "Style Gallery",
    description: "Browse trending hairstyles and find your perfect look.",
  },
  {
    icon: Users,
    title: "Expert Barbers",
    description: "Connect with verified professional barbers in your area.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium">Why Choose StyleQ</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Everything You Need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of grooming with features designed to make your 
            barbershop visits effortless and enjoyable.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
