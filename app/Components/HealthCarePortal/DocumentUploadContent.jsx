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
        return <PictureAsPdf className="w-5 h-5 text-red-400" />;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return <Image className="w-5 h-5 text-blue-400" />;
      case 'doc':
      case 'docx':
        return <Article className="w-5 h-5 text-cyan-400" />;
      default:
        return <InsertDriveFile className="w-5 h-5 text-gray-400" />;
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
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        {/* Header */}
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Document Management
              </h2>
              <p className="text-sm text-gray-300 mt-1 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                Secure document storage • {docs.length} file{docs.length !== 1 ? "s" : ""} on file
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <Lock className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-medium text-gray-300">
                  Encrypted Storage
                </span>
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="relative px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg cursor-pointer flex items-center gap-2 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  <CloudUploadIcon className="w-4 h-4" />
                  Upload New
                </span>
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

        {/* Drag and Drop Zone - Glass style */}
        {!selectedFile && (
          <div
            className={`relative mx-6 mt-2 transition-all duration-200 ${
              dragActive ? "opacity-100 scale-[1.02]" : "opacity-100"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className={`
              relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 backdrop-blur-sm
              ${dragActive 
                ? "border-blue-500/50 bg-blue-500/10 shadow-lg shadow-blue-500/20" 
                : "border-white/10 bg-white/5 hover:border-blue-500/30 hover:bg-white/10"
              }
            `}>
              <div className="relative">
                <div className="inline-block p-4 bg-white/10 rounded-full mb-4 border border-white/20">
                  <Upload className={`w-8 h-8 transition-all duration-300 ${
                    dragActive ? "text-blue-400 scale-110" : "text-gray-400"
                  }`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {dragActive ? "Drop your file here" : "Drag & drop your file"}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
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

        {/* File Preview Before Upload - Glass style */}
        {selectedFile && (
          <div className="relative m-6 p-5 bg-blue-500/10 backdrop-blur-sm rounded-xl border border-blue-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
            <div className="relative flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="p-3 bg-white/10 rounded-lg border border-white/20">
                  {getFileIcon(selectedFile.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">
                    {selectedFile.name}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-gray-300">
                      {formatFileSize(selectedFile.size)}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-blue-400">
                      Ready to upload
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedFile(null)}
                  className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
                <button
                  onClick={handleFileUpload}
                  disabled={uploading}
                  className="relative px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 flex items-center gap-2"
                >
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="relative flex items-center gap-2">
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
                  </span>
                </button>
              </div>
            </div>
            
            {uploading && (
              <div className="relative mt-4">
                <div className="flex justify-between text-xs text-gray-300 mb-1">
                  <span>Uploading...</span>
                  <span>Processing</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse w-3/4 shadow-lg shadow-blue-500/30" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Document Grid */}
        <div className="relative p-6">
          {docs.length === 0 ? (
            <div className="text-center py-16 rounded-xl border border-dashed border-white/10 bg-white/5 backdrop-blur-sm">
              <Description className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                No documents uploaded
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Upload your first document to get started
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="relative px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="relative">Upload Document</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {docs.map((doc, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                  onMouseEnter={() => setHoveredDoc(index)}
                  onMouseLeave={() => setHoveredDoc(null)}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                  
                  {/* Corner glow */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 rounded-bl-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-white/10 rounded-lg border border-white/20 group-hover:scale-110 transition-transform duration-300">
                          {getFileIcon(doc.name)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-gray-400">
                              {doc.type?.split('/').pop().toUpperCase() || 'FILE'}
                            </span>
                            {doc.verified && (
                              <CheckCircle className="w-3 h-3 text-emerald-400" />
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Status Badge - Glass style */}
                      <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 backdrop-blur-sm border ${
                        doc.status === "Verified" 
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                          : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                      }`}>
                        {doc.status === "Verified" ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <Clock className="w-3 h-3" />
                        )}
                        {doc.status}
                      </div>
                    </div>
                    
                    <h3 className="text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                      {doc.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                      <Clock className="w-3 h-3 text-blue-400" />
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
                    <div className={`absolute bottom-3 right-3 flex gap-1 transition-all duration-300 ${
                      hoveredDoc === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
                    }`}>
                      <button
                        className="p-1.5 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 hover:bg-white/20 transition-all"
                        title="Preview"
                      >
                        <Visibility className="w-3.5 h-3.5 text-gray-300" />
                      </button>
                      <button
                        onClick={() => handleDelete(doc)}
                        className="p-1.5 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 hover:bg-red-500/20 transition-all"
                        title="Delete"
                      >
                        <Delete className="w-3.5 h-3.5 text-red-400" />
                      </button>
                      <button
                        className="p-1.5 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 hover:bg-white/20 transition-all"
                        title="Share"
                      >
                        <Share2 className="w-3.5 h-3.5 text-gray-300" />
                      </button>
                    </div>
                  </div>
                  
                  {doc.verified && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-500 shadow-lg shadow-emerald-500/30" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Security Notice - Glass style */}
        {docs.length > 0 && (
          <div className="relative mx-6 mb-6 p-4 bg-blue-500/10 backdrop-blur-sm rounded-xl border border-blue-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
            <div className="relative flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-white">
                  Secure Document Storage
                </p>
                <p className="text-xs text-gray-300 mt-0.5">
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