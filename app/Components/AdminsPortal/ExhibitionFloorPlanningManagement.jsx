"use client";

import { useState } from "react";
import {
  Map,
  Grid3x3,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Move,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Download,
  Layers,
  CheckCircle,
  Clock,
  XCircle,
  MapPin,
  Building2,
  DollarSign,
  Users,
  RefreshCw,
  Eye,
  ChevronDown,
  Search,
} from "lucide-react";

export default function ExhibitionFloorPlanningManagement() {
  const [selectedHall, setSelectedHall] = useState("hallA");
  const [showBoothModal, setShowBoothModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedBooth, setSelectedBooth] = useState(null);
  const [zoom, setZoom] = useState(1);

  // Halls data
  const halls = [
    { id: "hallA", name: "Hall A", totalBooths: 48, occupied: 38 },
    { id: "hallB", name: "Hall B", totalBooths: 42, occupied: 29 },
    { id: "hallC", name: "Hall C", totalBooths: 36, occupied: 31 },
    { id: "hallD", name: "Hall D", totalBooths: 30, occupied: 18 },
  ];

  // Booth grid data for Hall A (48 booths - 6x8 grid)
  const [booths, setBooths] = useState([
    // Row 1 (A01-A08)
    { id: "A01", status: "booked", exhibitor: "MedTech Solutions", size: "standard", price: 2500, hall: "hallA", row: 1, col: 1 },
    { id: "A02", status: "booked", exhibitor: "HealthAI Systems", size: "standard", price: 2500, hall: "hallA", row: 1, col: 2 },
    { id: "A03", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 1, col: 3 },
    { id: "A04", status: "reserved", exhibitor: "Pending - PharmaCorp", size: "premium", price: 5000, hall: "hallA", row: 1, col: 4 },
    { id: "A05", status: "booked", exhibitor: "Diagnostic Labs", size: "standard", price: 2500, hall: "hallA", row: 1, col: 5 },
    { id: "A06", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 1, col: 6 },
    { id: "A07", status: "booked", exhibitor: "Wellness Global", size: "corner", price: 3500, hall: "hallA", row: 1, col: 7 },
    { id: "A08", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 1, col: 8 },
    // Row 2 (A09-A16)
    { id: "A09", status: "booked", exhibitor: "Siemens Healthineers", size: "premium", price: 5000, hall: "hallA", row: 2, col: 1 },
    { id: "A10", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 2, col: 2 },
    { id: "A11", status: "reserved", exhibitor: "Pending - BioTech Corp", size: "standard", price: 2500, hall: "hallA", row: 2, col: 3 },
    { id: "A12", status: "booked", exhibitor: "PharmaCorp Intl.", size: "corner", price: 3500, hall: "hallA", row: 2, col: 4 },
    { id: "A13", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 2, col: 5 },
    { id: "A14", status: "booked", exhibitor: "MedTech Solutions", size: "standard", price: 2500, hall: "hallA", row: 2, col: 6 },
    { id: "A15", status: "booked", exhibitor: "HealthAI Systems", size: "premium", price: 5000, hall: "hallA", row: 2, col: 7 },
    { id: "A16", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 2, col: 8 },
    // Row 3 (A17-A24)
    { id: "A17", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 3, col: 1 },
    { id: "A18", status: "booked", exhibitor: "Wellness Global", size: "standard", price: 2500, hall: "hallA", row: 3, col: 2 },
    { id: "A19", status: "booked", exhibitor: "Siemens Healthineers", size: "premium", price: 5000, hall: "hallA", row: 3, col: 3 },
    { id: "A20", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 3, col: 4 },
    { id: "A21", status: "reserved", exhibitor: "Pending - NanoMed", size: "corner", price: 3500, hall: "hallA", row: 3, col: 5 },
    { id: "A22", status: "booked", exhibitor: "Diagnostic Labs", size: "standard", price: 2500, hall: "hallA", row: 3, col: 6 },
    { id: "A23", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 3, col: 7 },
    { id: "A24", status: "booked", exhibitor: "PharmaCorp Intl.", size: "standard", price: 2500, hall: "hallA", row: 3, col: 8 },
    // Row 4 (A25-A32)
    { id: "A25", status: "booked", exhibitor: "MedTech Solutions", size: "corner", price: 3500, hall: "hallA", row: 4, col: 1 },
    { id: "A26", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 4, col: 2 },
    { id: "A27", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 4, col: 3 },
    { id: "A28", status: "booked", exhibitor: "HealthAI Systems", size: "standard", price: 2500, hall: "hallA", row: 4, col: 4 },
    { id: "A29", status: "reserved", exhibitor: "Pending - BioGen", size: "premium", price: 5000, hall: "hallA", row: 4, col: 5 },
    { id: "A30", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 4, col: 6 },
    { id: "A31", status: "booked", exhibitor: "Siemens Healthineers", size: "standard", price: 2500, hall: "hallA", row: 4, col: 7 },
    { id: "A32", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 4, col: 8 },
    // Row 5 (A33-A40)
    { id: "A33", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 5, col: 1 },
    { id: "A34", status: "booked", exhibitor: "Wellness Global", size: "standard", price: 2500, hall: "hallA", row: 5, col: 2 },
    { id: "A35", status: "booked", exhibitor: "PharmaCorp Intl.", size: "premium", price: 5000, hall: "hallA", row: 5, col: 3 },
    { id: "A36", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 5, col: 4 },
    { id: "A37", status: "booked", exhibitor: "MedTech Solutions", size: "standard", price: 2500, hall: "hallA", row: 5, col: 5 },
    { id: "A38", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 5, col: 6 },
    { id: "A39", status: "reserved", exhibitor: "Pending - GeneTech", size: "corner", price: 3500, hall: "hallA", row: 5, col: 7 },
    { id: "A40", status: "booked", exhibitor: "Diagnostic Labs", size: "standard", price: 2500, hall: "hallA", row: 5, col: 8 },
    // Row 6 (A41-A48)
    { id: "A41", status: "booked", exhibitor: "HealthAI Systems", size: "premium", price: 5000, hall: "hallA", row: 6, col: 1 },
    { id: "A42", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 6, col: 2 },
    { id: "A43", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 6, col: 3 },
    { id: "A44", status: "booked", exhibitor: "Siemens Healthineers", size: "standard", price: 2500, hall: "hallA", row: 6, col: 4 },
    { id: "A45", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 6, col: 5 },
    { id: "A46", status: "booked", exhibitor: "Wellness Global", size: "corner", price: 3500, hall: "hallA", row: 6, col: 6 },
    { id: "A47", status: "booked", exhibitor: "PharmaCorp Intl.", size: "standard", price: 2500, hall: "hallA", row: 6, col: 7 },
    { id: "A48", status: "available", exhibitor: null, size: "standard", price: 2500, hall: "hallA", row: 6, col: 8 },
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "booked":
        return { bg: "bg-blue-500/20", border: "border-blue-500/30", text: "text-blue-400", label: "Booked", icon: CheckCircle };
      case "available":
        return { bg: "bg-emerald-500/20", border: "border-emerald-500/30", text: "text-emerald-400", label: "Available", icon: MapPin };
      case "reserved":
        return { bg: "bg-amber-500/20", border: "border-amber-500/30", text: "text-amber-400", label: "Reserved", icon: Clock };
      default:
        return { bg: "bg-white/10", border: "border-white/10", text: "text-gray-400", label: "Unknown", icon: XCircle };
    }
  };

  const currentHallBooths = booths.filter((b) => b.hall === selectedHall);
  const hallStats = halls.find((h) => h.id === selectedHall);
  const availableCount = currentHallBooths.filter((b) => b.status === "available").length;
  const bookedCount = currentHallBooths.filter((b) => b.status === "booked").length;
  const reservedCount = currentHallBooths.filter((b) => b.status === "reserved").length;

  const handleBoothClick = (booth) => {
    setSelectedBooth(booth);
    setShowBoothModal(true);
  };

  const handleAssignBooth = () => {
    setShowAssignModal(true);
  };

  const updateBoothStatus = (boothId, newStatus, exhibitorName = null) => {
    setBooths(
      booths.map((b) =>
        b.id === boothId
          ? { ...b, status: newStatus, exhibitor: exhibitorName || (newStatus === "available" ? null : b.exhibitor) }
          : b
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Exhibition Floor Planning
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage booth layout, floor plan allocation, and assignments
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Hall Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
        {halls.map((hall) => (
          <button
            key={hall.id}
            onClick={() => setSelectedHall(hall.id)}
            className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
              selectedHall === hall.id
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
            }`}
          >
            {hall.name}
            <span className="ml-2 text-xs opacity-80">
              ({hall.occupied}/{hall.totalBooths})
            </span>
          </button>
        ))}
      </div>

      {/* Hall Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Booths", value: hallStats?.totalBooths, icon: Grid3x3 },
          { label: "Available", value: availableCount, icon: MapPin },
          { label: "Booked", value: bookedCount, icon: CheckCircle },
          { label: "Reserved", value: reservedCount, icon: Clock },
        ].map((stat, idx) => (
          <div key={idx} className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                <stat.icon className="w-4 h-4 text-blue-400" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floor Plan Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs text-gray-400">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-xs text-gray-400">Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-xs text-gray-400">Reserved</span>
          </div>
        </div>
      </div>

      {/* Floor Plan Grid */}
      <div
        className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-blue-500/30"
        style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}
      >
        <div className="p-6">
          {/* Hall Label */}
          <div className="mb-4 pb-2 border-b border-white/10">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-blue-400" />
              {hallStats?.name} Floor Plan
            </h3>
            <p className="text-xs text-gray-400 mt-1">Grid layout with booth positions</p>
          </div>

          {/* Booth Grid - 6 rows x 8 columns */}
          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 6 }, (_, rowIdx) => {
              const rowNumber = rowIdx + 1;
              const rowBooths = currentHallBooths.filter((b) => b.row === rowNumber).sort((a, b) => a.col - b.col);
              
              return rowBooths.map((booth) => {
                const statusStyle = getStatusStyle(booth.status);
                const StatusIcon = statusStyle.icon;
                
                return (
                  <button
                    key={booth.id}
                    onClick={() => handleBoothClick(booth)}
                    className={`
                      relative group p-3 rounded-xl border transition-all duration-300
                      ${statusStyle.bg} ${statusStyle.border}
                      hover:scale-105 hover:shadow-lg hover:z-10
                      ${booth.size === "premium" ? "col-span-2 row-span-2" : ""}
                      ${booth.size === "corner" ? "border-l-4 border-t-4" : ""}
                    `}
                    style={{
                      gridColumn: `span ${booth.size === "premium" ? 2 : 1}`,
                      gridRow: `span ${booth.size === "premium" ? 2 : 1}`,
                    }}
                  >
                    <div className="text-left">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white">{booth.id}</span>
                        <StatusIcon className={`w-3 h-3 ${statusStyle.text}`} />
                      </div>
                      {booth.exhibitor && (
                        <p className="text-[10px] text-gray-300 truncate max-w-[80px]">
                          {booth.exhibitor}
                        </p>
                      )}
                      {booth.status === "available" && (
                        <p className="text-[10px] text-emerald-400 mt-1">${booth.price}</p>
                      )}
                    </div>
                    
                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900/90 backdrop-blur-xl rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 border border-white/10">
                      {booth.id} - {statusStyle.label}
                      {booth.exhibitor && ` - ${booth.exhibitor}`}
                    </div>
                  </button>
                );
              });
            })}
          </div>

          {/* Legend for aisles */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                  <span className="text-[10px]">A01</span>
                </div>
                <span>Standard Booth (3x3m)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-6 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                  <span className="text-[10px]">Premium</span>
                </div>
                <span>Premium Booth (6x6m)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/5 rounded-lg border-l-4 border-t-4 border-white/20 flex items-center justify-center">
                  <span className="text-[10px]">C01</span>
                </div>
                <span>Corner Booth</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-left">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl" />
          <div className="relative flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg border border-white/20">
              <Plus className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Add New Booth</p>
              <p className="text-xs text-gray-400">Create additional booth spaces</p>
            </div>
          </div>
        </button>

        <button className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-left">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl" />
          <div className="relative flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg border border-white/20">
              <RefreshCw className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Bulk Assign</p>
              <p className="text-xs text-gray-400">Assign multiple booths at once</p>
            </div>
          </div>
        </button>

        <button className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-left">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl" />
          <div className="relative flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg border border-white/20">
              <Layers className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Export Layout</p>
              <p className="text-xs text-gray-400">Download floor plan as PDF/Image</p>
            </div>
          </div>
        </button>
      </div>

      {/* Booth Details Modal */}
      {showBoothModal && selectedBooth && (
        <BoothDetailsModal
          booth={selectedBooth}
          onClose={() => {
            setShowBoothModal(false);
            setSelectedBooth(null);
          }}
          onAssign={handleAssignBooth}
          onUpdateStatus={(newStatus) => {
            updateBoothStatus(selectedBooth.id, newStatus);
            setShowBoothModal(false);
            setSelectedBooth(null);
          }}
        />
      )}

      {/* Assign Booth Modal */}
      {showAssignModal && selectedBooth && (
        <AssignBoothModal
          booth={selectedBooth}
          onClose={() => {
            setShowAssignModal(false);
            setSelectedBooth(null);
          }}
          onAssign={(exhibitorName) => {
            updateBoothStatus(selectedBooth.id, "booked", exhibitorName);
            setShowAssignModal(false);
            setSelectedBooth(null);
          }}
        />
      )}
    </div>
  );
}

// Booth Details Modal Component
const BoothDetailsModal = ({ booth, onClose, onAssign, onUpdateStatus }) => {
  const statusStyle = getStatusStyle(booth.status);
  const StatusIcon = statusStyle.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-md shadow-2xl border border-blue-500/20 animate-in zoom-in-95 duration-300">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Booth Details
            </h2>
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative p-6 space-y-4">
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-3xl font-bold text-white">{booth.id}</p>
            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${statusStyle.bg} ${statusStyle.border} mt-2`}>
              <StatusIcon className={`w-3 h-3 ${statusStyle.text}`} />
              <span className={`text-xs font-medium ${statusStyle.text}`}>{statusStyle.label}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-sm text-gray-400">Size Type</span>
              <span className="text-sm font-medium text-white capitalize">{booth.size}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-sm text-gray-400">Price</span>
              <span className="text-sm font-semibold text-white">${booth.price.toLocaleString()}</span>
            </div>
            {booth.exhibitor && (
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-sm text-gray-400">Assigned To</span>
                <span className="text-sm font-medium text-white">{booth.exhibitor}</span>
              </div>
            )}
            <div className="flex justify-between py-2">
              <span className="text-sm text-gray-400">Hall</span>
              <span className="text-sm text-white">{booth.hall === "hallA" ? "Hall A" : booth.hall === "hallB" ? "Hall B" : booth.hall === "hallC" ? "Hall C" : "Hall D"}</span>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            {booth.status === "available" && (
              <button
                onClick={onAssign}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Assign Exhibitor
              </button>
            )}
            {booth.status === "booked" && (
              <button
                onClick={() => onUpdateStatus("available")}
                className="flex-1 px-4 py-2 border border-amber-500/30 rounded-xl text-amber-400 hover:bg-amber-500/10 transition-all"
              >
                Make Available
              </button>
            )}
            {booth.status === "reserved" && (
              <>
                <button
                  onClick={() => onUpdateStatus("available")}
                  className="flex-1 px-4 py-2 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-all"
                >
                  Cancel Reservation
                </button>
                <button
                  onClick={onAssign}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  Confirm Booking
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Assign Booth Modal Component
const AssignBoothModal = ({ booth, onClose, onAssign }) => {
  const [exhibitorName, setExhibitorName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const suggestedExhibitors = [
    "MedTech Solutions",
    "HealthAI Systems",
    "PharmaCorp Intl.",
    "Diagnostic Labs",
    "Wellness Global",
    "Siemens Healthineers",
    "BioTech Corp",
    "NanoMed",
  ];

  const filteredSuggestions = suggestedExhibitors.filter((e) =>
    e.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-md shadow-2xl border border-blue-500/20 animate-in zoom-in-95 duration-300">
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Assign Booth {booth.id}
            </h2>
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative p-6 space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Search Exhibitor</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Type exhibitor name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500/50 transition-all"
              />
            </div>
          </div>

          {filteredSuggestions.length > 0 && (
            <div className="space-y-1">
              <p className="text-xs text-gray-400">Suggestions</p>
              {filteredSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setExhibitorName(suggestion)}
                  className="w-full p-2 text-left text-sm text-gray-300 hover:bg-white/10 rounded-lg transition-all"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Or Enter Manually</label>
            <input
              type="text"
              placeholder="Exhibitor name"
              value={exhibitorName}
              onChange={(e) => setExhibitorName(e.target.value)}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500/50 transition-all"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={() => exhibitorName && onAssign(exhibitorName)}
              disabled={!exhibitorName}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Assign Booth
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function for status styles
const getStatusStyle = (status) => {
  switch (status) {
    case "booked":
      return { bg: "bg-blue-500/20", border: "border-blue-500/30", text: "text-blue-400", label: "Booked", icon: CheckCircle };
    case "available":
      return { bg: "bg-emerald-500/20", border: "border-emerald-500/30", text: "text-emerald-400", label: "Available", icon: MapPin };
    case "reserved":
      return { bg: "bg-amber-500/20", border: "border-amber-500/30", text: "text-amber-400", label: "Reserved", icon: Clock };
    default:
      return { bg: "bg-white/10", border: "border-white/10", text: "text-gray-400", label: "Unknown", icon: XCircle };
  }
};