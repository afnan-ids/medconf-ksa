"use client"
import { 
  BuildingOffice2Icon, 
  UserGroupIcon, 
  UserIcon, 
  HeartIcon, 
  Cog6ToothIcon,
  ChartBarIcon,
  ClockIcon,
  SparklesIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/translations";

export default function PortalsPage() {
    const { language } = useLanguage();
  const t = translations[language];
  const portals = [
    {
      id: 'sponsor',
      title: t.sponsorPortal,
      icon: BuildingOffice2Icon,
      link: 'https://hpql-sponsor.i-diligence.com/login/'
    },
    {
      id: 'exhibitor',
      title: t.exhibitorPortal,
      icon: UserGroupIcon,
      link: '/exhibitor-portal'
    },
     {
      id: 'visitor',
      title: t.visitorPortal,
      icon: UserIcon,
      link: '/visitor-portal'
    },
    {
      id: 'healthcare',
      title: t.healthCarePortal,
      icon: HeartIcon,
      link: '/healthcare-portal'
    },
    {
      id: 'admin',
      title: t.adminPortal,
      icon: Cog6ToothIcon,
      link: '/admin-portal'
    },

  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-4 px-3 sm:py-8 lg:py-14 lg:px-0 max-w-7xl mx-auto">
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          {/* Strategic Objectives Banner */}
          <div className="backdrop-blur-sm rounded-xl mb-8 p-4 border" style={{ backgroundColor: 'rgba(30, 26, 76, 0.5)', borderColor: 'rgba(255, 255, 255, 0.06)' }}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/20">
                  <ChartBarIcon className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-sm font-semibold text-white">{t.portalStrategicObjectives}</span>
                <span className="text-sm text-blue-300 hidden sm:inline">{t.portalSupportingprogramscomprehensivehealthtransformation}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ClockIcon className="w-4 h-4" />
                <span>{t.portal2026TargetsAlignment}</span>
                <SparklesIcon className="w-4 h-4 text-yellow-500 ml-1" />
              </div>
            </div>
          </div>

          {/* Portal Cards Grid - 3 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portals.map((portal, index) => (
              <div
                key={portal.id}
                className={`group relative rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border`}
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  animationDelay: `${0.1 * (index + 1)}s`
                }}
              >
                {/* Gradient Header */}
                <div className={`h-2 w-full bg-gradient-to-r ${
                  portal.id === 'sponsor' ? 'from-blue-500 to-indigo-600' :
                  portal.id === 'exhibitor' ? 'from-emerald-500 to-teal-600' :
                  portal.id === 'visitor' ? 'from-purple-500 to-pink-600' :
                  portal.id === 'healthcare' ? 'from-red-500 to-rose-600' :
                  portal.id === 'admin' ? 'from-gray-600 to-slate-700' :
                  'from-cyan-500 to-blue-600'
                }`}></div>
                
                <div className="p-6 pt-5 flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className={`p-4 rounded-xl mb-4 ${
                    portal.id === 'sponsor' ? 'bg-blue-500/20' :
                    portal.id === 'exhibitor' ? 'bg-emerald-500/20' :
                    portal.id === 'visitor' ? 'bg-purple-500/20' :
                    portal.id === 'healthcare' ? 'bg-red-500/20' :
                    portal.id === 'admin' ? 'bg-gray-500/20' :
                    'bg-cyan-500/20'
                  }`}>
                    <portal.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title only */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {portal.title}
                  </h3>

                  {/* Button */}
                  <a 
                    href={portal.link}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                  >
                   {t.signIn}
                    {/* <ArrowTopRightOnSquareIcon className="w-4 h-4" /> */}
                  </a>
                </div>

                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}