import { motion } from "framer-motion";
import { Monitor, Smartphone, Palette, PenTool, CheckCircle2, Briefcase } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "From sleek landing pages to complex web applications — I build fast, accessible, and pixel-perfect websites using React, JavaScript, HTML, CSS, and Tailwind CSS.",
    highlights: [
      "React & Vanilla JS",
      "Responsive Design",
      "Performance Optimization",
      "SEO-Friendly Structure",
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native-quality cross-platform mobile apps using React Native. I build smooth, intuitive apps for iOS and Android that users love to open every day.",
    highlights: [
      "React Native",
      "Cross-Platform (iOS & Android)",
      "Offline Support",
      "Push Notifications",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "I design interfaces that feel effortless and look exceptional. From wireframes to high-fidelity prototypes, I map out every interaction with precision and empathy.",
    highlights: [
      "User Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Usability Testing",
    ],
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description:
      "Logos, brand identities, social media kits, posters — I create bold visual communication that tells your story and makes your brand unforgettable.",
    highlights: [
      "Brand Identity",
      "Logo Design",
      "Social Media Assets",
      "Marketing Collateral",
    ],
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

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary font-mono text-sm mb-6 border border-border/50">
            <Briefcase className="h-4 w-4" /> Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            What I bring to the table
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end creative and technical services — whether you need a product built from scratch or a brand identity that turns heads.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group p-8 bg-card border border-border/50 rounded-2xl hover:border-primary/40 transition-colors"
                data-testid={`card-service-${index}`}
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 border border-border/50 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                    <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pl-1">
                  {service.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
