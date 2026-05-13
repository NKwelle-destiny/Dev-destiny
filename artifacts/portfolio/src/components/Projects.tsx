import { motion } from "framer-motion";
import { FolderOpen, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "FinFlow — Mobile Finance App",
    description:
      "A full-featured personal finance tracker built with React Native. Supports expense categorization, budget goals, visual analytics, and cross-platform push notifications.",
    tags: ["React Native", "JavaScript", "SQL", "UI/UX"],
    category: "Mobile App",
    color: "from-cyan-500/20 to-blue-500/20",
    accent: "cyan",
  },
  {
    title: "Saveur — Restaurant Platform",
    description:
      "A stunning website and ordering system for a high-end restaurant. Features animated menu browsing, table reservations, and a real-time kitchen dashboard.",
    tags: ["React", "Tailwind CSS", "JavaScript", "UI/UX"],
    category: "Web App",
    color: "from-amber-500/20 to-orange-500/20",
    accent: "amber",
  },
  {
    title: "Pulse Design System",
    description:
      "A comprehensive UI component library with 60+ components, design tokens, and Figma integration. Used across 5 production applications.",
    tags: ["React", "CSS", "Graphic Design", "Figma"],
    category: "Design System",
    color: "from-violet-500/20 to-purple-500/20",
    accent: "violet",
  },
  {
    title: "ConnectHub — Social App",
    description:
      "A community platform where creatives share work and collaborate. Built with React Native, featuring real-time chat, story feeds, and portfolio showcases.",
    tags: ["React Native", "JavaScript", "SQL", "UI/UX"],
    category: "Mobile App",
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "emerald",
  },
  {
    title: "ShopEase — E-Commerce Dashboard",
    description:
      "An admin dashboard for managing an online store — product listings, orders, customer analytics, and revenue charts, all in a clean responsive interface.",
    tags: ["React", "SQL", "Tailwind CSS", "JavaScript"],
    category: "Web App",
    color: "from-rose-500/20 to-pink-500/20",
    accent: "rose",
  },
  {
    title: "BrandForge — Identity Suite",
    description:
      "Complete brand identity packages for 10+ clients — logos, style guides, marketing collateral, and social media kits crafted with precision and originality.",
    tags: ["Graphic Design", "UI/UX", "Adobe Suite"],
    category: "Design",
    color: "from-sky-500/20 to-indigo-500/20",
    accent: "sky",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary font-mono text-sm mb-6 border border-border/50">
              <FolderOpen className="h-4 w-4" /> Work
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Selected projects
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-sm md:text-right">
            A selection of products, platforms, and designs I've crafted from concept to completion.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group relative flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/40 transition-colors"
              data-testid={`card-project-${index}`}
            >
              {/* Gradient header */}
              <div className={`h-36 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <FolderOpen className="w-20 h-20" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono px-2 py-1 rounded-md bg-background/30 backdrop-blur-sm border border-white/10 text-foreground/80">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="w-8 h-8 rounded-full bg-background/40 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-background/60 transition-colors"
                    data-testid={`button-github-${index}`}
                  >
                    <Github className="h-3.5 w-3.5" />
                  </button>
                  <button
                    className="w-8 h-8 rounded-full bg-background/40 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-background/60 transition-colors"
                    data-testid={`button-live-${index}`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs font-mono"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
