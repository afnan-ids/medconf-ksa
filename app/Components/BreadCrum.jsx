import React from "react";
import Link from "next/link";
import { Home, ChevronRight, Sparkles } from "lucide-react";

const BreadCrumb = ({ title, backgroundImage, path }) => {
  return (
    <div
      className="relative h-[50vh] w-full overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Background Overlay - Matching theme */}

      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-indigo-950/90 to-gray-900/95">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div> */}

      {/* Gradient Overlay - Enhanced with radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent"></div>

      {/* Additional bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center z-10">
        <div className="text-white animate-fadeIn">
          <nav
            className="flex items-center gap-2 text-sm mb-4"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Home</span>
            </Link>

            {path?.map((item, index) => {
              const isLast = index === path.length - 1;

              return (
                <React.Fragment key={index}>
                  <ChevronRight className="w-4 h-4 text-gray-600" />

                  {isLast ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-semibold">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item?.href || "#"}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Title with enhanced styling */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">{title}</span>
          </h1>

          {/* Decorative line */}
          <div className="flex items-center gap-3 mt-6">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BreadCrumb;
