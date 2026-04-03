"use client";
import { useState } from "react";
import { useTheme } from "../../Context/ThemeContext";
import { 
  X, 
  Mail, 
  Phone, 
  Award, 
  Calendar, 
  MapPin, 
  Clock, 
  User,
  Briefcase,
  Star,
  Heart,
  MessageCircle,
  CheckCircle,
  Shield,
  Copy,
  QrCode,
  Download
} from "lucide-react";

const ProfileModal = ({ isOpen, onClose }) => {
  const { isGlassTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("details");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const professionalDetails = [
    { label: "Education", value: "MD, Cardiology - Harvard Medical School", icon: Award },
    { label: "Experience", value: "15+ years in cardiovascular medicine", icon: Briefcase },
    { label: "Clinic/Hospital", value: "Saudi German Hospital, Riyadh", icon: MapPin },
    { label: "Consultation Hours", value: "9:00 AM - 5:00 PM (Sun-Thu)", icon: Clock },
  ];

  const qualifications = [
    "Board Certified in Cardiology",
    "Fellow of American College of Cardiology",
    "Advanced Cardiac Life Support Certified",
    "Research Publications: 25+"
  ];

  const upcomingAppointments = [
    { date: "Mar 15, 2024", time: "10:30 AM", patient: "Sarah Johnson", type: "Follow-up" },
    { date: "Mar 16, 2024", time: "2:00 PM", patient: "Mohammed Ali", type: "Consultation" },
    { date: "Mar 18, 2024", time: "11:00 AM", patient: "Fatima Khan", type: "Check-up" },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("dr.ahmed@medical.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isGlassTheme ? "bg-black/70 backdrop-blur-md" : "bg-black/60 backdrop-blur-md"
        }`}
        onClick={onClose}
      />
      
      <div className={`relative w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 animate-slideUp rounded-2xl ${
        isGlassTheme 
          ? "bg-white/10 backdrop-blur-2xl border border-white/20" 
          : "bg-white dark:bg-gray-950"
      }`}>
        
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10" />
        
        <div className={`relative flex items-center justify-between px-6 py-4 border-b ${
          isGlassTheme ? "border-white/20" : "border-gray-200 dark:border-gray-800"
        } ${isGlassTheme ? "bg-white/5" : "bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm"}`}>
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
              <User className="w-4 h-4 text-white" />
            </div>
            <h2 className={`text-lg font-bold ${
              isGlassTheme ? "text-white" : "bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
            }`}>
              Doctor Profile
            </h2>
            <span className="px-2 py-0.5 text-xs font-medium bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 rounded-full flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Verified
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className={`p-1.5 rounded-lg transition-all group relative ${
                isGlassTheme ? "hover:bg-white/10" : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Copy className={`w-4 h-4 ${isGlassTheme ? "text-gray-300 group-hover:text-white" : "text-gray-400"}`} />
              {copied && (
                <span className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 px-2 py-0.5 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg transition-all group ${
                isGlassTheme ? "hover:bg-white/10" : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <X className={`w-4 h-4 ${isGlassTheme ? "text-gray-300" : "text-gray-400"}`} />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-70px)]">
          <div className={`relative px-6 pt-8 pb-6 border-b ${
            isGlassTheme ? "border-white/20" : "border-gray-200 dark:border-gray-800"
          }`}>
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-60" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">DR</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-gray-950 animate-pulse" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className={`text-2xl font-bold ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>
                    Dr. Ahmed Hassan
                  </h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className={`text-xs ml-1 ${isGlassTheme ? "text-gray-300" : "text-gray-500"}`}>(128 reviews)</span>
                  </div>
                </div>
                <p className={`text-sm mt-1 flex items-center gap-2 ${isGlassTheme ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
                  <Award className="w-4 h-4 text-indigo-500" />
                  Senior Cardiologist · License #SCH-1234
                </p>
                <div className={`flex items-center gap-3 mt-2 text-xs ${isGlassTheme ? "text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Joined March 2020
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Verified Professional
                  </span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className={`p-2 rounded-lg transition-all group ${
                  isGlassTheme 
                    ? "bg-white/10 hover:bg-white/20" 
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200"
                }`}>
                  <MessageCircle className={`w-4 h-4 ${isGlassTheme ? "text-gray-300" : "text-gray-600"}`} />
                </button>
                <button className={`p-2 rounded-lg transition-all group ${
                  isGlassTheme 
                    ? "bg-white/10 hover:bg-white/20" 
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200"
                }`}>
                  <Heart className={`w-4 h-4 ${isGlassTheme ? "text-gray-300" : "text-gray-600"}`} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className={`p-3 rounded-xl border ${
                isGlassTheme 
                  ? "bg-white/5 border-white/10" 
                  : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
              }`}>
                <p className={`text-xs ${isGlassTheme ? "text-gray-300" : "text-gray-500"}`}>Patients Treated</p>
                <p className={`text-lg font-bold ${isGlassTheme ? "text-white" : "text-gray-900"}`}>2,847</p>
              </div>
              <div className={`p-3 rounded-xl border ${
                isGlassTheme 
                  ? "bg-white/5 border-white/10" 
                  : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
              }`}>
                <p className={`text-xs ${isGlassTheme ? "text-gray-300" : "text-gray-500"}`}>Years Experience</p>
                <p className={`text-lg font-bold ${isGlassTheme ? "text-white" : "text-gray-900"}`}>15+</p>
              </div>
              <div className={`p-3 rounded-xl border ${
                isGlassTheme 
                  ? "bg-white/5 border-white/10" 
                  : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
              }`}>
                <p className={`text-xs ${isGlassTheme ? "text-gray-300" : "text-gray-500"}`}>Success Rate</p>
                <p className="text-lg font-bold text-green-600">98%</p>
              </div>
            </div>
          </div>

          <div className={`flex gap-1 px-6 pt-4 border-b ${isGlassTheme ? "border-white/20" : "border-gray-200 dark:border-gray-800"}`}>
            {[
              { id: "details", label: "Professional Details", icon: User },
              { id: "qualifications", label: "Qualifications", icon: Award },
              { id: "schedule", label: "Schedule", icon: Calendar }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-t-lg transition-all relative ${
                    activeTab === tab.id 
                      ? "text-indigo-600 dark:text-indigo-400" 
                      : isGlassTheme
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </div>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="p-6">
            {activeTab === "details" && (
              <div className="space-y-6">
                <div>
                  <h4 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isGlassTheme ? "text-white" : "text-gray-900"}`}>
                    <Mail className="w-4 h-4" />
                    Contact Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { icon: Mail, label: "Email", value: "dr.ahmed@medical.com" },
                      { icon: Phone, label: "Phone", value: "+966 50 123 4567" },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className={`group p-3.5 rounded-xl border transition-all ${
                          isGlassTheme 
                            ? "bg-white/5 border-white/10 hover:border-indigo-500/50" 
                            : "bg-gray-50 dark:bg-gray-900 border-gray-200 hover:border-indigo-200"
                        }`}>
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-indigo-500" />
                            <span className={`text-xs ${isGlassTheme ? "text-gray-400" : "text-gray-500"}`}>{item.label}</span>
                          </div>
                          <p className={`text-sm font-medium mt-1 ${isGlassTheme ? "text-white" : "text-gray-900"}`}>{item.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isGlassTheme ? "text-white" : "text-gray-900"}`}>
                    <Briefcase className="w-4 h-4" />
                    Professional Information
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {professionalDetails.map((detail, idx) => {
                      const Icon = detail.icon;
                      return (
                        <div key={idx} className={`p-3.5 rounded-xl border ${
                          isGlassTheme 
                            ? "bg-white/5 border-white/10" 
                            : "bg-gray-50 dark:bg-gray-900 border-gray-200"
                        }`}>
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="w-4 h-4 text-indigo-500" />
                            <span className={`text-xs ${isGlassTheme ? "text-gray-400" : "text-gray-500"}`}>{detail.label}</span>
                          </div>
                          <p className={`text-sm font-medium ${isGlassTheme ? "text-white" : "text-gray-900"}`}>{detail.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "qualifications" && (
              <div className="space-y-6">
                <div className={`p-4 rounded-xl border ${
                  isGlassTheme 
                    ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-500/30" 
                    : "bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200"
                }`}>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className={`text-sm font-semibold mb-2 ${isGlassTheme ? "text-white" : "text-gray-900"}`}>
                        Medical Qualifications
                      </p>
                      <ul className="space-y-2">
                        {qualifications.map((qual, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className={isGlassTheme ? "text-gray-300" : "text-gray-700"}>{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "schedule" && (
              <div className="space-y-6">
                <div className={`p-4 rounded-xl border ${
                  isGlassTheme 
                    ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-500/30" 
                    : "bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200"
                }`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    <h4 className={`text-sm font-semibold ${isGlassTheme ? "text-white" : "text-gray-900"}`}>Upcoming Appointments</h4>
                  </div>
                  <div className="space-y-3">
                    {upcomingAppointments.map((apt, idx) => (
                      <div key={idx} className={`flex items-center justify-between p-3 rounded-lg border ${
                        isGlassTheme 
                          ? "bg-white/5 border-white/10" 
                          : "bg-white dark:bg-gray-900 border-gray-200"
                      }`}>
                        <div>
                          <p className={`text-sm font-medium ${isGlassTheme ? "text-white" : "text-gray-900"}`}>{apt.patient}</p>
                          <p className={`text-xs ${isGlassTheme ? "text-gray-400" : "text-gray-500"}`}>{apt.type}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-medium ${isGlassTheme ? "text-white" : "text-gray-900"}`}>{apt.date}</p>
                          <p className={`text-xs ${isGlassTheme ? "text-gray-400" : "text-gray-500"}`}>{apt.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={`px-6 py-4 border-t ${isGlassTheme ? "border-white/20 bg-white/5" : "border-gray-200 bg-gray-50"}`}>
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
              <button className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                isGlassTheme 
                  ? "border border-white/20 hover:bg-white/10" 
                  : "border border-gray-300 hover:bg-gray-100"
              }`}>
                <QrCode className="w-4 h-4" />
                Digital ID
              </button>
              <button className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isGlassTheme 
                  ? "border border-white/20 hover:bg-white/10" 
                  : "border border-gray-300 hover:bg-gray-100"
              }`}>
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default ProfileModal;