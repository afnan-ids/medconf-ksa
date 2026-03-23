import React from 'react'

const AuditLog = () => {
  return (
    <div>
           <div className="max-w-7xl mx-auto animate-fadeIn mt-[5rem]">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-800 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                  Security & Audit Logs
                </h2>
              </div>

              {/* Table Container - Horizontal Scroll on Mobile */}
              <div className="overflow-x-auto">
                <div className="min-w-[1000px] md:min-w-full">
                  <table className="w-full text-xs sm:text-sm text-left text-gray-700 border-collapse border border-gray-300">
                    {/* Table Head */}
                    <thead className="text-[10px] sm:text-xs uppercase bg-gray-100 text-gray-800">
                      <tr>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Timestamp
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          User / System
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Action
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Details
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          IP Address
                        </th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                      <tr className="hover:bg-gray-50 transition">
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-medium whitespace-nowrap">
                          2026-01-05 10:30
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Admin
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 whitespace-nowrap">
                          Booking Approved
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Booth A12 - Pharma Co.
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          192.168.1.100
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-50 transition bg-gray-50">
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-medium whitespace-nowrap">
                          2026-01-05 09:15
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          System
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 whitespace-nowrap">
                          License Verified
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Dr. Sarah Ahmed via SCFHS API
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          -
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-50 transition">
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-medium whitespace-nowrap">
                          2026-01-04 14:20
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Admin
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 whitespace-nowrap">
                          User Registration
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Visitor John Doe
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          192.168.1.105
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default AuditLog