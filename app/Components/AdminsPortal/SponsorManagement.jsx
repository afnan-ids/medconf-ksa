// "use client";

// import { useState } from "react";
// import {
//   Briefcase,
//   Plus,
//   Edit,
//   Trash2,
//   Eye,
//   Search,
//   Filter,
//   ChevronDown,
//   X,
//   CheckCircle,
//   Clock,
//   DollarSign,
//   Users,
//   Calendar,
//   Mail,
//   Phone,
//   MapPin,
//   Award,
//   Star,
//   TrendingUp,
//   Download,
//   RefreshCw,
//   Crown,
//   Gem,
//   Sparkles,
//   Medal,
//   Building2,
//   FileText,
//   Gift,
//   Megaphone,
//   Ticket,
//   Video,
//   Share2,
//   Globe,
//   XCircle,
// } from "lucide-react";

// export default function SponsorManagement() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [tierFilter, setTierFilter] = useState("all");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [selectedSponsor, setSelectedSponsor] = useState(null);

//   // Sponsors data
//   const [sponsors, setSponsors] = useState([
//     {
//       id: 1,
//       companyName: "Global Health Co.",
//       logo: "GH",
//       contactPerson: "Ahmed Al-Rashid",
//       email: "ahmed@globalhealth.com",
//       phone: "+966 50 123 4567",
//       tier: "platinum",
//       package: "Platinum Plus",
//       amount: "$150,000",
//       status: "active",
//       joinDate: "2024-01-10",
//       benefits: [
//         "Keynote Speaking Slot",
//         "Premium Booth Location",
//         "Logo on All Materials",
//         "VIP Reception Access",
//         "Social Media Promotion",
//         "Press Release Feature",
//       ],
//       website: "www.globalhealth.com",
//       country: "Saudi Arabia",
//       yearsSponsored: 3,
//     },
//     {
//       id: 2,
//       companyName: "MedTech Solutions",
//       logo: "MT",
//       contactPerson: "Sarah Al-Omari",
//       email: "sarah@medtech.com",
//       phone: "+966 55 789 0123",
//       tier: "gold",
//       package: "Gold Elite",
//       amount: "$75,000",
//       status: "active",
//       joinDate: "2024-01-15",
//       benefits: [
//         "Premium Booth Location",
//         "Logo on Materials",
//         "VIP Reception Access",
//         "Social Media Promotion",
//       ],
//       website: "www.medtech.com",
//       country: "Saudi Arabia",
//       yearsSponsored: 2,
//     },
//     {
//       id: 3,
//       companyName: "PharmaCorp Intl.",
//       logo: "PC",
//       contactPerson: "Khalid Al-Mansour",
//       email: "khalid@pharmacorp.com",
//       phone: "+966 54 456 7890",
//       tier: "gold",
//       package: "Gold Standard",
//       amount: "$65,000",
//       status: "active",
//       joinDate: "2024-01-20",
//       benefits: [
//         "Premium Booth Location",
//         "Logo on Materials",
//         "VIP Reception Access",
//         "Social Media Promotion",
//       ],
//       website: "www.pharmacorp.com",
//       country: "Saudi Arabia",
//       yearsSponsored: 4,
//     },
//     {
//       id: 4,
//       companyName: "HealthAI Systems",
//       logo: "HA",
//       contactPerson: "Omar Al-Jabri",
//       email: "omar@healthai.com",
//       phone: "+966 52 345 6789",
//       tier: "silver",
//       package: "Silver Plus",
//       amount: "$40,000",
//       status: "active",
//       joinDate: "2024-01-25",
//       benefits: [
//         "Standard Booth Location",
//         "Logo on Website",
//         "Social Media Mention",
//       ],
//       website: "www.healthai.com",
//       country: "UAE",
//       yearsSponsored: 1,
//     },
//     {
//       id: 5,
//       companyName: "Wellness Global",
//       logo: "WG",
//       contactPerson: "Nora Al-Ghamdi",
//       email: "nora@wellnessglobal.com",
//       phone: "+966 56 789 0123",
//       tier: "silver",
//       package: "Silver Basic",
//       amount: "$35,000",
//       status: "pending",
//       joinDate: "2024-02-01",
//       benefits: [
//         "Standard Booth Location",
//         "Logo on Website",
//       ],
//       website: "www.wellnessglobal.com",
//       country: "Kuwait",
//       yearsSponsored: 0,
//     },
//     {
//       id: 6,
//       companyName: "Siemens Healthineers",
//       logo: "SH",
//       contactPerson: "Thomas Mueller",
//       email: "thomas@siemens.com",
//       phone: "+966 50 123 9876",
//       tier: "platinum",
//       package: "Platinum Premier",
//       amount: "$200,000",
//       status: "active",
//       joinDate: "2024-01-05",
//       benefits: [
//         "Keynote Speaking Slot",
//         "Premium Booth Location",
//         "Logo on All Materials",
//         "VIP Reception Access",
//         "Social Media Promotion",
//         "Press Release Feature",
//         "Exclusive Networking Dinner",
//       ],
//       website: "www.siemens-healthineers.com",
//       country: "Germany",
//       yearsSponsored: 5,
//     },
//     {
//       id: 7,
//       companyName: "Diagnostic Labs",
//       logo: "DL",
//       contactPerson: "Fatima Al-Zahrani",
//       email: "fatima@diagnosticlabs.com",
//       phone: "+966 53 234 5678",
//       tier: "bronze",
//       package: "Bronze Basic",
//       amount: "$20,000",
//       status: "inactive",
//       joinDate: "2024-01-30",
//       benefits: [
//         "Standard Booth Location",
//         "Logo on Website",
//       ],
//       website: "www.diagnosticlabs.com",
//       country: "Saudi Arabia",
//       yearsSponsored: 1,
//     },
//   ]);

