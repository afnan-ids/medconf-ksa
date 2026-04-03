"use client";
import { useState, useRef } from "react";
import {
  Map as MapIcon,
  Fullscreen,
  Refresh,
  Layers,
  Navigation,
  Info,
  PinDrop,
} from "@mui/icons-material";
import {
  Bookmark,
  CheckCircle,
  Clock,
  Compass,
  Maximize2,
  Minimize2,
  Map,
  Star,
  AlertCircle,
  Heart,
  X,
  MapPin,
} from "lucide-react";

const statusConfig = [
  { label: "Available", icon: CheckCircle, color: "emerald", count: 24 },
  { label: "Reserved", icon: Clock, color: "amber", count: 12 },
  { label: "Booked", icon: Bookmark, color: "blue", count: 84 },
];

// Enhanced booth data with positions for the map overlay
const boothData = [
  {
    id: "07",
    status: "Available",
    size: "standard",
    price: "$2,500",
    position: { top: "28%", left: "30%" },
  },
  {
    id: "05",
    status: "Reserved",
    size: "premium",
    price: "$5,000",
    position: { top: "20%", left: "39%" },
  },
  {
    id: "04",
    status: "Booked",
    size: "standard",
    price: "$2,500",
    position: { top: "24%", left: "59%" },
  },
  {
    id: "10",
    status: "Available",
    size: "corner",
    price: "$3,500",
    position: { top: "39%", left: "18%" },
  },
  {
    id: "19",
    status: "Booked",
    size: "premium",
    price: "$5,000",
    position: { top: "43%", left: "43.5%" },
  },
  {
    id: "02",
    status: "Reserved",
    size: "standard",
    price: "$2,500",
    position: { top: "32%", left: "67%" },
  },
  {
    id: "36",
    status: "Available",
    size: "standard",
    price: "$2,500",
    position: { top: "67%", left: "23%" },
  },
  {
    id: "40",
    status: "Booked",
    size: "premium",
    price: "$5,000",
    position: { top: "75%", left: "45%" },
  },
  {
    id: "31",
    status: "Reserved",
    size: "standard",
    price: "$2,500",
    position: { top: "53%", left: "54%" },
  },
];

