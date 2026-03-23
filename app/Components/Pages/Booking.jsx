import React from 'react'

const Booking = () => {
  return (
    <div>
           <div className="max-w-7xl mx-auto animate-fadeIn mt-[5rem]">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-800 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                  Exhibition Booking Management
                </h2>
              </div>

              {/* Table Container - Horizontal Scroll on Mobile */}
              <div className="overflow-x-auto">
                <div className="min-w-[900px] md:min-w-full">
                  <table className="w-full text-xs sm:text-sm text-left text-gray-700 border-collapse border border-gray-300">
                    {/* Table Head */}
                    <thead className="text-[10px] sm:text-xs uppercase bg-gray-100 text-gray-800">
                      <tr>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Booth
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Company
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Size
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Price
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Status
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold text-center">
                          Payment
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold text-center">
                          Action
                        </th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                      <tr className="hover:bg-gray-50 transition">
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-medium">
                          A12
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Pharma Co.
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          18m²
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          SAR 85,000
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Contract Signed
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Paid
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 text-center">
                          <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-green-100 text-green-700 rounded-full">
                            Approve Final
                          </span>
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

export default Booking