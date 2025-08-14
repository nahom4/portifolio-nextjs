"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-medium cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Portfolio
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {["About", "Skills", "Projects", "Interests", "Contact"].map(
              (item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="hover:bg-accent/50 transition-colors"
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
