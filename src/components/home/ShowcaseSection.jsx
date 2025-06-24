import React from 'react'

export default function ShowcaseSection() {
  return (
    <section className="relative z-40 py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Meet Our <span className="text-yellow-400 wiggle inline-block">Superstars!</span>
              <span className="inline-block animate-pulse">⭐</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: '🐶', name: 'Dogs', count: '25+', color: 'from-orange-400 to-red-500' },
              { emoji: '🐱', name: 'Cats', count: '30+', color: 'from-purple-400 to-pink-500' },
              { emoji: '🐰', name: 'Rabbits', count: '15+', color: 'from-green-400 to-blue-500' },
              { emoji: '🐦', name: 'Birds', count: '10+', color: 'from-cyan-400 to-blue-500' }
            ].map((category, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:rotate-6 border border-white/20 hover:border-white/40">
                  <div className="text-6xl mb-4 group-hover:animate-bounce inline-block">
                    {category.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 text-lg font-semibold">
                    {category.count} available
                  </p>
                  <div className={`mt-4 h-1 bg-gradient-to-r ${category.color} rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
