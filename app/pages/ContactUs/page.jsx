"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  Shield,
  MessageSquare,
  Users,
  Building2,
  ChevronRight,
  CheckCircle,
  Globe,
  Award,
  HeadphonesIcon,
  Star,
} from "lucide-react";
import BreadCrumb from "../../Components/BreadCrum";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/contact";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const { language } = useLanguage();
  const t = translations[language];
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t.phone,
      details: "+966 (00) 000-000",
      subdetails: t.phoneHours,
      color: "from-blue-500 to-cyan-400",
      action: "tel:+96000000090",
    },
    {
      icon: Mail,
      title: t.email,
      details: "info@Hpql.sa",
      subdetails: "support@Hpql.sa",
      color: "from-purple-500 to-pink-400",
      action: "mailto:info@Hpql.sa",
    },
    {
      icon: MapPin,
      title: t.address,
      details: t.addressLine1,
      subdetails: t.addressLine2,
      color: "from-amber-500 to-orange-400",
      action: "#",
    },
  ];

  const teamContacts = [
    {
      name: "Dr. Abdullah Al-Saud",
      role: t.conferenceDirector,
      email: "a.alsaud@Hpql.sa",
      phone: "+966 50 123 4567",
      image: "/Images/team/placeholder-1.jpg",
    },
    {
      name: "Sarah Al-Otaibi",
      role: t.exhibitorRelations,
      email: "s.alotaibi@Hpql.sa",
      phone: "+966 50 234 5678",
      image: "/Images/team/placeholder-2.jpg",
    },
    {
      name: "Mohammed Al-Qahtani",
      role: t.technicalSupportRole,
      email: "m.alqahtani@Hpql.sa",
      phone: "+966 50 345 6789",
      image: "/Images/team/placeholder-3.jpg",
    },
  ];

  const faqs = [
    {
      question: t.registerQuestion,
      answer: t.registerAnswer,
    },
    {
      question: t.ratesQuestion,
      answer: t.ratesAnswer,
    },
    {
      question: t.verificationQuestion,
      answer: t.verificationAnswer,
    },
  ];

  return (
    <>
      <BreadCrumb
        title={t.contactUs}
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: t.contactUs }]}
      />
      <section className="relative min-h-screen py-6 sm:py-10 md:py-12 lg:py-15 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-20">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 md:mb-6 lg:mb-8">
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-300">
                {t.getInTouch}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-2">
              <span className="text-white">{t.lets}</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent block sm:inline">
                {t.connect}
              </span>
            </h1>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 md:w-20 lg:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed px-3 sm:px-4">
                {t.contactDescription}
              </p>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 mb-10 sm:mb-12 md:mb-16 lg:mb-20 px-2 sm:px-0">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Link key={index} href={info.action} className="group relative">
                  <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    <div className="relative mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-lg sm:rounded-xl blur-md sm:blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                      ></div>
                      <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center border border-white/20 bg-white/10">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">
                      {info.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-0.5 sm:mb-1 break-words">
                      {info.details}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 break-words">
                      {info.subdetails}
                    </p>

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${info.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    ></div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-10 sm:mb-12 md:mb-16 lg:mb-20 px-2 sm:px-0">
            {/* Contact Form */}
            <div className="relative">
              <div className="lg:sticky lg:top-32">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8">
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    {t.sendMessageTitle}
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                          {t.name} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                          placeholder={t.yourName}
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                          {t.emailLabel} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                          placeholder={t.yourEmail}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                          {t.phoneLabel}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                          placeholder="+966 XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                          {t.company}
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                          placeholder={t.yourCompany}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                        {t.subject} *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                      >
                        <option value="" className="bg-gray-900">
                          {t.selectSubject}
                        </option>
                        <option value="general" className="bg-gray-900">
                          {t.generalInquiry}
                        </option>
                        <option value="exhibitor" className="bg-gray-900">
                          {t.exhibitorInformation}
                        </option>
                        <option value="registration" className="bg-gray-900">
                          {t.registrationHelp}
                        </option>
                        <option value="technical" className="bg-gray-900">
                          {t.technicalSupport}
                        </option>
                        <option value="partnership" className="bg-gray-900">
                          {t.partnershipOpportunities}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                        {t.message} *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                        placeholder={t.messagePlaceholder}
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                        {submitted ? (
                          <>
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                            {t.sendMessage}
                          </>
                        ) : (
                          <>
                            {t.messageSent}
                            <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
              {/* Map/Office Location */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  {t.ourLocation}
                </h2>
                <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4">
                      <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400 mx-auto mb-2 sm:mb-3" />
                      <p className="text-xs sm:text-sm text-gray-300">
                        {t.addressLine1}
                      </p>
                      <p className="text-xs text-gray-500">{t.addressLine2}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">
                      {t.conferenceCenter}
                    </p>
                    <p className="text-sm sm:text-base text-white font-semibold">
                      {t.conferenceCenterName}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-semibold inline-flex items-center gap-1 group"
                  >
                    {t.getDirections}
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Team Contacts */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  {t.directContacts}
                </h2>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {teamContacts.map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 group"
                    >
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base text-white font-semibold truncate">
                          {contact.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2 truncate">
                          {contact.role}
                        </p>
                        <div className="space-y-0.5 sm:space-y-1">
                          <Link
                            href={`mailto:${contact.email}`}
                            className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group/link truncate max-w-full"
                          >
                            <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="truncate">{contact.email}</span>
                          </Link>
                          <br className="hidden sm:block" />
                          <Link
                            href={`tel:${contact.phone}`}
                            className="text-xs sm:text-sm text-gray-400 hover:text-gray-300 inline-flex items-center gap-1"
                          >
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="truncate">{contact.phone}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats/Credibility Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 mb-10 sm:mb-12 md:mb-16 lg:mb-20 px-2 sm:px-0">
            {[
              {
                icon: HeadphonesIcon,
                label: t.support247,
                value: t.submitTicket,
              },
              { icon: Globe, label: t.globalEvents, value: t.countries15 },
              { icon: Users, label: t.happyClients, value: t.clients5000 },
              { icon: Award, label: t.yearsOfExcellence, value: t.years10 },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 lg:p-5 xl:p-6 text-center group hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-8 text-blue-400 mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-bold text-white mb-0.5 sm:mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[9px] sm:text-xs md:text-sm text-gray-400 leading-tight">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="relative mt-10 sm:mt-12 md:mt-14 lg:mt-16 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
            <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>

            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 px-4 sm:px-6 md:px-8 text-center backdrop-blur-sm">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-white/90">
                  {t.medicalConferences}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 px-2">
                {t.transformEventTitle}
              </h4>

              <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg max-w-xl mx-auto px-4 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                {t.transformEventDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  href="/pages/Events"
                  className="group bg-white text-gray-900 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  {t.exploreEvents}
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="../SignIn"
                  className="group border-2 border-white text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  {t.accessPortals}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>
    </>
  );
}