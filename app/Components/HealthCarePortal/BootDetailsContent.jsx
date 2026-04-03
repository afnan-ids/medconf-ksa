"use client";
import { useState } from "react";
import { 
  Storefront as StorefrontIcon,
  CalendarToday,
  LocationOn,
  Person,
  ConfirmationNumber,
  EventAvailable,
  Cancel,
  Refresh,
  Star,
  StarBorder
} from "@mui/icons-material";
import { Calendar, Clock, MapPin, Users, Award, AlertCircle } from "lucide-react";

const BootDetailsContent = ({
  booths,
  onCancel,
}) => {
  const [hoveredBooth, setHoveredBooth] = useState(null);

  const bookedBooths = booths.filter((b) => b.status === "Booked");
  const totalBookings = bookedBooths.length;
  const totalSpent = bookedBooths.reduce((sum, booth) => sum + (booth.price || 0), 0);
  const upcomingCount = bookedBooths.filter(b => new Date(b.date) > new Date()).length;

  const getStatusStyle = (status) => {
    if (status === "Booked") return "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400";
    return "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400";
  };

  return (
    <div className="space-y-4">
      {/* Compact Stats Bar */}
      <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <EventAvailable className="w-4 h-4 text-blue-500" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">My Bookings</h2>
              <span className="text-sm text-gray-500">({totalBookings})</span>
            </div>
            <button className="p-1.5 text-blue-600 bg-blue-50 dark:bg-blue-950 rounded-md hover:bg-blue-100 transition-all">
              <Refresh className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Compact Stats */}
          <div className="flex gap-3">
            <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-md p-2">
              <div className="flex items-center justify-between">
                <ConfirmationNumber className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-lg font-bold text-gray-900 dark:text-white">{totalBookings}</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Total</p>
            </div>
            <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-md p-2">
              <div className="flex items-center justify-between">
                <CalendarToday className="w-3.5 h-3.5 text-purple-500" />
                <span className="text-lg font-bold text-gray-900 dark:text-white">{upcomingCount}</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Upcoming</p>
            </div>
            <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-md p-2">
              <div className="flex items-center justify-between">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-lg font-bold text-gray-900 dark:text-white">${totalSpent.toLocaleString()}</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Spent</p>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Booth Cards Grid */}
      {bookedBooths.length === 0 ? (
        <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-8 text-center">
          <div className="inline-block p-3 bg-gray-100 dark:bg-gray-800 rounded-full mb-3">
            <StorefrontIcon className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">No bookings yet</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Browse available booths</p>
          <button className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md text-sm font-medium hover:shadow-md transition-all">
            Book New Booth
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {bookedBooths.map((booth, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-md transition-all"
              onMouseEnter={() => setHoveredBooth(index)}
              onMouseLeave={() => setHoveredBooth(null)}
            >
              {/* Compact Header */}
              <div className="relative h-20 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-3">
                <div className="absolute top-2 right-2">
                  <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full ${getStatusStyle(booth.status)}`}>
                    {booth.status}
                  </span>
                </div>
                <div className="absolute bottom-2 left-2">
                  <span className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded-md text-xs font-medium">
                    #{booth.number}
                  </span>
                </div>
              </div>

              {/* Compact Content */}
              <div className="p-3">
                <div className="mb-2">
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white">{booth.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                    <LocationOn className="w-3 h-3" />
                    <span>Hall A, Sec {Math.floor(Math.random() * 5) + 1}</span>
                  </div>
                </div>

                <div className="space-y-1.5 mb-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{booth.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                    <Clock className="w-3.5 h-3.5 text-purple-500" />
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                    <Person className="w-3.5 h-3.5 text-blue-500" />
                    <span>Up to 4 reps</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="font-bold text-sm text-gray-900 dark:text-white">${booth.price?.toLocaleString() || "2,500"}</p>
                  </div>
                  <button
                    onClick={() => onCancel?.(booth)}
                    className="px-2 py-1 text-xs font-medium text-red-600 bg-red-50 dark:bg-red-950 rounded-md hover:bg-red-100 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Compact Help Section */}
      {bookedBooths.length > 0 && (
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Need help? <a href="mailto:events@example.com" className="text-blue-600 hover:underline">Contact support</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BootDetailsContent;