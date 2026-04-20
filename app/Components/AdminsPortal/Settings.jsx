// "use client";

// import { useState } from "react";
// import {
//   Settings,
//   Globe,
//   Bell,
//   Shield,
//   Mail,
//   CreditCard,
//   Database,
//   Users,
//   Building2,
//   Calendar,
//   Clock,
//   DollarSign,
//   Lock,
//   Key,
//   Smartphone,
//   Languages,
//   Save,
//   RefreshCw,
//   CheckCircle,
//   AlertCircle,
//   Eye,
//   EyeOff,
//   Plus,
//   Trash2,
//   Edit,
//   X,
//   ChevronRight,
//   Zap,
//   Server,
//   FileText,
//   Printer,
//   Moon,
//   Sun,
//   Monitor,
// } from "lucide-react";

// export default function SystemSettings() {
//   const [activeTab, setActiveTab] = useState("general");
//   const [saveSuccess, setSaveSuccess] = useState(false);
//   const [saveLoading, setSaveLoading] = useState(false);

//   // General Settings
//   const [generalSettings, setGeneralSettings] = useState({
//     siteName: "MedConf Portal",
//     siteDescription: "Healthcare Event Management Platform",
//     timezone: "Asia/Riyadh",
//     dateFormat: "YYYY-MM-DD",
//     timeFormat: "24h",
//     language: "en",
//     maintenanceMode: false,
//   });

//   // Email Settings
//   const [emailSettings, setEmailSettings] = useState({
//     smtpHost: "smtp.gmail.com",
//     smtpPort: "587",
//     smtpUser: "noreply@medconf.com",
//     smtpPassword: "********",
//     encryption: "TLS",
//     fromEmail: "noreply@medconf.com",
//     fromName: "MedConf System",
//     emailVerification: true,
//     notificationEmail: "admin@medconf.com",
//   });

//   // Security Settings
//   const [securitySettings, setSecuritySettings] = useState({
//     twoFactorAuth: false,
//     sessionTimeout: 60,
//     passwordExpiry: 90,
//     maxLoginAttempts: 5,
//     ipWhitelist: ["192.168.1.1", "10.0.0.1"],
//     forceStrongPassword: true,
//     auditLogRetention: 90,
//   });

//   // Payment Settings
//   const [paymentSettings, setPaymentSettings] = useState({
//     currency: "USD",
//     taxRate: 15,
//     enableOnlinePayments: true,
//     paymentGateways: ["stripe", "paypal"],
//     stripeKey: "pk_test_xxxxxxxx",
//     stripeSecret: "sk_test_xxxxxxxx",
//     paypalClientId: "xxxxxxxx",
//     invoicePrefix: "INV",
//     autoGenerateInvoice: true,
//   });

//   // Event Settings
//   const [eventSettings, setEventSettings] = useState({
//     maxExhibitors: 500,
//     maxSponsors: 100,
//     maxPractitioners: 2000,
//     earlyBirdDeadline: "2026-08-01",
//     registrationDeadline: "2026-10-15",
//     enableWaitlist: true,
//     autoApproveExhibitors: false,
//     cpdPointsEnabled: true,
//   });

//   // Notification Settings
//   const [notificationSettings, setNotificationSettings] = useState({
//     emailNotifications: true,
//     smsNotifications: false,
//     pushNotifications: true,
//     notifyOnBooking: true,
//     notifyOnPayment: true,
//     notifyOnRegistration: true,
//     notifyOnCpdEarned: true,
//     adminDigest: "daily",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [newIp, setNewIp] = useState("");
//   const [newGateway, setNewGateway] = useState("");

//   const handleSave = () => {
//     setSaveLoading(true);
//     setTimeout(() => {
//       setSaveLoading(false);
//       setSaveSuccess(true);
//       setTimeout(() => setSaveSuccess(false), 3000);
//     }, 1000);
//   };

//   const addIpAddress = () => {
//     if (newIp && !securitySettings.ipWhitelist.includes(newIp)) {
//       setSecuritySettings({
//         ...securitySettings,
//         ipWhitelist: [...securitySettings.ipWhitelist, newIp],
//       });
//       setNewIp("");
//     }
//   };

