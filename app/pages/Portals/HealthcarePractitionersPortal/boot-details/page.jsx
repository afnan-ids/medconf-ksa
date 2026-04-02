"use client";

import { useState } from "react";
import BootDetailsContent from "../../../../Components/HealthCarePortal/BootDetailsContent";
import { booths as initialBooths } from "../../../../Data/hcp-data";

export default function BootDetails() {
  const [booths, setBooths] = useState(initialBooths);

  const handleCancel = (booth) => {
    // Handle cancel logic
    if (confirm(`Are you sure you want to cancel booth ${booth.number}?`)) {
      setBooths(booths.filter(b => b.number !== booth.number));
    }
  };

  return (
    <BootDetailsContent
      booths={booths}
      onCancel={handleCancel}
    />
  );
}