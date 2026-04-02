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
        return "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 border-emerald-200";
      case "Reserved":
        return "bg-amber-100 dark:bg-amber-950 text-amber-700 border-amber-200";
      case "Booked":
        return "bg-blue-100 dark:bg-blue-950 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-gray-700";
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
      <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md">
                <MapIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Exhibition Floor Plan
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  Interactive venue layout • {totalBooths} total booths
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium">
                  {availableCount} Available
                </span>
              </div>
              <div className="flex items-center gap-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <Heart className="w-3 h-3 text-red-500" />
                <span className="text-xs font-medium">
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
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 transition-all"
                title="Full Screen"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
              {/* <button
                onClick={() => setShowLegend(!showLegend)}
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 transition-all"
              >
                <Layers className="w-4 h-4" />
              </button> */}
            </div>

            <div className="flex gap-2">
              {["all", "Available", "Reserved", "Booked"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    filterStatus === status
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 hover:bg-gray-200"
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

        {/* Map Area with Interactive Booths */}
        <div
          ref={mapContainerRef}
          className="relative overflow-hidden bg-gray-50 dark:bg-gray-900"
          style={{ minHeight: "500px" }}
        >
          <div
            className="transition-transform duration-300 relative"
            style={{ transform: `scale(${zoom})`, transformOrigin: "0 0" }}
          >
            <div className="p-6">
              <div className="relative" ref={imageContainerRef}>
                {/* Main Floor Plan Image */}
                <img
                  src="/Images/exhibition-floor-plan.webp"
                  alt="Exhibition floor plan"
                  className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
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
                        {/* Booth Pin/Marker */}
                        <div className="relative">
                          <div
                            className={`
                            w-10 h-10 rounded-full flex items-center justify-center shadow-lg
                            transition-all duration-200 group-hover:scale-110 group-hover:shadow-xl
                            ${
                              booth.status === "Available"
                                ? "bg-emerald-500 hover:bg-emerald-600"
                                : booth.status === "Reserved"
                                  ? "bg-amber-500 hover:bg-amber-600"
                                  : "bg-blue-500 hover:bg-blue-600"
                            }
                          `}
                          >
                            <MapPin className="w-5 h-5 text-white" />
                          </div>

                          {/* Pulse animation for available booths */}
                          {booth.status === "Available" && (
                            <div className="absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-40" />
                          )}

                          {/* Booth Number Badge */}
                          <div className="absolute -top-2 -right-2 w-5 h-5 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md text-[10px] font-bold text-gray-700 dark:text-gray-300">
                            {booth.id}
                          </div>

                          {/* Favorite Star */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(booth.id);
                            }}
                            className="absolute -bottom-2 -left-2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                          >
                            <Star
                              className={`w-3 h-3 ${isFavorite ? "fill-amber-500 text-amber-500" : "text-gray-400"}`}
                            />
                          </button>

                          {/* Tooltip on Hover */}
                          {hoveredBooth === booth.id && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 whitespace-nowrap bg-gray-900 text-white text-xs rounded-lg px-3 py-1.5 shadow-lg z-10 pointer-events-none">
                              <div className="flex items-center gap-2">
                                <span className="font-bold">
                                  Booth {booth.id}
                                </span>
                                <span
                                  className={`px-1.5 py-0.5 rounded text-[10px] ${
                                    booth.status === "Available"
                                      ? "bg-emerald-500"
                                      : booth.status === "Reserved"
                                        ? "bg-amber-500"
                                        : "bg-blue-500"
                                  }`}
                                >
                                  {booth.status}
                                </span>
                                <span>{booth.price}</span>
                              </div>
                              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-2 h-2 bg-gray-900 rotate-45" />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Second Image - Booth Designs */}
              <div className="mt-4">
                <img
                  src="/Images/taqeem-exhibition-booth-designs-1024x602.jpg"
                  alt="Booth designs"
                  className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x300?text=Booth+Designs+%E2%80%A2+Premium+%7C+Standard+%7C+Corner+Booths";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Navigation Hint */}
          <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs flex items-center gap-2 shadow-sm">
            <Navigation className="w-3 h-3" />
            <p>Click on pins for booth details • <b>{filteredBooths.length}</b> booths
            shown<br />Press <b>Esc</b> to close Full Screen mode</p> 
          </div>

          {/* Booth Details Modal */}
          {selectedBooth && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
              <div className="bg-white dark:bg-gray-950 rounded-xl max-w-md w-full shadow-2xl border border-gray-200 dark:border-gray-800 animate-slideUp">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          selectedBooth.status === "Available"
                            ? "bg-emerald-100"
                            : selectedBooth.status === "Reserved"
                              ? "bg-amber-100"
                              : "bg-blue-100"
                        }`}
                      >
                        <MapPin
                          className={`w-5 h-5 ${
                            selectedBooth.status === "Available"
                              ? "text-emerald-600"
                              : selectedBooth.status === "Reserved"
                                ? "text-amber-600"
                                : "text-blue-600"
                          }`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Booth {selectedBooth.id}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedBooth(null)}
                      className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div
                      className={`px-3 py-2 rounded-lg ${getStatusStyle(selectedBooth.status)}`}
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
                      <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <p className="text-xs text-gray-500">Booth Size</p>
                        <p className="text-sm font-semibold capitalize mt-1">
                          {selectedBooth.size}
                        </p>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <p className="text-xs text-gray-500">Price</p>
                        <p className="text-sm font-semibold mt-1">
                          {selectedBooth.price}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <p className="text-xs text-gray-500">Includes</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-white dark:bg-gray-800 rounded text-xs">
                          2 Chairs
                        </span>
                        <span className="px-2 py-1 bg-white dark:bg-gray-800 rounded text-xs">
                          1 Table
                        </span>
                        <span className="px-2 py-1 bg-white dark:bg-gray-800 rounded text-xs">
                          Power Outlet
                        </span>
                        <span className="px-2 py-1 bg-white dark:bg-gray-800 rounded text-xs">
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
                          ? "bg-amber-50 text-amber-600 border border-amber-200"
                          : "border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <Star
                        className={`w-4 h-4 ${favorites.includes(selectedBooth.id) ? "fill-amber-500 text-amber-500" : ""}`}
                      />
                      {favorites.includes(selectedBooth.id)
                        ? "Favorited"
                        : "Add to Favorites"}
                    </button>
                    {selectedBooth.status === "Available" && (
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                        Book Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        {showLegend && (
          <div className="border-t border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-2">
                <Map className="w-3 h-3" />
                Booth Status & Availability
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
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
                  className={`group rounded-lg p-3 transition-all border ${
                    filterStatus === label
                      ? `border-${color}-500 ring-2 ring-${color}-500/20 bg-${color}-50 dark:bg-${color}-950/20`
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 text-${color}-500`} />
                      <span className="text-sm font-medium">{label}</span>
                    </div>
                    <span className="text-lg font-bold">{count}</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${color}-500 rounded-full transition-all duration-500`}
                      style={{ width: `${(count / totalBooths) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-left">
                    {boothData.filter((b) => b.status === label).length} booths
                  </p>
                </button>
              ))}
            </div>

            {/* Legend Icons Explanation */}
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full" />
                <span>Booth Pin</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span>Favorited</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white dark:bg-gray-800 rounded-full border border-gray-300 flex items-center justify-center text-[8px] font-bold">
                  12
                </div>
                <span>Booth Number</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tips Card */}
      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              Interactive Floor Plan Tips
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              • <span className="font-medium">Click on any colored pin</span> to
              view booth details and availability
              <br />• <span className="font-medium">
                Click the star icon
              </span>{" "}
              on any booth pin to add to favorites
              <br />•{" "}
              <span className="font-medium">Filter booths by status</span> to
              find available spaces quickly
              <br />• <span className="font-medium">
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
