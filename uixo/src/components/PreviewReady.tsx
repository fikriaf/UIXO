
import React, { useState, useEffect } from 'react';

const PreviewReady = () => {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.02);
    }, 16);
    
    return () => clearInterval(interval);
  }, []);

  // Shape 1: Rotating squares
  const SquareShape = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 border-2 border-blue-400 opacity-70"
          style={{
            top: `${20 + Math.sin(time + i * 0.5) * 10}%`,
            left: `${15 + Math.cos(time * 0.7 + i * 0.3) * 15}%`,
            transform: `rotate(${time * 30 + i *30}deg) scale(${0.8 + Math.sin(time * 2 + i) * 0.2})`, transition: 'transform 0.1s linear',
          }}
        />
      ))}
    </div>
  );

  // Shape 2: Pulsing circles
  const CircleShape = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border-2 border-purple-400 opacity-60" style={{
            top: `${30 + Math.sin(time * 0.8 + i * 0.7) *20}%`,
            left: `${70 + Math.cos(time * 0.6 + i * 0.4) * 20}%`,
            width: `${20 + Math.sin(time + i) * 10}px`,
            height: `${20 + Math.sin(time + i) * 10}px`,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  );

  // Shape 3: Floating triangles
  const TriangleShape = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-50" style={{
            top: `${60 + Math.sin(time * 0.5 + i * 0.6) *15}%`,
            left: `${40 + Math.cos(time * 0.4 + i * 0.8) *25}%`,
            transform: `translate(-50%, -50%) rotate(${time * 20 + i * 60}deg) scale(${0.7 + Math.sin(time * 1.5 + i) * 0.3})`, }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30">
            <polygon 
              points="15,2 28,28 2,28" 
              fill="none" 
              stroke="cyan" 
              strokeWidth="2"
            />
          </svg>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background shapes */}
      <SquareShape />
      <CircleShape />
      <TriangleShape />
      {/* Main content */}
      <div className="relative z-10 text-center px-8 py-12 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/10">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mb-6 animate-pulse">
          Preview is Ready
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Let's Generate Components
        </p>
        
        {/* Animated underline */}
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse"></div>
        
        {/* Decorative elements */}
        <div className="flex justify-center space-x-4 mt-12">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div> </div>
      </div>
      
      {/* Additional floating elements */}
      <div 
        className="absolute w-4 h-4 bg-white rounded-full opacity-20"
        style={{
          top: '10%',
          left: '5%',
          transform: `translateY(${Math.sin(time * 0.5) * 20}px)`,
        }}
      ></div>
      
      <div 
        className="absolute w-6 h-6 border-2 border-blue-400 rotate-45 opacity-20" style={{
          bottom: '15%',
          right: '8%',
          transform: `rotate(${time * 45}deg)`,
        }}
      ></div>
    </div>
  );
};

export default PreviewReady;