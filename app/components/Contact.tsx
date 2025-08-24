"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MessageSquare, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
; // ✅ using your toaster

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/nahom4",
      color: "hover:text-gray-700 dark:hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/nahom-amare-a89512229/",
      color: "hover:text-blue-600",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mkgvwvjr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        debugger
        toast.success("Message sent successfully!", {
          description: "Thanks for reaching out, I’ll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        debugger
        toast.error("Something went wrong", {
          description: "Please try again in a moment.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error", {
        description: "Check your connection and try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-accent/10"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-0 bg-gradient-to-br from-card to-accent/5">
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="mr-3"
                >
                  <MessageSquare className="w-6 h-6 text-primary" />
                </motion.div>
                <div></div>
                <h3 className="text-xl">Send a Message</h3>
              </div>
              <div className="p-4 mb-6 rounded-xl bg-primary/5 border border-primary/20 text-sm text-muted-foreground flex items-center gap-3">
              <Send className="w-5 h-5 text-primary shrink-0" />
              <p className="leading-relaxed">
                It will directly land in my inbox and I will get back to you as soon as possible.
              </p>
            </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-background/50 border-primary/20 focus:border-primary/40"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-background/50 border-primary/20 focus:border-primary/40"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-background/50 border-primary/20 focus:border-primary/40 min-h-[120px] resize-none"
                    placeholder="Tell me about your project or just say hello..."
                    required
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                  >
                    {loading ? "Sending..." : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-8 border-0 bg-gradient-to-br from-card to-accent/5">
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="mr-3"
                >
                  <Mail className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl">Get In Touch</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always open to discussing new opportunities, interesting
                projects, or potential collaborations. Whether you have a
                specific project in mind or just want to connect, feel free to
                reach out.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 transition-all duration-200 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
