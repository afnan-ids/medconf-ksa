// "use client";
// import React from "react";
// import Link from "next/link";

// const MediaPartnersSection = () => {
//   const mediaPartners = [
//     {
//       name: "AI Press Room",
//       logo: "https://cdn.showmanonline.com/event739/Posts/Media%20partners/AIPressRoom_800_250_transparent.png",
//       url: "https://example.com",
//     },
//     {
//       name: "Alertify",
//       logo: "https://cdn.showmanonline.com/event739/Posts/Media%20partners/Alertify.png",
//       url: "https://alertify.eu/",
//     },
//     {
//       name: "Computing Deutschland",
//       logo: "https://cdn.showmanonline.com/event739/Posts/logos25/ComputingDeutschlandlogo2001.jpg",
//       url: "https://www.computingdeutschland.de/",
//     },
//     // keep the rest...
//   ];

//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-semibold text-gray-900">
//             Media Partners
//           </h2>
//           <p className="mt-4 text-gray-500 max-w-xl mx-auto">
//             Leading publications covering innovation and technology worldwide.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
//           {mediaPartners.map((partner, index) => (
//             <a
//               key={index}
//               href={partner.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300"
//             >
//               <img
//                 src={partner.logo}
//                 alt={partner.name}
//                 className="max-h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
//               />
//             </a>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-16">
//           <Link
//             href="/media-partners"
//             className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
//           >
//             Become a Media Partner
//           </Link>
//         </div>

//         {/* Small note */}
//         <div className="text-center mt-6">
//           <p className="text-sm text-gray-500">
//             Join {mediaPartners.length}+ global media outlets.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MediaPartnersSection;









"use client";
import Image from "next/image";

const partners = [
  {
    name: "Airbus",
    logo: "https://cdn.showmanonline.com/event739/Posts/logos25/Airbuslogo18.jpg",
  },
  {
    name: "Ajinomoto",
    logo: "https://cdn.showmanonline.com/event739/Posts/Side_Events/ajinomoto.jpg",
  },
  {
    name: "Aschendorff",
    logo: "https://cdn.showmanonline.com/event739/Posts/logos25/Aschendorff-CVC.png",
  },
  {
    name: "Bayer",
    logo: "https://cdn.showmanonline.com/event739/Posts/logos25/Bayer.png",
  },
  {
    name: "Beiersdorf",
    logo: "https://cdn.showmanonline.com/event739/Posts/Community%20Partner/Beiersdorflogo19.png",
  },
  {
    name: "BMW i Ventures",
    logo: "https://cdn.showmanonline.com/event739/Posts/Meet-Fellow-Investors/BMW%20I%20ventures.jpeg",
  },
  {
    name: "Gekko Capital Partners",
    logo: "https://cdn.showmanonline.com/event739/Posts/Meet-Fellow-Investors/gcp-logo-black.png",
  },
  {
    name: "Giesecke+Devrient",
    logo: "https://cdn.showmanonline.com/event739/Posts/logos25/GD_Logo_GieseckeDevrient.png",
  },
  {
    name: "Hitachi Ventures",
    logo: "https://cdn.showmanonline.com/event739/Posts/Meet-Fellow-Investors/hitachi-ventures-logo-NEW.png",
  },
  {
    name: "Orange Ventures",
    logo: "https://cdn.showmanonline.com/event739/Posts/Community%20Partner/OrangeVentureslogo19.png",
  },
  {
    name: "Porsche Ventures",
    logo: "https://cdn.showmanonline.com/event739/Posts/Meet-Fellow-Investors/Ventures_1c_grey.png",
  },
  {
    name: "Raiffeisen Bank",
    logo: "https://cdn.showmanonline.com/event739/Posts/logos25/RaiffeisenBanklogo18.jpg",
  },
  {
    name: "Seven Ventures",
    logo: "https://cdn.showmanonline.com/event739/Posts/Meet-Fellow-Investors/SevenVentures-Logo_red.png",
  },
  {
    name: "Sony Innovation Fund",
    logo: "https://cdn.showmanonline.com/event739/Posts/logos25/SonyInnovationFundlogo18.jpg",
  },
  {
    name: "Sopra Steria Ventures",
    logo: "https://cdn.showmanonline.com/event739/Posts/Community%20Partner/SopraSterialogo19.png",
  },
  {
    name: "T Capital",
    logo: "https://cdn.showmanonline.com/event739/Posts/logos25/TCapitallogo01.jpg",
  },
  {
    name: "UCB Ventures",
    logo: "https://cdn.showmanonline.com/event739/Posts/logos25/UCB-Ventures.png",
  },
  {
    name: "Wayra",
    logo: "https://cdn.showmanonline.com/event739/Posts/logos25/Wayra.png",
  },
];

export default function PartnersGrid() {
  return (
    <section className="py-16 bg-gradient-to-br from-black/80 via-blue-950/80 to-black/90 -z-10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Corporate & Innovation Partners
          </h2>

          {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" /> */}
           <div className="mt-7 w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-24 transition-all duration-500" />
           
          <p className="mt-6 text-white max-w-2xl mx-auto text-lg">
            Collaborating with global industry leaders, venture funds, and innovation pioneers driving the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="w-full flex justify-center">
              <div className="w-full bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:shadow-md transition duration-300 shadow-2xl">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  loading="lazy"
                  className="object-contain max-h-14 w-auto"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}