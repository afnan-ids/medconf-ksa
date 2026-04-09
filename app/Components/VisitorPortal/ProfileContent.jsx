"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Shield,
  Edit2,
  X,
  Check,
  Award,
  Calendar,
  CreditCard,
  Building,
  Globe,
  Save,
} from "lucide-react";
import { visitorProfile } from "../../Data/visitor-data";

const ProfileContent = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [profile, setProfile] = useState(visitorProfile);
  const [editForm, setEditForm] = useState({ ...visitorProfile });
  const [isSaving, setIsSaving] = useState(false);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setProfile({ ...editForm });
      setIsSaving(false);
      setShowEditModal(false);
    }, 1000);
  };

  const InfoRow = ({ icon: Icon, label, value }) => (
    <div className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="p-1.5 bg-blue-500/20 rounded-lg">
          <Icon className="w-4 h-4 text-blue-400" />
        </div>
        <div className="flex-1">
          <p className="text-xs text-gray-400">{label}</p>
          <p className="text-sm font-medium text-white">{value || "—"}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Main Profile Card - Glassmorphism */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg shadow-lg shadow-blue-500/30">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Visitor Profile
                </h2>
                <p className="text-sm text-gray-300 mt-0.5 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  Verified Attendee • {profile.ticketType}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowEditModal(true)}
              className="relative px-5 py-2.5 bg-gradient-to-br from-purple-500 to-pink-400 text-white rounded-lg cursor-pointer flex items-center gap-2 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <Edit2 className="w-4 h-4" />
                Edit Profile
              </span>
            </button>
          </div>
        </div>

        {/* Profile Content */}
        <div className="relative p-6">
          {/* Avatar & Basic Info */}
          <div className="flex flex-col md:flex-row gap-6 mb-6 pb-6 border-b border-white/10">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white text-2xl font-bold">
                  {profile.firstName[0]}{profile.lastName[0]}
                </span>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">
                {profile.title} {profile.firstName} {profile.lastName}
              </h3>
              <p className="text-blue-400 mt-1">{profile.role}</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-3">
                <div className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span className="text-xs text-gray-300">VIP Pass</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full">
                  <Calendar className="w-3 h-3 text-blue-400" />
                  <span className="text-xs text-gray-300">Registered: 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <InfoRow icon={User} label="Full Name" value={`${profile.title} ${profile.firstName} ${profile.lastName}`} />
            <InfoRow icon={Mail} label="Email Address" value={profile.email} />
            <InfoRow icon={Phone} label="Mobile Number" value={profile.phone} />
            <InfoRow icon={Globe} label="Nationality" value={profile.nationality} />
            <InfoRow icon={Building} label="Organization" value={profile.organization} />
            <InfoRow icon={Briefcase} label="Professional Role" value={profile.role} />
            <InfoRow icon={CreditCard} label="Registration ID" value={profile.registrationId} />
            <InfoRow icon={Shield} label="License ID" value={profile.licenseId} />
          </div>

          {/* Ticket Type Banner */}
          <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/30">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">Ticket Information</p>
                <p className="text-xs text-gray-300 mt-0.5">
                  You have <span className="text-amber-400 font-medium">{profile.ticketType}</span>. 
                  This grants you access to all conference sessions, VIP lounge, networking events, 
                  and complimentary meals throughout the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal - Glassmorphism */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowEditModal(false)}
          />
          <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20">
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="relative p-6 border-b border-white/10 sticky top-0 bg-white/5 backdrop-blur-xl z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Edit Profile
                </h2>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="p-1 rounded-lg transition-all duration-300 hover:bg-white/10 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative p-6">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Title</label>
                    <select
                      name="title"
                      value={editForm.title}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50"
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Dr.">Dr.</option>
                      <option value="Prof.">Prof.</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={editForm.firstName}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={editForm.lastName}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={editForm.email}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={editForm.phone}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Nationality</label>
                    <select
                      name="nationality"
                      value={editForm.nationality}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50"
                    >
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="UAE">UAE</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Organization</label>
                    <input
                      type="text"
                      name="organization"
                      value={editForm.organization}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Professional Role</label>
                    <select
                      name="role"
                      value={editForm.role}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50"
                    >
                      <option value="Physician">Physician</option>
                      <option value="Pharmacist">Pharmacist</option>
                      <option value="Nurse">Nurse</option>
                      <option value="Researcher">Researcher</option>
                      <option value="Student">Student</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">License ID</label>
                    <input
                      type="text"
                      name="licenseId"
                      value={editForm.licenseId}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 bg-white/5 rounded-lg border border-white/10 mt-2">
                  <input
                    type="checkbox"
                    id="pdpl"
                    className="rounded text-blue-500 mt-0.5"
                    defaultChecked
                  />
                  <label htmlFor="pdpl" className="text-xs text-gray-300">
                    I consent to data processing in accordance with PDPL regulations
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex-1 py-2.5 bg-gradient-to-br from-purple-500 to-pink-400 text-white rounded-lg font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSaving ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Save Changes
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setShowEditModal(false)}
                    className="px-6 py-2.5 rounded-lg border border-white/20 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileContent;