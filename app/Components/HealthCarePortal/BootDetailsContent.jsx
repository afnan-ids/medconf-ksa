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
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">My Booked Booths</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
                <EventAvailable className="w-4 h-4" />
                {totalBookings} active {totalBookings === 1 ? 'booking' : 'bookings'}
              </p>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-950 rounded-lg hover:bg-blue-100 transition-all flex items-center gap-2">
              <Refresh className="w-4 h-4" />
              Sync
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <ConfirmationNumber className="w-5 h-5 text-blue-500" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{totalBookings}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Bookings</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <CalendarToday className="w-5 h-5 text-purple-500" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{upcomingCount}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Upcoming Events</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${totalSpent.toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Spent</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booth Cards Grid */}
      {bookedBooths.length === 0 ? (
        <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-12 text-center">
          <div className="inline-block p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
            <StorefrontIcon className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No booths booked yet</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Browse available booths and secure your spot today.</p>
          <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
            Book New Booth
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookedBooths.map((booth, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
              onMouseEnter={() => setHoveredBooth(index)}
              onMouseLeave={() => setHoveredBooth(null)}
            >
              <div className="relative h-28 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-4">
                <div className="absolute top-3 right-3">
                 
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(booth.status)}`}>
                    {booth.status}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 bg-white dark:bg-gray-900 rounded-lg text-xs font-medium">
                    Booth #{booth.number}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{booth.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <LocationOn className="w-3 h-3" />
                      <span>Hall A, Section {Math.floor(Math.random() * 5) + 1}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{booth.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Person className="w-4 h-4 text-blue-500" />
                    <span>Up to 4 representatives</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                  <div>
                    <p className="text-xs text-gray-500">Total Price</p>
                    <p className="font-bold text-gray-900 dark:text-white">${booth.price?.toLocaleString() || "2,500"}</p>
                  </div>
                  <div className="flex gap-2">
                    
                    <button
                      onClick={() => onCancel?.(booth)}
                      className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 dark:bg-red-950 rounded-lg hover:bg-red-100 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Help Section */}
      {bookedBooths.length > 0 && (
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Need Help?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Contact support at <a href="mailto:events@example.com" className="text-blue-600 hover:underline">events@example.com</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BootDetailsContent;