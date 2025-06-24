import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
     <section className="relative z-40 py-20 bg-gradient-to-r from-pink-900/30 to-purple-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            <span className="inline-block animate-bounce">📞</span>
            Let's Connect!
            <span className="inline-block wiggle">🌈</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Phone, text: '+1 (555) PET-LOVE', color: 'text-green-400' },
              { icon: Mail, text: 'hello@pettopia.com', color: 'text-blue-400' },
              { icon: MapPin, text: '123 Rainbow Street', color: 'text-pink-400' }
            ].map((contact, index) => (
              <div 
                key={index}
                className="bounce-in flex flex-col items-center space-y-3"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white/10 p-4 rounded-full hover:scale-110 transition-transform duration-300">
                  <contact.icon className={`w-6 h-6 ${contact.color}`} />
                </div>
                <p className="text-white font-semibold">{contact.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="inline-block animate-pulse">💌</span>
              Send us a message!
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input 
                type="text" 
                placeholder="Your Name"
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors"
              />
            </div>
            <textarea 
              placeholder="Tell us about your dream pet! 🐾"
              rows="4"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors mb-4"
            ></textarea>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transform transition-all duration-300 wiggle">
              Send Love Letter! 💕
            </button>
          </div>
        </div>
      </section>
  )
}
