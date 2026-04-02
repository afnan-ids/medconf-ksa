// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Mail, Lock, Eye, EyeOff, ArrowRight, Activity, Heart, Microscope } from "lucide-react";

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Mouse move effect for dynamic background
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 20,
//         y: (e.clientY / window.innerHeight) * 20,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
//       {/* Animated Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 animate-gradient-xy">
//         {/* Floating Medical Icons */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-20 left-10 animate-float-slow opacity-20">
//             <Activity className="w-16 h-16 text-white" />
//           </div>
//           <div className="absolute bottom-20 right-10 animate-float-slower opacity-20">
//             <Heart className="w-20 h-20 text-white" />
//           </div>
//           <div className="absolute top-1/2 left-1/4 animate-float opacity-20">
//             <Microscope className="w-24 h-24 text-white" />
//           </div>
//         </div>

//         {/* Animated Particles */}
//         <div className="absolute inset-0">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute bg-white rounded-full animate-particle"
//               style={{
//                 width: Math.random() * 6 + 2 + "px",
//                 height: Math.random() * 6 + 2 + "px",
//                 left: Math.random() * 100 + "%",
//                 top: Math.random() * 100 + "%",
//                 animationDelay: Math.random() * 5 + "s",
//                 animationDuration: Math.random() * 10 + 10 + "s",
//                 opacity: 0.1 + Math.random() * 0.2,
//               }}
//             />
//           ))}
//         </div>

//         {/* Dynamic Light Effect */}
//         <div
//           className="absolute inset-0 bg-gradient-radial from-transparent to-black/30 pointer-events-none"
//           style={{
//             background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, transparent 0%, rgba(0,0,0,0.3) 70%)`,
//           }}
//         />
//       </div>

//       {/* Main Card */}
//       <div className="relative w-full max-w-5xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row transform hover:scale-[1.01] transition-transform duration-300">
//         {/* Left Side - Animated Medical Theme */}
//         <div className="lg:w-6/12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 flex flex-col items-center justify-center text-white relative overflow-hidden group">
//           {/* Animated Pulse Effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out" />
          
//           {/* Rotating Medical Icons */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
//             <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-1/4 translate-y-1/4 animate-pulse-slower" />
//           </div>

//           {/* Animated Medical Equipment */}
//           <div className="absolute top-10 right-10 animate-spin-slow">
//             <div className="w-20 h-20 border-4 border-white/20 border-t-white/60 rounded-full" />
//           </div>

//           {/* Content */}
//           <div className="relative z-10 text-center">
//             {/* Animated Logo */}
//             <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-2xl mx-auto mb-6 flex items-center justify-center transform hover:rotate-6 transition-transform duration-300 group">
//               <span className="text-4xl font-bold text-white animate-pulse">M</span>
//               <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping-slow" />
//             </div>

//             {/* Welcome Text with Staggered Animation */}
//             <h1 className="text-4xl font-bold mb-2 animate-fade-in-up">Welcome to</h1>
//             <h2 className="text-3xl font-light mb-4 animate-fade-in-up animation-delay-200">
//               MEDCONF <span className="font-bold bg-gradient-to-r from-yellow-300 to-pink-300 text-transparent bg-clip-text">KSA</span>
//             </h2>

//             <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-pink-300 mx-auto mb-6 rounded-full animate-expand-width" />

//             <p className="text-white/90 text-sm max-w-xs leading-relaxed animate-fade-in-up animation-delay-400">
//               Saudi Arabia's premier platform for medical conferences and healthcare professionals.
//             </p>

//             {/* Stats with Animation */}
//             <div className="mt-8 grid grid-cols-3 gap-4 text-center">
//               {[
//                 { value: "500+", label: "Conferences" },
//                 { value: "50k+", label: "Doctors" },
//                 { value: "150+", label: "Cities" },
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className="animate-fade-in-up animation-delay-600"
//                   style={{ animationDelay: `${index * 100 + 600}ms` }}
//                 >
//                   <div className="text-xl font-bold">{stat.value}</div>
//                   <div className="text-xs text-white/70">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Login Form */}
//         <div className="w-full lg:w-6/12 p-8 sm:p-10 bg-gradient-to-br from-white to-gray-50">
//           <div className="max-w-sm mx-auto">
//             {/* Mobile Header */}
//             <div className="lg:hidden text-center mb-6 animate-fade-in-down">
//               <h1 className="text-2xl font-bold text-gray-900">
//                 MEDCONF <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">KSA</span>
//               </h1>
//               <p className="text-gray-500 text-sm mt-1">
//                 Sign in to your account
//               </p>
//             </div>

//             {/* Form Header */}
//             <div className="mb-8 animate-fade-in-left">
//               <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
//                 Welcome back
//               </h2>
//               <p className="text-gray-500 text-sm mt-2">
//                 Please enter your details to access your account
//               </p>
//             </div>

//             {/* Login Form */}
//             <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//               {/* Email Field */}
//               <div className="animate-fade-in-up animation-delay-100">
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Email
//                 </label>
//                 <div className="relative group">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="doctor@hospital.com"
//                     className="w-full pl-9 pr-3 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-gray-300 bg-white/50 backdrop-blur-sm"
//                   />
//                   <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-focus-within:opacity-10 transition-opacity pointer-events-none" />
//                 </div>
//               </div>

//               {/* Password Field */}
//               <div className="animate-fade-in-up animation-delay-200">
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Password
//                 </label>
//                 <div className="relative group">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="••••••••"
//                     className="w-full pl-9 pr-12 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-gray-300 bg-white/50 backdrop-blur-sm"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-4 h-4" />
//                     ) : (
//                       <Eye className="w-4 h-4" />
//                     )}
//                   </button>
//                   <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-focus-within:opacity-10 transition-opacity pointer-events-none" />
//                 </div>
//               </div>

