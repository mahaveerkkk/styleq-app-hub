import { motion } from "framer-motion";
import { Download, CheckCircle2 } from "lucide-react";
import FloatingElement from "./FloatingElement";
import appMockup from "@/assets/app-mockup.png";

const DOWNLOAD_URL = "https://drive.google.com/file/d/14lRIK8XJV6uXayy316y6eJWXMVxfLzCx/view?usp=drivesdk";

const benefits = [
  "Free to download",
  "No subscription required",
  "Book appointments instantly",
  "Exclusive member discounts",
];

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left - Phone mockup */}
            <motion.div
              className="flex justify-center order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FloatingElement duration={6} y={12} rotate={3}>
                <img
                  src={appMockup}
                  alt="StyleQ App"
                  className="w-56 md:w-72 h-auto drop-shadow-2xl rounded-3xl"
                />
              </FloatingElement>
            </motion.div>
            
            {/* Right - Content */}
            <motion.div
              className="text-center lg:text-left order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Get the App <span className="text-gradient-gold">Now</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8">
                Download StyleQ today and transform your grooming experience. 
                Book appointments, explore styles, and look your best.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    className="flex items-center gap-3 text-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold text-lg rounded-full shadow-gold hover:shadow-[0_0_60px_hsl(43,96%,56%,0.5)] transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-6 h-6" />
                <span>Download for Android</span>
              </motion.a>
              
              <p className="text-sm text-muted-foreground mt-4">
                Android 6.0 or higher required
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
