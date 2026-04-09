"use client";

import { useState, useRef } from "react";
import {
  Image,
  Upload,
  X,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Eye,
  Trash2,
  FileImage,
  FileVideo,
  FileText,
  File,
  Plus,
  ZoomIn,
  Info,
  Shield,
  Sparkles,
} from "lucide-react";
import { brandingRequirements, uploadedMedia } from "../../Data/sponsor-data";

const BrandingContent = () => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      setUploading(true);
      setTimeout(() => {
        setUploading(false);
        setSelectedFile(null);
      }, 2000);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "approved":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "pending_review":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
      case "pending":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
      case "uploaded":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "rejected":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-white/10 text-gray-300 border-white/10";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-3 h-3" />;
      case "uploaded":
        return <CheckCircle className="w-3 h-3" />;
      case "pending_review":
        return <Clock className="w-3 h-3" />;
      case "pending":
        return <Clock className="w-3 h-3" />;
      default:
        return <AlertCircle className="w-3 h-3" />;
    }
  };

  const getFileIcon = (type) => {
    if (type.includes("image"))
      return <FileImage className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />;
    if (type.includes("video"))
      return <FileVideo className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />;
    if (type.includes("pdf"))
      return <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />;
    return <File className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header Section */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-gray-500/10 rounded-full blur-3xl"></div>

        <div className="relative p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Image className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                <span className="text-[10px] sm:text-sm font-medium text-cyan-400 uppercase tracking-wide">
                  Branding Assets
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Branding & Media Management
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Upload and manage your branding materials, logos, and media
                assets
              </p>
            </div>
            <div className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
              <span className="text-[10px] sm:text-xs font-medium text-gray-300">
                Secure Brand Asset Management
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="relative p-4 sm:p-6 border-b border-white/10">
          <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
            <Upload className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            Upload Branding Assets
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Drag and drop or click to upload logos, banners, videos, and
            documents
          </p>
        </div>

        <div className="relative p-4 sm:p-6">
          {/* Drag and Drop Zone */}
          {!selectedFile && (
            <div
              className={`relative transition-all duration-200 ${
                dragActive ? "opacity-100 scale-[1.02]" : "opacity-100"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div
                className={`relative border-2 border-dashed rounded-xl p-6 sm:p-8 text-center transition-all duration-300 backdrop-blur-sm ${
                  dragActive
                    ? "border-cyan-500/50 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                    : "border-white/10 bg-white/5 hover:border-cyan-500/30 hover:bg-white/10"
                }`}
              >
                <div className="relative">
                  <div className="inline-block p-3 sm:p-4 bg-white/10 rounded-full mb-3 sm:mb-4 border border-white/20">
                    <Upload
                      className={`w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 ${
                        dragActive ? "text-cyan-400 scale-110" : "text-gray-400"
                      }`}
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                    {dragActive
                      ? "Drop your file here"
                      : "Drag & drop your file"}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">
                    or click the upload button below
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-gray-400">
                    <span>PNG, JPG, SVG</span>
                    <span>•</span>
                    <span>MP4, MOV</span>
                    <span>•</span>
                    <span>PDF, DOC</span>
                    <span>•</span>
                    <span>Up to 50MB</span>
                  </div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="mt-3 sm:mt-4 px-4 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-gray-600 to-cyan-700 text-white rounded-lg font-medium text-sm flex items-center gap-2 mx-auto transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                  >
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                    Browse Files
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                    accept="image/*,video/*,application/pdf"
                  />
                </div>
              </div>
            </div>
          )}

          {/* File Preview Before Upload */}
          {selectedFile && (
            <div className="p-4 sm:p-5 bg-cyan-500/10 backdrop-blur-sm rounded-xl border border-cyan-500/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-gray-500/5"></div>
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-lg border border-white/20 flex-shrink-0">
                    {getFileIcon(selectedFile.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">
                      {selectedFile.name}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1">
                      <span className="text-[10px] sm:text-xs text-gray-300">
                        {formatFileSize(selectedFile.size)}
                      </span>
                      <span className="text-[10px] sm:text-xs text-gray-400">
                        •
                      </span>
                      <span className="text-[10px] sm:text-xs text-cyan-400">
                        Ready to upload
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="p-1.5 sm:p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={handleFileUpload}
                    disabled={uploading}
                    className="flex-1 sm:flex-none px-4 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-gray-600 to-cyan-700 text-white rounded-lg font-medium text-sm overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {uploading ? (
                      <>
                        <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span className="text-xs sm:text-sm">Uploading...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">
                          Confirm Upload
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {uploading && (
                <div className="relative mt-3 sm:mt-4">
                  <div className="flex justify-between text-[10px] sm:text-xs text-gray-300 mb-1">
                    <span>Uploading...</span>
                    <span>Processing</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-gray-600 to-cyan-700 rounded-full animate-pulse w-3/4 shadow-lg shadow-cyan-500/30" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Branding Requirements - New Timeline/Checklist Design */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="relative p-4 sm:p-6 border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
                <Info className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Branding Requirements Checklist
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Track your branding assets submission progress
              </p>
            </div>
            <div className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
              <span className="text-[10px] sm:text-xs font-medium text-cyan-400">
                {
                  brandingRequirements.filter((r) => r.status === "uploaded")
                    .length
                }
                /{brandingRequirements.length} Completed
              </span>
            </div>
          </div>
        </div>

        <div className="relative p-4 sm:p-6">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Submission Progress</span>
              <span>
                {Math.round(
                  (brandingRequirements.filter((r) => r.status === "uploaded")
                    .length /
                    brandingRequirements.length) *
                    100,
                )}
                %
              </span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                style={{
                  width: `${(brandingRequirements.filter((r) => r.status === "uploaded").length / brandingRequirements.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Timeline Style Requirements */}
          <div className="space-y-4">
            {brandingRequirements.map((req, idx) => (
              <div
                key={idx}
                className={`relative flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                  req.status === "uploaded"
                    ? "bg-emerald-500/10 border border-emerald-500/30"
                    : "bg-white/5 border border-white/10 hover:border-cyan-500/30"
                }`}
              >
                {/* Status Icon with Timeline Line */}
                <div className="relative flex flex-col items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center z-10 ${
                      req.status === "uploaded"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : req.status === "pending"
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {req.status === "uploaded" ? (
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-current" />
                    )}
                  </div>
                  {idx < brandingRequirements.length - 1 && (
                    <div
                      className={`absolute top-8 sm:top-10 w-0.5 h-8 sm:h-10 ${
                        req.status === "uploaded"
                          ? "bg-emerald-500/50"
                          : "bg-white/10"
                      }`}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-white">
                        {req.type}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-[10px] sm:text-xs text-gray-400 px-1.5 py-0.5 bg-white/10 rounded">
                          {req.format}
                        </span>
                        <span className="text-[10px] sm:text-xs text-gray-400">
                          • {req.dimensions}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                      <span className="text-[10px] sm:text-xs text-cyan-400">
                        {req.deadline}
                      </span>
                    </div>
                  </div>

                  <p className="text-[10px] sm:text-xs text-gray-400 mt-2">
                    {req.description}
                  </p>

                  {req.status === "pending" && (
                    <button className="mt-3 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 transition-all flex items-center gap-2">
                      <Upload className="w-3 h-3 sm:w-4 sm:h-4" />
                      Upload {req.type}
                    </button>
                  )}
                  {req.status === "uploaded" && (
                    <div className="mt-3 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                      <span className="text-[10px] sm:text-xs text-emerald-400">
                        Uploaded • Pending Review
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Uploaded Media Gallery - New Card/Grid Design with Stats */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="relative p-4 sm:p-6 border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
                <FileImage className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Media Library
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Manage your uploaded branding assets
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 rounded-lg">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-[10px] sm:text-xs text-gray-300">
                  {uploadedMedia.filter((m) => m.status === "approved").length}{" "}
                  Approved
                </span>
              </div>
              <div className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 rounded-lg">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <span className="text-[10px] sm:text-xs text-gray-300">
                  {
                    uploadedMedia.filter((m) => m.status === "pending_review")
                      .length
                  }{" "}
                  Pending
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-4 sm:p-6">
          {uploadedMedia.length === 0 ? (
            <div className="text-center py-12 sm:py-16 rounded-xl border-2 border-dashed border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-gray-500/20 rounded-full flex items-center justify-center">
                <FileImage className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-white mb-2">
                No assets uploaded yet
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
                Upload your branding assets to get started. Supported formats:
                PNG, JPG, SVG, MP4, PDF
              </p>
              <button className="mt-4 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-gray-600 to-cyan-700 text-white rounded-lg text-sm font-medium flex items-center gap-2 mx-auto">
                <Upload className="w-4 h-4" />
                Upload Your First Asset
              </button>
            </div>
          ) : (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    {uploadedMedia.length}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    Total Files
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-xl sm:text-2xl font-bold text-emerald-400">
                    {
                      uploadedMedia.filter((m) => m.status === "approved")
                        .length
                    }
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    Approved
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-xl sm:text-2xl font-bold text-cyan-400">
                    {
                      uploadedMedia.filter((m) => m.status === "pending_review")
                        .length
                    }
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    Pending
                  </p>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {uploadedMedia.map((item, idx) => (
                  <div
                    key={item.id}
                    className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    onMouseEnter={() => setHoveredItem(idx)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span
                        className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-medium flex items-center gap-1 ${getStatusBadge(item.status)}`}
                      >
                        {getStatusIcon(item.status)}
                        {item.status === "approved"
                          ? "Approved"
                          : item.status === "pending_review"
                            ? "Pending"
                            : item.status}
                      </span>
                    </div>

                    {/* Preview Area */}
                    <div className="relative h-32 bg-gradient-to-br from-cyan-500/10 to-gray-500/10 flex items-center justify-center">
                      <div className="p-3 bg-white/10 rounded-xl">
                        {getFileIcon(item.type)}
                      </div>
                      {/* Hover Overlay */}
                      <div
                        className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                          hoveredItem === idx
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <button
                          className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                          title="Preview"
                        >
                          <Eye className="w-4 h-4 text-white" />
                        </button>
                        <button
                          className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                          title="Download"
                        >
                          <Download className="w-4 h-4 text-white" />
                        </button>
                        <button
                          className="p-2 bg-white/10 rounded-lg hover:bg-red-500/30 transition-all"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    </div>

                    {/* File Info */}
                    <div className="p-3">
                      <p className="text-xs sm:text-sm font-semibold text-white truncate">
                        {item.name}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-[9px] sm:text-[10px] text-gray-400">
                          {item.category}
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-gray-500">
                          {item.size}
                        </p>
                      </div>
                      <p className="text-[9px] sm:text-[10px] text-gray-500 mt-1">
                        {item.uploadDate}
                      </p>
                    </div>

                    {/* Progress Bar for Pending Items */}
                    {item.status === "pending_review" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse" />
                    )}
                    {item.status === "approved" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Guidelines Section */}
      <div className="relative bg-cyan-500/10 backdrop-blur-xl rounded-xl p-4 sm:p-5 border border-cyan-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-gray-500/5"></div>
        <div className="relative flex flex-col sm:flex-row items-start gap-3">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
              Branding Guidelines
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              All uploaded assets will be reviewed within 48 hours. For urgent
              requests or questions about brand guidelines, contact{" "}
              <a
                href="mailto:branding@event.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                branding@event.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {previewUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative bg-white/10 backdrop-blur-2xl rounded-2xl max-w-2xl w-full shadow-2xl border border-white/20 mx-4">
            <div className="relative p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  File Preview
                </h3>
                <button
                  onClick={() => setPreviewUrl(null)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-all"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </button>
              </div>
              <div className="bg-white/5 rounded-xl p-6 sm:p-8 text-center border border-white/10">
                <FileImage className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400 mx-auto mb-3" />
                <p className="text-xs sm:text-sm text-gray-300 break-all">
                  {previewUrl}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-2">
                  Preview not available
                </p>
              </div>
              <button className="w-full mt-4 py-1.5 sm:py-2 bg-gradient-to-r from-gray-600 to-cyan-700 text-white rounded-lg text-sm font-medium">
                Download File
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandingContent;
