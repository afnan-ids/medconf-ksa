"use client";

import Image from "next/image";

const EventsSection = () => {
  const pastEvents = [
    {
      id: 1,
      image: "/Images/Events/GlobalHealthSaudi.jpg",
      title: "Healthcare Innovation Summit 2024",
      date: "September 2024",
      report: true,
    },
    {
      id: 2,
      image: "/Images/Events/Riyadh-2.webp",
      title: "Digital Health Forum",
      date: "April 2024",
      report: true,
    },
    {
      id: 3,
      image: "/Images/Events/Arabnews.jpg",
      title: "Medical Excellence Conference",
      date: "August 2019",
      report: true,
    },
    {
      id: 4,
      image: "/Images/Events/Meeting.jpg",
      title: "Global Health Assembly",
      date: "March 2024",
      report: true,
    },
  ];

  return (
    <section
      id="events"
      className="bg-gradient-to-b from-white via-indigo-50/30 to-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl mb-24 text-center justify-self-center-safe">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-4 block">
            Events & Insights
          </span>
          <h1 className="text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
            Shaping the Future of
            <span className="text-indigo-600 block sm:inline"> Healthcare</span>
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-2xl">
            Bringing together healthcare leaders, innovators, and global experts
            to shape the future of medical excellence.
          </p>
          {/* Decorative line */}
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-8"></div>
          </div>{" "}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-40">
  
          <div className="relative group">
            {/* Background blur effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-700"></div>

            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="/Images/Events/GlobalHealthSaudi.jpg"
                alt="Global Health Exhibition"
                width={800}
                height={600}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
                UPCOMING EVENT 2026
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Global Health
              <span className="text-purple-900 block">Exhibition 2026</span>
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-lg">
                  Riyadh International Convention Center
                </p>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-lg">October 26–29, 2026</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600">500+</p>
                <p className="text-sm text-gray-600 mt-1">Speakers</p>
              </div>
              <div className="text-center border-x border-gray-200">
                <p className="text-3xl font-bold text-indigo-600">100+</p>
                <p className="text-sm text-gray-600 mt-1">Exhibitors</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600">50+</p>
                <p className="text-sm text-gray-600 mt-1">Countries</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex-1">
                <span className="flex items-center justify-center gap-2">
                  Register Now
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>

              <button className="group border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 hover:-translate-y-1 transition-all duration-300 flex-1">
                <span className="flex items-center justify-center gap-2">
                  Book Booth
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* PAST EVENTS */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-14">
            <h3 className="text-3xl font-semibold text-gray-900">
              Past Events
            </h3>
            <span className="text-sm text-indigo-600 font-semibold hover:underline cursor-pointer">
              View all reports →
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-gray-900 font-semibold line-clamp-2">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-2">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-500 text-sm">{event.date}</p>
                  </div>

                  <button className="mt-5 text-indigo-600 text-sm font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all">
                    View Report
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOWNLOAD SECTION */}
        <div className="relative mt-32 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative py-16 px-8 text-center">
            <h4 className="text-3xl font-semibold text-white mb-4">
              Download All Event Reports
            </h4>

            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Access full reports, presentations, and insights from previous
              events.
            </p>

            <button
              className="inline-flex items-center gap-2 
            bg-white text-indigo-600 
            px-10 py-4 rounded-full font-semibold
            hover:shadow-2xl hover:-translate-y-1
            transition-all duration-300"
            >
              Download Reports
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
