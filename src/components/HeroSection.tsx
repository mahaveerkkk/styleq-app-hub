import { motion } from "framer-motion";
import FloatingElement from "./FloatingElement";
import DownloadButton from "./DownloadButton";
import scissorsImg from "@/assets/scissors-3d.png";
import combImg from "@/assets/comb-3d.png";
import razorImg from "@/assets/razor-3d.png";
import appMockup from "@/assets/app-mockup.png";

const DOWNLOAD_URL = "https://drive.google.com/file/d/14lRIK8XJV6uXayy316y6eJWXMVxfLzCx/view?usp=drivesdk";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Floating 3D Elements */}
      <FloatingElement
        className="absolute top-[15%] left-[5%] md:left-[10%] opacity-70"
        delay={0}
        duration={7}
        y={25}
        rotate={8}
      >
        <img
          src={scissorsImg}
          alt="Scissors"
          className="w-24 md:w-40 h-auto drop-shadow-2xl"
        />
      </FloatingElement>
      
      <FloatingElement
        className="absolute top-[20%] right-[5%] md:right-[15%] opacity-60"
        delay={1}
        duration={8}
        y={20}
        rotate={10}
      >
        <img
          src={combImg}
          alt="Comb"
          className="w-20 md:w-32 h-auto drop-shadow-2xl"
        />
      </FloatingElement>
      
      <FloatingElement
        className="absolute bottom-[20%] left-[10%] md:left-[20%] opacity-60"
        delay={2}
        duration={6}
        y={15}
        rotate={6}
      >
        <img
          src={razorImg}
          alt="Razor"
          className="w-20 md:w-28 h-auto drop-shadow-2xl"
        />
      </FloatingElement>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
                ✨ Premium Grooming Experience
              </span>
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-7xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your Style,
              <br />
              <span className="text-gradient-gold">Perfected</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Book appointments with top barbers, explore trending styles, and 
              elevate your grooming game with StyleQ.
            </motion.p>
            
            <DownloadButton href={DOWNLOAD_URL} />
            
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold-dark border-2 border-background"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold">10,000+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right side - App mockup */}
          <motion.div
            className="relative flex justify-center lg:justify-end perspective-1000"
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FloatingElement duration={5} y={15} rotate={2}>
              <div className="relative">
                <img
                  src={appMockup}
                  alt="StyleQ App"
                  className="w-64 md:w-80 h-auto drop-shadow-2xl rounded-3xl"
                />
                {/* Glow effect behind phone */}
                <div className="absolute inset-0 -z-10 bg-primary/30 blur-3xl rounded-full transform scale-75" />
              </div>
            </FloatingElement>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
