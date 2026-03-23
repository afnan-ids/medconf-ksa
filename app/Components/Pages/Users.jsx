import { Button } from '@mui/material'
import React from 'react'

const Users = () => {
  return (
    <div>
           <div className="max-w-7xl mx-auto animate-fadeIn mt-[5rem]">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-800 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                  User Management
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Manage and monitor all registered users
                </p>
              </div>

              {/* Table Container - Horizontal Scroll on Mobile */}
              <div className="overflow-x-auto">
                <div className="min-w-[800px] md:min-w-full">
                  <table className="w-full text-xs sm:text-sm text-left text-gray-700 border-collapse border border-gray-300">
                    {/* Table Head */}
                    <thead className="bg-gray-100 text-gray-800 text-[10px] sm:text-xs uppercase">
                      <tr>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          ID
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Name / Company
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Type
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Status
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Registered
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold text-center">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                      {/* Row 1 */}
                      <tr>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-medium">
                          EX1001
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Pharma Co. International
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Exhibitor
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Active
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Jan 4, 2026
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 text-center">
                          <Button variant="contained" size="small" className="!text-[10px] sm:!text-xs !px-2 sm:!px-3 !py-1">
                            Edit
                          </Button>
                        </td>
                      </tr>

                      {/* Row 2 */}
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-medium">
                          PR2005
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Dr. Sarah Ahmed
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Practitioner
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Verified
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Jan 3, 2026
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 text-center">
                          <Button variant="contained" size="small" className="!text-[10px] sm:!text-xs !px-2 sm:!px-3 !py-1">
                            View
                          </Button>
                        </td>
                      </tr>

                      {/* Row 3 */}
                      <tr>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-medium">
                          VI3007
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          John Doe
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Visitor
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Registered
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Jan 1, 2026
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 text-center">
                          <Button variant="contained" size="small" className="!text-[10px] sm:!text-xs !px-2 sm:!px-3 !py-1">
                            View
                          </Button>
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

export default Users