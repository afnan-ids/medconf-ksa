"use client";

import { useState } from "react";
import DocumentUploadContent from "../../../../Components/HealthCarePortal/DocumentUploadContent";
import { docs as initialDocs } from "../../../../Data/hcp-data";
import { getColorClasses } from "../../../../utils/colorUtils";

export default function DocumentUploadPage() {
  const [docs, setDocs] = useState(initialDocs);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  return (
    <DocumentUploadContent
      docs={docs}
      setDocs={setDocs}
      selectedFile={selectedFile}
      setSelectedFile={setSelectedFile}
      uploading={uploading}
      setUploading={setUploading}
      getColorClasses={getColorClasses}
    />
  );
}