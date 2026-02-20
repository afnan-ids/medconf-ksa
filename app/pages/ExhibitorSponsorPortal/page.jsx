"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const PortalHome = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    "dashboard",
    "profile",
    "floorplan",
    "booking",
    "contract",
    "payment",
  ];

  return (
    <div className="mt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-br from-blue-900 to-black text-white py-16 px-6">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto text-sm text-gray-300 mb-4">
          <Link href="/" className="hover:text-white">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/portals" className="hover:text-white">
            Portals
          </Link>{" "}
          / Exhibitor
        </div>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">
            Exhibitor Dashboard
          </h1>
          <p className="mt-2 text-gray-300">
            Welcome, Pharma Co. | Global Health Exhibition 2026
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-wrap gap-4 justify-between">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize px-4 py-2 rounded-xl font-medium transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Booked Booth",
                  value: "A12",
                  sub: "18m² Premium Corner",
                },
                {
                  title: "Booking Status",
                  value: "Confirmed",
                  valueColor: "text-green-500",
                },
                {
                  title: "Total Cost",
                  value: "SAR 85,000",
                },
                {
                  title: "Leads Collected",
                  value: "245",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                >
                  <p className="text-gray-500 text-sm">{card.title}</p>
                  <h2
                    className={`text-2xl font-bold mt-2 ${
                      card.valueColor || "text-gray-800"
                    }`}
                  >
                    {card.value}
                  </h2>
                  {card.sub && (
                    <p className="text-gray-400 text-sm mt-1">{card.sub}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Analytics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 h-72 flex items-center justify-center border border-gray-100">
                Revenue Projection Chart
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 h-72 flex items-center justify-center border border-gray-100">
                Visitor Traffic Analytics
              </div>
            </div>
          </div>
        )}
        {activeTab === "profile" && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">
              Company Profile & Account Management
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Commercial Registration */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Commercial Registration No.
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Contact Person */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Full Width Textarea */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Company Description
                </label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Upload Logo
                </label>
                <input type="file" />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="text-sm">
                  I consent to data processing in accordance with PDPL
                </label>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Update Profile
              </button>
            </form>
          </div>
        )}
        {activeTab === "floorplan" && (
          <div>
            <h2 className="text-2xl">Interactive Exhibition Floor Plan</h2>
            <div className="">
              <h3 className="text-xl">
                View real-time booth availability and select your preferred
                location
              </h3>
              <Image></Image>
              <Button variant="contained" color="green"></Button>
              <Button variant="contained" color="orange"></Button>
              <Button variant="contained" color="red"></Button>
            </div>
          </div>
        )}
        {activeTab === "booking" && (
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-3xl">
              <h2 className="text-2xl font-semibold mb-6">
                Booth Booking System
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Desired Booth Number
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Commercial Registration */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Size (m²)
                    </label>
                    <select
                      name=""
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option value="9">9</option>
                      <option value="18">18</option>
                      <option value="36">36</option>
                    </select>
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Location Preference
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Dynamic Pricing
                    </label>
                    <input
                      type="text"
                      value="SAR 85,000"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <div className=" items-center gap-2">
                  <label> Additional Services</label>
                  <div className="flex">
                    <div className="">
                      <input type="checkbox" />
                      <label className="text-sm">
                        Electricity & Internet (+SAR 5,000)
                      </label>
                    </div>
                    <div className="">
                      <input type="checkbox" />
                      <label className="text-sm">
                        Furniture Package (+SAR 8,000)
                      </label>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Confirm Booking Request
                </button>
              </form>
            </div>
          </div>
        )}
        {activeTab === "contract" && (
          <div>
            <h2 className="text-center text-2xl">Contract Management</h2>
            <div className="">
              <h2 className="text-center text-2xl">
                Exhibition Participation Contract
              </h2>
              <p>
                Terms and conditions for participation in Global Health
                Exhibition 2026...
              </p>
              <div>
                <input type="checkbox" />
                <label>I have read and accept all terms and conditions</label>
              </div>
              <div className="gap-2 flex justify-center">
                <Button variant="contained" className="">
                  Sign Contract Digitally
                </Button>
                <Button variant="contained" className="">
                  Generate And Download PDF Contract
                </Button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "payment" && (
          <div>
            <h2 className="text-2xl">Secure Payment Portal</h2>
            <div className="h-full shadow-2xl">
              <h3 className="text-xl">Invoice Summary</h3>
              <span>Booth A12 - 18m² Premium</span>
              <span>Total Amount: SAR 85,000</span>
              <Image className="w-full h-full"></Image>
              <Button>Proceed To Payment</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortalHome;
