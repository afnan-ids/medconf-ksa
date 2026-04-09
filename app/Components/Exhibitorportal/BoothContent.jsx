"use client";

import { useState } from "react";
import {
  Store,
  Square,
  Ruler,
  Zap,
  Wifi,
  Lightbulb,
  Table,
  Home,
  Trash2,
  Signpost,
  Save,
  X,
  CheckCircle,
  Clock,
  Calendar,
  MapPin,
  TrendingUp,
  Package,
  Truck,
  Phone,
  Mail,
  Sparkles,
  Eye,
  DollarSign,
  Edit2Icon,
  Layers,
} from "lucide-react";
import { boothDetails } from "../../Data/exhibitor-data";

const BoothContent = () => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [customizations, setCustomizations] = useState({
    bannerText: "PharmaCo Exhibitions",
    primaryColor: "#3B82F6",
    secondaryColor: "#8B5CF6",
    additionalItems: [],
  });

  const amenities = boothDetails.amenities || [
    "Electricity (3kW)",
    "Wi-Fi Connection",
    "2 Spotlights",
    "1 Table",
    "2 Chairs",
    "Waste Basket",
    "Carpet",
    "Company Signage",
  ];

  const additionalItems = [
    { name: "Extra Chair", price: "SAR 50", icon:Home },
    { name: "Extra Table", price: "SAR 150", icon: Table },
    { name: "Additional Spotlight", price: "SAR 100", icon: Lightbulb },
    { name: "LED Screen (32 inch)", price: "SAR 500", icon: Eye },
    { name: "Display Stand", price: "SAR 200", icon: Package },
    { name: "Carpet Upgrade", price: "SAR 300", icon: Layers },
    { name: "Premium Signage", price: "SAR 400", icon: Signpost },
    { name: "Power Extension", price: "SAR 75", icon: Zap },
  ];


  const getTotalCost = () => {
    const baseCost = 75000;
    const extrasCost = customizations.additionalItems.reduce(
      (sum, item) => sum + parseInt(item.price.replace("SAR ", "")),
      0
    );
    return baseCost + extrasCost;
  };

  return (
    <div className="space-y-6">
      {/* Main Booth Details Card - Glassmorphism */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-blue-800 to-cyan-600 rounded-lg shadow-lg shadow-blue-500/30">
                <Store className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Booth Details
                </h2>
                <p className="text-sm text-gray-300 mt-0.5 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  Your allocated exhibition space
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Booth Content */}
        <div className="relative p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Booth Specifications */}
            <div className="space-y-4">
              {/* Booth Info Card */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <Square className="w-4 h-4 text-blue-400" />
                  Booth Specifications
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-xs text-gray-400">Booth Number</span>
                    <span className="text-sm font-semibold text-white">
                      {boothDetails.boothNumber}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-xs text-gray-400">Size</span>
                    <span className="text-sm text-white">{boothDetails.size}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-xs text-gray-400">Location</span>
                    <span className="text-sm text-white">{boothDetails.location}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-xs text-gray-400">Booth Type</span>
                    <span className="text-sm text-white">{boothDetails.boothType}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Base Price</span>
                    <span className="text-sm font-bold text-blue-400">
                      {boothDetails.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dimensions Card */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-purple-400" />
                  Dimensions & Specifications
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <p className="text-xs text-gray-400">Width</p>
                    <p className="text-sm font-medium text-white mt-1">
                      {boothDetails.specifications?.width || "6 meters"}
                    </p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <p className="text-xs text-gray-400">Depth</p>
                    <p className="text-sm font-medium text-white mt-1">
                      {boothDetails.specifications?.depth || "3 meters"}
                    </p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <p className="text-xs text-gray-400">Height</p>
                    <p className="text-sm font-medium text-white mt-1">
                      {boothDetails.specifications?.height || "2.5 meters"}
                    </p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <p className="text-xs text-gray-400">Power Supply</p>
                    <p className="text-sm font-medium text-white mt-1">
                      {boothDetails.specifications?.powerSupply || "220V, 3kW"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Amenities & Extras */}
            <div className="space-y-4">
              {/* Included Amenities */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <Package className="w-4 h-4 text-emerald-400" />
                  Included Amenities
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {item.includes("Electricity") && <Zap className="w-3 h-3 text-yellow-400" />}
                      {item.includes("Wi-Fi") && <Wifi className="w-3 h-3 text-blue-400" />}
                      {item.includes("Spotlight") && <Lightbulb className="w-3 h-3 text-amber-400" />}
                      {item.includes("Table") && <Table className="w-3 h-3 text-green-400" />}
                      {item.includes("Chair") && <Home className="w-3 h-3 text-purple-400" />}
                      {item.includes("Carpet") && <Layers className="w-3 h-3 text-cyan-400" />}
                      {item.includes("Signage") && <Signpost className="w-3 h-3 text-pink-400" />}
                      {!item.includes("Electricity") && !item.includes("Wi-Fi") && 
                       !item.includes("Spotlight") && !item.includes("Table") && 
                       !item.includes("Chair") && !item.includes("Carpet") && 
                       !item.includes("Signage") && <CheckCircle className="w-3 h-3 text-emerald-400" />}
                      <span className="text-xs text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Items Ordered */}
              {customizations.additionalItems.length > 0 && (
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-5 border border-purple-500/30">
                  <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    Additional Items Ordered
                  </h3>
                  <div className="space-y-2">
                    {customizations.additionalItems.map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-2">
                          <item.icon className="w-3 h-3 text-blue-400" />
                          <span className="text-xs text-gray-300">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-white">{item.price}</span>
                          <button
                            onClick={() => handleRemoveItem(item.name)}
                            className="p-1 hover:bg-red-500/20 rounded transition-all"
                          >
                            <X className="w-3 h-3 text-red-400" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10 flex justify-between">
                    <span className="text-xs text-gray-400">Total Extras</span>
                    <span className="text-sm font-bold text-white">
                      {customizations.additionalItems.reduce(
                        (sum, item) => sum + parseInt(item.price.replace("SAR ", "")),
                        0
                      )} SAR
                    </span>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Total Cost Summary */}
          <div className="mt-6 p-5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/30">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-sm font-semibold text-white">Total Booth Investment</p>
                <p className="text-xs text-gray-300 mt-1">Includes base booth + selected extras</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">{getTotalCost().toLocaleString()} SAR</p>
                <p className="text-xs text-emerald-400 flex items-center gap-1 justify-end">
                  <CheckCircle className="w-3 h-3" />
                  Paid: 42,500 SAR • Remaining: {(getTotalCost() - 42500).toLocaleString()} SAR
                </p>
              </div>
            </div>
          </div>

          {/* Setup Timeline */}
          <div className="mt-6 p-5 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              Setup Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">Setup Date</p>
                  <p className="text-xs text-gray-400">March 10-11, 2026</p>
                  <p className="text-xs text-gray-400 mt-1">8:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">Teardown Date</p>
                  <p className="text-xs text-gray-400">March 14, 2026</p>
                  <p className="text-xs text-gray-400 mt-1">8:00 PM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">Material Drop-off</p>
                  <p className="text-xs text-gray-400">March 9, 2026</p>
                  <p className="text-xs text-gray-400 mt-1">Loading Dock A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BoothContent;