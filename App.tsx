
import React from 'react';
import { MapPin, Calendar, Music, Heart, Star, Trophy } from 'lucide-react';
import FlipCard from './components/FlipCard';
import Countdown from './components/Countdown';
import { EVENT_DETAILS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f2ff] to-[#cfe0ff] flex flex-col items-center px-4 py-8 md:py-12">
      
      {/* Header Section */}
      <header className="text-center mb-10 space-y-2 max-w-2xl">
        <div className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-lg mb-4 animate-bounce">
          <span className="text-4xl">⚽</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-[#0a2a66] leading-tight">
          Primera Comunión de <br/>
          <span className="text-green-600 drop-shadow-sm uppercase">{EVENT_DETAILS.name}</span>
        </h1>
        <p className="text-lg md:text-xl font-semibold text-[#1f3f7a] opacity-90">
          Sábado · 9 de mayo de 2026
        </p>
      </header>

      {/* Countdown Section */}
      <div className="mb-12 w-full">
        <div className="text-center text-sm font-bold text-blue-800 uppercase tracking-widest mb-4">Faltan</div>
        <Countdown targetDate={EVENT_DETAILS.date} />
      </div>

      {/* Interactive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-2">
        
        {/* Main Card */}
        <FlipCard 
          frontTitle={EVENT_DETAILS.fullName}
          frontIcon={<Trophy className="w-16 h-16 text-yellow-300" />}
          backContent={
            <div className="space-y-2">
              <h4 className="text-2xl font-black text-[#ffd966]">¡Mi Comunión!</h4>
              <p className="text-lg font-medium">9 de mayo de 2026</p>
              <p className="text-sm opacity-90 italic">Un día para celebrar en equipo</p>
            </div>
          }
        />

        {/* Ceremony Card */}
        <FlipCard 
          frontTitle="⛪ Ceremonia"
          frontIcon="⛪"
          backContent={
            <div className="space-y-3">
              <p className="font-extrabold text-xl">{EVENT_DETAILS.ceremony.place}</p>
              <p className="text-sm">{EVENT_DETAILS.ceremony.location}</p>
              <div className="flex items-center justify-center space-x-2 text-[#ffd966] text-lg font-bold">
                <Calendar size={20} />
                <span>{EVENT_DETAILS.ceremony.time}</span>
              </div>
              <a 
                href={EVENT_DETAILS.ceremony.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-4 inline-flex items-center space-x-2 bg-white text-blue-900 px-4 py-2 rounded-full font-bold text-xs hover:bg-blue-50 transition-colors"
              >
                <MapPin size={14} />
                <span>CÓMO LLEGAR</span>
              </a>
            </div>
          }
        />

        {/* Celebration Card */}
        <FlipCard 
          frontTitle="🎉 Celebración"
          frontIcon="🎉"
          backContent={
            <div className="space-y-3">
              <p className="font-extrabold text-xl">{EVENT_DETAILS.celebration.place}</p>
              <p className="text-sm">{EVENT_DETAILS.celebration.location}</p>
              <div className="flex items-center justify-center space-x-2 text-[#ffd966] text-lg font-bold">
                <Star size={20} />
                <span>{EVENT_DETAILS.celebration.time}</span>
              </div>
              <a 
                href={EVENT_DETAILS.celebration.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-4 inline-flex items-center space-x-2 bg-white text-blue-900 px-4 py-2 rounded-full font-bold text-xs hover:bg-blue-50 transition-colors"
              >
                <MapPin size={14} />
                <span>CÓMO LLEGAR</span>
              </a>
            </div>
          }
        />

        {/* Message Card */}
        <FlipCard 
          frontTitle="💌 Mensaje"
          frontIcon="💌"
          backContent={
            <div className="space-y-4 px-2">
              <p className="text-base leading-relaxed">
                "Tu presencia es el mejor regalo. Gracias por acompañarme en este día tan especial."
              </p>
              <div className="flex justify-center text-[#ffd966]">
                <Heart fill="currentColor" size={24} />
              </div>
            </div>
          }
        />

      </div>

      {/* Footer Section */}
      <footer className="mt-20 pb-12 text-center animate-pulse">
        <div className="flex justify-center items-center space-x-2 text-[#1d3f7a] mb-2">
          <span className="text-2xl">⚽</span>
          <p className="text-lg">Con muchísimo cariño,</p>
          <span className="text-2xl">⚽</span>
        </div>
        <strong className="text-2xl font-black text-blue-900 uppercase tracking-widest">{EVENT_DETAILS.name}</strong>
      </footer>

      {/* Decorative floating elements */}
      <div className="fixed top-20 left-10 opacity-20 hidden lg:block animate-spin-slow">
        <Star className="w-12 h-12 text-blue-400" />
      </div>
      <div className="fixed bottom-20 right-10 opacity-20 hidden lg:block animate-bounce">
        <Trophy className="w-16 h-16 text-yellow-600" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </div>
  );
};

export default App;
