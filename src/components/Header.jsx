"use client"
import React, { useState, useEffect } from 'react'
import { Sparkles, PawPrint } from 'lucide-react';
export default function Header() {
      const [hearts, setHearts] = useState([]);
      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
       // Floating hearts animation
      useEffect(() => {
        const interval = setInterval(() => {
          const newHeart = {
            id: Math.random(),
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 20
          };
          setHearts(prev => [...prev.slice(-10), newHeart]);
        }, 2000);
    
        return () => clearInterval(interval);
      }, []);
    
      // Mouse tracking for interactive elements
      useEffect(() => {
        const handleMouseMove = (e) => {
          setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }, []);
  return (
    <>
    <header className="relative z-50 p-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <PawPrint className="w-8 h-8 text-pink-400 wiggle" />
              <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h1 className="text-3xl font-bold text-white rainbow">MiniZoo</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Adopt', 'Services', 'About', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href="#" 
                className="text-white hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform font-semibold"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </> 
      
  )
}
