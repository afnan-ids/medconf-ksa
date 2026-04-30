"use client";
import { useEffect, useState, useRef } from "react";

export default function PortalIntro({
  onFinish,
  title,
  subtitle,
  portalName = "PORTAL",
}) {
  const [hide, setHide] = useState(false);
  const [time, setTime] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Animated time for wave effects
    const interval = setInterval(() => setTime((t) => t + 0.02), 50);

    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(onFinish, 600);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  // Canvas wave effect
  useEffect(() => {
    if (!canvasRef.current || hide) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const drawWave = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw flowing wave lines
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 - i * 0.015})`;
        ctx.lineWidth = 2;

        for (let x = 0; x < canvas.width; x += 10) {
          const y =
            canvas.height / 2 +
            Math.sin(x * 0.01 + time + i) * 50 +
            Math.cos(x * 0.02 + time * 1.5 + i) * 30;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationId = requestAnimationFrame(drawWave);
    };

    drawWave();
    window.addEventListener("resize", drawWave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", drawWave);
    };
  }, [time, hide]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-800 diagonal-shimmer ${
        hide ? "opacity-0 scale-95 backdrop-blur-0" : "opacity-100 scale-100"
      }`}
    >
      {/* Dark glassy background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] animate-gridSlide" />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slower" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Canvas wave overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Compact glass card content */}
      <div className="relative z-10 max-w-2xl mx-4 ">
        {/* Main glass container - more compact padding */}
        <div className="backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/10 p-8 md:p-10 shadow-2xl animate-glassIn">
          {/* Compact floating icon */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/20 flex items-center justify-center animate-float">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg animate-pulse-slow" />
              </div>
              {/* Rotating ring */}
              <div className="absolute inset-[-6px] rounded-xl border border-blue-500/30 animate-spin-slow" />
            </div>
          </div>

          {/* Welcome badge - smaller */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-[10px] tracking-wider font-mono">
                ✦ SECURE CONNECTION ✦
              </span>
            </div>
          </div>

          {/* Title - more compact */}
          <h1 className="text-center mb-3">
            <div className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <div className="overflow-hidden">
                <div className="animate-titleSlide">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    {title}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden mt-1">
                <div className="animate-titleSlide animation-delay-150">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {portalName}
                  </span>
                </div>
              </div>
            </div>
          </h1>

          {/* Animated underline - compact */}
          <div className="relative h-px w-24 mx-auto my-4 bg-gradient-to-r from-transparent via-blue-500 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shine" />
          </div>

          {/* Subtitle - smaller text */}
          <p className="text-center text-blue-200/60 text-xs font-mono tracking-wide animate-fadeIn">
            {subtitle}
          </p>

          {/* Loading indicator - compact */}
          <div className="mt-6">
            <div className="flex justify-center gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full bg-blue-400/60 animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>

          {/* Holographic scan line */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan" />
          </div>
        </div>

        {/* Compact corner accents */}
        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-500/40 rounded-tl-xl" />
        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-blue-500/40 rounded-tr-xl" />
        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-blue-500/40 rounded-bl-xl" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-500/40 rounded-br-xl" />
      </div>

      <style jsx>{`
        /* Thin Diagonal Shimmer Effect on whole page */
        .diagonal-shimmer {
          overflow: hidden;
        }

        .diagonal-shimmer::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 45%,
            rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0.15) 10%,
    rgba(255, 255, 255, 0.08) 50%,
            transparent 55%
          );
          transform: translateX(-100%);
          animation: diagonalShimmer 5s infinite;
          z-index: 20;
          pointer-events: none;
        }

        @keyframes diagonalShimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes glassIn {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
            backdrop-filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            backdrop-filter: blur(16px);
          }
        }

        @keyframes titleSlide {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes gridSlide {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(40px, 40px);
          }
        }

        @keyframes bounce {
          0%,
          60%,
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-6px);
            opacity: 1;
          }
        }

        .animate-glassIn {
          animation: glassIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-titleSlide {
          animation: titleSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          animation-delay: 0.25s;
          opacity: 0;
        }

        .animate-shine {
          animation: shine 2s linear infinite;
        }

        .animate-scan {
          animation: scan 3s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gridSlide {
          animation: gridSlide 20s linear infinite;
        }

        .animate-bounce {
          animation: bounce 1.2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-pulse-slower {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animation-delay-150 {
          animation-delay: 0.15s;
        }
      `}</style>
    </div>
  );
}