//   const removeIpAddress = (ip) => {
//     setSecuritySettings({
//       ...securitySettings,
//       ipWhitelist: securitySettings.ipWhitelist.filter((i) => i !== ip),
//     });
//   };

//   const addPaymentGateway = () => {
//     if (newGateway && !paymentSettings.paymentGateways.includes(newGateway)) {
//       setPaymentSettings({
//         ...paymentSettings,
//         paymentGateways: [...paymentSettings.paymentGateways, newGateway],
//       });
//       setNewGateway("");
//     }
//   };

//   const removePaymentGateway = (gateway) => {
//     setPaymentSettings({
//       ...paymentSettings,
//       paymentGateways: paymentSettings.paymentGateways.filter((g) => g !== gateway),
//     });
//   };

//   const tabs = [
//     { id: "general", label: "General", icon: Settings, color: "indigo" },
//     { id: "email", label: "Email", icon: Mail, color: "blue" },
//     { id: "security", label: "Security", icon: Shield, color: "red" },
//     { id: "payment", label: "Payments", icon: CreditCard, color: "emerald" },
//     { id: "event", label: "Events", icon: Calendar, color: "purple" },
//     { id: "notifications", label: "Notifications", icon: Bell, color: "amber" },
//   ];

//   return (
//     <div className="space-y-6">
//       {/* Page Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
//             System Settings
//           </h1>
//           <p className="text-sm text-gray-400 mt-1">
//             Manage system configuration and portal settings
//           </p>
//         </div>
//         <div className="flex items-center gap-2">
//           <button
//             onClick={handleSave}
//             disabled={saveLoading}
//             className="relative px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium flex items-center gap-2 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 disabled:opacity-50"
//           >
//             <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
//             {saveLoading ? (
//               <RefreshCw className="w-4 h-4 animate-spin" />
//             ) : (
//               <Save className="w-4 h-4" />
//             )}
//             <span>Save Changes</span>
//           </button>
//           {saveSuccess && (
//             <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30 animate-in fade-in slide-in-from-right-5">
//               <CheckCircle className="w-4 h-4 text-emerald-400" />
//               <span className="text-xs text-emerald-400">Settings saved!</span>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Settings Container */}
//       <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
//         <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
//         <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

