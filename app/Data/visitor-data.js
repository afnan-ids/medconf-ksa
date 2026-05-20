import {
  LayoutDashboard,
  QrCode,
  User,
  Calendar,
  Map,
  FileText,
  Headphones,
} from "lucide-react";

// Menu items for sidebar navigation
export const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "ticket", label: "E-Ticket", icon: QrCode },
  { id: "schedule", label: "Event Schedule", icon: Calendar },
  { id: "floorplan", label: "Floor Plan", icon: Map },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "support", label: "Support", icon: Headphones },
];

// Dashboard Stats Data
export const statsData = [
  {
    title: "Event",
    value: "Global Health 2026",
    sub: "March 12-14, 2026",
    icon: "EventIcon",
  },
  {
    title: "Registration",
    value: "Confirmed",
    sub: "E-Ticket Ready",
    icon: "HowToRegIcon",
  },
  {
    title: "Access",
    value: "All Areas Access",
    sub: "VIP Pass",
    icon: "VpnKeyIcon",
  },
  {
    title: "Days Until Event",
    value: "12 Days",
    sub: "March 12, 2026",
    icon: "CalendarIcon",
  },
];

// Notifications Data
export const notifications = [
  {
    id: 1,
    title: "Event reminder",
    message: "Global Health Exhibition starts in 12 days",
    time: "1 day ago",
  },
  {
    id: 2,
    title: "Schedule update",
    message: "Keynote speech rescheduled to 10:30 AM",
    time: "3 days ago",
  },
  {
    id: 3,
    title: "New workshop added",
    message: "AI in Healthcare workshop now available",
    time: "5 days ago",
  },
];

// Event Schedule Data
export const scheduleData = [
  {
    day: "Day 1 - March 12, 2026",
    events: [
      { time: "09:00 - 10:00", title: "Registration & Welcome Coffee", location: "Main Lobby" },
      { time: "10:00 - 11:30", title: "Opening Ceremony & Keynote: Vision 2030 in Healthcare", location: "Main Hall" },
      { time: "11:30 - 13:00", title: "Exhibition Tour", location: "Exhibition Hall" },
      { time: "13:00 - 14:00", title: "Networking Lunch", location: "Dining Area" },
      { time: "14:00 - 15:30", title: "Panel: Digital Health Transformation", location: "Conference Room A" },
      { time: "15:30 - 17:00", title: "Workshop: AI in Diagnostics", location: "Workshop Room 1" },
    ],
  },
  {
    day: "Day 2 - March 13, 2026",
    events: [
      { time: "09:00 - 10:30", title: "Keynote: Future of Medical Education", location: "Main Hall" },
      { time: "10:30 - 12:00", title: "Live Clinical Workshops", location: "Workshop Rooms" },
      { time: "12:00 - 13:30", title: "Exhibition & Product Demos", location: "Exhibition Hall" },
      { time: "13:30 - 15:00", title: "Panel: Healthcare Innovation in HPQL", location: "Conference Room B" },
      { time: "15:00 - 17:00", title: "Networking Reception", location: "VIP Lounge" },
    ],
  },
  {
    day: "Day 3 - March 14, 2026",
    events: [
      { time: "09:00 - 10:30", title: "Workshop: Patient Safety Standards", location: "Workshop Room 2" },
      { time: "10:30 - 12:00", title: "Panel: Public Health Strategies", location: "Conference Room A" },
      { time: "12:00 - 14:00", title: "Lunch & Exhibition", location: "Exhibition Hall" },
      { time: "14:00 - 15:30", title: "Closing Keynote", location: "Main Hall" },
      { time: "15:30 - 17:00", title: "Award Ceremony & Closing Remarks", location: "Main Hall" },
    ],
  },
];

// Documents/Brochures Data
export const documentsData = [
  {
    category: "Event Brochures",
    icon: "BookOpen",
    items: [
      { name: "Global Health Exhibition 2026 - Full Brochure", size: "5.2 MB", type: "PDF" },
      { name: "Sponsor & Exhibitor Directory", size: "3.8 MB", type: "PDF" },
      { name: "Event Floor Plan Map", size: "1.5 MB", type: "PDF" },
    ],
  },
  {
    category: "Scientific Program",
    icon: "Microscope",
    items: [
      { name: "Conference Agenda - Full Schedule", size: "2.1 MB", type: "PDF" },
      { name: "Abstract Book", size: "8.7 MB", type: "PDF" },
      { name: "Workshop Descriptions", size: "1.2 MB", type: "PDF" },
    ],
  },
  {
    category: "Visitor Information",
    icon: "Info",
    items: [
      { name: "Venue Guide & Transportation", size: "3.4 MB", type: "PDF" },
      { name: "Hotel & Accommodation Guide", size: "2.8 MB", type: "PDF" },
      { name: "Riyadh City Guide", size: "4.1 MB", type: "PDF" },
    ],
  },
];

