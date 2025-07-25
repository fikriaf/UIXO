import React, { useEffect } from 'react';

const RotatingCoreWithOrbit: React.FC = () => {
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes orbit {
        from {
          transform: rotate(0deg) translateX(7rem) rotate(0deg);
        }
        to {
          transform: rotate(360deg) translateX(7rem) rotate(-360deg);
        }
      }

      @media (min-width: 640px) {
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(10rem) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(10rem) rotate(-360deg);
          }
        }
      }
    `;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div
      className="w-full h-screen flex items-center justify-start bg-transparent overflow-hidden pointer-events-none"
      style={{
        position: "absolute",
        zIndex: 0,
      }}
    >

      {/* Orbit container */}
      <div className="relative flex items-center justify-center">
        {/* Core */}
        <div
          className="w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-sky-400 to-cyan-600 rounded-full shadow-xl shadow-sky-500/50"
          style={{
            animation: 'spin 8s linear infinite',
          }}
        ></div>

        {/* Orbiting object */}
        <div
          className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-lg shadow-yellow-300/70"
          style={{
            animation: 'orbit 12s linear infinite',
          }}
        ></div>
      </div>
    </div>
  );
};

export default RotatingCoreWithOrbit;