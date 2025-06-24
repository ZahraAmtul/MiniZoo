"use client"
import React, { useState, useEffect } from 'react';

const AnimatedBackground = () => {
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
      <div className="fixed inset-0 -z-10 min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Floating Hearts */}
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="fixed text-pink-400 text-2xl pointer-events-none animate-bounce"
          style={{
            left: heart.x,
            bottom: '100vh',
            animation: 'float-up 6s linear infinite'
          }}
        >
          💖
        </div>
        
      ))}
          <div className="absolute inset-0 overflow-hidden z-0">
      {/* Bubbles and gradients */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-70 animate-ping"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-50 animate-bounce"></div>
      <div
        className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-40 animate-spin"
        style={{ animationDuration: '20s' }}
      ></div>
    </div>
      </div>
  );
};

export default AnimatedBackground;