// Quick Links Data
export const quickLinks = [
  { name: "Schedule", icon: "Calendar", link: "/schedule" },
  { name: "Floor Plan", icon: "Map", link: "/floorplan" },
  { name: "My Ticket", icon: "QrCode", link: "/ticket" },
  { name: "Support", icon: "Headphones", link: "/support" },
];

// Booth Data for Floor Plan (same as HCP but with visitor-specific statuses)
export const boothData = [
  { id: "07", status: "Available", size: "standard", price: "$2,500", position: { top: "28%", left: "30%" } },
  { id: "05", status: "Reserved", size: "premium", price: "$5,000", position: { top: "20%", left: "39%" } },
  { id: "04", status: "Booked", size: "standard", price: "$2,500", position: { top: "24%", left: "59%" } },
  { id: "10", status: "Available", size: "corner", price: "$3,500", position: { top: "39%", left: "18%" } },
  { id: "19", status: "Booked", size: "premium", price: "$5,000", position: { top: "43%", left: "43.5%" } },
  { id: "02", status: "Reserved", size: "standard", price: "$2,500", position: { top: "32%", left: "67%" } },
  { id: "36", status: "Available", size: "standard", price: "$2,500", position: { top: "67%", left: "23%" } },
  { id: "40", status: "Booked", size: "premium", price: "$5,000", position: { top: "75%", left: "45%" } },
  { id: "31", status: "Reserved", size: "standard", price: "$2,500", position: { top: "53%", left: "54%" } },
];

// Status Configuration for Floor Plan
export const statusConfig = [
  { label: "Available", icon: "CheckCircle", color: "emerald", count: 24 },
  { label: "Reserved", icon: "Clock", color: "amber", count: 12 },
  { label: "Booked", icon: "Bookmark", color: "blue", count: 84 },
];

// FAQ Data for Support
export const faqData = [
  {
    question: "How do I get my E-Ticket?",
    answer: "After registration, your E-Ticket is available in the E-Ticket section. You can download it as PDF or have it emailed to you.",
    category: "Ticket",
    helpful: 156,
  },
  {
    question: "What are the event timings?",
    answer: "The exhibition opens at 9:00 AM daily. Sessions run until 5:00 PM. The full schedule is available in the Event Schedule section.",
    category: "Schedule",
    helpful: 234,
  },
  {
    question: "Is parking available at the venue?",
    answer: "Yes, free parking is available at the venue with over 2,000 spaces. Valet parking is also available for VIP pass holders.",
    category: "Venue",
    helpful: 189,
  },
  {
    question: "How do I access the floor plan?",
    answer: "Navigate to the Floor Plan section from the sidebar. You can view interactive booth locations and download a PDF version.",
    category: "Floor Plan",
    helpful: 145,
  },
  {
    question: "Can I download event materials?",
    answer: "Yes, all brochures, agendas, and guides are available in the Documents section for download.",
    category: "Documents",
    helpful: 167,
  },
  {
    question: "Who do I contact for on-site support?",
    answer: "Visit any information desk at Main Entrance, Hall A Lobby, or Hall B Lobby. You can also call our helpline at +966 800 123 4567.",
    category: "Support",
    helpful: 98,
  },
];

// Contact Options for Support
export const contactOptions = [
  {
    icon: "FileText",
    title: "Submit a Request",
    desc: "Describe your issue and our team will assist you",
    availability: "24/7",
    action: "Create Ticket",
    color: "blue",
  },
  {
    icon: "Mail",
    title: "Email Support",
    desc: "visitors@Hpql.com",
    availability: "Response within 24h",
    action: "Send Email",
    color: "blue",
  },
  {
    icon: "Phone",
    title: "Phone Support",
    desc: "+966 800 123 4567",
    availability: "9 AM - 6 PM",
    action: "Call Now",
    color: "blue",
  },
];

// Visitor Profile Data
export const visitorProfile = {
  title: "Dr.",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@medical.com",
  phone: "+966 50 123 4567",
  nationality: "Saudi Arabia",
  organization: "King Faisal Specialist Hospital",
  role: "Physician",
  licenseId: "VIS-2026-12345",
  registrationId: "REG-2026-12345",
  ticketType: "VIP Pass - Full Access",
};