//   const tiers = [
//     { value: "all", label: "All Tiers", color: "gray" },
//     { value: "platinum", label: "Platinum", color: "indigo", icon: Crown },
//     { value: "gold", label: "Gold", color: "amber", icon: Medal },
//     { value: "silver", label: "Silver", color: "gray", icon: Star },
//     { value: "bronze", label: "Bronze", color: "orange", icon: Award },
//   ];

//   const packages = {
//     platinum: [
//       { name: "Platinum Premier", amount: "$200,000", benefits: 7 },
//       { name: "Platinum Plus", amount: "$150,000", benefits: 6 },
//     ],
//     gold: [
//       { name: "Gold Elite", amount: "$75,000", benefits: 4 },
//       { name: "Gold Standard", amount: "$65,000", benefits: 4 },
//     ],
//     silver: [
//       { name: "Silver Plus", amount: "$40,000", benefits: 3 },
//       { name: "Silver Basic", amount: "$35,000", benefits: 2 },
//     ],
//     bronze: [
//       { name: "Bronze Plus", amount: "$25,000", benefits: 2 },
//       { name: "Bronze Basic", amount: "$20,000", benefits: 2 },
//     ],
//   };

//   const getTierBadge = (tier) => {
//     switch (tier) {
//       case "platinum":
//         return "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30";
//       case "gold":
//         return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
//       case "silver":
//         return "bg-gray-400/20 text-gray-300 border border-gray-400/30";
//       case "bronze":
//         return "bg-orange-500/20 text-orange-400 border border-orange-500/30";
//       default:
//         return "bg-white/10 text-gray-300 border border-white/10";
//     }
//   };

//   const getStatusBadge = (status) => {
//     switch (status) {
//       case "active":
//         return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
//       case "pending":
//         return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
//       case "inactive":
//         return "bg-red-500/20 text-red-400 border border-red-500/30";
//       default:
//         return "bg-white/10 text-gray-300 border border-white/10";
//     }
//   };

