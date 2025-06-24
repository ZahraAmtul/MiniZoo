"use client"
import React, { useState } from 'react'

export default function HeroSection() {
    const [currentPet, setCurrentPet] = useState(0);
     const featuredPets = [
    {
      id: 1,
      name: "Buddy",
      type: "Golden Retriever",
      age: "2 years",
      personality: "Playful & Loving",
      image: "/api/placeholder/400/400",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      name: "Whiskers",
      type: "Persian Cat",
      age: "1 year",
      personality: "Calm & Cuddly",
      image: "/api/placeholder/400/400",
      color: "bg-gradient-to-br from-purple-400 to-pink-500"
    },
    {
      id: 3,
      name: "Nibbles",
      type: "Holland Lop",
      age: "6 months",
      personality: "Curious & Sweet",
      image: "/api/placeholder/400/400",
      color: "bg-gradient-to-br from-green-400 to-blue-500"
    },
    {
      id: 4,
      name: "Splash",
      type: "Goldfish",
      age: "1 year",
      personality: "Peaceful & Zen",
      image: "/api/placeholder/400/400",
      color: "bg-gradient-to-br from-cyan-400 to-blue-500"
    }
  ];
  return (
    <div>
        <section className="relative z-40 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                  <span className="inline-block hover:animate-bounce">🐾</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 animate-pulse">
                    Furry
                  </span>
                  <br />
                  <span className="text-yellow-400 wiggle inline-block">Friends</span>
                  <br />
                  <span className="text-green-400 text-4xl lg:text-5xl">Await!</span>
                  <span className="inline-block hover:animate-spin">✨</span>
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Welcome to the most magical pet adoption center in the universe! 
                  Where every tail wags with joy and every purr brings happiness! 🌈
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-2xl wiggle">
                  🐶 Adopt a Friend
                </button>
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:scale-110 transform transition-all duration-300 shadow-lg">
                  🎾 Play Now!
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center bounce-in">
                  <div className="text-3xl font-bold text-pink-400">1000+</div>
                  <div className="text-gray-300">Happy Adoptions 💕</div>
                </div>
                <div className="text-center bounce-in" style={{ animationDelay: '0.2s' }}>
                  <div className="text-3xl font-bold text-yellow-400">5★</div>
                  <div className="text-gray-300">Love Rating ⭐</div>
                </div>
                <div className="text-center bounce-in" style={{ animationDelay: '0.4s' }}>
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-gray-300">Cuddles Available 🤗</div>
                </div>
              </div>
            </div>

            {/* Featured Pet Carousel */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className={`absolute inset-0 ${featuredPets[currentPet].color} opacity-90`}></div>
                <img 
                  src={featuredPets[currentPet].image} 
                  alt={featuredPets[currentPet].name}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-3xl font-bold mb-2 wiggle">{featuredPets[currentPet].name}</h3>
                  <p className="text-lg mb-1">{featuredPets[currentPet].type} • {featuredPets[currentPet].age}</p>
                  <p className="text-sm opacity-90">{featuredPets[currentPet].personality}</p>
                </div>
              </div>
              
              {/* Floating emojis */}
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce">🎈</div>
              <div className="absolute -bottom-4 -left-4 text-3xl animate-pulse">💖</div>
              <div className="absolute top-1/2 -right-8 text-2xl wiggle">🌟</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
