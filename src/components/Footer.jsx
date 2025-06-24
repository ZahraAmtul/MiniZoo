import React from 'react'
import { Sparkles, PawPrint } from 'lucide-react';
export default function Footer() {
  return (
     <footer className="relative z-40 bg-black/30 backdrop-blur-sm py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <PawPrint className="w-8 h-8 text-pink-400 wiggle" />
            <h1 className="text-3xl font-bold text-white rainbow">PetTopia</h1>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          
          <p className="text-gray-300 mb-6">
            Where every day is a paw-ty and every pet finds their forever home! 🎉
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {['🐕', '🐱', '🐰', '🐦', '🐠'].map((emoji, index) => (
              <div 
                key={index}
                className="text-3xl hover:scale-125 transform transition-transform duration-300 cursor-pointer wiggle"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {emoji}
              </div>
            ))}
          </div>
          
          <p className="text-gray-400">
            © 2025 PetTopia. Made with 💖 and lots of treats!
          </p>
        </div>
      </footer>
  )
}