//         {/* Tabs */}
//         <div className="relative border-b border-white/10 overflow-x-auto">
//           <div className="flex px-4 gap-1">
//             {tabs.map((tab) => {
//               const Icon = tab.icon;
//               const isActive = activeTab === tab.id;
//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`px-5 py-3 text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
//                     isActive
//                       ? `text-${tab.color}-400 border-b-2 border-${tab.color}-400 bg-${tab.color}-500/5`
//                       : "text-gray-400 hover:text-white hover:bg-white/5"
//                   }`}
//                 >
//                   <Icon className="w-4 h-4" />
//                   {tab.label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Settings Content */}
//         <div className="relative p-6">
//           {/* General Settings */}
//           {activeTab === "general" && (
//             <div className="space-y-6 max-w-2xl">
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
//                   <Globe className="w-5 h-5 text-indigo-400" />
//                   General Configuration
//                 </h3>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1">Site Name</label>
//                     <input
//                       type="text"
//                       value={generalSettings.siteName}
//                       onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
//                       className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1">Site Description</label>
//                     <textarea
//                       rows={2}
//                       value={generalSettings.siteDescription}
//                       onChange={(e) => setGeneralSettings({ ...generalSettings, siteDescription: e.target.value })}
//                       className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 resize-none"
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">Timezone</label>
//                       <select
//                         value={generalSettings.timezone}
//                         onChange={(e) => setGeneralSettings({ ...generalSettings, timezone: e.target.value })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       >
//                         <option value="Asia/Riyadh">Asia/Riyadh (GMT+3)</option>
//                         <option value="Asia/Dubai">Asia/Dubai (GMT+4)</option>
//                         <option value="UTC">UTC</option>
//                         <option value="America/New_York">America/New_York</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">Language</label>
//                       <select
//                         value={generalSettings.language}
//                         onChange={(e) => setGeneralSettings({ ...generalSettings, language: e.target.value })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       >
//                         <option value="en">English</option>
//                         <option value="ar">العربية (Arabic)</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
//                     <div>
//                       <p className="text-sm font-medium text-white">Maintenance Mode</p>
//                       <p className="text-xs text-gray-400">Put the portal in maintenance mode</p>
//                     </div>
//                     <button
//                       onClick={() => setGeneralSettings({ ...generalSettings, maintenanceMode: !generalSettings.maintenanceMode })}
//                       className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
//                         generalSettings.maintenanceMode ? "bg-amber-500" : "bg-white/20"
//                       }`}
//                     >
//                       <div
//                         className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
//                           generalSettings.maintenanceMode ? "right-0.5" : "left-0.5"
//                         }`}
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Email Settings */}
//           {activeTab === "email" && (
//             <div className="space-y-6 max-w-2xl">
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
//                   <Mail className="w-5 h-5 text-blue-400" />
//                   SMTP Configuration
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">SMTP Host</label>
//                       <input
//                         type="text"
//                         value={emailSettings.smtpHost}
//                         onChange={(e) => setEmailSettings({ ...emailSettings, smtpHost: e.target.value })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">SMTP Port</label>
//                       <input
//                         type="text"
//                         value={emailSettings.smtpPort}
//                         onChange={(e) => setEmailSettings({ ...emailSettings, smtpPort: e.target.value })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       />
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">SMTP Username</label>
//                       <input
//                         type="text"
//                         value={emailSettings.smtpUser}
//                         onChange={(e) => setEmailSettings({ ...emailSettings, smtpUser: e.target.value })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">SMTP Password</label>
//                       <div className="relative">
//                         <input
//                           type={showPassword ? "text" : "password"}
//                           value={emailSettings.smtpPassword}
//                           onChange={(e) => setEmailSettings({ ...emailSettings, smtpPassword: e.target.value })}
//                           className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 pr-10"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowPassword(!showPassword)}
//                           className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
//                         >
//                           {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1">Encryption</label>
//                     <select
//                       value={emailSettings.encryption}
//                       onChange={(e) => setEmailSettings({ ...emailSettings, encryption: e.target.value })}
//                       className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                     >
//                       <option value="TLS">TLS</option>
//                       <option value="SSL">SSL</option>
//                       <option value="None">None</option>
//                     </select>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">From Email</label>
//                       <input
//                         type="email"
//                         value={emailSettings.fromEmail}
//                         onChange={(e) => setEmailSettings({ ...emailSettings, fromEmail: e.target.value })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">From Name</label>
//                       <input
//                         type="text"
//                         value={emailSettings.fromName}
//                         onChange={(e) => setEmailSettings({ ...emailSettings, fromName: e.target.value })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
//                     <div>
//                       <p className="text-sm font-medium text-white">Email Verification Required</p>
//                       <p className="text-xs text-gray-400">Require email verification for new users</p>
//                     </div>
//                     <button
//                       onClick={() => setEmailSettings({ ...emailSettings, emailVerification: !emailSettings.emailVerification })}
//                       className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
//                         emailSettings.emailVerification ? "bg-emerald-500" : "bg-white/20"
//                       }`}
//                     >
//                       <div
//                         className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
//                           emailSettings.emailVerification ? "right-0.5" : "left-0.5"
//                         }`}
//                       />
//                     </button>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1">Admin Notification Email</label>
//                     <input
//                       type="email"
//                       value={emailSettings.notificationEmail}
//                       onChange={(e) => setEmailSettings({ ...emailSettings, notificationEmail: e.target.value })}
//                       className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Security Settings */}
//           {activeTab === "security" && (
//             <div className="space-y-6 max-w-2xl">
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
//                   <Shield className="w-5 h-5 text-red-400" />
//                   Security Configuration
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
//                     <div>
//                       <p className="text-sm font-medium text-white">Two-Factor Authentication</p>
//                       <p className="text-xs text-gray-400">Require 2FA for admin accounts</p>
//                     </div>
//                     <button
//                       onClick={() => setSecuritySettings({ ...securitySettings, twoFactorAuth: !securitySettings.twoFactorAuth })}
//                       className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
//                         securitySettings.twoFactorAuth ? "bg-emerald-500" : "bg-white/20"
//                       }`}
//                     >
//                       <div
//                         className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
//                           securitySettings.twoFactorAuth ? "right-0.5" : "left-0.5"
//                         }`}
//                       />
//                     </button>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
//                     <div>
//                       <p className="text-sm font-medium text-white">Force Strong Passwords</p>
//                       <p className="text-xs text-gray-400">Require complex passwords for all users</p>
//                     </div>
//                     <button
//                       onClick={() => setSecuritySettings({ ...securitySettings, forceStrongPassword: !securitySettings.forceStrongPassword })}
//                       className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
//                         securitySettings.forceStrongPassword ? "bg-emerald-500" : "bg-white/20"
//                       }`}
//                     >
//                       <div
//                         className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
//                           securitySettings.forceStrongPassword ? "right-0.5" : "left-0.5"
//                         }`}
//                       />
//                     </button>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">Session Timeout (minutes)</label>
//                       <input
//                         type="number"
//                         value={securitySettings.sessionTimeout}
//                         onChange={(e) => setSecuritySettings({ ...securitySettings, sessionTimeout: parseInt(e.target.value) })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">Password Expiry (days)</label>
//                       <input
//                         type="number"
//                         value={securitySettings.passwordExpiry}
//                         onChange={(e) => setSecuritySettings({ ...securitySettings, passwordExpiry: parseInt(e.target.value) })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1">Max Login Attempts</label>
//                     <input
//                       type="number"
//                       value={securitySettings.maxLoginAttempts}
//                       onChange={(e) => setSecuritySettings({ ...securitySettings, maxLoginAttempts: parseInt(e.target.value) })}
//                       className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1">Audit Log Retention (days)</label>
//                     <input
//                       type="number"
//                       value={securitySettings.auditLogRetention}
//                       onChange={(e) => setSecuritySettings({ ...securitySettings, auditLogRetention: parseInt(e.target.value) })}
//                       className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-2">IP Whitelist</label>
//                     <div className="flex gap-2 mb-3">
//                       <input
//                         type="text"
//                         placeholder="Enter IP address"
//                         value={newIp}
//                         onChange={(e) => setNewIp(e.target.value)}
//                         className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       />
//                       <button
//                         onClick={addIpAddress}
//                         className="px-4 py-2 bg-white/10 rounded-lg text-gray-300 hover:bg-white/20 transition-all"
//                       >
//                         <Plus className="w-4 h-4" />
//                       </button>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {securitySettings.ipWhitelist.map((ip) => (
//                         <span key={ip} className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-500/20 rounded-lg text-xs text-indigo-400">
//                           {ip}
//                           <button onClick={() => removeIpAddress(ip)} className="hover:text-white">
//                             <X className="w-3 h-3" />
//                           </button>
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Payment Settings */}
//           {activeTab === "payment" && (
//             <div className="space-y-6 max-w-2xl">
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
//                   <CreditCard className="w-5 h-5 text-emerald-400" />
//                   Payment Configuration
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">Currency</label>
//                       <select
//                         value={paymentSettings.currency}
//                         onChange={(e) => setPaymentSettings({ ...paymentSettings, currency: e.target.value })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       >
//                         <option value="USD">USD - US Dollar</option>
//                         <option value="EUR">EUR - Euro</option>
//                         <option value="SAR">SAR - Saudi Riyal</option>
//                         <option value="AED">AED - UAE Dirham</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">Tax Rate (%)</label>
//                       <input
//                         type="number"
//                         value={paymentSettings.taxRate}
//                         onChange={(e) => setPaymentSettings({ ...paymentSettings, taxRate: parseInt(e.target.value) })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
//                     <div>
//                       <p className="text-sm font-medium text-white">Enable Online Payments</p>
//                       <p className="text-xs text-gray-400">Accept online payments through gateways</p>
//                     </div>
//                     <button
//                       onClick={() => setPaymentSettings({ ...paymentSettings, enableOnlinePayments: !paymentSettings.enableOnlinePayments })}
//                       className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
//                         paymentSettings.enableOnlinePayments ? "bg-emerald-500" : "bg-white/20"
//                       }`}
//                     >
//                       <div
//                         className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
//                           paymentSettings.enableOnlinePayments ? "right-0.5" : "left-0.5"
//                         }`}
//                       />
//                     </button>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-2">Payment Gateways</label>
//                     <div className="flex gap-2 mb-3">
//                       <input
//                         type="text"
//                         placeholder="Gateway name"
//                         value={newGateway}
//                         onChange={(e) => setNewGateway(e.target.value)}
//                         className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       />
//                       <button
//                         onClick={addPaymentGateway}
//                         className="px-4 py-2 bg-white/10 rounded-lg text-gray-300 hover:bg-white/20 transition-all"
//                       >
//                         <Plus className="w-4 h-4" />
//                       </button>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {paymentSettings.paymentGateways.map((gateway) => (
//                         <span key={gateway} className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500/20 rounded-lg text-xs text-emerald-400">
//                           {gateway}
//                           <button onClick={() => removePaymentGateway(gateway)} className="hover:text-white">
//                             <X className="w-3 h-3" />
//                           </button>
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1">Stripe Publishable Key</label>
//                     <input
//                       type="text"
//                       value={paymentSettings.stripeKey}
//                       onChange={(e) => setPaymentSettings({ ...paymentSettings, stripeKey: e.target.value })}
//                       className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1">Stripe Secret Key</label>
//                     <input
//                       type="password"
//                       value={paymentSettings.stripeSecret}
//                       onChange={(e) => setPaymentSettings({ ...paymentSettings, stripeSecret: e.target.value })}
//                       className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                     />
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
//                     <div>
//                       <p className="text-sm font-medium text-white">Auto-generate Invoices</p>
//                       <p className="text-xs text-gray-400">Automatically generate invoices for bookings</p>
//                     </div>
//                     <button
//                       onClick={() => setPaymentSettings({ ...paymentSettings, autoGenerateInvoice: !paymentSettings.autoGenerateInvoice })}
//                       className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
//                         paymentSettings.autoGenerateInvoice ? "bg-emerald-500" : "bg-white/20"
//                       }`}
//                     >
//                       <div
//                         className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
//                           paymentSettings.autoGenerateInvoice ? "right-0.5" : "left-0.5"
//                         }`}
//                       />
//                     </button>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1">Invoice Prefix</label>
//                     <input
//                       type="text"
//                       value={paymentSettings.invoicePrefix}
//                       onChange={(e) => setPaymentSettings({ ...paymentSettings, invoicePrefix: e.target.value })}
//                       className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Event Settings */}
//           {activeTab === "event" && (
//             <div className="space-y-6 max-w-2xl">
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
//                   <Calendar className="w-5 h-5 text-purple-400" />
//                   Event Configuration
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">Max Exhibitors</label>
//                       <input
//                         type="number"
//                         value={eventSettings.maxExhibitors}
//                         onChange={(e) => setEventSettings({ ...eventSettings, maxExhibitors: parseInt(e.target.value) })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">Max Sponsors</label>
//                       <input
//                         type="number"
//                         value={eventSettings.maxSponsors}
//                         onChange={(e) => setEventSettings({ ...eventSettings, maxSponsors: parseInt(e.target.value) })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1">Max Practitioners</label>
//                     <input
//                       type="number"
//                       value={eventSettings.maxPractitioners}
//                       onChange={(e) => setEventSettings({ ...eventSettings, maxPractitioners: parseInt(e.target.value) })}
//                       className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">Early Bird Deadline</label>
//                       <input
//                         type="date"
//                         value={eventSettings.earlyBirdDeadline}
//                         onChange={(e) => setEventSettings({ ...eventSettings, earlyBirdDeadline: e.target.value })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-1">Registration Deadline</label>
//                       <input
//                         type="date"
//                         value={eventSettings.registrationDeadline}
//                         onChange={(e) => setEventSettings({ ...eventSettings, registrationDeadline: e.target.value })}
//                         className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
//                     <div>
//                       <p className="text-sm font-medium text-white">Enable Waitlist</p>
//                       <p className="text-xs text-gray-400">Allow users to join waitlist when full</p>
//                     </div>
//                     <button
//                       onClick={() => setEventSettings({ ...eventSettings, enableWaitlist: !eventSettings.enableWaitlist })}
//                       className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
//                         eventSettings.enableWaitlist ? "bg-emerald-500" : "bg-white/20"
//                       }`}
//                     >
//                       <div
//                         className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
//                           eventSettings.enableWaitlist ? "right-0.5" : "left-0.5"
//                         }`}
//                       />
//                     </button>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
//                     <div>
//                       <p className="text-sm font-medium text-white">Auto-approve Exhibitors</p>
//                       <p className="text-xs text-gray-400">Automatically approve exhibitor registrations</p>
//                     </div>
//                     <button
//                       onClick={() => setEventSettings({ ...eventSettings, autoApproveExhibitors: !eventSettings.autoApproveExhibitors })}
//                       className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
//                         eventSettings.autoApproveExhibitors ? "bg-emerald-500" : "bg-white/20"
//                       }`}
//                     >
//                       <div
//                         className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
//                           eventSettings.autoApproveExhibitors ? "right-0.5" : "left-0.5"
//                         }`}
//                       />
//                     </button>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
//                     <div>
//                       <p className="text-sm font-medium text-white">Enable CPD Points</p>
//                       <p className="text-xs text-gray-400">Track and award CPD points to practitioners</p>
//                     </div>
//                     <button
//                       onClick={() => setEventSettings({ ...eventSettings, cpdPointsEnabled: !eventSettings.cpdPointsEnabled })}
//                       className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
//                         eventSettings.cpdPointsEnabled ? "bg-emerald-500" : "bg-white/20"
//                       }`}
//                     >
//                       <div
//                         className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
//                           eventSettings.cpdPointsEnabled ? "right-0.5" : "left-0.5"
//                         }`}
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Notification Settings */}
//           {activeTab === "notifications" && (
//             <div className="space-y-6 max-w-2xl">
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
//                   <Bell className="w-5 h-5 text-amber-400" />
//                   Notification Preferences
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
//                     <div>
//                       <p className="text-sm font-medium text-white">Email Notifications</p>
//                       <p className="text-xs text-gray-400">Send email notifications to users</p>
//                     </div>
//                     <button
//                       onClick={() => setNotificationSettings({ ...notificationSettings, emailNotifications: !notificationSettings.emailNotifications })}
//                       className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
//                         notificationSettings.emailNotifications ? "bg-emerald-500" : "bg-white/20"
//                       }`}
//                     >
//                       <div
//                         className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
//                           notificationSettings.emailNotifications ? "right-0.5" : "left-0.5"
//                         }`}
//                       />
//                     </button>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
//                     <div>
//                       <p className="text-sm font-medium text-white">SMS Notifications</p>
//                       <p className="text-xs text-gray-400">Send SMS notifications to users</p>
//                     </div>
//                     <button
//                       onClick={() => setNotificationSettings({ ...notificationSettings, smsNotifications: !notificationSettings.smsNotifications })}
//                       className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
//                         notificationSettings.smsNotifications ? "bg-emerald-500" : "bg-white/20"
//                       }`}
//                     >
//                       <div
//                         className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
//                           notificationSettings.smsNotifications ? "right-0.5" : "left-0.5"
//                         }`}
//                       />
//                     </button>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
//                     <div>
//                       <p className="text-sm font-medium text-white">Push Notifications</p>
//                       <p className="text-xs text-gray-400">Send in-app push notifications</p>
//                     </div>
//                     <button
//                       onClick={() => setNotificationSettings({ ...notificationSettings, pushNotifications: !notificationSettings.pushNotifications })}
//                       className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
//                         notificationSettings.pushNotifications ? "bg-emerald-500" : "bg-white/20"
//                       }`}
//                     >
//                       <div
//                         className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
//                           notificationSettings.pushNotifications ? "right-0.5" : "left-0.5"
//                         }`}
//                       />
//                     </button>
//                   </div>
//                   <div className="pt-2">
//                     <p className="text-sm font-medium text-gray-300 mb-3">Trigger Events</p>
//                     <div className="space-y-3">
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm text-gray-400">New Booking</span>
//                         <button
//                           onClick={() => setNotificationSettings({ ...notificationSettings, notifyOnBooking: !notificationSettings.notifyOnBooking })}
//                           className={`relative w-10 h-5 rounded-full transition-all duration-300 ${
//                             notificationSettings.notifyOnBooking ? "bg-emerald-500" : "bg-white/20"
//                           }`}
//                         >
//                           <div
//                             className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
//                               notificationSettings.notifyOnBooking ? "right-0.5" : "left-0.5"
//                             }`}
//                           />
//                         </button>
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm text-gray-400">Payment Received</span>
//                         <button
//                           onClick={() => setNotificationSettings({ ...notificationSettings, notifyOnPayment: !notificationSettings.notifyOnPayment })}
//                           className={`relative w-10 h-5 rounded-full transition-all duration-300 ${
//                             notificationSettings.notifyOnPayment ? "bg-emerald-500" : "bg-white/20"
//                           }`}
//                         >
//                           <div
//                             className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
//                               notificationSettings.notifyOnPayment ? "right-0.5" : "left-0.5"
//                             }`}
//                           />
//                         </button>
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm text-gray-400">User Registration</span>
//                         <button
//                           onClick={() => setNotificationSettings({ ...notificationSettings, notifyOnRegistration: !notificationSettings.notifyOnRegistration })}
//                           className={`relative w-10 h-5 rounded-full transition-all duration-300 ${
//                             notificationSettings.notifyOnRegistration ? "bg-emerald-500" : "bg-white/20"
//                           }`}
//                         >
//                           <div
//                             className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
//                               notificationSettings.notifyOnRegistration ? "right-0.5" : "left-0.5"
//                             }`}
//                           />
//                         </button>
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm text-gray-400">CPD Points Earned</span>
//                         <button
//                           onClick={() => setNotificationSettings({ ...notificationSettings, notifyOnCpdEarned: !notificationSettings.notifyOnCpdEarned })}
//                           className={`relative w-10 h-5 rounded-full transition-all duration-300 ${
//                             notificationSettings.notifyOnCpdEarned ? "bg-emerald-500" : "bg-white/20"
//                           }`}
//                         >
//                           <div
//                             className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
//                               notificationSettings.notifyOnCpdEarned ? "right-0.5" : "left-0.5"
//                             }`}
//                           />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1">Admin Digest Frequency</label>
//                     <select
//                       value={notificationSettings.adminDigest}
//                       onChange={(e) => setNotificationSettings({ ...notificationSettings, adminDigest: e.target.value })}
//                       className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                     >
//                       <option value="daily">Daily</option>
//                       <option value="weekly">Weekly</option>
//                       <option value="monthly">Monthly</option>
//                       <option value="never">Never</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Danger Zone */}
//       <div className="relative bg-red-500/5 backdrop-blur-xl rounded-2xl border border-red-500/30 overflow-hidden">
//         <div className="relative p-6">
//           <h3 className="text-lg font-semibold text-red-400 flex items-center gap-2 mb-4">
//             <AlertCircle className="w-5 h-5" />
//             Danger Zone
//           </h3>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-all">
//               Clear All Cache
//             </button>
//             <button className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-all">
//               Export All Data
//             </button>
//             <button className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-all">
//               Reset to Defaults
//             </button>
//           </div>
//           <p className="text-xs text-gray-400 mt-4">
//             These actions are irreversible. Please proceed with caution.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const Settings = () => {
  return (
    <div className='text-white'>Settings</div>
  )
}

export default Settings