import React from 'react'

const Reports = () => {
  return (
    <div>
          <div className="max-w-6xl mx-auto animate-fadeIn py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10 px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl overflow-hidden border border-gray-100">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Financial & Operational Reports
                </h2>
              </div>
              
              {/* Body */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 bg-gradient-to-b from-white to-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  {/* Report Card 1 */}
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-200 shadow-md">
                    <div className="absolute left-0 top-0 h-full w-1 sm:w-1.5 md:w-2 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-xl sm:rounded-l-2xl"></div>
                    <div className="ml-2 sm:ml-3 md:ml-4">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                        Total Revenue 2026
                      </h3>
                      <div className="text-gray-700 text-xs sm:text-sm">
                        <p className="mb-2 sm:mb-3">
                          <span className="font-semibold text-gray-900">
                            SAR 18.5 Million
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Report Card 2 */}
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-200 shadow-md">
                    <div className="absolute left-0 top-0 h-full w-1 sm:w-1.5 md:w-2 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-xl sm:rounded-l-2xl"></div>
                    <div className="ml-2 sm:ml-3 md:ml-4">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                        Total Revenue 2026
                      </h3>
                      <div className="text-gray-700 text-xs sm:text-sm">
                        <p className="mb-2 sm:mb-3">
                          <span className="font-semibold text-gray-900">
                            SAR 18.5 Million
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Report Card 3 */}
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-200 shadow-md">
                    <div className="absolute left-0 top-0 h-full w-1 sm:w-1.5 md:w-2 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-xl sm:rounded-l-2xl"></div>
                    <div className="ml-2 sm:ml-3 md:ml-4">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                        Total Revenue 2026
                      </h3>
                      <div className="text-gray-700 text-xs sm:text-sm">
                        <p className="mb-2 sm:mb-3">
                          <span className="font-semibold text-gray-900">
                            SAR 18.5 Million
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Report Card 4 */}
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-200 shadow-md">
                    <div className="absolute left-0 top-0 h-full w-1 sm:w-1.5 md:w-2 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-xl sm:rounded-l-2xl"></div>
                    <div className="ml-2 sm:ml-3 md:ml-4">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                        Total Revenue 2026
                      </h3>
                      <div className="text-gray-700 text-xs sm:text-sm">
                        <p className="mb-2 sm:mb-3">
                          <span className="font-semibold text-gray-900">
                            SAR 18.5 Million
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-600 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition hover:scale-[1.02]">
                    Download Full Report
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Reports