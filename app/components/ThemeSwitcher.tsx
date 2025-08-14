"use client";

import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Sun, Moon, Palette } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true); // default to dark mode
  const currentTheme = 'deep-ocean';

  const applyTheme = () => {
    const root = document.documentElement;
    const body = document.body;

    // Remove all existing pattern classes
    body.className = body.className.replace(/bg-pattern-\w+/g, '');

    // Add deep-ocean pattern
    body.classList.add('bg-pattern-ocean', 'bg-animated', 'bg-floating-shapes');

    if (isDark) {
      root.style.setProperty('--background', '#0c1222');
      root.style.setProperty('--foreground', '#f0f9ff');
      root.style.setProperty('--card', '#1e293b');
      root.style.setProperty('--card-foreground', '#f0f9ff');
      root.style.setProperty('--primary', '#22d3ee');
      root.style.setProperty('--secondary', '#164e63');
      root.style.setProperty('--accent', '#1e293b');
      root.style.setProperty('--muted', '#334155');
      root.style.setProperty('--muted-foreground', '#94a3b8');
      root.style.setProperty('--border', 'rgba(34, 211, 238, 0.2)');
    } else {
      root.style.setProperty('--background', '#fefefe');
      root.style.setProperty('--foreground', '#0c4a6e');
      root.style.setProperty('--card', '#ffffff');
      root.style.setProperty('--card-foreground', '#0c4a6e');
      root.style.setProperty('--primary', '#0891b2');
      root.style.setProperty('--secondary', '#cffafe');
      root.style.setProperty('--accent', '#f0f9ff');
      root.style.setProperty('--muted', '#f8fafc');
      root.style.setProperty('--muted-foreground', '#64748b');
      root.style.setProperty('--border', 'rgba(8, 145, 178, 0.15)');
    }
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  useEffect(() => {
    applyTheme();
  }, [isDark]);

  useEffect(() => {
    document.documentElement.classList.add('dark'); // default dark mode
    applyTheme();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Card className="p-4 bg-card/90 backdrop-blur-md border-border shadow-lg flex items-center">
        <Palette className="w-4 h-4 mr-2 text-primary" />
        <span className="text-sm font-medium">Theme</span>
        <Button
          size="sm"
          variant="ghost"
          onClick={toggleDarkMode}
          className="ml-2 p-1 h-6 w-6 hover:bg-accent"
        >
          {isDark ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
        </Button>
      </Card>
    </motion.div>
  );
}
