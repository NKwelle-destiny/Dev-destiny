import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary font-mono text-sm mb-6 border border-border/50">
              <MessageSquare className="h-4 w-4" /> Contact
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Let's build something <span className="text-primary italic">great</span> together.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is always open. I'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <motion.a
                href="mailto:nkwelledestiny923306@gmail.com"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group flex items-center gap-5 p-5 bg-card border border-border/50 rounded-2xl hover:border-primary/40 transition-colors"
                data-testid="link-email"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors border border-border/50">
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-0.5">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">nkwelledestiny923306@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:651453986"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group flex items-center gap-5 p-5 bg-card border border-border/50 rounded-2xl hover:border-primary/40 transition-colors"
                data-testid="link-phone"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors border border-border/50">
                  <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-0.5">Phone</p>
                  <p className="font-medium group-hover:text-primary transition-colors">651 453 986</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20 bg-card border border-border/50 rounded-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Message sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I'll be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 p-8 bg-card border border-border/50 rounded-2xl"
                data-testid="form-contact"
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-mono text-muted-foreground">
                    Your name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-secondary/50 border-border/60 focus:border-primary h-12"
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-mono text-muted-foreground">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-secondary/50 border-border/60 focus:border-primary h-12"
                    data-testid="input-email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-mono text-muted-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-secondary/50 border-border/60 focus:border-primary resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-base rounded-xl"
                  data-testid="button-submit"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
