import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 backdrop-blur-lg bg-background/50 border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
            <Scissors className="w-5 h-5 text-primary-foreground rotate-[-45deg]" />
          </div>
          <span className="text-2xl font-display font-bold text-gradient-gold">
            StyleQ
          </span>
        </motion.a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
            Download
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
