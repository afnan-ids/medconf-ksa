"use client";
import { useState, useRef } from "react";
import { 
  CloudUpload as CloudUploadIcon,
  Description,
  CheckCircle,
  Delete,
  Visibility,
  InsertDriveFile,
  PictureAsPdf,
  Image,
  Article
} from "@mui/icons-material";
import { 
  Upload, 
  X, 
  Check, 
  Clock, 
  Shield, 
  Lock,
  Share2,
  AlertCircle,
  FileText
} from "lucide-react";

const DocumentUploadContent = ({
  docs,
  setDocs,
  selectedFile,
  setSelectedFile,
  uploading,
  setUploading,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [hoveredDoc, setHoveredDoc] = useState(null);
  const fileInputRef = useRef(null);

  // File type icons mapping
  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    switch(extension) {
      case 'pdf':
        return <PictureAsPdf className="w-5 h-5 text-red-500" />;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return <Image className="w-5 h-5 text-blue-500" />;
      case 'doc':
      case 'docx':
        return <Article className="w-5 h-5 text-blue-600" />;
      default:
        return <InsertDriveFile className="w-5 h-5 text-gray-500" />;
    }
  };

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
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress >= 100) {
          clearInterval(interval);
          const newDoc = {
            name: selectedFile.name,
            size: selectedFile.size,
            status: "Verified",
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            type: selectedFile.type,
            verified: true
          };
          setDocs([newDoc, ...docs]);
          setSelectedFile(null);
          setUploading(false);
        }
      }, 150);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleDelete = (doc) => {
    setDocs(docs.filter(d => d.name !== doc.name));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Document Management</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Secure document storage • {docs.length} file{docs.length !== 1 ? "s" : ""} on file
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <Lock className="w-4 h-4 text-gray-500" />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  Encrypted Storage
                </span>
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg cursor-pointer flex items-center gap-2 hover:shadow-md transition-all text-sm font-medium"
              >
                <CloudUploadIcon className="w-4 h-4" />
                Upload New
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Drag and Drop Zone */}
        {!selectedFile && (
          <div
            className={`mx-6 mt-2 transition-all duration-200 ${
              dragActive ? "opacity-100 scale-[1.02]" : "opacity-100"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className={`
              relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200
              ${dragActive 
                ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20" 
                : "border-gray-300 dark:border-gray-700 hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900/50"
              }
            `}>
              <div className="relative">
                <div className="inline-block p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                  <Upload className={`w-8 h-8 transition-colors duration-200 ${
                    dragActive ? "text-blue-500" : "text-gray-400"
                  }`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {dragActive ? "Drop your file here" : "Drag & drop your file"}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  or click the upload button above
                </p>
                <div className="flex justify-center gap-4 text-xs text-gray-400">
                  <span>PDF, DOC, DOCX</span>
                  <span>•</span>
                  <span>JPG, PNG</span>
                  <span>•</span>
                  <span>Up to 10MB</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* File Preview Before Upload */}
        {selectedFile && (
          <div className="m-6 p-5 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                  {getFileIcon(selectedFile.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {selectedFile.name}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-gray-500">
                      {formatFileSize(selectedFile.size)}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">
                      Ready to upload
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedFile(null)}
                  className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
                <button
                  onClick={handleFileUpload}
                  disabled={uploading}
                  className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-md transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  {uploading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      Confirm Upload
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {uploading && (
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Uploading...</span>
                  <span>Processing</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse w-3/4" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Document Grid */}
        <div className="p-6">
          {docs.length === 0 ? (
            <div className="text-center py-16 rounded-lg border border-dashed border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <Description className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No documents uploaded
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Upload your first document to get started
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-md transition-all"
              >
                Upload Document
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {docs.map((doc, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-0.5 overflow-hidden"
                  onMouseEnter={() => setHoveredDoc(index)}
                  onMouseLeave={() => setHoveredDoc(null)}
                >
                  <div className="relative p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:scale-110 transition-transform">
                          {getFileIcon(doc.name)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-gray-500">
                              {doc.type?.split('/').pop().toUpperCase() || 'FILE'}
                            </span>
                            {doc.verified && (
                              <CheckCircle className="w-3 h-3 text-emerald-500" />
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                        doc.status === "Verified" 
                          ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-700"
                          : "bg-amber-100 dark:bg-amber-950 text-amber-700"
                      }`}>
                        {doc.status === "Verified" ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <Clock className="w-3 h-3" />
                        )}
                        {doc.status}
                      </div>
                    </div>
                    
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
                      {doc.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                      <Clock className="w-3 h-3" />
                      <span>{doc.date}</span>
                      {doc.time && (
                        <>
                          <span>•</span>
                          <span>{doc.time}</span>
                        </>
                      )}
                    </div>
                    
                    {doc.size && (
                      <p className="text-xs text-gray-400 mt-1">
                        {formatFileSize(doc.size)}
                      </p>
                    )}
                    
                    {/* Action Buttons */}
                    <div className={`absolute bottom-3 right-3 flex gap-1 transition-all duration-200 ${
                      hoveredDoc === index ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}>
                      <button
                        className="p-1.5 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:bg-gray-100 transition-all"
                        title="Preview"
                      >
                        <Visibility className="w-3.5 h-3.5 text-gray-600" />
                      </button>
                      <button
                        onClick={() => handleDelete(doc)}
                        className="p-1.5 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:bg-red-50 transition-all"
                        title="Delete"
                      >
                        <Delete className="w-3.5 h-3.5 text-red-500" />
                      </button>
                      <button
                        className="p-1.5 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:bg-gray-100 transition-all"
                        title="Share"
                      >
                        <Share2 className="w-3.5 h-3.5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  {doc.verified && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-500" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Security Notice */}
        {docs.length > 0 && (
          <div className="mx-6 mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Secure Document Storage
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  All documents are encrypted and stored securely. Access is limited to authorized personnel only.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentUploadContent;