"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Mail,
  Lock,
  User,
  Phone,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    label: "What's your full name?",
    name: "name",
    placeholder: "Dr. Ahmed Al-Saud",
    type: "text",
    icon: User,
    validate: (value) =>
      value?.length >= 3 || "Name must be at least 3 characters",
  },
  {
    label: "Your email address",
    name: "email",
    placeholder: "ahmed@hospital.com",
    type: "email",
    icon: Mail,
    validate: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Please enter a valid email",
  },
  {
    label: "Phone number",
    name: "phone",
    placeholder: "+966 50 123 4567",
    type: "tel",
    icon: Phone,
    validate: (value) =>
      value?.length >= 10 || "Phone number must be at least 10 digits",
  },
  {
    label: "Create a password",
    name: "password",
    placeholder: "••••••••",
    type: "password",
    icon: Lock,
    validate: (value) =>
      value?.length >= 6 || "Password must be at least 6 characters",
  },
];

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const current = steps[step];
  const CurrentIcon = current.icon;

  const validateField = (name, value) => {
    const field = steps.find((s) => s.name === name);
    if (field?.validate) {
      const result = field.validate(value);
      return result === true ? null : result;
    }
    return null;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setForm({ ...form, [current.name]: value });

    // Clear error when user types
    if (errors[current.name]) {
      setErrors({ ...errors, [current.name]: null });
    }
  };

  const handleBlur = () => {
    setTouched({ ...touched, [current.name]: true });
    const error = validateField(current.name, form[current.name]);
    setErrors({ ...errors, [current.name]: error });
  };

  const handleNext = () => {
    // Validate current field
    const error = validateField(current.name, form[current.name]);

    if (error) {
      setErrors({ ...errors, [current.name]: error });
      setTouched({ ...touched, [current.name]: true });
      return;
    }

    if (step === steps.length - 1) {
      // Submit form
      console.log("Form submitted:", form);
      setIsCompleted(true);
    } else {
      setStep((s) => s + 1);
    }
  };

  const handlePrevious = () => {
    setStep((s) => Math.max(0, s - 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-800 to-purple-900 text-white">
        <div className="w-full max-w-xl px-6">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-12 shadow-2xl text-center animate-fade-in">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Registration Successful!
            </h2>
            <p className="text-gray-300 mb-8">
              Welcome to MEDCONF KSA, {form.name || "Doctor"}!
            </p>
            <Link href="/pages/Portals/VisitorPortal/dashboard">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all">
                Go to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-800 to-purple-900 text-white">
      {/* Animated background blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Center Container */}
      <div className="w-full max-w-xl px-6 relative z-10">
        {/* Floating Card */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 shadow-2xl transition-all hover:border-white/30">
          {/* Step Counter */}
          <div className="text-sm text-gray-400 mb-2">
            Step {step + 1} of {steps.length}
          </div>

          {/* Question */}
          <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
            <CurrentIcon className="w-6 h-6 text-blue-400" />
            {current.label}
          </h2>

          {/* Input with Icon */}
          <div className="relative">
            <input
              autoFocus
              type={current.type}
              value={form[current.name] || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              placeholder={current.placeholder}
              className={`w-full bg-white/5 border rounded-lg px-4 py-4 text-sm focus:outline-none focus:ring-2 transition-all
                ${
                  errors[current.name] && touched[current.name]
                    ? "border-red-400 focus:ring-red-400"
                    : "border-white/20 focus:ring-blue-400"
                }`}
            />

            {/* Error Icon */}
            {errors[current.name] && touched[current.name] && (
              <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-red-400" />
            )}
          </div>

          {/* Error Message */}
          {errors[current.name] && touched[current.name] && (
            <p className="text-red-400 text-xs mt-2 animate-fade-in">
              {errors[current.name]}
            </p>
          )}

          {/* Password Strength Indicator (for password step) */}
          {current.name === "password" && form.password && (
            <div className="mt-4 space-y-2">
              <div className="flex gap-1 h-1">
                <div
                  className={`flex-1 rounded-full transition-all duration-300 ${
                    form.password.length >= 6 ? "bg-green-500" : "bg-gray-600"
                  }`}
                />
                <div
                  className={`flex-1 rounded-full transition-all duration-300 ${
                    /[A-Z]/.test(form.password) ? "bg-green-500" : "bg-gray-600"
                  }`}
                />
                <div
                  className={`flex-1 rounded-full transition-all duration-300 ${
                    /[0-9]/.test(form.password) ? "bg-green-500" : "bg-gray-600"
                  }`}
                />
              </div>
              <p className="text-xs text-gray-400">
                Use 6+ characters with uppercase & numbers
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrevious}
              className={`text-white/60 hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5
                ${step === 0 ? "opacity-0 pointer-events-none" : ""}`}
            >
              <ArrowLeft size={16} />
              Back
            </button>

            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg flex items-center gap-2 font-medium hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
            >
              {step === steps.length - 1 ? (
                <>
                  Complete Registration
                  <CheckCircle size={16} />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>

          {/* Quick Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === step
                    ? "bg-blue-400 w-4"
                    : i < step
                      ? "bg-blue-400/50"
                      : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
        {/* Progress Bar with Labels */}
        <div className="mt-8">
          <div className="flex justify-between mb-2">
            {steps.map((s, i) => (
              <span
                key={i}
                className={`text-xs font-medium transition-all ${
                  i <= step ? "text-blue-400" : "text-gray-500"
                }`}
              >
                Step {i + 1}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                  i <= step
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-white/10"
                }`}
              >
                {i === step && (
                  <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-300 mt-6">
          Already have an account?{" "}
          <Link href="/Forms/Login">
          <span className="text-blue-400 cursor-pointer hover:text-blue-300 transition-all hover:underline underline-offset-4">
            Sign in
          </span>
          </Link>
        </p>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
