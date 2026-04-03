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

const CPDPointsContent = ({ isGlassTheme }) => {
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
    <div className="space-y-4">
      {/* Main Card */}
      <div className={`rounded-lg border shadow-sm ${
        isGlassTheme 
          ? "bg-white/5 backdrop-blur-sm border-white/20" 
          : "bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800"
      }`}>
        {/* Compact Header */}
        <div className={`p-4 border-b ${isGlassTheme ? "border-white/20" : "border-gray-200 dark:border-gray-800"}`}>
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md shadow-sm">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className={`text-base font-bold ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>CPD Points</h2>
              <p className={`text-xs flex items-center gap-1 ${isGlassTheme ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>
                <Sparkles className="w-3 h-3" />
                Track your journey
              </p>
            </div>
          </div>
        </div>

        <div className="p-4">
          {/* Compact Progress Section */}
          <div className={`mb-4 p-3 rounded-md ${isGlassTheme ? "bg-white/5" : "bg-gray-50 dark:bg-gray-900"}`}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <Target className="w-3 h-3 text-blue-500" />
                  <span className="text-xs font-semibold text-blue-600">Annual Goal</span>
                </div>
                <p className={`text-xs ${isGlassTheme ? "text-gray-300" : "text-gray-500"}`}>{targetPoints} pts target</p>
              </div>
              <div className="text-right">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-2xl font-bold text-blue-600">{currentPoints}</span>
                  <span className={`text-sm ${isGlassTheme ? "text-gray-300" : "text-gray-400"}`}>/{targetPoints}</span>
                </div>
                <p className={`text-xs ${isGlassTheme ? "text-gray-300" : "text-gray-500"}`}>{progress.toFixed(0)}% done</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="relative mb-2">
              <div className={`w-full rounded-full h-2 overflow-hidden ${isGlassTheme ? "bg-white/10" : "bg-gray-200 dark:bg-gray-700"}`}>
                <div
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-blue-500" />
                <p className={`text-xs ${isGlassTheme ? "text-gray-300" : "text-gray-600"}`}>
                  <span className="font-semibold text-blue-600">{pointsNeeded}</span> left
                </p>
              </div>
              <button 
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-0.5"
              >
                {showDetails ? "Hide" : "View"}
                <ChevronRight className={`w-3 h-3 transition-transform ${showDetails ? "rotate-90" : ""}`} />
              </button>
            </div>

            {showDetails && (
              <div className={`mt-3 pt-3 border-t ${isGlassTheme ? "border-white/20" : "border-gray-200 dark:border-gray-700"}`}>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    <span className={`text-xs ${isGlassTheme ? "text-gray-300" : "text-gray-600"}`}>Dec 31, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className={`text-xs ${isGlassTheme ? "text-gray-300" : "text-gray-600"}`}>8 months left</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Compact Activities */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Award className="w-3.5 h-3.5 text-purple-500" />
              <h3 className={`text-sm font-semibold ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>Activities</h3>
            </div>

            <div className="space-y-2">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-md transition-all ${
                    isGlassTheme 
                      ? "bg-white/5 hover:bg-white/10" 
                      : "bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
                        <span className={`text-sm font-semibold ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>
                          {activity.name}
                        </span>
                        <span className={`px-1.5 py-0.5 text-xs rounded-full ${
                          isGlassTheme ? "bg-white/10 text-gray-300" : "bg-gray-200 dark:bg-gray-700"
                        }`}>
                          {activity.category}
                        </span>
                      </div>
                      <div className={`flex items-center gap-2 text-xs ${isGlassTheme ? "text-gray-300" : "text-gray-500"}`}>
                        <div className="flex items-center gap-0.5">
                          <Calendar className="w-2.5 h-2.5" />
                          {activity.date}
                        </div>
                        <div className="flex items-center gap-0.5">
                          <Clock className="w-2.5 h-2.5" />
                          {activity.duration}
                        </div>
                        {activity.certificate && (
                          <div className="flex items-center gap-0.5 text-emerald-600">
                            <CheckCircle className="w-2.5 h-2.5" />
                            <span>Cert</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md flex-shrink-0">
                      <span className="text-xs font-bold text-white">+{activity.points}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Compact Info Card */}
      <div className={`rounded-lg p-3 border ${
        isGlassTheme 
          ? "bg-blue-500/20 border-blue-500/30" 
          : "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800"
      }`}>
        <div className="flex items-start gap-2">
          <Info className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className={`text-xs font-semibold mb-0.5 ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>CPD Guidelines</p>
            <p className={`text-xs ${isGlassTheme ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
              Earn points through workshops & conferences. Minimum 50 points required annually.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPDPointsContent;