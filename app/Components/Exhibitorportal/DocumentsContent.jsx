"use client";

import { useState } from "react";
import {
  FileText,
  Download,
  FolderOpen,
  Image,
  FileArchive,
  Mail,
  HelpCircle,
  CheckCircle,
  File,
  BookOpen,
  Sparkles,
  Search,
  X,
  Presentation,
} from "lucide-react";
import { exhibitorDocuments } from "../../Data/exhibitor-data";

const DocumentsContent = () => {
  const [downloading, setDownloading] = useState(null);
  const [requestModal, setRequestModal] = useState(false);
  const [requestDoc, setRequestDoc] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories for filter
  const categories = ["all", ...new Set(exhibitorDocuments.map(doc => doc.category))];
  
  // Filter documents based on search and category
  const filteredDocuments = exhibitorDocuments
    .map((category) => ({
      ...category,
      items: category.items.filter((doc) => {
        const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || category.category === selectedCategory;
        return matchesSearch && matchesCategory;
      }),
    }))
    .filter((category) => category.items.length > 0);

  const totalDocuments = exhibitorDocuments.reduce(
    (total, category) => total + category.items.length,
    0
  );

  const handleDownload = (docName) => {
    setDownloading(docName);
    setTimeout(() => {
      setDownloading(null);
      alert(`Downloading ${docName}...`);
    }, 1000);
  };

  const handleRequest = () => {
    setRequestModal(false);
    alert(`Request for "${requestDoc}" submitted successfully! You will receive it via email within 24 hours.`);
    setRequestDoc("");
  };

  const getCategoryIcon = (category) => {
    if (category.includes("Exhibitor Kit")) return <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />;
    if (category.includes("Marketing")) return <Image className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />;
    if (category.includes("Forms")) return <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />;
    return <FolderOpen className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />;
  };

  const getFileIcon = (fileName) => {
    if (fileName.toLowerCase().includes("logo")) return <Image className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />;
    if (fileName.toLowerCase().includes("template")) return <Presentation className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />;
    if (fileName.toLowerCase().includes("spec")) return <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />;
    if (fileName.toLowerCase().includes("guideline")) return <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />;
    return <File className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />;
  };

  return (
    <div className="space-y-4 sm:space-y-5 md:space-y-6">
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-36 sm:w-48 h-36 sm:h-48 bg-cyan-500/5 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative p-4 sm:p-5 md:p-6 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-2.5 bg-gradient-to-br from-blue-800 to-cyan-600 rounded-lg shadow-lg shadow-blue-500/30">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Exhibitor Documents
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 mt-0.5 flex flex-wrap items-center gap-1 sm:gap-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Access event materials, forms, and resources</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm w-fit">
              <FileArchive className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-[10px] sm:text-xs font-medium text-gray-300">
                {totalDocuments} Documents
              </span>
            </div>
          </div>
        </div>


        {/* Documents Grid */}
        <div className="relative p-4 sm:p-5 md:p-6">
          {filteredDocuments.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500 mx-auto mb-3" />
              <p className="text-sm text-gray-400">No documents found</p>
              <p className="text-xs text-gray-500 mt-1">Try adjusting your search</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {filteredDocuments.map((category, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                  <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-blue-500/20 rounded-bl-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Header */}
                  <div className="relative p-3 sm:p-4 md:p-5 border-b border-white/10">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        {getCategoryIcon(category.category)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300 truncate">
                          {category.category}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">
                          {category.items.length} document{category.items.length !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Document List */}
                  <div className="relative p-3 sm:p-4 md:p-5">
                    <ul className="space-y-2 sm:space-y-2.5">
                      {category.items.map((doc, i) => (
                        <li
                          key={i}
                          className="p-2 sm:p-2.5 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group/item"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 sm:gap-2">
                                {getFileIcon(doc.name)}
                                <p className="text-[11px] sm:text-xs font-medium text-gray-200 truncate">
                                  {doc.name}
                                </p>
                              </div>
                              <div className="flex items-center gap-1.5 mt-1">
                                <span className="text-[10px] sm:text-xs text-gray-400">{doc.size}</span>
                                <span className="text-[9px] sm:text-[10px] text-gray-500">•</span>
                                <span className="text-[10px] sm:text-xs text-gray-400">{doc.type}</span>
                              </div>
                            </div>
                            <button
                              onClick={() => handleDownload(doc.name)}
                              disabled={downloading === doc.name}
                              className="p-1.5 bg-white/10 rounded-md border border-white/20 hover:bg-blue-500/20 transition-all duration-300 group-hover/item:scale-105 flex-shrink-0"
                            >
                              {downloading === doc.name ? (
                                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
                              )}
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Action */}
                  <div className="relative p-3 sm:p-4 md:p-5 pt-0">
                    <button
                      onClick={() => {
                        setRequestDoc(category.category);
                        setRequestModal(true);
                      }}
                      className="w-full py-1.5 sm:py-2 text-[10px] sm:text-xs text-center text-gray-400 hover:text-blue-400 transition-colors flex items-center justify-center gap-1"
                    >
                      <Mail className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      Request all {category.category}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Help Section */}
          <div className="mt-5 sm:mt-6 p-4 sm:p-5 bg-white/5 rounded-lg sm:rounded-xl border border-white/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg border border-white/20">
                  <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">Need a specific document?</p>
                  <p className="text-[11px] sm:text-xs text-gray-300 mt-0.5">
                    Can't find what you're looking for? Request it from our team.
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setRequestDoc("a specific document");
                  setRequestModal(true);
                }}
                className="w-full sm:w-auto px-4 py-1.5 sm:py-2 bg-gradient-to-br from-blue-800 to-cyan-600 text-white rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Request Document
              </button>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="relative mx-4 sm:mx-5 md:mx-6 mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 bg-blue-500/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-blue-500/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          <div className="relative flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs sm:text-sm font-medium text-white">Verified Documents</p>
              <p className="text-[11px] sm:text-xs text-gray-300 mt-0.5 leading-relaxed">
                All documents are official and verified. You can download and share these materials for exhibition purposes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Request Document Modal - Responsive */}
      {requestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setRequestModal(false)}
          />
          <div className="relative bg-white/5 backdrop-blur-2xl rounded-xl sm:rounded-2xl w-full max-w-[90%] sm:max-w-md shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-300">
            <div className="absolute -top-20 -right-20 w-32 sm:w-40 h-32 sm:h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-32 sm:w-40 h-32 sm:h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="relative p-4 sm:p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-base sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Request Document
                </h2>
                <button
                  onClick={() => setRequestModal(false)}
                  className="p-1 rounded-lg transition-all duration-300 hover:bg-white/10 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            <div className="relative p-4 sm:p-6">
              <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                Enter your email address and the document you need, and we'll send it to you.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-medium text-gray-300 mb-1">Document Request</label>
                  <input
                    type="text"
                    value={requestDoc}
                    onChange={(e) => setRequestDoc(e.target.value)}
                    placeholder="e.g., Exhibitor Manual, Floor Plan, etc."
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-medium text-gray-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    placeholder="exhibitor@company.com"
                    defaultValue="exhibitor@pharmaco.com"
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500/50"
                  />
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 mt-5 sm:mt-6">
                <button
                  onClick={() => setRequestModal(false)}
                  className="px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-white/20 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-xs sm:text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRequest}
                  className="flex-1 py-2 sm:py-2.5 bg-gradient-to-br from-blue-800 to-cyan-600 text-white rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 text-xs sm:text-sm"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentsContent;