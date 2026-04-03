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
    <div className="space-y-4">
      <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
        {/* Compact Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md shadow-sm">
                <MapIcon className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-base font-bold text-gray-900 dark:text-white">
                  Floor Plan
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Compass className="w-3 h-3" />
                  {totalBooths} total booths
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium">
                  {availableCount} Available
                </span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">
                <Heart className="w-3 h-3 text-red-500" />
                <span className="text-xs font-medium">
                  {favorites.length}
                </span>
              </div>
            </div>
          </div>

          {/* Compact Controls */}
          <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
            <div className="flex items-center gap-1.5">
              <button
                onClick={toggleFullscreen}
                className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 transition-all"
                title="Full Screen"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-3.5 h-3.5" />
                ) : (
                  <Maximize2 className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <div className="flex gap-1.5">
              {["all", "Available", "Reserved", "Booked"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-2 py-1 rounded-md text-xs font-medium transition-all ${
                    filterStatus === status
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {status === "all" ? "All" : status.slice(0,3)}
                  {status !== "all" && (
                    <span className="ml-1 px-1 py-0.5 bg-white/20 rounded-full text-[9px]">
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
          style={{ minHeight: "400px" }}
        >
          <div
            className="transition-transform duration-300 relative"
            style={{ transform: `scale(${zoom})`, transformOrigin: "0 0" }}
          >
            <div className="p-4">
              <div className="relative" ref={imageContainerRef}>
                {/* Main Floor Plan Image */}
                <img
                  src="/Images/exhibition-floor-plan.webp"
                  alt="Exhibition floor plan"
                  className="w-full rounded-md border border-gray-200 dark:border-gray-700"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x500?text=Floor+Plan+Image";
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
                        {/* Booth Dot (replaced pin icon) */}
                        <div className="relative">
                          <div
                            className={`
                            w-6 h-6 rounded-full flex items-center justify-center shadow-md
                            transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg
                            ${
                              booth.status === "Available"
                                ? "bg-emerald-500 hover:bg-emerald-600"
                                : booth.status === "Reserved"
                                  ? "bg-amber-500 hover:bg-amber-600"
                                  : "bg-blue-500 hover:bg-blue-600"
                            }
                          `}
                          >
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>

                          {/* Pulse animation for available booths */}
                          {booth.status === "Available" && (
                            <div className="absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-40" />
                          )}

                          {/* Booth Number Badge */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md text-[8px] font-bold text-gray-700 dark:text-gray-300">
                            {booth.id}
                          </div>

                          {/* Favorite Star */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(booth.id);
                            }}
                            className="absolute -bottom-2 -left-2 w-5 h-5 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                          >
                            <Star
                              className={`w-2.5 h-2.5 ${isFavorite ? "fill-amber-500 text-amber-500" : "text-gray-400"}`}
                            />
                          </button>

                          {/* Tooltip on Hover */}
                          {hoveredBooth === booth.id && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 whitespace-nowrap bg-gray-900 text-white text-xs rounded-md px-2 py-1 shadow-lg z-10 pointer-events-none">
                              <div className="flex items-center gap-1.5">
                                <span className="font-bold text-xs">
                                  #{booth.id}
                                </span>
                                <span
                                  className={`px-1 py-0.5 rounded text-[9px] ${
                                    booth.status === "Available"
                                      ? "bg-emerald-500"
                                      : booth.status === "Reserved"
                                        ? "bg-amber-500"
                                        : "bg-blue-500"
                                  }`}
                                >
                                  {booth.status}
                                </span>
                                <span className="text-xs">{booth.price}</span>
                              </div>
                              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-1.5 h-1.5 bg-gray-900 rotate-45" />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Second Image - Booth Designs */}
              <div className="mt-3">
                <img
                  src="/Images/taqeem-exhibition-booth-designs-1024x602.jpg"
                  alt="Booth designs"
                  className="w-full rounded-md border border-gray-200 dark:border-gray-700"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x300?text=Booth+Designs";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Navigation Hint */}
          <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-md px-2 py-1 text-[10px] flex items-center gap-1.5 shadow-sm">
            <Navigation className="w-2.5 h-2.5" />
            <p>{filteredBooths.length} booths • Click for details</p>
          </div>

          {/* Booth Details Modal */}
          {selectedBooth && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <div className="bg-white dark:bg-gray-950 rounded-lg max-w-sm w-full shadow-2xl border border-gray-200 dark:border-gray-800">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          selectedBooth.status === "Available"
                            ? "bg-emerald-100"
                            : selectedBooth.status === "Reserved"
                              ? "bg-amber-100"
                              : "bg-blue-100"
                        }`}
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${
                            selectedBooth.status === "Available"
                              ? "bg-emerald-500"
                              : selectedBooth.status === "Reserved"
                                ? "bg-amber-500"
                                : "bg-blue-500"
                          }`}
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Booth #{selectedBooth.id}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedBooth(null)}
                      className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all"
                    >
                      <X className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div
                      className={`px-2 py-1.5 rounded-md ${getStatusStyle(selectedBooth.status)}`}
                    >
                      <div className="flex items-center gap-1.5">
                        {Icon && <Icon className="w-3.5 h-3.5" />}
                        <span className="text-xs font-medium">
                          {selectedBooth.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
                        <p className="text-[10px] text-gray-500">Size</p>
                        <p className="text-xs font-semibold capitalize mt-0.5">
                          {selectedBooth.size}
                        </p>
                      </div>
                      <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
                        <p className="text-[10px] text-gray-500">Price</p>
                        <p className="text-xs font-semibold mt-0.5">
                          {selectedBooth.price}
                        </p>
                      </div>
                    </div>

                    <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
                      <p className="text-[10px] text-gray-500">Includes</p>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        <span className="px-1.5 py-0.5 bg-white dark:bg-gray-800 rounded text-[10px]">
                          2 Chairs
                        </span>
                        <span className="px-1.5 py-0.5 bg-white dark:bg-gray-800 rounded text-[10px]">
                          1 Table
                        </span>
                        <span className="px-1.5 py-0.5 bg-white dark:bg-gray-800 rounded text-[10px]">
                          Power
                        </span>
                        <span className="px-1.5 py-0.5 bg-white dark:bg-gray-800 rounded text-[10px]">
                          WiFi
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => {
                        toggleFavorite(selectedBooth.id);
                      }}
                      className={`flex-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                        favorites.includes(selectedBooth.id)
                          ? "bg-amber-50 text-amber-600 border border-amber-200"
                          : "border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <Star
                        className={`w-3 h-3 ${favorites.includes(selectedBooth.id) ? "fill-amber-500 text-amber-500" : ""}`}
                      />
                      {favorites.includes(selectedBooth.id) ? "Saved" : "Save"}
                    </button>
                    {selectedBooth.status === "Available" && (
                      <button className="flex-1 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md text-xs font-medium hover:shadow-md transition-all">
                        Book
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Compact Legend */}
        {showLegend && (
          <div className="border-t border-gray-200 dark:border-gray-800 p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                <Map className="w-3 h-3" />
                Status
              </p>
              <div className="flex items-center gap-2 text-[10px] text-gray-500">
                <PinDrop className="w-2.5 h-2.5" />
                {favorites.length} saved
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {statusConfig.map(({ label, icon: Icon, color, count }) => (
                <button
                  key={label}
                  onClick={() => setFilterStatus(label)}
                  className={`rounded-md p-2 transition-all border ${
                    filterStatus === label
                      ? `border-${color}-500 ring-1 ring-${color}-500/20 bg-${color}-50 dark:bg-${color}-950/20`
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Icon className={`w-3 h-3 text-${color}-500`} />
                      <span className="text-[11px] font-medium">{label}</span>
                    </div>
                    <span className="text-sm font-bold">{count}</span>
                  </div>
                  <div className="mt-1.5 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${color}-500 rounded-full transition-all duration-500`}
                      style={{ width: `${(count / totalBooths) * 100}%` }}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Compact Legend Icons */}
            <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-2 text-[10px] text-gray-500">
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Available</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span>Reserved</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span>Booked</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                <span>Saved</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Compact Tips Card */}
      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-2">
          <AlertCircle className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Tips:</span> Click colored dots for details • 
            Save favorites with ★ • Filter by status
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionFloorPlanContent;