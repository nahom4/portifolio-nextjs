"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ExternalLink,
  Github,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);


  const projects = [
    {
      title: "PaaS: Simplified Deployment",
      description:
        `Built a Docker-based auto-deploy platform for GitHub repos supporting multiple Node.js apps. 
        Enabled fast custom domain setup with SSL in under 30 seconds, integrated Ethiopia’s Chapa payment gateway for fee-free ETB transactions, 
        and added a chatbot to guide users.`,
      image:
        "paas-frontend.png",
      technologies: [
        "React",
        "shadcn",
        "Tailwind CSS",
        "Atomic Design",
        "NestJs",
        "PostgreSQL",
        "Docker",
        "Traefik",
        "Chapa",
        "Clean Architecture"
        
      ],
      liveUrl: "https://paas-frontend-sage.vercel.app/",
      githubUrl: "https://github.com/nahom4/paas--frontend",
      featured: true,
      category: "Full Stack",
      year: "2025",
    },
    {
      title: "Ministry of Education Exam Result Portal",
      description:
        `Designed and prototyped a fault-tolerant exam result portal inspired to support 500k+ concurrent users, 
        featuring geo-based load balancing to route traffic to the nearest healthy server, secure RPC authentication,
         and real-time collaborative complaint editing for a seamless user experience.
        `,
      image:
        "golang-distributed-system-moe.png",
      technologies: [
        "React",
        "Redux",
        "Tailwind CSS",
        "radix-ui",
        "Go",
        "RPC",
        "WebSocket",
        "etcd",
        "MySQL Cluster"
      ],
      liveUrl: "https://golang-distributed-system-mo-e-port.vercel.app/",
      githubUrl: "https://github.com/nahom4/Golang-Distributed-System-MoE-Portal-Backend",
      featured: false,
      category: "Full Stack",
      year: "2024",
    },
    {
      title: "Weather Dashboard",
      description:
        "An interactive weather dashboard with beautiful visualizations, forecasts, and location-based weather data.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "OpenWeatherMap API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Data Viz",
      year: "2023",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website with smooth animations, dark mode support, and optimized performance.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Portfolio",
      year: "2024",
    },
    {
      title: "AI Chat Interface",
      description:
        "An intelligent chat interface with natural language processing, context awareness, and beautiful UI components.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["React", "OpenAI API", "WebSocket", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "AI/ML",
      year: "2024",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media management platform with analytics, scheduling, and multi-platform integration.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "SaaS",
      year: "2023",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, projects.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      scale: 0.8,
    }),
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-background to-accent/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of solutions I've crafted, each telling a unique story of
            problem-solving and innovation.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl blur-3xl -z-10" />

          <div className="relative h-[500px] perspective-[1000px] mb-8">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  rotateY: { duration: 0.6 },
                  scale: { duration: 0.4 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-full max-w-4xl mx-auto">
                  <Card className="relative overflow-hidden bg-gradient-to-br from-card via-card to-accent/5 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu">
                    <div className="md:flex md:h-[400px]">
                      {/* Image Section */}
                      <div className="md:w-1/2 relative overflow-hidden">
                        {projects[currentSlide].featured && (
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                            }}
                            className="absolute top-6 left-6 z-20"
                          >
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg">
                              <Sparkles className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </motion.div>
                        )}

                        <div className="absolute top-6 right-6 z-20">
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {projects[currentSlide].category}
                          </Badge>
                        </div>

                        <ImageWithFallback
                          src={projects[currentSlide].image}
                          alt={projects[currentSlide].title}
                          className="w-full h-full object-cover"
                        />

                        {/* Overlay gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent mix-blend-overlay" />

                        {/* Year badge */}
                        <div className="absolute bottom-4 left-4">
                          <Badge
                            variant="outline"
                            className="bg-white/90 text-foreground border-white/20 backdrop-blur-sm"
                          >
                            {projects[currentSlide].year}
                          </Badge>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="md:w-1/2 p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl md:text-3xl mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                            {projects[currentSlide].title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {projects[currentSlide].description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-8">
                            {projects[currentSlide].technologies.map(
                              (tech, index) => (
                                <motion.div
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: index * 0.1 }}
                                >
                                  <Badge
                                    variant="outline"
                                    className="bg-accent/50 border-primary/20 hover:border-primary/40 transition-colors"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              )
                            )}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl"
                              onClick={() =>
                                window.open(
                                  projects[currentSlide].liveUrl,
                                  "_blank"
                                )
                              }
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              variant="outline"
                              className="border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                              onClick={() =>
                                window.open(
                                  projects[currentSlide].githubUrl,
                                  "_blank"
                                )
                              }
                            >
                              <Github className="w-4 h-4" />
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:bg-primary/10 w-12 h-12 rounded-full shadow-lg"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:bg-primary/10 w-12 h-12 rounded-full shadow-lg"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary scale-125 shadow-lg"
                      : "bg-primary/30 hover:bg-primary/60"
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="border-primary/20 hover:border-primary/40 hover:bg-primary/10 ml-4"
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4 mr-2" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              {isAutoPlaying ? "Pause" : "Play"}
            </Button>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex gap-4 overflow-x-auto pb-4 max-w-4xl">
            {projects.map((project, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentSlide
                    ? "border-primary shadow-lg ring-2 ring-primary/20"
                    : "border-transparent hover:border-primary/40"
                }`}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
