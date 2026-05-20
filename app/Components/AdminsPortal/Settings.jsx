"use client";

import { useState } from "react";
import {
  Settings,
  Globe,
  Bell,
  Shield,
  Mail,
  CreditCard,
  Database,
  Users,
  Building2,
  Calendar,
  Clock,
  DollarSign,
  Lock,
  Key,
  Smartphone,
  Languages,
  Save,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff,
  Plus,
  Trash2,
  Edit,
  X,
  ChevronRight,
  Zap,
  Server,
  FileText,
  Printer,
  Moon,
  Sun,
  Monitor,
} from "lucide-react";

export default function SystemSettings() {
  const [activeTab, setActiveTab] = useState("general");
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  // General Settings
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "HPQL Portal",
    siteDescription: "Healthcare Event Management Platform",
    dateFormat: "YYYY-MM-DD",
    timeFormat: "24h",
    language: "en",
    maintenanceMode: false,
  });

  // Event Settings
  const [eventSettings, setEventSettings] = useState({
    maxExhibitors: 500,
    maxSponsors: 100,
    maxPractitioners: 2000,
    earlyBirdDeadline: "2026-08-01",
    registrationDeadline: "2026-10-15",
    enableWaitlist: true,
    autoApproveExhibitors: false,
    cpdPointsEnabled: true,
  });

  // Notification Settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    notifyOnBooking: true,
    notifyOnPayment: true,
    notifyOnRegistration: true,
    notifyOnCpdEarned: true,
    adminDigest: "daily",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [newIp, setNewIp] = useState("");
  const [newGateway, setNewGateway] = useState("");

  const handleSave = () => {
    setSaveLoading(true);
    setTimeout(() => {
      setSaveLoading(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1000);
  };


  const tabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "event", label: "Events", icon: Calendar },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            System Settings
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage system configuration and portal settings
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            disabled={saveLoading}
            className="relative px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium flex items-center gap-2 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            {saveLoading ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            <span>Save Changes</span>
          </button>
          {saveSuccess && (
            <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/20 rounded-xl border border-emerald-500/30 animate-in fade-in slide-in-from-right-5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-emerald-400">Settings saved!</span>
            </div>
          )}
        </div>
      </div>

      {/* Settings Container */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

        {/* Tabs */}
        <div className="relative border-b border-white/10 overflow-x-auto">
          <div className="flex px-4 gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-3 text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap rounded-t-xl ${
                    isActive
                      ? "text-blue-400 border-b-2 border-blue-400 bg-blue-500/5"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Settings Content */}
        <div className="relative p-6">
          {/* General Settings */}
          {activeTab === "general" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  General Configuration
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Site Name</label>
                    <input
                      type="text"
                      value={generalSettings.siteName}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Site Description</label>
                    <textarea
                      rows={2}
                      value={generalSettings.siteDescription}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, siteDescription: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 resize-none"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <p className="text-sm font-medium text-white">Maintenance Mode</p>
                      <p className="text-xs text-gray-400">Put the portal in maintenance mode</p>
                    </div>
                    <button
                      onClick={() => setGeneralSettings({ ...generalSettings, maintenanceMode: !generalSettings.maintenanceMode })}
                      className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                        generalSettings.maintenanceMode ? "bg-amber-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
                          generalSettings.maintenanceMode ? "right-0.5" : "left-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Event Settings */}
          {activeTab === "event" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  Event Configuration
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Max Exhibitors</label>
                      <input
                        type="number"
                        value={eventSettings.maxExhibitors}
                        onChange={(e) => setEventSettings({ ...eventSettings, maxExhibitors: parseInt(e.target.value) })}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Max Sponsors</label>
                      <input
                        type="number"
                        value={eventSettings.maxSponsors}
                        onChange={(e) => setEventSettings({ ...eventSettings, maxSponsors: parseInt(e.target.value) })}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Max Practitioners</label>
                    <input
                      type="number"
                      value={eventSettings.maxPractitioners}
                      onChange={(e) => setEventSettings({ ...eventSettings, maxPractitioners: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Early Bird Deadline</label>
                      <input
                        type="date"
                        value={eventSettings.earlyBirdDeadline}
                        onChange={(e) => setEventSettings({ ...eventSettings, earlyBirdDeadline: e.target.value })}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Registration Deadline</label>
                      <input
                        type="date"
                        value={eventSettings.registrationDeadline}
                        onChange={(e) => setEventSettings({ ...eventSettings, registrationDeadline: e.target.value })}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <p className="text-sm font-medium text-white">Enable Waitlist</p>
                      <p className="text-xs text-gray-400">Allow users to join waitlist when full</p>
                    </div>
                    <button
                      onClick={() => setEventSettings({ ...eventSettings, enableWaitlist: !eventSettings.enableWaitlist })}
                      className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                        eventSettings.enableWaitlist ? "bg-emerald-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
                          eventSettings.enableWaitlist ? "right-0.5" : "left-0.5"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <p className="text-sm font-medium text-white">Auto-approve Exhibitors</p>
                      <p className="text-xs text-gray-400">Automatically approve exhibitor registrations</p>
                    </div>
                    <button
                      onClick={() => setEventSettings({ ...eventSettings, autoApproveExhibitors: !eventSettings.autoApproveExhibitors })}
                      className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                        eventSettings.autoApproveExhibitors ? "bg-emerald-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
                          eventSettings.autoApproveExhibitors ? "right-0.5" : "left-0.5"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <p className="text-sm font-medium text-white">Enable CPD Points</p>
                      <p className="text-xs text-gray-400">Track and award CPD points to practitioners</p>
                    </div>
                    <button
                      onClick={() => setEventSettings({ ...eventSettings, cpdPointsEnabled: !eventSettings.cpdPointsEnabled })}
                      className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                        eventSettings.cpdPointsEnabled ? "bg-emerald-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
                          eventSettings.cpdPointsEnabled ? "right-0.5" : "left-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === "notifications" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-blue-400" />
                  Notification Preferences
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <p className="text-sm font-medium text-white">Email Notifications</p>
                      <p className="text-xs text-gray-400">Send email notifications to users</p>
                    </div>
                    <button
                      onClick={() => setNotificationSettings({ ...notificationSettings, emailNotifications: !notificationSettings.emailNotifications })}
                      className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                        notificationSettings.emailNotifications ? "bg-emerald-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
                          notificationSettings.emailNotifications ? "right-0.5" : "left-0.5"
                        }`}
                      />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <p className="text-sm font-medium text-white">Push Notifications</p>
                      <p className="text-xs text-gray-400">Send in-app push notifications</p>
                    </div>
                    <button
                      onClick={() => setNotificationSettings({ ...notificationSettings, pushNotifications: !notificationSettings.pushNotifications })}
                      className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                        notificationSettings.pushNotifications ? "bg-emerald-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
                          notificationSettings.pushNotifications ? "right-0.5" : "left-0.5"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm font-medium text-gray-300 mb-3">Trigger Events</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">New Booking</span>
                        <button
                          onClick={() => setNotificationSettings({ ...notificationSettings, notifyOnBooking: !notificationSettings.notifyOnBooking })}
                          className={`relative w-10 h-5 rounded-full transition-all duration-300 ${
                            notificationSettings.notifyOnBooking ? "bg-emerald-500" : "bg-white/20"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
                              notificationSettings.notifyOnBooking ? "right-0.5" : "left-0.5"
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Payment Received</span>
                        <button
                          onClick={() => setNotificationSettings({ ...notificationSettings, notifyOnPayment: !notificationSettings.notifyOnPayment })}
                          className={`relative w-10 h-5 rounded-full transition-all duration-300 ${
                            notificationSettings.notifyOnPayment ? "bg-emerald-500" : "bg-white/20"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
                              notificationSettings.notifyOnPayment ? "right-0.5" : "left-0.5"
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">User Registration</span>
                        <button
                          onClick={() => setNotificationSettings({ ...notificationSettings, notifyOnRegistration: !notificationSettings.notifyOnRegistration })}
                          className={`relative w-10 h-5 rounded-full transition-all duration-300 ${
                            notificationSettings.notifyOnRegistration ? "bg-emerald-500" : "bg-white/20"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
                              notificationSettings.notifyOnRegistration ? "right-0.5" : "left-0.5"
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">CPD Points Earned</span>
                        <button
                          onClick={() => setNotificationSettings({ ...notificationSettings, notifyOnCpdEarned: !notificationSettings.notifyOnCpdEarned })}
                          className={`relative w-10 h-5 rounded-full transition-all duration-300 ${
                            notificationSettings.notifyOnCpdEarned ? "bg-emerald-500" : "bg-white/20"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
                              notificationSettings.notifyOnCpdEarned ? "right-0.5" : "left-0.5"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Admin Digest Frequency</label>
                    <select
                      value={notificationSettings.adminDigest}
                      onChange={(e) => setNotificationSettings({ ...notificationSettings, adminDigest: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="never">Never</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}