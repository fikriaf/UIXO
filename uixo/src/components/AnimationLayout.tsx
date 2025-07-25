import React from 'react';

const components = [
{
    className: 'box flyin-top', // masuk dari atas
    style: { top: '5%', left: '10%', width: '80%', height: '20%', animationDelay: '0s' },
},
{
    className: 'box flyin-left', // masuk dari kiri
    style: { top: '27%', left: '10%', width: '23%', height: '70%', animationDelay: '0.4s' },
},
{
    className: 'box flyin-right', // masuk dari kanan
    style: { top: '27%', left: '35%', width: '55%', height: '47%', animationDelay: '0.8s' },
},
{
    className: 'box flyin-bottom', // masuk dari bawah
    style: { top: '77%', left: '35%', width: '27%', height: '20%', animationDelay: '1.2s' },
},
{
    className: 'box flyin-bottom', // masuk dari bawah
    style: { top: '77%', left: '63%', width: '27%', height: '20%', animationDelay: '1.4s' },
},
];

export const AnimationLayout: React.FC = () => {
return (
    <div style={{
    position: 'absolute',
    right: 0,
    width: '30%',
    height: 'auto',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
    zIndex: 0,
    pointerEvents: 'none',
    }}>
    <style>{`
    @keyframes flyin-top {
        0%   { opacity: 0; transform: scale(0.5) translateY(-30px); }
        20%  { opacity: 1; transform: scale(1) translateY(0); }
        60%  { opacity: 1; transform: scale(1) translateY(0); }
        100% { opacity: 0; transform: scale(0.5) translateY(-30px); }
    }

    @keyframes flyin-bottom {
        0%   { opacity: 0; transform: scale(0.5) translateY(30px); }
        20%  { opacity: 1; transform: scale(1) translateY(0); }
        60%  { opacity: 1; transform: scale(1) translateY(0); }
        100% { opacity: 0; transform: scale(0.5) translateY(30px); }
    }

    @keyframes flyin-left {
        0%   { opacity: 0; transform: scale(0.5) translateX(-30px); }
        20%  { opacity: 1; transform: scale(1) translateX(0); }
        60%  { opacity: 1; transform: scale(1) translateX(0); }
        100% { opacity: 0; transform: scale(0.5) translateX(-30px); }
    }

    @keyframes flyin-right {
        0%   { opacity: 0; transform: scale(0.5) translateX(30px); }
        20%  { opacity: 1; transform: scale(1) translateX(0); }
        60%  { opacity: 1; transform: scale(1) translateX(0); }
        100% { opacity: 0; transform: scale(0.5) translateX(30px); }
    }

    .box {
        position: absolute;
        border-radius: 12px;
        background: linear-gradient(135deg, hsla(195, 100%, 50%, 0.25), hsla(225, 95%, 18%, 0.35));
        backdrop-filter: blur(8px);
        animation-duration: 6s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }

    .flyin-top { animation-name: flyin-top; }
    .flyin-bottom { animation-name: flyin-bottom; }
    .flyin-left { animation-name: flyin-left; }
    .flyin-right { animation-name: flyin-right; }
    `}</style>

    {components.map((comp, index) => (
        <div
        key={index}
        className={comp.className}
        style={{ ...comp.style }}
        />
    ))}
    </div>
);
};
