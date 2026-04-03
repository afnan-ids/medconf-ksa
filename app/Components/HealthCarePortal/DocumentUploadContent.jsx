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
  isGlassTheme,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [hoveredDoc, setHoveredDoc] = useState(null);
  const fileInputRef = useRef(null);

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    switch(extension) {
      case 'pdf':
        return <PictureAsPdf className="w-4 h-4 text-red-500" />;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return <Image className="w-4 h-4 text-blue-500" />;
      case 'doc':
      case 'docx':
        return <Article className="w-4 h-4 text-blue-600" />;
      default:
        return <InsertDriveFile className="w-4 h-4 text-gray-500" />;
    }
  };

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
    <div className="space-y-4">
      <div className={`rounded-lg border shadow-sm overflow-hidden ${
        isGlassTheme 
          ? "bg-white/5 backdrop-blur-sm border-white/20" 
          : "bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800"
      }`}>
        
        {/* Compact Header */}
        <div className={`p-4 border-b ${isGlassTheme ? "border-white/20" : "border-gray-200 dark:border-gray-800"}`}>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h2 className={`text-base font-bold ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>Documents</h2>
              <p className={`text-xs flex items-center gap-1.5 ${isGlassTheme ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>
                <Shield className="w-3 h-3" />
                {docs.length} file{docs.length !== 1 ? "s" : ""} stored
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className={`flex items-center gap-1.5 px-2 py-1 rounded-md ${
                isGlassTheme ? "bg-white/10" : "bg-gray-100 dark:bg-gray-800"
              }`}>
                <Lock className="w-3 h-3 text-gray-500" />
                <span className={`text-xs ${isGlassTheme ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
                  Encrypted
                </span>
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md cursor-pointer flex items-center gap-1.5 hover:shadow-md transition-all text-xs font-medium"
              >
                <CloudUploadIcon className="w-3.5 h-3.5" />
                Upload
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

        {/* Compact Drag and Drop Zone */}
        {!selectedFile && (
          <div
            className={`px-4 pt-2 transition-all duration-200 ${
              dragActive ? "opacity-100 scale-[1.02]" : "opacity-100"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className={`relative border-2 border-dashed rounded-md p-6 text-center transition-all duration-200 ${
              dragActive 
                ? "border-blue-500 bg-blue-500/20" 
                : isGlassTheme
                  ? "border-white/20 hover:border-blue-400 hover:bg-white/5"
                  : "border-gray-300 dark:border-gray-700 hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900/50"
            }`}>
              <div className="relative">
                <div className={`inline-block p-2.5 rounded-full mb-2 ${
                  isGlassTheme ? "bg-white/10" : "bg-gray-100 dark:bg-gray-800"
                }`}>
                  <Upload className={`w-5 h-5 transition-colors duration-200 ${
                    dragActive ? "text-blue-500" : "text-gray-400"
                  }`} />
                </div>
                <h3 className={`text-sm font-semibold mb-1 ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {dragActive ? "Drop here" : "Drag & drop"}
                </h3>
                <p className={`text-xs ${isGlassTheme ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>
                  or click upload button
                </p>
                <div className={`flex justify-center gap-2 text-[10px] mt-2 ${isGlassTheme ? "text-gray-400" : "text-gray-400"}`}>
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

        {/* Compact File Preview */}
        {selectedFile && (
          <div className={`m-4 p-3 rounded-md border ${
            isGlassTheme 
              ? "bg-blue-500/20 border-blue-500/30" 
              : "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800"
          }`}>
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className={`p-2 rounded-md shadow-sm ${isGlassTheme ? "bg-white/10" : "bg-white dark:bg-gray-900"}`}>
                  {getFileIcon(selectedFile.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-semibold truncate ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>
                    {selectedFile.name}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`text-[10px] ${isGlassTheme ? "text-gray-300" : "text-gray-500"}`}>
                      {formatFileSize(selectedFile.size)}
                    </span>
                    <span className={`text-[10px] ${isGlassTheme ? "text-gray-400" : "text-gray-400"}`}>•</span>
                    <span className={`text-[10px] ${isGlassTheme ? "text-gray-300" : "text-gray-500"}`}>
                      Ready
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setSelectedFile(null)}
                  className={`p-1.5 rounded-md transition-all ${
                    isGlassTheme 
                      ? "text-gray-300 hover:text-red-400 hover:bg-red-500/20" 
                      : "text-gray-500 hover:text-red-600 hover:bg-red-50"
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
                <button
                  onClick={handleFileUpload}
                  disabled={uploading}
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md text-xs font-medium hover:shadow-md transition-all disabled:opacity-50 flex items-center gap-1.5"
                >
                  {uploading ? (
                    <>
                      <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Confirm
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {uploading && (
              <div className="mt-3">
                <div className={`flex justify-between text-[10px] mb-1 ${isGlassTheme ? "text-gray-300" : "text-gray-600"}`}>
                  <span>Uploading...</span>
                  <span>Processing</span>
                </div>
                <div className={`h-1.5 rounded-full overflow-hidden ${isGlassTheme ? "bg-white/10" : "bg-gray-200"}`}>
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse w-3/4" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Compact Document Grid */}
        <div className="p-4">
          {docs.length === 0 ? (
            <div className={`text-center py-10 rounded-md border border-dashed ${
              isGlassTheme 
                ? "border-white/20 bg-white/5" 
                : "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
            }`}>
              <Description className="w-12 h-12 text-gray-300 mx-auto mb-2" />
              <h3 className={`text-sm font-semibold mb-1 ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>
                No documents
              </h3>
              <p className={`text-xs mb-3 ${isGlassTheme ? "text-gray-300" : "text-gray-500"}`}>
                Upload your first document
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md text-xs font-medium hover:shadow-md transition-all"
              >
                Upload Document
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {docs.map((doc, index) => (
                <div
                  key={index}
                  className={`group relative rounded-md border transition-all hover:shadow-md hover:-translate-y-0.5 overflow-hidden ${
                    isGlassTheme 
                      ? "bg-white/5 border-white/20 hover:bg-white/10" 
                      : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                  }`}
                  onMouseEnter={() => setHoveredDoc(index)}
                  onMouseLeave={() => setHoveredDoc(null)}
                >
                  <div className="relative p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-md group-hover:scale-110 transition-transform ${
                          isGlassTheme ? "bg-white/10" : "bg-gray-100 dark:bg-gray-800"
                        }`}>
                          {getFileIcon(doc.name)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <span className={`text-[10px] font-medium ${isGlassTheme ? "text-gray-300" : "text-gray-500"}`}>
                              {doc.type?.split('/').pop().toUpperCase() || 'FILE'}
                            </span>
                            {doc.verified && (
                              <CheckCircle className="w-2.5 h-2.5 text-emerald-500" />
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium flex items-center gap-0.5 ${
                        doc.status === "Verified" 
                          ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-700"
                          : "bg-amber-100 dark:bg-amber-950 text-amber-700"
                      }`}>
                        {doc.status === "Verified" ? (
                          <Check className="w-2.5 h-2.5" />
                        ) : (
                          <Clock className="w-2.5 h-2.5" />
                        )}
                        {doc.status === "Verified" ? "OK" : "Pending"}
                      </div>
                    </div>
                    
                    <h3 className={`text-xs font-semibold mb-1 line-clamp-2 ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>
                      {doc.name}
                    </h3>
                    
                    <div className={`flex items-center gap-1.5 text-[10px] mt-1.5 ${isGlassTheme ? "text-gray-300" : "text-gray-500"}`}>
                      <Clock className="w-2.5 h-2.5" />
                      <span>{doc.date}</span>
                    </div>
                    
                    {doc.size && (
                      <p className={`text-[10px] mt-0.5 ${isGlassTheme ? "text-gray-400" : "text-gray-400"}`}>
                        {formatFileSize(doc.size)}
                      </p>
                    )}
                    
                    <div className={`absolute bottom-2 right-2 flex gap-0.5 transition-all duration-200 ${
                      hoveredDoc === index ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}>
                      <button className={`p-1 rounded shadow-sm transition-all ${
                        isGlassTheme 
                          ? "bg-white/10 hover:bg-white/20" 
                          : "bg-white dark:bg-gray-800 hover:bg-gray-100"
                      }`}>
                        <Visibility className="w-3 h-3 text-gray-600" />
                      </button>
                      <button
                        onClick={() => handleDelete(doc)}
                        className={`p-1 rounded shadow-sm transition-all ${
                          isGlassTheme 
                            ? "bg-white/10 hover:bg-red-500/20" 
                            : "bg-white dark:bg-gray-800 hover:bg-red-50"
                        }`}>
                        <Delete className="w-3 h-3 text-red-500" />
                      </button>
                      <button className={`p-1 rounded shadow-sm transition-all ${
                        isGlassTheme 
                          ? "bg-white/10 hover:bg-white/20" 
                          : "bg-white dark:bg-gray-800 hover:bg-gray-100"
                      }`}>
                        <Share2 className="w-3 h-3 text-gray-600" />
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

        {/* Compact Security Notice */}
        {docs.length > 0 && (
          <div className={`mx-4 mb-4 p-2.5 rounded-md border ${
            isGlassTheme 
              ? "bg-white/5 border-white/20" 
              : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
          }`}>
            <div className="flex items-start gap-2">
              <Shield className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
              <p className={`text-[10px] ${isGlassTheme ? "text-gray-300" : "text-gray-500"}`}>
                All documents are encrypted and stored securely.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentUploadContent;