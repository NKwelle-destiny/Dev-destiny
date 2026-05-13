import { motion } from "framer-motion";
import { Terminal, Layers, AppWindow, Paintbrush, MonitorSmartphone, Code, Database, Layout, Globe, Cpu } from "lucide-react";
import { SiHtml5, SiTailwindcss, SiJavascript, SiReact, SiPostgresql, SiFigma } from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, category: "Frontend" },
  { name: "React Native", icon: AppWindow, category: "Mobile" },
  { name: "JavaScript", icon: SiJavascript, category: "Language" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "HTML5", icon: SiHtml5, category: "Frontend" },
  { name: "CSS3", icon: Layout, category: "Frontend" },
  { name: "SQL", icon: SiPostgresql, category: "Backend" },
  { name: "UI/UX Design", icon: SiFigma, category: "Design" },
  { name: "Graphic Design", icon: Paintbrush, category: "Design" },
  { name: "Web Development", icon: Globe, category: "Core" },
  { name: "App Development", icon: Layers, category: "Core" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary font-mono text-sm mb-6 border border-border/50">
            <Terminal className="h-4 w-4" /> Arsenal
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Tools of the trade</h2>
          <p className="text-muted-foreground text-lg">
            A versatile stack combining powerful engineering frameworks with modern design tools to bring any vision to life.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group p-6 bg-card border border-border/50 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors"
                data-testid={`card-skill-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-xs text-muted-foreground font-mono mt-1 block">{skill.category}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
