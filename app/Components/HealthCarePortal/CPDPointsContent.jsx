"use client";
import { useState } from "react";
import { 
  Brain, 
  Award, 
  TrendingUp, 
  Target, 
  Calendar, 
  Star, 
  Trophy, 
  Sparkles,
  ChevronRight,
  Medal,
  Clock,
  Flame,
  Gift,
  Info,
  CheckCircle
} from "lucide-react";

const CPDPointsContent = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("year");
  const [showDetails, setShowDetails] = useState(false);

  const activities = [
    { 
      id: 1,
      name: "Cardiology Workshop 2024", 
      points: 15, 
      date: "Mar 10, 2024",
      category: "Workshop",
      duration: "8 hours",
      level: "Advanced",
      certificate: true
    },
    { 
      id: 2,
      name: "Global Health Exhibition", 
      points: 30, 
      date: "Mar 5, 2024",
      category: "Conference",
      duration: "3 days",
      level: "All Levels",
      certificate: true
    },
    { 
      id: 3,
      name: "Medical Ethics Seminar", 
      points: 10, 
      date: "Feb 28, 2024",
      category: "Seminar",
      duration: "4 hours",
      level: "Intermediate",
      certificate: true
    },
    { 
      id: 4,
      name: "AI in Healthcare Summit", 
      points: 25, 
      date: "Feb 15, 2024",
      category: "Summit",
      duration: "2 days",
      level: "Advanced",
      certificate: true
    },
  ];

  const currentPoints = 80;
  const targetPoints = 100;
  const progress = (currentPoints / targetPoints) * 100;
  const pointsNeeded = targetPoints - currentPoints;
  

  return (
    <div className="space-y-6">
      {/* Main Card - Glassmorphism */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        {/* Header */}
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-r from-cyan-600 to-green-600 rounded-lg shadow-lg shadow-blue-500/30">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  CPD Points Tracker
                </h2>
                <p className="text-sm text-gray-300 mt-0.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  Track your professional development journey
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-6">
          {/* Progress Section - Glass style */}
          <div className="relative mb-6 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
            
            <div className="relative flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">Annual Goal</span>
                </div>
                <p className="text-sm text-gray-300">Target: {targetPoints} points</p>
              </div>
              <div className="text-right">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text">
                    {currentPoints}
                  </span>
                  <span className="text-lg text-gray-400">/{targetPoints}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{progress.toFixed(0)}% Complete</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="relative mb-3">
              <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-600 to-green-600 h-2.5 rounded-full transition-all duration-500 shadow-lg shadow-blue-500/30"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="relative flex justify-between items-center">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3 h-3 text-blue-400" />
                <p className="text-xs text-gray-300">
                  <span className="font-semibold text-blue-400">{pointsNeeded}</span> points to reach target
                </p>
              </div>
              <button 
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors"
              >
                {showDetails ? "Hide" : "View"} Details
                <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${showDetails ? "rotate-90" : ""}`} />
              </button>
            </div>

            {showDetails && (
              <div className="mt-4 pt-4 border-t border-white/10 animate-in fade-in duration-300">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-300">Year ends: Dec 31, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-300">Time left: 8 months</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Activities */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-400" />
                <h3 className="text-sm font-semibold text-white">Completed Activities</h3>
              </div>
            </div>

            <div className="space-y-3">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  <div className="relative flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                          {activity.name}
                        </span>
                        <span className="px-2 py-0.5 bg-white/10 rounded-full text-xs text-gray-300 border border-white/10">
                          {activity.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-blue-400" />
                          {activity.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-purple-400" />
                          {activity.duration}
                        </div>
                        {activity.certificate && (
                          <div className="flex items-center gap-1 text-emerald-400">
                            <CheckCircle className="w-3 h-3" />
                            Certificate
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="px-3 py-1.5 bg-gradient-to-r from-cyan-600 to-green-600 rounded-lg shadow-lg shadow-blue-500/30">
                      <span className="text-xs font-bold text-white">+{activity.points}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Info Card - Glass style */}
      <div className="relative bg-blue-500/10 backdrop-blur-xl rounded-xl p-5 border border-blue-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
        <div className="relative flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-white mb-1">CPD Points Guidelines</p>
            <p className="text-xs text-gray-300">
              Earn points by attending workshops, conferences, and completing certified courses. 
              Minimum 50 points required annually for professional certification renewal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPDPointsContent;