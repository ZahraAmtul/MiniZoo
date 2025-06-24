import React from 'react'

export default function FunStatistics() {
  return (
    <section className="relative z-40 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            <span className="inline-block animate-spin">📊</span>
            Amazing Numbers!
            <span className="inline-block wiggle">🎉</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '1,234', label: 'Pets Adopted', emoji: '🏠' },
              { number: '5,678', label: 'Belly Rubs Given', emoji: '🤗' },
              { number: '9,999', label: 'Treats Shared', emoji: '🦴' },
              { number: '∞', label: 'Love Created', emoji: '💖' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-3 hover:animate-bounce inline-block">{stat.emoji}</div>
                  <div className="text-4xl font-bold text-pink-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
