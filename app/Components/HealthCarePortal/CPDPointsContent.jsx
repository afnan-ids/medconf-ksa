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

const CPDPointsContent = ({ getColorClasses }) => {
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
  
  const achievements = [
    { name: "First Steps", icon: Star, points: 10, achieved: true },
    { name: "Learning Enthusiast", icon: Flame, points: 50, achieved: true },
    { name: "Expert Level", icon: Trophy, points: 100, achieved: false },
    { name: "Master Achiever", icon: Medal, points: 200, achieved: false },
  ];

  const nextAchievement = achievements.find(a => !a.achieved);
  const nextAchievementProgress = nextAchievement ? (currentPoints / nextAchievement.points) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Main Card */}
      <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">CPD Points Tracker</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Track your professional development journey
                </p>
              </div>
            </div>
            
            {/* Timeframe selector */}
            <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              {["year", "month", "week"].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setSelectedTimeframe(tf)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    selectedTimeframe === tf
                      ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {tf.charAt(0).toUpperCase() + tf.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Progress Section */}
          <div className="mb-6 p-5 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Annual Goal</span>
                </div>
                <p className="text-sm text-gray-500">Target: {targetPoints} points</p>
              </div>
              <div className="text-right">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-blue-600">{currentPoints}</span>
                  <span className="text-lg text-gray-400">/{targetPoints}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{progress.toFixed(0)}% Complete</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="relative mb-3">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3 h-3 text-blue-500" />
                <p className="text-xs text-gray-600">
                  <span className="font-semibold text-blue-600">{pointsNeeded}</span> points to reach target
                </p>
              </div>
              <button 
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
              >
                {showDetails ? "Hide" : "View"} Details
                <ChevronRight className={`w-3 h-3 transition-transform ${showDetails ? "rotate-90" : ""}`} />
              </button>
            </div>

            {showDetails && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-600">Year ends: Dec 31, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-600">Time left: 8 months</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Achievements Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Achievements</h3>
              </div>
              <span className="text-xs text-gray-500">
                {achievements.filter(a => a.achieved).length}/{achievements.length} unlocked
              </span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                const isAchieved = achievement.achieved;
                return (
                  <div
                    key={index}
                    className={`relative p-3 rounded-lg border transition-all ${
                      isAchieved
                        ? "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800"
                        : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg ${isAchieved ? "bg-amber-100 dark:bg-amber-900" : "bg-gray-200 dark:bg-gray-800"}`}>
                        <Icon className={`w-4 h-4 ${isAchieved ? "text-amber-600" : "text-gray-400"}`} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-900 dark:text-white">{achievement.name}</p>
                        <p className="text-xs text-gray-500">{achievement.points} pts</p>
                      </div>
                    </div>
                    {!isAchieved && (
                      <div className="mt-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full transition-all"
                          style={{ width: `${Math.min(100, (currentPoints / achievement.points) * 100)}%` }}
                        />
                      </div>
                    )}
                    {isAchieved && (
                      <div className="absolute -top-1 -right-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Achievement Progress */}
          {nextAchievement && (
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white dark:bg-gray-900 rounded-lg">
                  <Gift className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Next Achievement: {nextAchievement.name}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Earn {nextAchievement.points - currentPoints} more points to unlock
                  </p>
                  <div className="mt-2 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all"
                      style={{ width: `${nextAchievementProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Activities */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-500" />
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Completed Activities</h3>
              </div>
              <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">View All</button>
            </div>

            <div className="space-y-3">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {activity.name}
                        </span>
                        <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-xs rounded-full">
                          {activity.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {activity.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {activity.duration}
                        </div>
                        {activity.certificate && (
                          <div className="flex items-center gap-1 text-emerald-600">
                            <CheckCircle className="w-3 h-3" />
                            Certificate
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                      <span className="text-xs font-bold text-white">+{activity.points}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">CPD Points Guidelines</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
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