//   const getTierIcon = (tier) => {
//     switch (tier) {
//       case "platinum":
//         return <Crown className="w-4 h-4" />;
//       case "gold":
//         return <Medal className="w-4 h-4" />;
//       case "silver":
//         return <Star className="w-4 h-4" />;
//       case "bronze":
//         return <Award className="w-4 h-4" />;
//       default:
//         return <Briefcase className="w-4 h-4" />;
//     }
//   };

//   const filteredSponsors = sponsors.filter((sponsor) => {
//     const matchesSearch = sponsor.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           sponsor.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           sponsor.email.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesTier = tierFilter === "all" || sponsor.tier === tierFilter;
//     const matchesStatus = statusFilter === "all" || sponsor.status === statusFilter;
//     return matchesSearch && matchesTier && matchesStatus;
//   });

//   const stats = {
//     total: sponsors.length,
//     active: sponsors.filter((s) => s.status === "active").length,
//     totalRevenue: sponsors.reduce((sum, s) => sum + parseInt(s.amount.replace("$", "").replace(",", "")), 0),
//     platinum: sponsors.filter((s) => s.tier === "platinum").length,
//     gold: sponsors.filter((s) => s.tier === "gold").length,
//     silver: sponsors.filter((s) => s.tier === "silver").length,
//     bronze: sponsors.filter((s) => s.tier === "bronze").length,
//   };

//   const handleStatusToggle = (id, currentStatus) => {
//     const newStatus = currentStatus === "active" ? "inactive" : "active";
//     setSponsors(sponsors.map((s) => s.id === id ? { ...s, status: newStatus } : s));
//   };

//   const handleDelete = (id) => {
//     setSponsors(sponsors.filter((s) => s.id !== id));
//   };

//   return (
//     <div className="space-y-6">
//       {/* Page Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
//             Sponsor Management
//           </h1>
//           <p className="text-sm text-gray-400 mt-1">
//             Manage sponsor information and sponsorship packages
//           </p>
//         </div>
//         <div className="flex items-center gap-2">
//           <button className="relative px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
//             <Download className="w-4 h-4" />
//             <span>Export</span>
//           </button>
//           <button
//             onClick={() => setShowAddModal(true)}
//             className="relative px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium flex items-center gap-2 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
//           >
//             <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
//             <Plus className="w-4 h-4" />
//             <span>Add Sponsor</span>
//           </button>
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
//         {[
//           { label: "Total Sponsors", value: stats.total, icon: Briefcase, color: "indigo" },
//           { label: "Active", value: stats.active, icon: CheckCircle, color: "emerald" },
//           { label: "Total Revenue", value: `$${(stats.totalRevenue / 1000).toFixed(0)}K`, icon: DollarSign, color: "amber" },
//           { label: "Platinum", value: stats.platinum, icon: Crown, color: "indigo" },
//           { label: "Gold", value: stats.gold, icon: Medal, color: "amber" },
//           { label: "Silver/Bronze", value: stats.silver + stats.bronze, icon: Star, color: "gray" },
//         ].map((stat, idx) => (
//           <div key={idx} className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-xs text-gray-400">{stat.label}</p>
//                 <p className="text-xl font-bold text-white mt-1">{stat.value}</p>
//               </div>
//               <div className={`p-2 bg-${stat.color}-500/20 rounded-lg border border-${stat.color}-500/30`}>
//                 <stat.icon className={`w-4 h-4 text-${stat.color}-400`} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Tier Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
//         {tiers.filter(t => t.value !== "all").map((tier) => {
//           const tierSponsors = sponsors.filter(s => s.tier === tier.value);
//           const tierRevenue = tierSponsors.reduce((sum, s) => sum + parseInt(s.amount.replace("$", "").replace(",", "")), 0);
//           return (
//             <div
//               key={tier.value}
//               className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
//               onClick={() => setTierFilter(tier.value)}
//             >
//               <div className="flex items-center gap-3">
//                 <div className={`p-2 bg-${tier.color}-500/20 rounded-lg border border-${tier.color}-500/30`}>
//                   {tier.icon ? <tier.icon className={`w-5 h-5 text-${tier.color}-400`} /> : <Award className="w-5 h-5 text-gray-400" />}
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-white">{tier.label}</p>
//                   <p className="text-xs text-gray-400">{tierSponsors.length} sponsors</p>
//                 </div>
//                 <div className="ml-auto text-right">
//                   <p className="text-sm font-bold text-white">${(tierRevenue / 1000).toFixed(0)}K</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Filters */}
//       <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
//         <div className="p-5 border-b border-white/10">
//           <div className="flex flex-col sm:flex-row gap-4">
//             {/* Search */}
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search by company or contact..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-indigo-500/50 transition-all"
//               />
//             </div>

//             {/* Tier Filter */}
//             <div className="relative w-48">
//               <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <select
//                 value={tierFilter}
//                 onChange={(e) => setTierFilter(e.target.value)}
//                 className="w-full pl-10 pr-8 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer"
//               >
//                 {tiers.map((tier) => (
//                   <option key={tier.value} value={tier.value}>{tier.label}</option>
//                 ))}
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>

//             {/* Status Filter */}
//             <div className="relative w-48">
//               <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <select
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value)}
//                 className="w-full pl-10 pr-8 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer"
//               >
//                 <option value="all">All Status</option>
//                 <option value="active">Active</option>
//                 <option value="pending">Pending</option>
//                 <option value="inactive">Inactive</option>
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>

//             {/* Refresh Button */}
//             <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all">
//               <RefreshCw className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Sponsors Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="border-b border-white/10 bg-white/5">
//               <tr>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Sponsor</th>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Contact</th>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Tier</th>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Package</th>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredSponsors.length === 0 ? (
//                 <tr>
//                   <td colSpan="7" className="p-12 text-center">
//                     <Briefcase className="w-12 h-12 text-gray-500 mx-auto mb-3" />
//                     <p className="text-gray-400">No sponsors found</p>
//                   </td>
//                 </tr>
//               ) : (
//                 filteredSponsors.map((sponsor) => (
//                   <tr key={sponsor.id} className="border-b border-white/5 hover:bg-white/5 transition-all duration-300">
//                     <td className="p-4">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
//                           <span className="text-white text-sm font-bold">{sponsor.logo}</span>
//                         </div>
//                         <div>
//                           <p className="text-sm font-semibold text-white">{sponsor.companyName}</p>
//                           <p className="text-xs text-gray-400">{sponsor.country}</p>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="p-4">
//                       <div>
//                         <p className="text-sm text-gray-300">{sponsor.contactPerson}</p>
//                         <p className="text-xs text-gray-400">{sponsor.email}</p>
//                       </div>
//                     </td>
//                     <td className="p-4">
//                       <div className="flex items-center gap-1">
//                         {getTierIcon(sponsor.tier)}
//                         <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTierBadge(sponsor.tier)}`}>
//                           {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)}
//                         </span>
//                       </div>
//                     </td>
//                     <td className="p-4">
//                       <span className="text-sm text-gray-300">{sponsor.package}</span>
//                     </td>
//                     <td className="p-4">
//                       <p className="text-sm font-semibold text-white">{sponsor.amount}</p>
//                     </td>
//                     <td className="p-4">
//                       <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(sponsor.status)}`}>
//                         {sponsor.status.charAt(0).toUpperCase() + sponsor.status.slice(1)}
//                       </span>
//                     </td>
//                     <td className="p-4">
//                       <div className="flex items-center gap-1">
//                         <button
//                           onClick={() => {
//                             setSelectedSponsor(sponsor);
//                             setShowDetailsModal(true);
//                           }}
//                           className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
//                           title="View Details"
//                         >
//                           <Search className="w-4 h-4 text-indigo-400" />
//                         </button>
//                         <button
//                           onClick={() => {
//                             setSelectedSponsor(sponsor);
//                             setShowEditModal(true);
//                           }}
//                           className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
//                           title="Edit"
//                         >
//                           <Edit className="w-4 h-4 text-cyan-400" />
//                         </button>
//                         <button
//                           onClick={() => handleStatusToggle(sponsor.id, sponsor.status)}
//                           className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
//                           title={sponsor.status === "active" ? "Deactivate" : "Activate"}
//                         >
//                           {sponsor.status === "active" ? (
//                             <XCircle className="w-4 h-4 text-red-400" />
//                           ) : (
//                             <CheckCircle className="w-4 h-4 text-emerald-400" />
//                           )}
//                         </button>
//                         <button
//                           onClick={() => handleDelete(sponsor.id)}
//                           className="p-1.5 hover:bg-red-500/10 rounded-lg transition-all"
//                           title="Delete"
//                         >
//                           <Trash2 className="w-4 h-4 text-red-400" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="p-5 border-t border-white/10 flex items-center justify-between">
//           <p className="text-xs text-gray-400">
//             Showing {filteredSponsors.length} of {sponsors.length} sponsors
//           </p>
//           <div className="flex gap-1">
//             <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">Previous</button>
//             <button className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-xs text-white shadow-lg shadow-indigo-500/30">1</button>
//             <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">2</button>
//             <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">Next</button>
//           </div>
//         </div>
//       </div>

//       {/* Sponsorship Packages Overview */}
//       <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
//         <div className="relative p-5 border-b border-white/10">
//           <h3 className="font-semibold text-white flex items-center gap-2">
//             <Gift className="w-4 h-4 text-indigo-400" />
//             Sponsorship Packages
//           </h3>
//         </div>
//         <div className="relative p-5">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {Object.entries(packages).map(([tier, pkgList]) => {
//               const tierInfo = tiers.find(t => t.value === tier);
//               const Icon = tierInfo?.icon || Award;
//               return (
//                 <div key={tier} className="p-4 bg-white/5 rounded-xl border border-white/10">
//                   <div className="flex items-center gap-2 mb-3">
//                     <div className={`p-1.5 bg-${tierInfo?.color}-500/20 rounded-lg`}>
//                       <Icon className={`w-4 h-4 text-${tierInfo?.color}-400`} />
//                     </div>
//                     <h4 className="text-sm font-semibold text-white capitalize">{tier}</h4>
//                   </div>
//                   <div className="space-y-2">
//                     {pkgList.map((pkg, idx) => (
//                       <div key={idx} className="flex justify-between items-center py-1 border-b border-white/5">
//                         <span className="text-xs text-gray-300">{pkg.name}</span>
//                         <div className="text-right">
//                           <span className="text-xs font-semibold text-white">{pkg.amount}</span>
//                           <span className="text-xs text-gray-400 ml-1">({pkg.benefits} benefits)</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Details Modal */}
//       {showDetailsModal && selectedSponsor && (
//         <SponsorDetailsModal
//           sponsor={selectedSponsor}
//           onClose={() => {
//             setShowDetailsModal(false);
//             setSelectedSponsor(null);
//           }}
//         />
//       )}

//       {/* Add/Edit Modal */}
//       {(showAddModal || showEditModal) && (
//         <SponsorFormModal
//           isEdit={showEditModal}
//           sponsor={selectedSponsor}
//           onClose={() => {
//             setShowAddModal(false);
//             setShowEditModal(false);
//             setSelectedSponsor(null);
//           }}
//           onSave={(sponsorData) => {
//             if (showEditModal) {
//               setSponsors(sponsors.map((s) => s.id === sponsorData.id ? sponsorData : s));
//             } else {
//               setSponsors([{ ...sponsorData, id: sponsors.length + 1, logo: sponsorData.companyName.substring(0, 2).toUpperCase() }, ...sponsors]);
//             }
//             setShowAddModal(false);
//             setShowEditModal(false);
//             setSelectedSponsor(null);
//           }}
//           tiers={tiers.filter(t => t.value !== "all")}
//           packages={packages}
//         />
//       )}
//     </div>
//   );
// }

