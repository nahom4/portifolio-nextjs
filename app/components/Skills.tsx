"use client";

import { motion, useInView } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code2, Palette, Database, Star, TrendingUp } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Map proficiency levels to a percentage fill for the bar animation
const proficiencyMap: Record<string, number> = {
  Beginner: 40,
  Intermediate: 65,
  Advanced: 85,
  Expert: 100,
};

// Map proficiency to badge colors
const proficiencyColors: Record<string, string> = {
  Beginner: "bg-red-500/20 text-red-400",
  Intermediate: "bg-yellow-500/20 text-yellow-400",
  Advanced: "bg-blue-500/20 text-blue-400",
  Expert: "bg-green-500/20 text-green-400",
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: [
        { name: "Python", level: "Expert", color: "from-yellow-400 to-orange-500" },
        { name: "JavaScript/TypeScript", level: "Expert", color: "from-blue-400 to-cyan-500" },
        { name: "Go (Golang)", level: "Intermediate", color: "from-green-400 to-emerald-500" },
        { name: "Java", level: "Intermediate", color: "from-purple-400 to-pink-500" },
        { name: "C#", level: "Intermediate", color: "from-teal-400 to-blue-500" },
      ],
      color: "text-purple-500",
      bgColor: "from-purple-500/10 to-pink-500/5",
    },
    {
      icon: Palette,
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: "Expert", color: "from-blue-400 to-cyan-500" },
        { name: "Angular", level: "Advanced", color: "from-red-400 to-orange-500" },
        { name: "Responsive Design & Accessibility", level: "Advanced", color: "from-teal-400 to-blue-500" },
        { name: "UI/UX Design (Figma)", level: "Advanced", color: "from-pink-400 to-rose-500" },
      ],
      color: "text-blue-500",
      bgColor: "from-blue-500/10 to-cyan-500/5",
    },
    {
      icon: Database,
      title: "Backend",
      skills: [
        { name: "NestJS", level: "Expert", color: "from-emerald-400 to-teal-500" },
        { name: "ASP.NET Core", level: "Advanced", color: "from-purple-400 to-indigo-500" },
        { name: "Database Design (PostgreSQL/MySQL/MongoDB)", level: "Advanced", color: "from-green-400 to-emerald-500" },
        { name: "API Development (REST/RPC/WebSockets)", level: "Advanced", color: "from-blue-400 to-indigo-500" },
      ],
      color: "text-green-500",
      bgColor: "from-green-500/10 to-emerald-500/5",
    },
    {
      icon: TrendingUp,
      title: "DevOps",
      skills: [
        { name: "Docker & Containerization", level: "Expert", color: "from-cyan-400 to-blue-500" },
        { name: "Cloud Deployment (AWS/Render/VPS)", level: "Advanced", color: "from-orange-400 to-red-500" },
        { name: "CI/CD Automation", level: "Intermediate", color: "from-indigo-400 to-purple-500" },
        { name: "Networking & Load Balancing", level: "Intermediate", color: "from-pink-400 to-rose-500" },
      ],
      color: "text-yellow-500",
      bgColor: "from-yellow-500/10 to-orange-500/5",
    },
  ];
  

  const tools = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "Figma"
  ];

  // Progress bar with proficiency tag
  const AnimatedProgressBar = ({ skill, index, categoryIndex }: { skill: any; index: number; categoryIndex: number }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          setProgress(proficiencyMap[skill.level]);
        }, categoryIndex * 200 + index * 150);
        return () => clearTimeout(timer);
      }
    }, [isInView, skill.level, index, categoryIndex]);

    return (
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{skill.name}</span>
          <div className="flex items-center space-x-2">
            <motion.span
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                delay: categoryIndex * 0.2 + index * 0.15 + 0.5,
                duration: 0.3,
              }}
            >
              <Badge className={`${proficiencyColors[skill.level]} text-xs px-2 py-0.5`}>
                {skill.level}
              </Badge>
            </motion.span>
            {skill.level === "Expert" && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{
                  delay: categoryIndex * 0.2 + index * 0.15 + 0.7,
                  duration: 0.4,
                }}
              >
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
              </motion.div>
            )}
          </div>
        </div>

        <div className="relative">
          {/* Background track */}
          <div className="h-2 bg-muted rounded-full overflow-hidden" />
          {/* Progress fill */}
          <motion.div
            className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${skill.color} rounded-full overflow-hidden shadow-lg`}
            initial={{ width: 0 }}
            animate={{ width: isInView ? `${progress}%` : 0 }}
            transition={{
              duration: 1.5,
              delay: categoryIndex * 0.2 + index * 0.15,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <section ref={ref} id="skills" className="py-20 bg-gradient-to-b from-accent/10 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit honed through years of solving complex problems
            and building exceptional experiences.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`p-6 h-full border-0 bg-gradient-to-br ${category.bgColor} backdrop-blur-sm`}>
                <div className="flex items-center mb-6">
                  <category.icon className={`w-8 h-8 ${category.color} mr-3`} />
                  <h3 className="text-xl">{category.title}</h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <AnimatedProgressBar
                      key={skill.name}
                      skill={skill}
                      index={skillIndex}
                      categoryIndex={categoryIndex}
                    />
                  ))}
                </div>

                {/* Avg Proficiency */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: categoryIndex * 0.2 + 1 }}
                  className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <TrendingUp className={`w-4 h-4 ${category.color}`} />
                    <span className="text-sm text-muted-foreground">
                      Avg. Level
                    </span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {
                      (() => {
                        const avg = category.skills.reduce((acc, s) => acc + proficiencyMap[s.level], 0) / category.skills.length;
                        if (avg >= 90) return "Expert";
                        if (avg >= 75) return "Advanced";
                        if (avg >= 60) return "Intermediate";
                        return "Beginner";
                      })()
                    }
                  </span>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 bg-gradient-to-r from-secondary to-secondary/80 shadow-md border border-border/50"
                >
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
