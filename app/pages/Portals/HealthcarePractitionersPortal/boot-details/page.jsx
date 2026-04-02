"use client";

import { useState } from "react";
import BootDetailsContent from "../../../../Components/HealthCarePortal/BootDetailsContent";
import { booths as initialBooths } from "../../../../Data/hcp-data";
import { getColorClasses } from "../../../../utils/colorUtils";

export default function BootDetails() {
  const [booths, setBooths] = useState(initialBooths);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedBooth, setSelectedBooth] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    boothNumber: "",
    date: "",
    timeSlot: "",
    purpose: "",
  });

  // Available time slots
  const timeSlots = [
    "09:00 AM - 11:00 AM",
    "11:00 AM - 01:00 PM",
    "01:00 PM - 03:00 PM",
    "03:00 PM - 05:00 PM",
  ];

  // Available booths for booking
  const availableBooths = [
    { number: "B-124", name: "Medical Devices", color: "emerald" },
    { number: "B-125", name: "Digital Health", color: "blue" },
    { number: "B-126", name: "Pharmaceuticals", color: "violet" },
    { number: "B-127", name: "Research Lab", color: "amber" },
  ];

  const handleBookNow = () => {
    setShowBookingModal(true);
    setBookingStep(1);
    setSelectedBooth(null);
    setBookingData({
      boothNumber: "",
      date: "",
      timeSlot: "",
      purpose: "",
    });
  };

  const handleBoothSelect = (booth) => {
    setSelectedBooth(booth);
    setBookingData({ ...bookingData, boothNumber: booth.number });
  };

  const handleNextStep = () => {
    if (bookingStep === 1 && selectedBooth) {
      setBookingStep(2);
    } else if (bookingStep === 2) {
      if (bookingData.date && bookingData.timeSlot) {
        setBookingStep(3);
        
        // Add the new booking to booths list
        setTimeout(() => {
          const newBooth = {
            number: selectedBooth.number,
            name: selectedBooth.name,
            status: "Booked",
            time: bookingData.timeSlot.split(" - ")[0],
            color: selectedBooth.color,
          };
          setBooths([newBooth, ...booths]);
        }, 1500);
      }
    }
  };

  const handleCloseModal = () => {
    setShowBookingModal(false);
    setBookingStep(1);
    setSelectedBooth(null);
  };

  const handleReschedule = (booth) => {
    // Handle reschedule logic
    console.log("Reschedule booth:", booth);
  };

  const handleCancel = (booth) => {
    // Handle cancel logic
    if (confirm(`Are you sure you want to cancel booth ${booth.number}?`)) {
      setBooths(booths.filter(b => b.number !== booth.number));
    }
  };

  return (
    <BootDetailsContent
      booths={booths}
      getColorClasses={getColorClasses}
      onReschedule={handleReschedule}
      onCancel={handleCancel}
    />
  );
}