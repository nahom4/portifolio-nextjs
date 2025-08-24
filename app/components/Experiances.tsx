"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Briefcase, ExternalLink, Linkedin } from "lucide-react";

export function Experiences() {
  const experiences = [
    {
        role: "Head of Academy (Promoted)",
        company: "Africa to Silicon Valley (A2SV)",
        companyUrl: "https://a2sv.org/",
        duration: "July 2025 – Present",
        location: "Addis Ababa, Ethiopia",
        description: [
          "Leading two cohorts (G5 & G6), overseeing curriculum delivery, mentorship, and scaling education impact across multiple groups."
        ],
    },
    {
      role: "Lead Head of Education (Promoted)",
      company: "Africa to Silicon Valley (A2SV)",
      companyUrl: "https://a2sv.org/",
      duration: "Dec 2024 – Aug 2025",
      location: "Addis Ababa, Ethiopia",
      description: [
        "Led 23-member education team, doubling program enrollment from 100 → 200+ students.",
        "Optimized curriculum workflows, achieving 87% positive student feedback.",
        "Trained 4 heads of education in lectures, contest walkthroughs, and mentoring."
      ],
    },
    {
      role: "Head of Education (formerly Intern)",
      company: "Africa to Silicon Valley (A2SV)",
      companyUrl: "https://a2sv.org/",
      duration: "Feb 2024 – Dec 2024",
      location: "Addis Ababa, Ethiopia",
      description: [
        "Mentored 16 students in DSA & Python with 4000+ problems solved.",
        "Delivered 10+ lectures on core CS topics like Linked Lists, BFS, and Stacks.",
        "Provided weekly 1:1 coaching for 8 students to achieve personal goals."
      ],
    },
    {
      role: "Full Stack Software Engineering Intern",
      company: "Addis Ababa Institute of Technology",
      companyUrl: "https://www.aau.edu.et/aau-at-a-glance/",
      duration: "Mar 2024 – Jun 2024",
      location: "Addis Ababa, Ethiopia",
      description: [
        "Built real-time notification modules in Angular & ASP.NET platform.",
        "Automated QA with 30+ Playwright tests and JMeter validation of 60+ APIs."
      ],
    },
    {
      role: "Front end Engineering Intern",
      company: "Arez Armada",
      companyUrl: "https://www.linkedin.com/company/hirearmada", // Replace with company site if available
      duration: "Jan 2024 – Mar 2024",
      location: "Addis Ababa, Ethiopia",
      description: [
        "Developed responsive landing pages using Next.js and Tailwind CSS."
      ],
    },
    {
      role: "Backend Engineering Intern",
      company: "Africa to Silicon Valley (A2SV)",
      companyUrl: "https://a2sv.org/",
      duration: "Aug 2023 – Oct 2023",
      location: "Addis Ababa, Ethiopia",
      description: [
        "Led a team of 5 to build a social media API with ASP.NET & PostgreSQL.",
        "Delivered 35 API endpoints with Clean Architecture, EF Core & CQRS.",
        "Boosted unit test coverage from 40% → 70%."
      ],
    },
  ];

  return (
    <main className="bg-background text-foreground">
      <section
        id="experience"
        className="py-20 bg-gradient-to-b from-accent/10 to-background"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {`A journey of 6 internships and professional roles, building, mentoring, and scaling impactful solutions.`}
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="https://linkedin.com/in/nahom-amare-a89512229"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition"
              >
                <Linkedin className="w-4 h-4 mr-2" /> Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-card/70 backdrop-blur-md border border-primary/10 shadow-lg hover:shadow-xl transition-all rounded-2xl h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary hover:underline flex items-center gap-1"
                    >
                      <Briefcase className="w-4 h-4" /> {exp.company}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {exp.duration}
                    </span>
                    <span>{exp.location}</span>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-muted-foreground/90">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
