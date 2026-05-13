import { motion } from "framer-motion";
import { User, Mail, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 relative"
          >
            <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                alt="Workspace" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 border border-border/50 rounded-2xl z-20 pointer-events-none" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/30 rounded-full flex items-center justify-center backdrop-blur-sm hidden md:flex">
              <span className="font-mono text-xs text-primary rotate-[-15deg]">CREATIVE</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary font-mono text-sm mb-6 border border-border/50">
              <User className="h-4 w-4" /> About Me
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Bridging the gap between <span className="text-primary italic">logic</span> and <span className="text-primary italic">aesthetics</span>.
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm Destiny, a versatile creative technologist specializing in full-stack development, UI/UX, and graphic design. I believe that the best products don't just work flawlessly under the hood—they feel intuitive and look beautiful.
              </p>
              <p>
                With a deep understanding of both code and design principles, I can take an idea from a rough sketch to a fully deployed application. Whether I'm crafting a visually stunning marketing site or architecting a complex React Native application, my focus is always on delivering exceptional user experiences.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 border border-border/50">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Email</p>
                  <a href="mailto:nkwelledestiny923306@gmail.com" className="font-medium hover:text-primary transition-colors line-clamp-1">nkwelledestiny923306@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 border border-border/50">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Phone</p>
                  <a href="tel:651453986" className="font-medium hover:text-primary transition-colors">651453986</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
