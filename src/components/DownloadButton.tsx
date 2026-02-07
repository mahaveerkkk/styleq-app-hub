import { motion } from "framer-motion";
import { Download, Smartphone } from "lucide-react";

interface DownloadButtonProps {
  href: string;
}

const DownloadButton = ({ href }: DownloadButtonProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold text-lg rounded-full overflow-hidden shadow-gold animate-pulse-glow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 shimmer" />
      
      {/* Icon */}
      <span className="relative z-10 flex items-center gap-3">
        <Smartphone className="w-6 h-6" />
        <span>Download App</span>
        <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
      </span>
      
      {/* Glow effect on hover */}
      <motion.span
        className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />
    </motion.a>
  );
};

export default DownloadButton;
