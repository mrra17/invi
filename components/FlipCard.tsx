
import React, { useState } from 'react';

interface FlipCardProps {
  frontIcon?: React.ReactNode;
  frontTitle: string;
  backContent: React.ReactNode;
  variant?: 'grass' | 'navy';
}

const FlipCard: React.FC<FlipCardProps> = ({ frontIcon, frontTitle, backContent, variant = 'grass' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full max-w-[380px] h-[230px] perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Side */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center rounded-[22px] shadow-xl border-4 border-white text-white p-6 backface-hidden ${variant === 'grass' ? 'grass-pattern' : 'bg-gradient-to-br from-[#0a2a66] to-[#154ea3]'}`}>
          <div className="text-6xl mb-4 transition-transform group-hover:scale-110 duration-300">
            {frontIcon || "⚽"}
          </div>
          <h3 className="text-xl font-extrabold uppercase tracking-wider text-center">
            {frontTitle}
          </h3>
          <div className="mt-2 text-sm opacity-80 font-medium">Pulsa para ver detalles</div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[22px] shadow-xl border-4 border-[#ffd966] bg-gradient-to-br from-[#0a2a66] to-[#1c4e9c] text-white p-6 backface-hidden rotate-y-180">
          <div className="text-4xl mb-3 text-[#ffd966]">⚽</div>
          <div className="text-center w-full">
            {backContent}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;