//               {/* Remember Me & Forgot Password */}
//               <div className="flex items-center justify-between animate-fade-in-up animation-delay-300">
//                 <label className="flex items-center gap-2 cursor-pointer group">
//                   <input
//                     type="checkbox"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                     className="w-4 h-4 border-2 border-gray-300 rounded text-blue-600 focus:ring-blue-500 focus:ring-offset-0 transition-all group-hover:border-blue-400"
//                   />
//                   <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
//                     Remember me
//                   </span>
//                 </label>
//                 <Link
//                   href="/forgot-password"
//                   className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-all hover:underline"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>

//               {/* Sign In Button */}
//               <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group text-sm shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transform hover:-translate-y-0.5 animate-fade-in-up animation-delay-400">
//                 Sign in
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
//               </button>

//               {/* Divider */}
//               <div className="relative my-6 animate-fade-in-up animation-delay-500">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-200"></div>
//                 </div>
//                 <div className="relative flex justify-center text-xs">
//                   <span className="px-4 bg-white text-gray-500">or continue with</span>
//                 </div>
//               </div>

//               {/* Social Sign In */}
//               <div className="grid grid-cols-2 gap-3 animate-fade-in-up animation-delay-600">
//                 <button className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-blue-200 transition-all group">
//                   <svg className="w-5 h-5" viewBox="0 0 24 24">
//                     <path
//                       fill="#EA4335"
//                       d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                     />
//                     <path
//                       fill="#34A853"
//                       d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                     />
//                     <path
//                       fill="#FBBC05"
//                       d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                     />
//                     <path
//                       fill="#4285F4"
//                       d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                     />
//                   </svg>
//                   <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
//                     Google
//                   </span>
//                 </button>
//                 <button className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-blue-200 transition-all group">
//                   <svg className="w-5 h-5" viewBox="0 0 24 24">
//                     <path
//                       fill="#1877F2"
//                       d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
//                     />
//                   </svg>
//                   <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
//                     Facebook
//                   </span>
//                 </button>
//               </div>

//               {/* Sign Up Link */}
//               <div className="text-center mt-6 animate-fade-in-up animation-delay-700">
//                 <p className="text-sm text-gray-600">
//                   Don't have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-all"
//                   >
//                     Sign up now
//                   </Link>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gradient-xy {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient-xy {
//           background-size: 200% 200%;
//           animation: gradient-xy 15s ease infinite;
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-slow {
//           animation: float 8s ease-in-out infinite;
//         }
//         .animate-float-slower {
//           animation: float 10s ease-in-out infinite;
//         }

//         @keyframes particle {
//           0% { transform: translateY(0) translateX(0); opacity: 0; }
//           10% { opacity: 0.2; }
//           90% { opacity: 0.2; }
//           100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
//         }
//         .animate-particle {
//           animation: particle linear infinite;
//         }

//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 0.6s ease-out forwards;
//           opacity: 0;
//         }

//         @keyframes fadeInLeft {
//           from { opacity: 0; transform: translateX(-20px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .animate-fade-in-left {
//           animation: fadeInLeft 0.6s ease-out forwards;
//           opacity: 0;
//         }

//         @keyframes fadeInDown {
//           from { opacity: 0; transform: translateY(-20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in-down {
//           animation: fadeInDown 0.6s ease-out forwards;
//           opacity: 0;
//         }

//         @keyframes expandWidth {
//           from { width: 0; opacity: 0; }
//           to { width: 5rem; opacity: 1; }
//         }
//         .animate-expand-width {
//           animation: expandWidth 0.8s ease-out forwards;
//         }

//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }

//         @keyframes ping-slow {
//           75%, 100% { transform: scale(1.5); opacity: 0; }
//         }
//         .animate-ping-slow {
//           animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }

//         .animation-delay-100 { animation-delay: 100ms; }
//         .animation-delay-200 { animation-delay: 200ms; }
//         .animation-delay-300 { animation-delay: 300ms; }
//         .animation-delay-400 { animation-delay: 400ms; }
//         .animation-delay-500 { animation-delay: 500ms; }
//         .animation-delay-600 { animation-delay: 600ms; }
//         .animation-delay-700 { animation-delay: 700ms; }

//         .duration-1500 {
//           transition-duration: 1500ms;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-800 to-purple-900 p-4">
      
      {/* Animated background blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Glass Card with fade-in animation */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 animate-fade-in">
        
        {/* Logo with subtle bounce */}
        <div className="flex justify-center mb-6 ">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-lg hover:scale-105 transition-transform duration-300">
            M
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white">
            Welcome back
          </h1>
          <p className="text-sm text-gray-300 mt-1">
            Sign in to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email with focus animation */}
          <div className="relative group">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-white/20"
            />
          </div>

          {/* Password with focus animation */}
          <div className="relative group">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-white/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <input type="checkbox" className="accent-blue-500 rounded transition-transform hover:scale-110" />
              Remember
            </label>

            <Link href="/forgot-password" className="text-blue-400 hover:text-blue-300 transition-all hover:underline underline-offset-4">
              Forgot?
            </Link>
          </div>

          {/* Button with loading animation */}
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                Sign in
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Social with hover animations */}
          <div className="grid grid-cols-2 gap-3">
            <button className="py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 text-sm flex items-center justify-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 text-sm flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>

          {/* Signup with hover animation */}
          <p className="text-center text-sm text-gray-400 mt-4">
            Don't have an account?{" "}
            <Link href="/Forms/Register" className="text-blue-400 hover:text-blue-300 transition-all hover:underline underline-offset-4">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      {/* Add these styles to your global CSS or tailwind.config.js */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}