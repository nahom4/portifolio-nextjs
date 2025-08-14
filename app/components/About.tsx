"use client";

import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Brain, BookOpen, Code2, Lightbulb } from 'lucide-react';

export function About() {
  const traits = [
    {
      icon: Code2,
      title: "Full Stack Developer",
      description:
        "I enjoy building complete, end-to-end solutions from architecting the backend to crafting polished, user-friendly interfaces.",
      color: "text-indigo-500"
    },
    {
      icon: Brain,
      title: "Problem Solver",
      description:
        "I thrive on breaking down complex challenges into manageable solutions. Every bug is a puzzle waiting to be solved.",
      color: "text-blue-500"
    },
    {
      icon: Lightbulb,
      title: "Educator",
      description:
        "I get a real kick out of explaining complex concepts to others because I believe teaching is the fastest way to learn deeply.",
      color: "text-orange-500"
    },
    {
      icon: BookOpen,
      title: "Avid Reader",
      description:
        "I enjoy reading technical software development books, as they allow me to master topics in depth and strengthen my craft.",
      color: "text-green-500"
    }
  ];

  const skills = [
    "Creative Thinking", "System Design", "User Experience", "Technical Leadership",
    "Continuous Learning", "Collaborative Spirit", "Attention to Detail", "Innovation"
  ];

  return (
    <section id="about" className="py-2 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences that solve real problems and bring joy to users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {traits.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-accent/5">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                  className="mb-4"
                >
                  <trait.icon className={`w-8 h-8 ${trait.color}`} />
                </motion.div>
                <h3 className="text-lg mb-2">{trait.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {trait.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* <h3 className="text-2xl mb-6">What Drives Me</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 bg-gradient-to-r from-accent to-accent/50 hover:from-primary/10 hover:to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-200"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
