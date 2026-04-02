"use client";
import { useState, useRef } from "react";
import { 
  Map as MapIcon,
  ZoomIn,
  ZoomOut,
  Fullscreen,
  Refresh,
  Layers,
  Navigation,
  Info,
  PinDrop
} from "@mui/icons-material";
import { 
  Bookmark, 
  CheckCircle, 
  Clock, 
  Compass, 
  Grid, 
  Maximize2, 
  Minimize2,
  Search,
  Map,
  Star,
  AlertCircle,
  Eye,
  Heart,
  X
} from "lucide-react";

const statusConfig = [
  { label: "Available", icon: CheckCircle, color: "emerald", count: 24 },
  { label: "Reserved", icon: Clock, color: "amber", count: 12 },
  { label: "Booked", icon: Bookmark, color: "blue", count: 84 },
];

const boothData = [
  { id: "A12", status: "Available", size: "standard", price: "$2,500" },
  { id: "B07", status: "Reserved", size: "premium", price: "$5,000" },
  { id: "C21", status: "Booked", size: "standard", price: "$2,500" },
  { id: "D14", status: "Available", size: "corner", price: "$3,500" },
  { id: "E03", status: "Booked", size: "premium", price: "$5,000" },
  { id: "F09", status: "Reserved", size: "standard", price: "$2,500" },
];

const ExhibitionFloorPlanContent = ({ getColorClasses }) => {
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedBooth, setSelectedBooth] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [showLegend, setShowLegend] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const mapContainerRef = useRef(null);

  const totalBooths = boothData.length;
  const availableCount = boothData.filter(b => b.status === "Available").length;
  const occupancyRate = ((totalBooths - availableCount) / totalBooths * 100).toFixed(0);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => setZoom(1);

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
    setFavorites(prev => 
      prev.includes(boothId) ? prev.filter(id => id !== boothId) : [...prev, boothId]
    );
  };

  const filteredBooths = filterStatus === "all" ? boothData : boothData.filter(b => b.status === filterStatus);

  const getStatusStyle = (status) => {
    switch(status) {
      case "Available": return "bg-emerald-100 dark:bg-emerald-950 text-emerald-700";
      case "Reserved": return "bg-amber-100 dark:bg-amber-950 text-amber-700";
      case "Booked": return "bg-blue-100 dark:bg-blue-950 text-blue-700";
      default: return "bg-gray-100 text-gray-700";
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
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Exhibition Floor Plan</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  Interactive venue layout • {totalBooths} total booths
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium">{availableCount} Available</span>
              </div>
              <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <span className="text-xs font-medium">Occupancy: {occupancyRate}%</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <button onClick={handleZoomOut} className="p-1.5 hover:bg-white rounded-md transition-all">
                  <ZoomOut className="w-4 h-4 text-gray-600" />
                </button>
                <span className="px-2 py-1 text-xs font-medium">{Math.round(zoom * 100)}%</span>
                <button onClick={handleZoomIn} className="p-1.5 hover:bg-white rounded-md transition-all">
                  <ZoomIn className="w-4 h-4 text-gray-600" />
                </button>
                <button onClick={handleResetZoom} className="p-1.5 hover:bg-white rounded-md transition-all">
                  <Refresh className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <button onClick={toggleFullscreen} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 transition-all">
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button onClick={() => setShowLegend(!showLegend)} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 transition-all">
                <Layers className="w-4 h-4" />
              </button>
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
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div ref={mapContainerRef} className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
          <div className="transition-transform duration-300" style={{ transform: `scale(${zoom})`, transformOrigin: '0 0' }}>
            <div className="p-6">
              <div className="space-y-4">
                <img
                  src="/Images/exhibition-floor-plan.webp"
                  alt="Exhibition floor plan"
                  className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/800x400?text=Floor+Plan+Image";
                  }}
                />
                <img
                  src="/Images/taqeem-exhibition-booth-designs-1024x602.jpg"
                  alt="Booth designs"
                  className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/800x300?text=Booth+Designs";
                  }}
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-900/90 rounded-lg px-3 py-1.5 text-xs flex items-center gap-2 shadow-sm">
            <Navigation className="w-3 h-3" />
            Click on booths for details • Scroll to zoom
          </div>
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
                {totalBooths - availableCount} booths occupied
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
                  <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-${color}-500 rounded-full`} style={{ width: `${(count / totalBooths) * 100}%` }} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tips Card */}
      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Interactive Floor Plan Tips</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              • Click on any booth to view details and availability<br />
              • Use zoom controls to see booth numbers clearly<br />
              • Filter booths by status to find available spaces quickly
            </p>
          </div>
        </div>
      </div>

      {/* Booth Details Modal */}
      {selectedBooth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-950 rounded-xl max-w-md w-full shadow-2xl border border-gray-200 dark:border-gray-800">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Booth {selectedBooth.id}</h3>
                <button onClick={() => setSelectedBooth(null)} className="p-1 hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-3">
                <div className={`px-3 py-2 rounded-lg ${getStatusStyle(selectedBooth.status)}`}>
                  <div className="flex items-center gap-2">
                    {statusConfig.find(s => s.label === selectedBooth.status)?.icon({ className: "w-4 h-4" })}
                    <span className="text-sm font-medium">Status: {selectedBooth.status}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <p className="text-xs text-gray-500">Size</p>
                    <p className="text-sm font-semibold capitalize">{selectedBooth.size}</p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="text-sm font-semibold">{selectedBooth.price}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => toggleFavorite(selectedBooth.id)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(selectedBooth.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  Favorite
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
  );
};

export default ExhibitionFloorPlanContent;