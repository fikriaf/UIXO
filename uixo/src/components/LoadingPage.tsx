
import React, { useState, useEffect } from 'react';

const LoadingIntro = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 10000);

        const progressTimer = setInterval(() => {
        setProgress(prev => { if (prev >=100) {
            clearInterval(progressTimer);
            return 100;
            }
            return prev + 10;
        });
        }, 400);

        return () => {
        clearTimeout(timer);
        clearInterval(progressTimer);
        };
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center z-50">
        <div className="text-center">
            {/* Logo Animation */}
            <div className="relative mb-12">
            <div className="w-32 h-32 mx-auto relative">
                {/* Outer ring */}
                <div className="absolute inset-0 border-2 border-blue-500 rounded-full animate-ping opacity-20"></div>
                
                {/* Main logo */}
                <div className="absolute inset-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center transform rotate-45">
                    <div className="w-10 h-10 bg-gray-900 rounded transform -rotate-45 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-sm"></div>
                    </div>
                </div>
                </div>
                
                {/* Animated elements */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
                <div className="w-2 h-2 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                </div>
            </div>
            </div>

            {/* Brand Name */}
            <div className="mb-16">
            <h1 className="text-4xl font-bold text-white tracking-wider mb-2">
                <span className="text-blue-500">UI</span>XO </h1>
            <p className="text-gray-400 text-sm tracking-widest">AI COMPONENT GENERATOR</p>
            </div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto mb-6 overflow-hidden">
            <div 
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
            </div>

            {/* Status Text */}
            <div className="text-gray-500 text-sm tracking-wider">
            {progress < 30 && "INITIALIZING AI CORE"}
            {progress >= 30 && progress < 60 && "LOADING COMPONENT LIBRARY"}
            {progress >= 60 && progress < 90 && "OPTIMIZING RENDER ENGINE"}
            {progress >= 90 && "READY TO GENERATE"}
            </div>

            {/* Loading Dots */}
            <div className="flex justify-center mt-8 space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div> </div>
        </div>
        </div>
    );
};

export default LoadingIntro;