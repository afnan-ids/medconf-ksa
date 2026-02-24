// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const SpeakersSection = () => {
//   const speakers = [
//     {
//       name: "Jensen Huang",
//       title: "Co-founder & CEO",
//       company: "NVIDIA",
//       image: "/Images/Speakers/JensenHuang.jfif",
//     },
//     {
//       name: "Joe Tsai",
//       title: "Co-founder & Chairman",
//       company: "Alibaba Group",
//       image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80",
//     },
//     {
//       name: "Arthur Mensch",
//       title: "CEO",
//       company: "Mistral AI",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
//     },
//     {
//       name: "Vanessa Wyche",
//       title: "Director",
//       company: "NASA Johnson Space Center",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
//     },
//     {
//       name: "Thomas Wolf",
//       title: "Co-Founder & CSO",
//       company: "Hugging Face",
//       image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&q=80",
//     },
//     {
//       name: "Yann LeCun",
//       title: "Chief AI Scientist",
//       company: "Meta",
//       image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
//     },
//   ];

//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-semibold text-gray-900">
//             Featured Speakers
//           </h2>
//           <p className="mt-4 text-gray-500 max-w-xl mx-auto">
//             Industry leaders shaping the future of technology and innovation.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//           {speakers.map((speaker, index) => (
//             <div
//               key={index}
//               className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
//             >
//               <div className="relative w-full h-64">
//                 <img
//                   src={speaker.image}
//                   alt={speaker.name}
//                   className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
//                 />
//               </div>

//               <div className="p-6 text-center">
//                 <h3 className="text-lg font-medium text-gray-900">
//                   {speaker.name}
//                 </h3>
//                 <p className="text-sm text-gray-500 mt-1">
//                   {speaker.title}
//                 </p>
//                 <p className="text-sm font-medium text-gray-700 mt-1">
//                   {speaker.company}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-16">
//           <Link
//             href="/speakers"
//             className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
//           >
//             View All Speakers
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpeakersSection;
















"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const SpeakersSection = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const speakers = [
    {
      name: "Jensen Huang",
      title: "Co-founder & CEO",
      company: "NVIDIA",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/Frame_333_and_and_and_d5012c953b/Frame_333_and_and_and_d5012c953b.png",
    },
    {
      name: "Joe Tsai",
      title: "Co-founder and Chairman",
      company: "Alibaba",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/joe_tsai_0b94ffa2f6/joe_tsai_0b94ffa2f6.png",
    },
    {
      name: "Arthur Mensch",
      title: "CEO",
      company: "Mistral AI",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/Arthur_Menschaaa_Viva_Tech_2025_74eca00b14/Arthur_Menschaaa_Viva_Tech_2025_74eca00b14.png",
    },
    {
      name: "Vanessa Wyche",
      title: "Acting Associate Administrator",
      company: "NASA",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/vanessa_e_wyche_77a47ef319/vanessa_e_wyche_77a47ef319.png",
    },
    {
      name: "Thomas Wolf",
      title: "Co-Founder & Chief Science Officer",
      company: "Hugging Face",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/wolff_caa0d5fdc5/wolff_caa0d5fdc5.png",
    },
    {
      name: "Yann LeCun",
      title: "Chief AI Scientist",
      company: "Meta & NYU",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/c3748248a8e7a0a46e08c5aa0b8e9903f9a9ea36_6b3020f68f/c3748248a8e7a0a46e08c5aa0b8e9903f9a9ea36_6b3020f68f.png",
    },
    {
      name: "Bernard Arnault",
      title: "Chairman & CEO",
      company: "LVMH",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/Bernard_Arnault21aaa_06ba042edf/Bernard_Arnault21aaa_06ba042edf.png",
    },
    {
      name: "Ami Badani",
      title: "Chief Marketing Officer",
      company: "ARM Holdings",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/ami_badani_cfe3c8e3df/ami_badani_cfe3c8e3df.png",
    },
    {
      name: "Paul Hudson",
      title: "CEO",
      company: "Sanofi",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/paul_hudson_2c32fc3007/paul_hudson_2c32fc3007.png",
    },
    {
      name: "Zak Brown",
      title: "CEO",
      company: "McLaren Racing",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/zak_brown_7ac1bd7167/zak_brown_7ac1bd7167.png",
    },
    {
      name: "Mike Krieger",
      title: "Chief Product Officer",
      company: "Anthropic",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/mike_krieger_de94105c0f/mike_krieger_de94105c0f.png",
    },
    {
      name: "Alexandr Wang",
      title: "Founder & CEO",
      company: "Scale AI",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/alexandr_wang_ae1ab2ce69/alexandr_wang_ae1ab2ce69.png",
    },
  ];

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background layers */}
     <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-950/80 to-black/90 -z-10" />
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-600/25 blur-[140px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] bg-cyan-400/20 blur-[160px] rounded-full -z-10 animate-pulse" />

      <div className=" mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
       <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              They've {""}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              spoken at our events
            </span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto text-lg">
            Industry leaders shaping the future of technology and innovation.
          </p>
        </div>

        {/* Horizontal Scroll Container with Navigation */}
        <div className="relative">
          {/* Left Navigation Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 bottom-0 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 group shadow-xl"
              aria-label="Scroll left"
            >
              <svg
                className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Right Navigation Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 bottom-0 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 group shadow-xl"
              aria-label="Scroll right"
            >
              <svg
                className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Horizontal Scrolling Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="flex-none w-82 group relative"
              >
                {/* Subtle animated gradient border */}
                {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-60 group-hover:opacity-90 transition duration-700" /> */}

                {/* Main Card */}
                <div className="relative bg-gray-900 rounded-xl p-4 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative mb-3">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                   
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-1">
                    <h3 className="text-base font-semibold text-white transition-all duration-300 group-hover:text-blue-400 line-clamp-2">
                      {speaker.name}
                    </h3>

                    <p className="text-xs text-gray-400 line-clamp-2">
                      {speaker.title}
                    </p>

                    <p className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text line-clamp-2">
                      {speaker.company}
                    </p>
                  </div>

                  {/* Hover indicator dots */}
                  <div className="flex justify-center space-x-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                    <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse delay-75" />
                    <div className="w-1 h-1 rounded-full bg-pink-500 animate-pulse delay-150" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
      <div className="mt-14 text-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white shadow-lg hover:shadow-2xl transition duration-300 bg-gradient-to-r from-blue-600 to-cyan-500"
          >
            View All Speakers
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes gradient-xy {
          0%,
          100% {
            background-size: 400% 400%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 3s ease infinite;
        }
        
        /* Hide scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SpeakersSection;