// // Sponsor Details Modal Component
// const SponsorDetailsModal = ({ sponsor, onClose }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
//       <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-2xl shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
//         <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
//         <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

//         <div className="relative p-6 border-b border-white/10">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
//               Sponsor Details
//             </h2>
//             <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <div className="relative p-6 space-y-4">
//           {/* Header */}
//           <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
//             <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
//               <span className="text-white text-xl font-bold">{sponsor.logo}</span>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-white">{sponsor.companyName}</h3>
//               <div className="flex items-center gap-2 mt-1">
//                 <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getTierBadge(sponsor.tier)}`}>
//                   {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)}
//                 </span>
//                 <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getStatusBadge(sponsor.status)}`}>
//                   {sponsor.status}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Company Info */}
//           <div className="p-4 bg-white/5 rounded-xl border border-white/10">
//             <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
//               <Building2 className="w-4 h-4 text-indigo-400" />
//               Company Information
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <p className="text-xs text-gray-400">Website</p>
//                 <p className="text-sm text-white">{sponsor.website}</p>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400">Country</p>
//                 <p className="text-sm text-white">{sponsor.country}</p>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400">Years Sponsored</p>
//                 <p className="text-sm text-white">{sponsor.yearsSponsored} years</p>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400">Join Date</p>
//                 <p className="text-sm text-white">{sponsor.joinDate}</p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="p-4 bg-white/5 rounded-xl border border-white/10">
//             <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
//               <Users className="w-4 h-4 text-cyan-400" />
//               Contact Information
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <p className="text-xs text-gray-400">Contact Person</p>
//                 <p className="text-sm text-white">{sponsor.contactPerson}</p>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400">Email</p>
//                 <p className="text-sm text-white">{sponsor.email}</p>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400">Phone</p>
//                 <p className="text-sm text-white">{sponsor.phone}</p>
//               </div>
//             </div>
//           </div>

//           {/* Package & Benefits */}
//           <div className="p-4 bg-white/5 rounded-xl border border-white/10">
//             <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
//               <Gift className="w-4 h-4 text-amber-400" />
//               Sponsorship Package
//             </h3>
//             <div className="mb-3">
//               <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
//                 <span className="text-sm text-gray-300">{sponsor.package}</span>
//                 <span className="text-sm font-bold text-white">{sponsor.amount}</span>
//               </div>
//             </div>
//             <h4 className="text-xs font-semibold text-gray-400 mb-2">Benefits Included:</h4>
//             <div className="flex flex-wrap gap-2">
//               {sponsor.benefits.map((benefit, idx) => (
//                 <span key={idx} className="px-2 py-1 bg-emerald-500/10 rounded-lg text-xs text-emerald-400 border border-emerald-500/30">
//                   {benefit}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Sponsor Form Modal Component
// const SponsorFormModal = ({ isEdit, sponsor, onClose, onSave, tiers, packages }) => {
//   const [formData, setFormData] = useState({
//     id: sponsor?.id || Date.now(),
//     companyName: sponsor?.companyName || "",
//     contactPerson: sponsor?.contactPerson || "",
//     email: sponsor?.email || "",
//     phone: sponsor?.phone || "",
//     tier: sponsor?.tier || "silver",
//     package: sponsor?.package || "",
//     amount: sponsor?.amount || "",
//     status: sponsor?.status || "pending",
//     website: sponsor?.website || "",
//     country: sponsor?.country || "Saudi Arabia",
//     yearsSponsored: sponsor?.yearsSponsored || 0,
//     benefits: sponsor?.benefits || [],
//   });