const ExhibitionFloorPlanContent = ({ getColorClasses }) => {
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedBooth, setSelectedBooth] = useState(null);

  const statusItem = selectedBooth
    ? statusConfig.find((s) => s.label === selectedBooth.status)
    : null;
  const Icon = statusItem?.icon;

  const [filterStatus, setFilterStatus] = useState("all");
  const [showLegend, setShowLegend] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [hoveredBooth, setHoveredBooth] = useState(null);
  const mapContainerRef = useRef(null);
  const imageContainerRef = useRef(null);

  const totalBooths = boothData.length;
  const availableCount = boothData.filter(
    (b) => b.status === "Available",
  ).length;

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      mapContainerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleFavorite = (boothId) => {
    setFavorites((prev) =>
      prev.includes(boothId)
        ? prev.filter((id) => id !== boothId)
        : [...prev, boothId],
    );
  };

  const handleBoothClick = (booth) => {
    setSelectedBooth(booth);
  };

  const filteredBooths =
    filterStatus === "all"
      ? boothData
      : boothData.filter((b) => b.status === filterStatus);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Available":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "Reserved":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "Booked":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-white/10 text-gray-300 border-white/10";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "emerald";
      case "Reserved":
        return "amber";
      case "Booked":
        return "blue";
      default:
        return "gray";
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg shadow-lg shadow-blue-500/30">
                <MapIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Exhibition Floor Plan
                </h2>
                <p className="text-sm text-gray-300 mt-0.5 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-blue-400" />
                  Interactive venue layout • {totalBooths} total booths
                </p>
              </div>
            </div>

            {/* Legend Icons Explanation */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full" />
                  <span className="text-xs font-medium text-gray-300">Booth Pin</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-medium text-gray-300">Favorited</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  <span  className="text-xs font-medium text-gray-300">Available</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center text-[8px] font-bold text-white">
                    12
                  </div>
                  <span className="text-xs font-medium text-gray-300">Booth Number</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-gray-300">
                  {availableCount} Available
                </span>
              </div>
              <div className="flex items-center gap-1 px-3 py-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <Heart className="w-3 h-3 text-red-400" />
                <span className="text-xs font-medium text-gray-300">
                  {favorites.length} Favorites
                </span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
            <div className="flex items-center gap-2">
              <button
                onClick={toggleFullscreen}
                className="p-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-gray-300 hover:text-white"
                title="Full Screen"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="flex gap-2">
              {["all", "Available", "Reserved", "Booked"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                    filterStatus === status
                      ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10"
                  }`}
                >
                  {status === "all" ? "All Booths" : status}
                  {status !== "all" && (
                    <span className="ml-1 px-1.5 py-0.5 bg-white/20 rounded-full text-[10px]">
                      {boothData.filter((b) => b.status === status).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map Area with Interactive Booths - Glass background */}
        <div
          ref={mapContainerRef}
          className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-indigo-950/50"
          style={{ minHeight: "500px" }}
        >
          <div
            className="transition-transform duration-300 relative"
            style={{ transform: `scale(${zoom})`, transformOrigin: "0 0" }}
          >
            <div className="p-6">
              <div
                className="relative rounded-xl overflow-hidden border border-white/10"
                ref={imageContainerRef}
              >
                {/* Main Floor Plan Image */}
                <img
                  src="/Images/exhibition-floor-plan.webp"
                  alt="Exhibition floor plan"
                  className="w-full rounded-lg"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x500?text=Floor+Plan+Image+%E2%80%A2+Click+on+booth+pins+for+details";
                  }}
                />

                {/* Interactive Booth Overlays */}
                <div className="absolute inset-0">
                  {filteredBooths.map((booth) => {
                    const statusColor = getStatusColor(booth.status);
                    const isFavorite = favorites.includes(booth.id);

                    return (
                      <div
                        key={booth.id}
                        className="absolute group cursor-pointer"
                        style={{
                          top: booth.position.top,
                          left: booth.position.left,
                          transform: "translate(-50%, -50%)",
                        }}
                        onClick={() => handleBoothClick(booth)}
                        onMouseEnter={() => setHoveredBooth(booth.id)}
                        onMouseLeave={() => setHoveredBooth(null)}
                      >
                        {/* Booth Pin/Marker - Glass style */}
                        <div className="relative">
                          <div
                            className={`
                            w-10 h-10 rounded-full flex items-center justify-center shadow-lg
                            transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl
                            ${
                              booth.status === "Available"
                                ? "bg-gradient-to-br from-emerald-500 to-teal-400"
                                : booth.status === "Reserved"
                                  ? "bg-gradient-to-br from-amber-500 to-orange-400"
                                  : "bg-gradient-to-br from-blue-500 to-cyan-400"
                            }
                          `}
                          >
                            <MapPin className="w-5 h-5 text-white" />
                          </div>

                          {/* Pulse animation for available booths */}
                          {booth.status === "Available" && (
                            <div className="absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-60" />
                          )}

                          {/* Booth Number Badge - Glass */}
                          <div className="absolute -top-2 -right-2 w-5 h-5 bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-[10px] font-bold text-black border border-white/30">
                            {booth.id}
                          </div>

                          {/* Favorite Star - Glass */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(booth.id);
                            }}
                            className="absolute -bottom-2 -left-2 w-6 h-6 bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform border border-white/30"
                          >
                            <Star
                              className={`w-3 h-3 ${isFavorite ? "fill-amber-400 text-amber-400" : "text-gray-800"}`}
                            />
                          </button>

                          {/* Tooltip on Hover - Glass */}
                          {hoveredBooth === booth.id && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 whitespace-nowrap bg-gray-900/90 backdrop-blur-xl text-white text-xs rounded-lg px-3 py-1.5 shadow-xl z-10 pointer-events-none border border-white/20">
                              <div className="flex items-center gap-2">
                                <span className="font-bold">
                                  Booth {booth.id}
                                </span>
                                <span
                                  className={`px-1.5 py-0.5 rounded text-[10px] ${
                                    booth.status === "Available"
                                      ? "bg-emerald-500/80"
                                      : booth.status === "Reserved"
                                        ? "bg-amber-500/80"
                                        : "bg-blue-500/80"
                                  }`}
                                >
                                  {booth.status}
                                </span>
                                <span>{booth.price}</span>
                              </div>
                              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-2 h-2 bg-gray-900/90 rotate-45 border-r border-b border-white/10" />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Second Image - Booth Designs */}
              <div className="mt-4 rounded-xl overflow-hidden border border-white/10">
                <img
                  src="/Images/taqeem-exhibition-booth-designs-1024x602.jpg"
                  alt="Booth designs"
                  className="w-full"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x300?text=Booth+Designs+%E2%80%A2+Premium+%7C+Standard+%7C+Corner+Booths";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Navigation Hint - Glass */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-xl rounded-lg px-3 py-1.5 text-xs flex items-center gap-2 shadow-lg border border-white/20">
            <Navigation className="w-3 h-3 text-blue-400" />
            <p className="text-gray-200">
              Click on pins for booth details • <b>{filteredBooths.length}</b>{" "}
              booths shown
              <br />
              Press <b>Esc</b> to close Full Screen mode
            </p>
          </div>

          {/* Booth Details Modal - Glass */}
          {selectedBooth && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-2xl max-w-md w-full shadow-2xl border border-white/20 animate-in slide-in-from-bottom-4 duration-300">
                {/* Decorative glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          selectedBooth.status === "Available"
                            ? "bg-emerald-500/20"
                            : selectedBooth.status === "Reserved"
                              ? "bg-amber-500/20"
                              : "bg-blue-500/20"
                        }`}
                      >
                        <MapPin
                          className={`w-5 h-5 ${
                            selectedBooth.status === "Available"
                              ? "text-emerald-400"
                              : selectedBooth.status === "Reserved"
                                ? "text-amber-400"
                                : "text-blue-400"
                          }`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Booth {selectedBooth.id}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedBooth(null)}
                      className="p-1 hover:bg-white/10 rounded-lg transition-all text-gray-400 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div
                      className={`px-3 py-2 rounded-lg backdrop-blur-sm border ${getStatusStyle(selectedBooth.status)}`}
                    >
                      {selectedBooth && (
                        <div className="flex items-center gap-2">
                          {Icon && <Icon className="w-4 h-4" />}
                          <span className="text-sm font-medium">
                            Status: {selectedBooth.status}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-xs text-gray-400">Booth Size</p>
                        <p className="text-sm font-semibold text-white capitalize mt-1">
                          {selectedBooth.size}
                        </p>
                      </div>
                      <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-xs text-gray-400">Price</p>
                        <p className="text-sm font-semibold text-white mt-1">
                          {selectedBooth.price}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-xs text-gray-400">Includes</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 border border-white/10">
                          2 Chairs
                        </span>
                        <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 border border-white/10">
                          1 Table
                        </span>
                        <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 border border-white/10">
                          Power Outlet
                        </span>
                        <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 border border-white/10">
                          WiFi
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-6">
                    <button
                      onClick={() => {
                        toggleFavorite(selectedBooth.id);
                      }}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                        favorites.includes(selectedBooth.id)
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                          : "bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20"
                      }`}
                    >
                      <Star
                        className={`w-4 h-4 ${favorites.includes(selectedBooth.id) ? "fill-amber-400 text-amber-400" : ""}`}
                      />
                      {favorites.includes(selectedBooth.id)
                        ? "Favorited"
                        : "Add to Favorites"}
                    </button>
                    {selectedBooth.status === "Available" && (
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg text-sm font-medium overflow-hidden group relative transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                        <span className="relative">Book Now</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Legend - Glass */}
        {showLegend && (
          <div className="relative border-t border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-2">
                <Map className="w-3 h-3" />
                Booth Status & Availability
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <PinDrop className="w-3 h-3" />
                {totalBooths - availableCount} booths occupied •{" "}
                {favorites.length} favorited
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {statusConfig.map(({ label, icon: Icon, color, count }) => (
                <button
                  key={label}
                  onClick={() => setFilterStatus(label)}
                  className={`group rounded-xl p-3 transition-all duration-300 border backdrop-blur-sm ${
                    filterStatus === label
                      ? `border-${color}-500/50 bg-${color}-500/10 shadow-lg shadow-${color}-500/20`
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 text-${color}-400`} />
                      <span className="text-sm font-medium text-white">
                        {label}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-white">
                      {count}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${color}-400 rounded-full transition-all duration-500`}
                      style={{ width: `${(count / totalBooths) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1 text-left">
                    {boothData.filter((b) => b.status === label).length} booths
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tips Card - Glass */}
      <div className="relative bg-blue-500/10 backdrop-blur-xl rounded-xl p-5 border border-blue-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
        <div className="relative flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-white mb-1">
              Interactive Floor Plan Tips
            </p>
            <p className="text-xs text-gray-300">
              •{" "}
              <span className="font-medium text-blue-400">
                Click on any colored pin
              </span>{" "}
              to view booth details and availability
              <br />•{" "}
              <span className="font-medium text-blue-400">
                Click the star icon
              </span>{" "}
              on any booth pin to add to favorites
              <br />•{" "}
              <span className="font-medium text-blue-400">
                Filter booths by status
              </span>{" "}
              to find available spaces quickly
              <br />•{" "}
              <span className="font-medium text-blue-400">
                Green pulsing pins
              </span>{" "}
              indicate booths that are currently available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionFloorPlanContent;
