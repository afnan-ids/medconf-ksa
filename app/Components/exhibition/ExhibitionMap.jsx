"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import {
  Map as MapIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import ImageMapper from "react-img-mapper";
import { useMemo } from "react";

const ExhibitionMap = ({ exhibitionData }) => {
  const containerRef = useRef(null);
  const [selectedStalls, setSelectedStalls] = useState([]);
  const [containerWidth, setContainerWidth] = useState(0);
  const handleStallClick = (area) => {
  setSelectedStalls((prev) => {
    const exists = prev.some((s) => s.name === area.name);
    if (exists) {
      return prev.filter((s) => s.name !== area.name);
    } else {
      return [...prev, area];
    }
  });
};

  const stalls = exhibitionData?.stalls ?? [];
  const floorMapUrl = exhibitionData?.floorMapUrl;

  const map = useMemo (() => {
    return (
    stalls.map((stall) => ({
      id: stall.id,
      name: stall.stallNumber,
      shape: "poly",
      coords: Array.isArray(stall.coordinates) ? stall.coordinates : [],
      preFillColor:
  selectedStalls.some(s => s.name === stall.stallNumber)
    ? "rgba(255,165,0,0.5)"
    : stall.status === 2
    ? "rgba(255,0,0,0.4)"
    : ""
    })))
  }, [stalls, selectedStalls]) 
  const updateContainerWidth = () => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    // Set initial width
    updateContainerWidth();
    // Add event listener for window resize
    window.addEventListener('resize', updateContainerWidth);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);
  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-8">
      <div className="bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 border border-dashed border-gray-200">
        <div className="space-y-3 sm:space-y-4 w-full" ref={containerRef} >
          {floorMapUrl && stalls.length > 0 ? (
            <ImageMapper
              src={`${process.env.NEXT_PUBLIC_API}${floorMapUrl}`}
              areas={map}
              onClick={handleStallClick}
              name="Floor Map"
              width={containerWidth}
              imgWidth={1160}
            />
          ) : (
            <div className="w-full rounded-lg bg-white border border-gray-200 p-6 text-center text-sm text-gray-500">
              Floor map or stall data not available
            </div>
          )}

          <img
            src="/Images/taqeem-exhibition-booth-designs-1024x602.jpg"
            alt="exhibition-floor-design"
            className="object-cover h-auto w-full shadow-md rounded-lg sm:rounded-xl"
          />
        </div>

        <div className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <LocationIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <span className="text-xs sm:text-sm font-medium text-gray-800">
              Your Booth Location: <span className="text-blue-600 font-bold">A12</span>
            </span>
          </div>
          <p className="text-xs text-gray-600">
            Hall 1, Premium Corner Section - Near Main Entrance
          </p>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-4 sm:mt-5 md:mt-6">
            <Button
              variant="contained"
              className="!bg-gradient-to-r !from-emerald-500 !to-green-400 !rounded-full !px-3 sm:!px-4 md:!px-5 lg:!px-6 !text-xs sm:!text-sm !py-1.5 sm:!py-2 !shadow-md hover:!shadow-lg !normal-case"
            >
              Available
            </Button>
            <Button
              variant="contained"
              className="!bg-gradient-to-r !from-amber-500 !to-orange-400 !rounded-full !px-3 sm:!px-4 md:!px-5 lg:!px-6 !text-xs sm:!text-sm !py-1.5 sm:!py-2 !shadow-md hover:!shadow-lg !normal-case"
            >
              Selected
            </Button>
            <Button
              variant="contained"
              className="!bg-gradient-to-r !from-purple-500 !to-pink-400 !rounded-full !px-3 sm:!px-4 md:!px-5 lg:!px-6 !text-xs sm:!text-sm !py-1.5 sm:!py-2 !shadow-md hover:!shadow-lg !normal-case"
            >
              Your Booth
            </Button>
            <Button
              variant="contained"
              className="!bg-gradient-to-r !from-red-500 !to-rose-500 !rounded-full !px-3 sm:!px-4 md:!px-5 lg:!px-6 !text-xs sm:!text-sm !py-1.5 sm:!py-2 !shadow-md hover:!shadow-lg !normal-case"
            >
              Booked
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionMap;