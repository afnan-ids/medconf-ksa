"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Shield,
  Stethoscope,
  Heart,
  Award,
  ChevronRight,
  Smartphone,
  AlertCircle,
  Building2,
  Calendar,
  Fingerprint,
  TrendingUp,
  Clock,
  BadgeCheck,
  Users,
} from "lucide-react";
import { Brain, Activity, Microscope, Dna, HeartPulse } from "lucide-react";

import { FaHospital } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/signIn";

const FloatingIcon = ({
  Icon,
  delay = 0,
  duration = 20,
  left = "0%",
  top = "0%",
  color = "text-white/20",
}) => {
  const [position] = useState({
    left: left || `${Math.random() * 100}%`,
    top: top || `${Math.random() * 100}%`,
  });

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: position.left,
        top: position.top,
        animation: `float ${duration}s infinite ease-in-out`,
        animationDelay: `${delay}s`,
      }}
    >
      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${color}`} />
    </div>
  );
};

export default function LoginPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState("email");
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});

  // Stats data for left side - compact version
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Professionals",
      color: "text-blue-400",
    },
    {
      icon: Building2,
      value: "500+",
      label: "Institutions",
      color: "text-emerald-400",
    },
    {
      icon: Calendar,
      value: "200+",
      label: "Conferences",
      color: "text-purple-400",
    },
    {
      icon: Award,
      value: "98%",
      label: "Satisfaction",
      color: "text-amber-400",
    },
  ];

  const features = [
    { icon: BadgeCheck, text: "SCFHS Licensed", color: "text-blue-400" },
    { icon: Shield, text: "HIPAA Compliant", color: "text-emerald-400" },
    { icon: Clock, text: "24/7 Support", color: "text-purple-400" },
    { icon: TrendingUp, text: "Real-time Analytics", color: "text-amber-400" },
  ];

  // Floating icons configuration
  const floatingIcons = [
    {
      Icon: Stethoscope,
      delay: 0,
      duration: 25,
      left: "5%",
      top: "15%",
      color: "text-blue-300/20",
    },
    {
      Icon: Heart,
      delay: 2,
      duration: 22,
      left: "3%",
      top: "60%",
      color: "text-red-300/20",
    },
    {
      Icon: Brain,
      delay: 1.5,
      duration: 28,
      left: "8%",
      top: "85%",
      color: "text-purple-300/20",
    },
    {
      Icon: Activity,
      delay: 3,
      duration: 24,
      left: "2%",
      top: "40%",
      color: "text-emerald-300/20",
    },
    {
      Icon: FaHospital,
      delay: 0.5,
      duration: 27,
      left: "92%",
      top: "20%",
      color: "text-blue-300/20",
    },
    {
      Icon: Microscope,
      delay: 2.5,
      duration: 23,
      left: "95%",
      top: "55%",
      color: "text-purple-300/20",
    },
    {
      Icon: Dna,
      delay: 1,
      duration: 29,
      left: "88%",
      top: "75%",
      color: "text-cyan-300/20",
    },
    {
      Icon: HeartPulse,
      delay: 3.5,
      duration: 20,
      left: "96%",
      top: "90%",
      color: "text-rose-300/20",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email required";
    }

    if (loginMethod === "email" && !formData.password) {
      newErrors.password = "Password is required";
    }

    if (loginMethod === "otp" && !formData.otp) {
      newErrors.otp = "OTP is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/pages/Portals/HealthcarePractitionersPortal/dashboard");
    }, 1500);
  };

  const handleSendOTP = () => {
    if (!formData.email) {
      setErrors({ email: "Enter email to receive OTP" });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors({ email: "Valid email required" });
      return;
    }
    alert(`OTP sent to ${formData.email}`);
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        25% { transform: translateY(-30px) translateX(20px) rotate(3deg); }
        50% { transform: translateY(-50px) translateX(0px) rotate(0deg); }
        75% { transform: translateY(-15px) translateX(-20px) rotate(-3deg); }
        100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
      }
      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-30px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideInRight {
        from { opacity: 0; transform: translateX(30px); }
        to { opacity: 1; transform: translateX(0); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen mt-10 relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-10">
      {/* Animated Background - Subtle orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {floatingIcons.map((icon, idx) => (
          <FloatingIcon key={idx} {...icon} />
        ))}
      </div>

      {/* Main Content - Compact Centered Layout */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-6 items-center">
            <div className="animate-[slideInRight_0.6s_ease-out]">
              <div className="w-full max-w-md mx-auto lg:ml-auto">
                {/* Glassmorphic Card - More compact */}
                <div className="relative rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Header - Compact */}
                  <div className="text-center py-4 px-4 border-b border-white/10">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 mb-3">
                      <Fingerprint className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-xs font-medium text-gray-300">
                        {t.secureAccess}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold">
                      <span className="text-white">{t.signInTo}</span>
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent ml-1">
                        {t.account}
                      </span>
                    </h2>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {t.accessDashboard}
                    </p>
                  </div>

                  {/* Login Tabs - Compact */}
                  <div className="flex border-b border-white/10">
                    <button
                      onClick={() => setLoginMethod("email")}
                      className={`flex-1 py-2.5 text-center font-medium transition-all duration-300 text-sm ${
                        loginMethod === "email"
                          ? "text-blue-400 border-b-2 border-blue-500 bg-white/5"
                          : "text-gray-400 hover:text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      <Mail className="w-3.5 h-3.5 inline mr-1.5" />
                      {t.emailAddress}
                    </button>
                    <button
                      onClick={() => setLoginMethod("otp")}
                      className={`flex-1 py-2.5 text-center font-medium transition-all duration-300 text-sm ${
                        loginMethod === "otp"
                          ? "text-blue-400 border-b-2 border-blue-500 bg-white/5"
                          : "text-gray-400 hover:text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5 inline mr-1.5" />
                      OTP
                    </button>
                  </div>

                  {/* Form - Compact spacing */}
                  <form onSubmit={handleSubmit} className="p-5 space-y-4">
                    {/* Email Field */}
                    <div className="group">
                      <label className="text-gray-200 mb-1 block text-xs font-medium">
                        {t.emailAddress} <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 text-gray-400 w-3.5 h-3.5 transition-all group-hover:text-blue-400" />
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-white/10 backdrop-blur-sm border rounded-lg px-3 py-2 pl-9 text-white placeholder:text-gray-500 transition-all duration-300 hover:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm ${
                            errors.email
                              ? "border-red-500 focus:ring-red-500/30"
                              : "border-white/20"
                          }`}
                          placeholder="doctor@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Password Field */}
                    {loginMethod === "email" && (
                      <div className="group">
                        <div className="flex items-center justify-between mb-1">
                          <label className="text-gray-200 text-xs font-medium">
                            {t.password} <span className="text-red-400">*</span>
                          </label>
                          <Link
                            href="/Forms/ForgotPassword"
                            className="text-xs text-blue-400 hover:text-cyan-400 transition-colors"
                          >
                            {t.forgotPassword}
                          </Link>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-2.5 text-gray-400 w-3.5 h-3.5 transition-all group-hover:text-blue-400" />
                          <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleInputChange}
                            className={`w-full bg-white/10 backdrop-blur-sm border rounded-lg px-3 py-2 pl-9 pr-9 text-white placeholder:text-gray-500 transition-all duration-300 hover:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm ${
                              errors.password
                                ? "border-red-500 focus:ring-red-500/30"
                                : "border-white/20"
                            }`}
                            placeholder="Enter your password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="w-3.5 h-3.5" />
                            ) : (
                              <Eye className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                        {errors.password && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />{" "}
                            {errors.password}
                          </p>
                        )}
                      </div>
                    )}

                    {/* OTP Field */}
                    {loginMethod === "otp" && (
                      <div className="group">
                        <label className="text-gray-200 mb-1 block text-xs font-medium">
                          {t.oneTimePassword}{" "}
                          <span className="text-red-400">*</span>
                        </label>
                        <div className="flex gap-2">
                          <div className="relative flex-1">
                            <Fingerprint className="absolute left-3 top-2.5 text-gray-400 w-3.5 h-3.5 transition-all group-hover:text-purple-400" />
                            <input
                              name="otp"
                              type="text"
                              value={formData.otp}
                              onChange={handleInputChange}
                              className={`w-full bg-white/10 backdrop-blur-sm border rounded-lg px-3 py-2 pl-9 text-white placeholder:text-gray-500 transition-all duration-300 hover:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 text-sm ${
                                errors.otp
                                  ? "border-red-500 focus:ring-red-500/30"
                                  : "border-white/20"
                              }`}
                              placeholder="6-digit code"
                              maxLength={6}
                            />
                          </div>
                          <button
                            type="button"
                            onClick={handleSendOTP}
                            className="px-4 py-2  bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 whitespace-nowrap"
                          >
                            {t.send}
                          </button>
                        </div>
                        {errors.otp && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.otp}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">
                          {t.otpInfo}
                        </p>
                      </div>
                    )}

                    {/* Remember Me & Register - Compact */}
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-1.5 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              rememberMe: e.target.checked,
                            })
                          }
                          className="w-3.5 h-3.5 text-blue-500 rounded border-white/30 bg-white/5 focus:ring-blue-500 focus:ring-offset-0"
                        />
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                          {t.remember}
                        </span>
                      </label>
                    </div>

                    {/* Login Button - Compact */}
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="w-full group relative overflow-hidden rounded-lg  bg-gradient-to-r from-blue-600 to-cyan-600 p-0.5 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="relative px-4 py-2 bg-cyan-100/10 rounded-lg transition-all duration-300 group-hover:bg-transparent">
                        <span className="text-white text-sm font-semibold flex items-center justify-center gap-2">
                          {isLoading ? (
                            <>
                              <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              {t.signingIn}
                            </>
                          ) : (
                            <>
                              {t.signIn}
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </>
                          )}
                        </span>
                      </div>
                    </button>

                    {/* Security Note */}
                    <div className="text-center pt-1">
                      <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                        <Shield className="w-3 h-3 text-emerald-400" />
                        <span>{t.sslSecured}</span>
                      </p>
                    </div>
                  </form>

                  {/* Divider & Social Login - Compact */}
                  <div className="px-5 pb-5">
                    <div className="relative my-3">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="px-2 bg-transparent text-gray-500 backdrop-blur-sm">
                          {t.or}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button className="flex items-center justify-center gap-2 px-3 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 text-xs font-medium text-gray-300 backdrop-blur-sm group">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        <span>Google</span>
                      </button>
                      <button className="flex items-center justify-center gap-2 px-3 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 text-xs font-medium text-gray-300 backdrop-blur-sm group">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="#1877F2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        <span>Facebook</span>
                      </button>
                    </div>
                  </div>
                  {/* Security Note */}
                  <div className="text-center pt-1 mb-4">
                    <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                      {/* <Shield className="w-3 h-3 text-emerald-400" /> */}
                      <span>{t.dontHaveAccount}</span>
                    </p>
                  </div>
                  {/* Login Button - Compact */}
                  <Link
                    href="/Forms/PractitionerRegistrationForm"
                    className="p-5 space-y-4"
                  >
                    <button
                      type="submit"
                      className="w-100 group relative overflow-hidden rounded-lg  bg-gradient-to-r from-blue-600 to-cyan-600 p-0.5 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="relative px-4 py-2 bg-cyan-100/10 rounded-lg transition-all duration-300 group-hover:bg-transparent">
                        <span className="text-white text-sm font-semibold flex items-center justify-center gap-2">
                          {isLoading ? (
                            <>
                              <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              {t.signingIn}
                            </>
                          ) : (
                            <>
                              {t.signUp}
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </>
                          )}
                        </span>
                      </div>
                    </button>
                  </Link>

                  {/* Footer - Compact */}
                  <div className="text-center mt-4 py-2 border-t border-white/10 bg-white/5">
                    <p className="text-gray-500 text-[11px]">
                      {t.footerText}{" "}
                      <Link
                        href="/Terms"
                        className="text-blue-400 hover:text-cyan-400 transition-colors"
                      >
                        {t.terms}
                      </Link>{" "}
                      &{" "}
                      <Link
                        href="/Privacy"
                        className="text-blue-400 hover:text-cyan-400 transition-colors"
                      >
                        {t.privacy}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
