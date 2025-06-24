import React from 'react'
import { Heart, Zap, Star, Sparkles} from 'lucide-react';

export default function ServicesSection() {
    const services = [
    {
      icon: Heart,
      title: "Pet Adoption",
      description: "Find your perfect furry friend",
      color: "from-pink-400 to-red-500"
    },
    {
      icon: Sparkles,
      title: "Pet Grooming",
      description: "Spa day for your pets",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Zap,
      title: "Pet Training",
      description: "Fun training sessions",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Star,
      title: "Pet Care",
      description: "24/7 loving care",
      color: "from-green-400 to-blue-500"
    }
  ];
  return (
    <section className="relative z-40 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              <span className="inline-block animate-bounce">🎪</span>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">Amazing</span> Services
              <span className="inline-block animate-spin">🎨</span>
            </h2>
            <p className="text-xl text-gray-300">Everything your pet needs for a pawsome life!</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-110 transform group-hover:rotate-3">
                  <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse transform group-hover:scale-125 transition-all duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                </div>
                
                {/* Floating icon on hover */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-2xl animate-bounce">
                    {index === 0 ? '🐕' : index === 1 ? '✨' : index === 2 ? '🎾' : '💝'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
