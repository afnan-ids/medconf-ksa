"use client";

import { useState } from "react";
import {
  FileText,
  Download,
  BookOpen,
  Microscope,
  Info,
  HelpCircle,
  CheckCircle,
  File,
  FileArchive,
  Image,
  Mail,
} from "lucide-react";
import { documentsData } from "../../Data/visitor-data";

const DocumentsContent = () => {
  const [downloading, setDownloading] = useState(null);
  const [requestModal, setRequestModal] = useState(false);
  const [requestDoc, setRequestDoc] = useState("");

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
    if (category.includes("Brochures")) return <BookOpen className="w-5 h-5 text-blue-400" />;
    if (category.includes("Scientific")) return <Microscope className="w-5 h-5 text-purple-400" />;
    return <Info className="w-5 h-5 text-cyan-400" />;
  };

  const getFileIcon = (fileName) => {
    if (fileName.toLowerCase().includes("map") || fileName.toLowerCase().includes("floor")) {
      return <Image className="w-4 h-4 text-emerald-400" />;
    }
    return <File className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div className="space-y-6">
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg shadow-lg shadow-blue-500/30">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Documents & Brochures
                </h2>
                <p className="text-sm text-gray-300 mt-0.5 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Access event materials and resources
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
              <FileArchive className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-medium text-gray-300">
                {documentsData.reduce((acc, cat) => acc + cat.items.length, 0)} Documents Available
              </span>
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="relative p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentsData.map((category, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 rounded-bl-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Header */}
                <div className="relative p-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/10 rounded-lg border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(category.category)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                        {category.category}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {category.items.length} documents
                      </p>
                    </div>
                  </div>
                </div>

                {/* Document List */}
                <div className="relative p-5">
                  <ul className="space-y-3">
                    {category.items.map((doc, i) => (
                      <li
                        key={i}
                        className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group/item"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              {getFileIcon(doc.name)}
                              <p className="text-xs font-medium text-gray-200 truncate">
                                {doc.name}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 mt-1.5">
                              <span className="text-xs text-gray-400">{doc.size}</span>
                              <span className="text-[10px] text-gray-500">•</span>
                              <span className="text-xs text-gray-400">{doc.type}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleDownload(doc.name)}
                            disabled={downloading === doc.name}
                            className="p-1.5 bg-white/10 rounded-md border border-white/20 hover:bg-blue-500/20 transition-all duration-300 group-hover/item:scale-105"
                          >
                            {downloading === doc.name ? (
                              <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <Download className="w-4 h-4 text-blue-400" />
                            )}
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="relative p-5 pt-0">
                  <button
                    onClick={() => {
                      setRequestDoc(category.category);
                      setRequestModal(true);
                    }}
                    className="w-full py-2 text-xs text-center text-gray-400 hover:text-blue-400 transition-colors flex items-center justify-center gap-1"
                  >
                    <Mail className="w-3 h-3" />
                    Request all {category.category}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-6 p-5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                  <HelpCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Need a specific document?</p>
                  <p className="text-xs text-gray-300 mt-0.5">
                    Can't find what you're looking for? Request it from our team.
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setRequestDoc("a specific document");
                  setRequestModal(true);
                }}
                className="px-5 py-2 bg-gradient-to-br from-purple-500 to-pink-400 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Request Document
              </button>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="relative mx-6 mb-6 p-4 bg-blue-500/10 backdrop-blur-sm rounded-xl border border-blue-500/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          <div className="relative flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white">Verified Documents</p>
              <p className="text-xs text-gray-300 mt-0.5">
                All documents are official and verified. You can download and share these materials for personal use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Request Document Modal */}
      {requestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setRequestModal(false)}
          />
          <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-md shadow-2xl border border-white/20">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="relative p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Request Document
                </h2>
                <button
                  onClick={() => setRequestModal(false)}
                  className="p-1 rounded-lg transition-all duration-300 hover:bg-white/10 text-gray-400 hover:text-white"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative p-6">
              <p className="text-sm text-gray-300 mb-4">
                Enter your email address and the document you need, and we'll send it to you.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Document Request</label>
                  <input
                    type="text"
                    value={requestDoc}
                    onChange={(e) => setRequestDoc(e.target.value)}
                    placeholder="e.g., Full Brochure, Floor Plan, etc."
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500/50"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleRequest}
                  className="flex-1 py-2.5 bg-gradient-to-br from-purple-500 to-pink-400 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  Submit Request
                </button>
                <button
                  onClick={() => setRequestModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  Cancel
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