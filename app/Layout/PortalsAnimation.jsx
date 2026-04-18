"use client";
import { useEffect, useState } from "react";

export default function PortalIntro({
  onFinish,
  title,
  subtitle,
  portalcolor,
  titlecolor,
  isPortal
}) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(onFinish, 200);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700${
        hide ? "opacity-0 scale-105 blur-md" : "opacity-100 scale-100 blur-0"
      }`}
    >
      {/* Dramatic animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950 to-black animate-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse-slow" />
      </div>

      {/* Main heading area */}
      <div className="relative text-center px-6">
        {/* title */}
        <p className="text-white/80 text-sm tracking-[0.3em] font-mono mb-6 animate-slideDown opacity-0 [animation-delay:0.1s]">
          WELCOME TO
        </p>

        {/* Main Title  */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter animate-titleReveal overflow-hidden">
          <span
            className={`inline-block bg-gradient-to-r ${titlecolor} bg-clip-text text-transparent animate-shine`}
          >
            {title}
          </span>
          <br />
          <span
            className={`inline-block bg-gradient-to-r ${portalcolor} bg-clip-text text-transparent animate-shine-delayed pb-4`}
          >
            {isPortal || "PORTAL"}
          </span>
        </h1>

        {/* Dynamic underline that draws itself */}
        <div className="flex justify-center mt-8">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-lineDraw" />
        </div>

        {/* Status message */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <p className="text-white/80 text-sm font-mono tracking-wider animate-fadeIn opacity-0 [animation-delay:0.6s]">
            SYSTEM READY • SECURE LINK ESTABLISHED
          </p>
        </div>

        {/* Subtle hint of access level */}
        <p className="text-white/80 text-[10px] font-mono mt-4 tracking-widest animate-fadeIn opacity-0 [animation-delay:0.8s]">
          {subtitle}
        </p>
      </div>

      <style jsx>{`
        @keyframes titleReveal {
          0% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            opacity: 0;
            transform: scale(0.95);
          }
          30% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            opacity: 1;
            transform: scale(1);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes lineDraw {
          0% {
            width: 0%;
            opacity: 0;
          }
          50% {
            width: 80%;
            opacity: 1;
          }
          100% {
            width: 60%;
            opacity: 1;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-titleReveal {
          animation: titleReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-shine {
          background-size: 200% auto;
          animation: shine 2.5s linear infinite;
        }

        .animate-shine-delayed {
          background-size: 200% auto;
          animation: shine 2.5s linear infinite 0.3s;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-lineDraw {
          animation: lineDraw 0.8s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