//   const handleTierChange = (tier) => {
//     const availablePackages = packages[tier];
//     setFormData({
//       ...formData,
//       tier,
//       package: availablePackages[0]?.name || "",
//       amount: availablePackages[0]?.amount || "",
//       benefits: [],
//     });
//   };

//   const handlePackageChange = (pkgName) => {
//     const selectedPkg = packages[formData.tier]?.find(p => p.name === pkgName);
//     setFormData({
//       ...formData,
//       package: pkgName,
//       amount: selectedPkg?.amount || "",
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave({ ...formData, joinDate: sponsor?.joinDate || new Date().toISOString().split("T")[0] });
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
//       <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-md shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
//         <div className="relative p-6 border-b border-white/10">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
//               {isEdit ? "Edit Sponsor" : "Add New Sponsor"}
//             </h2>
//             <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="relative p-6 space-y-4">
//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-1">Company Name</label>
//             <input
//               type="text"
//               required
//               value={formData.companyName}
//               onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
//               className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-1">Contact Person</label>
//             <input
//               type="text"
//               required
//               value={formData.contactPerson}
//               onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
//               className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-1">Email</label>
//             <input
//               type="email"
//               required
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-1">Phone</label>
//             <input
//               type="tel"
//               required
//               value={formData.phone}
//               onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//               className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-1">Tier</label>
//             <select
//               value={formData.tier}
//               onChange={(e) => handleTierChange(e.target.value)}
//               className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//             >
//               {tiers.map((tier) => (
//                 <option key={tier.value} value={tier.value}>
//                   {tier.label}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-1">Package</label>
//             <select
//               value={formData.package}
//               onChange={(e) => handlePackageChange(e.target.value)}
//               className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//             >
//               {packages[formData.tier]?.map((pkg) => (
//                 <option key={pkg.name} value={pkg.name}>
//                   {pkg.name} - {pkg.amount}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-1">Website</label>
//             <input
//               type="text"
//               value={formData.website}
//               onChange={(e) => setFormData({ ...formData, website: e.target.value })}
//               className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-1">Country</label>
//             <input
//               type="text"
//               value={formData.country}
//               onChange={(e) => setFormData({ ...formData, country: e.target.value })}
//               className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-1">Years Sponsored</label>
//             <input
//               type="number"
//               value={formData.yearsSponsored}
//               onChange={(e) => setFormData({ ...formData, yearsSponsored: parseInt(e.target.value) })}
//               className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-1">Status</label>
//             <select
//               value={formData.status}
//               onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//               className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//             >
//               <option value="active">Active</option>
//               <option value="pending">Pending</option>
//               <option value="inactive">Inactive</option>
//             </select>
//           </div>

//           <div className="flex gap-3 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="flex-1 px-4 py-2 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-all"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
//             >
//               {isEdit ? "Save Changes" : "Add Sponsor"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// // Helper functions
// const getTierBadge = (tier) => {
//   switch (tier) {
//     case "platinum":
//       return "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30";
//     case "gold":
//       return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
//     case "silver":
//       return "bg-gray-400/20 text-gray-300 border border-gray-400/30";
//     case "bronze":
//       return "bg-orange-500/20 text-orange-400 border border-orange-500/30";
//     default:
//       return "bg-white/10 text-gray-300 border border-white/10";
//   }
// };

// const getStatusBadge = (status) => {
//   switch (status) {
//     case "active":
//       return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
//     case "pending":
//       return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
//     case "inactive":
//       return "bg-red-500/20 text-red-400 border border-red-500/30";
//     default:
//       return "bg-white/10 text-gray-300 border border-white/10";
//   }
// };
import React from 'react'

export const SponsorManagement = () => {
  return (
    <div className='text-white'>Sponsor Management</div>
  )
}

export default SponsorManagement;