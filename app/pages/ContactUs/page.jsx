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
  ArrowRight,
  CheckCircle,
  Globe,
  Award,
  HeadphonesIcon,
} from "lucide-react";
import BreadCrumb from "../../Components/BreadCrum";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+966 (11) 456-7890",
      subdetails: "Sun-Thu, 9:00 AM - 6:00 PM",
      color: "from-blue-500 to-cyan-400",
      action: "tel:+966114567890",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@medconfksa.sa",
      subdetails: "support@medconfksa.sa",
      color: "from-purple-500 to-pink-400",
      action: "mailto:info@medconfksa.sa",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "King Abdullah Financial District",
      subdetails: "Riyadh 13519, Saudi Arabia",
      color: "from-amber-500 to-orange-400",
      action: "#",
    },
  ];

  const teamContacts = [
    {
      name: "Dr. Abdullah Al-Saud",
      role: "Conference Director",
      email: "a.alsaud@medconfksa.sa",
      phone: "+966 50 123 4567",
      image: "/Images/team/placeholder-1.jpg", 
    },
    {
      name: "Sarah Al-Otaibi",
      role: "Exhibitor Relations",
      email: "s.alotaibi@medconfksa.sa",
      phone: "+966 50 234 5678",
      image: "/Images/team/placeholder-2.jpg", 
    },
    {
      name: "Mohammed Al-Qahtani",
      role: "Technical Support",
      email: "m.alqahtani@medconfksa.sa",
      phone: "+966 50 345 6789",
      image: "/Images/team/placeholder-3.jpg", 
    },
  ];

  const faqs = [
    {
      question: "How do I register for an event?",
      answer: "You can register through our Visitor Portal. Early bird registration opens 3 months before each event.",
    },
    {
      question: "What are the exhibition space rates?",
      answer: "Exhibition space rates vary based on location and size. Please contact our exhibitor relations team for a customized quote.",
    },
    {
      question: "How does SCFHS verification work?",
      answer: "Healthcare practitioners can upload their licenses through our secure portal. Verification typically takes 24-48 hours.",
    },
  ];

  return (
    <>
    <BreadCrumb  
        title="Contact Us"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{label:"Contact Us "}]}
      />
    <section className="relative min-h-screen py-15 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <MessageSquare className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium text-gray-300">Get in Touch</span>
          </div>

          {/* Main title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Let's</span> {""}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          {/* Description */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Have questions about our events, portals, or services? Our team is here to help you every step of the way.
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Link
                key={index}
                href={info.action}
                className="group relative"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  
                  {/* Gradient hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <div className="relative w-14 h-14 rounded-xl flex items-center justify-center border border-white/20 bg-white/10">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-gray-300 mb-1">{info.details}</p>
                  <p className="text-sm text-gray-500">{info.subdetails}</p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        placeholder="+966 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    >
                      <option value="" className="bg-gray-900">Select a subject</option>
                      <option value="general" className="bg-gray-900">General Inquiry</option>
                      <option value="exhibitor" className="bg-gray-900">Exhibitor Information</option>
                      <option value="registration" className="bg-gray-900">Registration Help</option>
                      <option value="technical" className="bg-gray-900">Technical Support</option>
                      <option value="partnership" className="bg-gray-900">Partnership Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {submitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Map/Office Location */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Our Location</h2>
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative group">
                {/* Placeholder for actual map - replace with Google Maps embed or image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                    <p className="text-gray-300">King Abdullah Financial District</p>
                    <p className="text-sm text-gray-500">Riyadh, Saudi Arabia</p>
                  </div>
                </div>
                
                {/* Map overlay effect */}
              </div>
              
              <div className="mt-6 flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">Conference Center</p>
                  <p className="text-white font-semibold">Riyadh International Convention Center</p>
                </div>
                <Link
                  href="#"
                  className="text-blue-400 hover:text-blue-300 text-sm font-semibold inline-flex items-center gap-1 group"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Team Contacts */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Direct Contacts</h2>
              <div className="space-y-6">
                {teamContacts.map((contact, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    {/* Avatar placeholder */}
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{contact.name}</h3>
                      <p className="text-sm text-gray-400 mb-2">{contact.role}</p>
                      <div className="space-y-1">
                        <Link href={`mailto:${contact.email}`} className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group/link">
                          <Mail className="w-3 h-3" />
                          {contact.email}
                        </Link>
                        <br />
                        <Link href={`tel:${contact.phone}`} className="text-sm text-gray-400 hover:text-gray-300 inline-flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {contact.phone}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: HeadphonesIcon, label: "24/7 Support", value: "Live Chat" },
            { icon: Globe, label: "Global Events", value: "15+ Countries" },
            { icon: Users, label: "Happy Clients", value: "5000+" },
            { icon: Award, label: "Years of Excellence", value: "10+ Years" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
          </div>
          
          <div className="relative py-16 px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Healthcare Event?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Join hundreds of healthcare professionals who trust us for world-class medical conferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/NavBar-Links/NavEvents"
                className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore Events
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/pages/NavBar-Links/NavPortals"
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
              >
                Access Portals
                <Shield className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section></>
  );
}