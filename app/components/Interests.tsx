"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  BookOpen,
  Film,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  RotateCw,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

export function Interests() {
  const [activeBookSlide, setActiveBookSlide] = useState(0);
  const [activeMovieSlide, setActiveMovieSlide] = useState(0);
  const [isBookAutoPlay, setIsBookAutoPlay] = useState(true);
  const [isMovieAutoPlay, setIsMovieAutoPlay] = useState(true);

  const favoriteBooks = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      genre: "Programming",
      image:
        "https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg", // Amazon cover
      rating: 5,
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      genre: "Programming",
      image:
        "https://m.media-amazon.com/images/I/41as+WafrFL._SX329_BO1,204,203,200_.jpg", // 20th Anniversary Edition
      rating: 5,
      quote:
        "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Docker Deep Dive",
      author: "Nigel Poulton",
      genre: "Programming",
      image:
        "https://m.media-amazon.com/images/I/71Bkk+WVLsL._UF1000,1000_QL80_.jpg", // Actual Docker Deep Dive cover
      rating: 5,
      quote:
        "Learn Docker in depth — the de facto book for understanding containers and how to run them in production.",
      color: "from-orange-500 to-red-500",
    },
    {
      title:
        "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
      author: "Robert C. Martin",
      genre: "Programming",
      image:
        "https://m.media-amazon.com/images/I/41-sN-mzwKL._SX258_BO1,204,203,200_.jpg", // Corrected cover
      rating: 4,
      quote:
        "The goal of software architecture is to minimize the human resources required to build and maintain a system.",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Harry Potter Series",
      author: "J.K. Rowling",
      genre: "Fantasy",
      image:
        "https://m.media-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg", // Bundle cover for HP series
      rating: 5,
      quote:
        "Whether you come back by page or by the big screen, Hogwarts will always be there to welcome you home.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      image:
        "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX329_BO1,204,203,200_.jpg", // Official cover
      rating: 5,
      quote:
        "You do not rise to the level of your goals. You fall to the level of your systems.",
      color: "from-teal-500 to-cyan-500",
    },
  ];
  
  

  const favoriteMovies = [
    {
      title: "Inception",
      director: "Christopher Nolan",
      genre: "Sci-Fi/Thriller",
      year: "2010",
      image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rating: 5,
      insight: "Layers of reality mirror the complexity of software architecture—beautiful and mind-bending.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Star Wars Franchise",
      genre: "Sci-Fi/Adventure",
      year: "1979 - Present",
      image: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg",
      rating: 4,
      insight: "A nostalgic return to the galaxy far, far away, blending classic elements with new heroes and villains.",
      color: "from-gray-700 to-slate-800",
    },
    {
      title: "Marvel Cinematic Universe (MCU)",
      genre: "Action/Superhero",
      year: "2008–present",
      image: "https://variety.com/wp-content/uploads/2014/04/01-avengers-2012.jpg?w=1000&h=667&crop=1",
      rating: 5,
      insight: "A groundbreaking cinematic universe that redefined interconnected storytelling across multiple films.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Harry Potter Series",
      genre: "Fantasy/Adventure",
      year: "2001–2011",
      image: "https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_SY679_.jpg",
      rating: 5,
      insight: "A magical journey through the wizarding world, exploring themes of friendship, bravery, and destiny.",
      color: "from-yellow-500 to-orange-600",
    },
  ];
  

  // Auto-play for books
  useEffect(() => {
    if (isBookAutoPlay) {
      const interval = setInterval(() => {
        setActiveBookSlide((prev) => (prev + 1) % favoriteBooks.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isBookAutoPlay, favoriteBooks.length]);

  // Auto-play for movies
  useEffect(() => {
    if (isMovieAutoPlay) {
      const interval = setInterval(() => {
        setActiveMovieSlide((prev) => (prev + 1) % favoriteMovies.length);
      }, 4500);
      return () => clearInterval(interval);
    }
  }, [isMovieAutoPlay, favoriteMovies.length]);

  // 3D Carousel Component
  const Carousel3D = ({
    items,
    activeSlide,
    setActiveSlide,
    type = "book",
    icon: Icon,
  }: {
    items: any[];
    activeSlide: number;
    setActiveSlide: (index: number) => void;
    type?: string;
    icon: any;
  }) => {
    const radius = 200;
    const center = items.length / 2;

    return (
      <div className="relative h-96 flex items-center justify-center perspective-[1000px] overflow-hidden">
        {/* Background glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${items[activeSlide]?.color} opacity-10 blur-3xl rounded-full scale-150`}
        />

        <div className="relative w-full h-full flex items-center justify-center">
          {items.map((item, index) => {
            const angle = (index - activeSlide) * (360 / items.length);
            const distance = Math.abs(index - activeSlide);
            const scale = distance === 0 ? 1 : 0.7 - distance * 0.1;
            const zIndex = items.length - distance;
            const opacity = distance === 0 ? 1 : 0.6 - distance * 0.2;

            return (
              <motion.div
                key={index}
                className="absolute cursor-pointer"
                style={{
                  zIndex,
                }}
                animate={{
                  rotateY: angle,
                  scale,
                  opacity,
                  x: Math.sin((angle * Math.PI) / 180) * radius * 0.8,
                  z: Math.cos((angle * Math.PI) / 180) * radius * 0.5,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={
                  distance === 0
                    ? {
                        scale: 1.05,
                        rotateX: -10,
                        transition: { duration: 0.2 },
                      }
                    : {}
                }
                onClick={() => setActiveSlide(index)}
              >
                <Card
                  className={`w-48 ${
                    type === "movie" ? "h-72" : "h-64"
                  } bg-gradient-to-br from-card to-accent/5 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                >
                  <div className="relative h-2/3 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-20`}
                    />

                    {/* Rating stars overlay */}
                    <div className="absolute top-2 right-2 flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < item.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-3 h-1/3 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-medium line-clamp-2 mb-1">
                        {item.title}
                      </h4>
                      {/* <p className="text-xs text-muted-foreground">
                        {type === "book"
                          ? `by ${item.author}`
                          : `${item.director} (${item.year})`}
                      </p> */}
                    </div>
                    <Badge
                      variant="outline"
                      className={`self-start text-xs bg-gradient-to-r ${item.color} text-white border-0`}
                    >
                      {item.genre}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 rounded-full shadow-lg z-20"
          onClick={() =>
            setActiveSlide(((prev: number) => (prev - 1 + items.length) % items.length) as any)
          }
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 rounded-full shadow-lg z-20"
          onClick={() => setActiveSlide(((prev : number) => (prev + 1) % items.length) as any)}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    );
  };

  return (
    <section
      id="interests"
      className="py-20 bg-gradient-to-b from-accent/10 to-background overflow-hidden"
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
            Beyond Code
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The books and movies that fuel my creativity and shape my
            perspective on technology and life.
          </p>
        </motion.div>

        {/* Books Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="mr-3"
            >
              <BookOpen className="w-6 h-6 text-green-500" />
            </motion.div>
            <h3 className="text-2xl">Currently Reading & Favorites</h3>
          </div>

          <Carousel3D
            items={favoriteBooks}
            activeSlide={activeBookSlide}
            setActiveSlide={setActiveBookSlide}
            type="book"
            icon={BookOpen}
          />

          {/* Active book details */}
          <motion.div
            key={activeBookSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 max-w-2xl mx-auto text-center"
          >
            <Card className="p-6 bg-gradient-to-br from-card to-green-50/30 dark:to-green-900/10 border-0 shadow-lg">
              <div className="relative mb-4">
                <Quote className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <p className="text-muted-foreground italic leading-relaxed">
                  {favoriteBooks[activeBookSlide].quote}
                </p>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Badge
                  variant="outline"
                  className="border-green-200 text-green-700 dark:border-green-800 dark:text-green-400"
                >
                  {favoriteBooks[activeBookSlide].genre}
                </Badge>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < favoriteBooks[activeBookSlide].rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Movies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div
              animate={{
                rotateY: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="mr-3"
            >
              <Film className="w-6 h-6 text-purple-500" />
            </motion.div>
            <h3 className="text-2xl">Cinematic Inspirations</h3>
          </div>

          <Carousel3D
            items={favoriteMovies}
            activeSlide={activeMovieSlide}
            setActiveSlide={setActiveMovieSlide}
            type="movie"
            icon={Film}
          />

          {/* Active movie details */}
          <motion.div
            key={activeMovieSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 max-w-2xl mx-auto text-center"
          >
            <Card className="p-6 bg-gradient-to-br from-card to-purple-50/30 dark:to-purple-900/10 border-0 shadow-lg">
              <p className="text-muted-foreground leading-relaxed mb-4">
                {favoriteMovies[activeMovieSlide].insight}
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Badge
                  variant="outline"
                  className="border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-400"
                >
                  {favoriteMovies[activeMovieSlide].genre}
                </Badge>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < favoriteMovies[activeMovieSlide].rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
