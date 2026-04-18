"use client";

import { useState } from "react";
import {
  User,
  Building,
  Mail,
  Phone,
  MapPin,
  Globe,
  Calendar,
  Users,
  Briefcase,
  Edit2,
  Save,
  X,
  Camera,
  CheckCircle,
  AlertCircle,
  Twitter,
  Instagram,
  Shield,
  FileText,
  Clock,
  Star,
} from "lucide-react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { sponsorProfile } from "../../Data/sponsor-data";

const ProfileContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(sponsorProfile);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setFormData(sponsorProfile);
    setIsEditing(false);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-20 right-3 sm:right-4 z-50 animate-in slide-in-from-top-2 duration-300">
          <div className="bg-emerald-500/90 backdrop-blur-xl text-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-emerald-500/30">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-medium">Profile updated successfully!</span>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-gray-500/10 rounded-full blur-3xl"></div>

        {/* Cover Image */}
        <div className="relative h-24 sm:h-32 bg-gradient-to-r from-cyan-500/20 to-gray-500/20">
          <div className="absolute inset-0 bg-black/30"></div>
          <button className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 p-1.5 sm:p-2 bg-white/10 backdrop-blur-xl rounded-lg border border-white/20 hover:bg-white/20 transition-all">
            <Camera className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="relative px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3 sm:gap-4 -mt-10 sm:-mt-12 mb-4 sm:mb-6">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-600 to-cyan-700 rounded-2xl flex items-center justify-center shadow-xl shadow-cyan-500/30 border-4 border-white/20">
                <span className="text-2xl sm:text-3xl font-bold text-white">PC</span>
              </div>
              <button className="absolute bottom-0 right-0 p-1 sm:p-1.5 bg-white/10 backdrop-blur-xl rounded-lg border border-white/20 hover:bg-white/20 transition-all">
                <Camera className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
              </button>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {formData.companyName}
                </h2>
                <span className="px-2 py-0.5 sm:py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-[10px] sm:text-xs font-medium border border-cyan-500/30 flex items-center gap-1">
                  <Star className="w-2 h-2 sm:w-3 sm:h-3" />
                  Platinum Sponsor
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 flex flex-wrap items-center gap-2">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                Verified Partner • Since {formData.yearEstablished}
              </p>
            </div>
            <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="relative flex-1 sm:flex-none px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-gray-600 to-cyan-700 text-white rounded-lg font-medium text-sm overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    Edit Profile
                  </span>
                </button>
              ) : (
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleSave}
                    className="flex-1 sm:flex-none px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30"
                  >
                    <Save className="w-3 h-3 sm:w-4 sm:h-4" />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 sm:flex-none px-4 sm:px-5 py-2 sm:py-2.5 bg-white/10 text-gray-300 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300 border border-white/10"
                  >
                    <X className="w-3 h-3 sm:w-4 sm:h-4" />
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Company Information */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Company Details */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-4 sm:p-6 border-b border-white/10">
              <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Company Information
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Your company details and registration information
              </p>
            </div>

            <div className="relative p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                    Company Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-white">{formData.companyName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                    Commercial Registration No.
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="commercialRegNo"
                      value={formData.commercialRegNo}
                      onChange={handleChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-white">{formData.commercialRegNo}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                    VAT Number
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="vatNumber"
                      value={formData.vatNumber}
                      onChange={handleChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-white">{formData.vatNumber}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                    Year Established
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="yearEstablished"
                      value={formData.yearEstablished}
                      onChange={handleChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-white">{formData.yearEstablished}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                    Employee Count
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="employeeCount"
                      value={formData.employeeCount}
                      onChange={handleChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-white">{formData.employeeCount}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                    Industry
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-white">{formData.industry}</p>
                  )}
                </div>
              </div>

              <div className="mt-4 sm:mt-5">
                <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                  Company Description
                </label>
                {isEditing ? (
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-all resize-none"
                  />
                ) : (
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {formData.description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative p-4 sm:p-6 border-b border-white/10">
              <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Primary contact details for your organization
              </p>
            </div>

            <div className="relative p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                    Contact Person
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-white">{formData.contactPerson}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-white break-all">{formData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-white">{formData.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                    Alternate Phone
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="alternatePhone"
                      value={formData.alternatePhone}
                      onChange={handleChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-white">{formData.alternatePhone}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                    Website
                  </label>
                  {isEditing ? (
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <a
                      href={`https://${formData.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 break-all"
                    >
                      <Globe className="w-3 h-3 flex-shrink-0" />
                      {formData.website}
                    </a>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                    Address
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-white flex items-start gap-2">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{formData.address}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Additional Info */}
        <div className="space-y-4 sm:space-y-6">
          {/* Social Media Links */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative p-4 sm:p-5 border-b border-white/10">
              <h3 className="text-sm sm:text-base font-semibold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Social Media
              </h3>
            </div>

            <div className="relative p-4 sm:p-5 space-y-2 sm:space-y-3">
              <div className="flex items-center gap-3 p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.socialMedia?.linkedin || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          socialMedia: { ...prev.socialMedia, linkedin: e.target.value },
                        }))
                      }
                      placeholder="LinkedIn handle"
                      className="w-full bg-transparent text-xs sm:text-sm text-white focus:outline-none"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-gray-300 truncate">
                      {formData.socialMedia?.linkedin || "Not provided"}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
                <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.socialMedia?.twitter || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          socialMedia: { ...prev.socialMedia, twitter: e.target.value },
                        }))
                      }
                      placeholder="Twitter handle"
                      className="w-full bg-transparent text-xs sm:text-sm text-white focus:outline-none"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-gray-300 truncate">
                      {formData.socialMedia?.twitter || "Not provided"}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.socialMedia?.instagram || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          socialMedia: { ...prev.socialMedia, instagram: e.target.value },
                        }))
                      }
                      placeholder="Instagram handle"
                      className="w-full bg-transparent text-xs sm:text-sm text-white focus:outline-none"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-gray-300 truncate">
                      {formData.socialMedia?.instagram || "Not provided"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Verification Status */}
          <div className="relative bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-emerald-500/30 overflow-hidden">
            <div className="relative p-4 sm:p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-1.5 sm:p-2 bg-emerald-500/20 rounded-lg">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white">Verification Status</h4>
                  <p className="text-[10px] sm:text-xs text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3" />
                    Fully Verified
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-[10px] sm:text-xs text-gray-300">
                <div className="flex justify-between items-center">
                  <span>Commercial Registration</span>
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="flex justify-between items-center">
                  <span>VAT Certificate</span>
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Bank Account</span>
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden">
            <div className="relative p-4 sm:p-5 text-center">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-[10px] sm:text-xs text-gray-400">Last Profile Update</p>
              <p className="text-xs sm:text-sm text-white font-medium">February 10, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="relative bg-cyan-500/10 backdrop-blur-xl rounded-xl p-4 sm:p-5 border border-cyan-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-gray-500/5"></div>
        <div className="relative flex flex-col sm:flex-row items-start gap-3">
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1">Need to Update Official Documents?</h4>
            <p className="text-xs sm:text-sm text-gray-300">
              For changes to legal documents or registration information, please contact your sponsor
              relation manager at{" "}
              <a
                href="mailto:sponsor-relations@event.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                sponsor-relations@event.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;