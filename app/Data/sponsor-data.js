
import {
  LayoutDashboard,
  User,
  Diamond,
  Image,
  CreditCard,
  Calendar,
  Headphones,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Mail,
  Phone,
  MapPin,
  Star,
  Award,
  Gift,
  Settings,
  Bell,
  FileText,
  ShoppingBag,
  Wallet,
  Receipt,
  Building,
  Globe,
  Share2,
  Video,
  BookOpen,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

// Menu Items for Sidebar Navigation
export const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    badge: null,
    description: "Overview & key metrics",
  },
  {
    id: "profile",
    label: "Sponsor Profile",
    icon: User,
    badge: null,
    description: "Company & branding information",
  },
  {
    id: "package",
    label: "Sponsorship Package",
    icon: Diamond,
    badge: "Platinum",
    description: "Your benefits & inclusions",
  },
  {
    id: "branding",
    label: "Branding & Media",
    icon: Image,
    badge: null,
    description: "Upload logos, banners, videos",
  },
  {
    id: "payments",
    label: "Payments / Invoices",
    icon: CreditCard,
    badge: null,
    description: "Payment history & invoices",
  },
  {
    id: "events",
    label: "Event Information",
    icon: Calendar,
    badge: null,
    description: "Schedule & venue details",
  },
  {
    id: "support",
    label: "Support / Help Desk",
    icon: Headphones,
    badge: null,
    description: "Get assistance",
  },
];

// Dashboard Stats Data
export const dashboardStats = [
  {
    title: "Sponsorship Tier",
    value: "Platinum",
    sub: "Premium Partner",
    icon: Diamond,
    gradient: "from-amber-500 to-yellow-500",
    textColor: "text-amber-400",
    trend: "+12%",
    trendUp: true,
  },
  {
    title: "Status",
    value: "Active",
    sub: "Confirmed Partner",
    icon: CheckCircle,
    gradient: "from-emerald-500 to-green-400",
    textColor: "text-emerald-400",
    trend: "Verified",
    trendUp: true,
  },
  {
    title: "Total Investment",
    value: "SAR 250K",
    sub: "Paid: SAR 125K",
    icon: DollarSign,
    gradient: "from-purple-500 to-pink-400",
    textColor: "text-purple-400",
    trend: "50% Paid",
    trendUp: true,
  },
];

// Notifications Data
export const notifications = [
  {
    id: 1,
    title: "Logo deadline approaching",
    message: "Submit your company logo for branding by Feb 20th",
    time: "2 days ago",
    type: "warning",
    action: "Upload Now",
  },
  {
    id: 2,
    title: "Sponsor briefing",
    message: "Platinum sponsor meeting on March 10th at 10:00 AM",
    time: "3 days ago",
    type: "info",
    action: "Add to Calendar",
  },
  {
    id: 3,
    title: "Marketing materials ready",
    message: "Your branding package is ready for review",
    time: "5 days ago",
    type: "success",
    action: "View Materials",
  },
  {
    id: 4,
    title: "Payment reminder",
    message: "Second installment due by Feb 28th",
    time: "1 week ago",
    type: "warning",
    action: "Pay Now",
  },
];

// Sponsor Profile Data
export const sponsorProfile = {
  companyName: "Pharma International",
  commercialRegNo: "CR-2024-78901",
  vatNumber: "VAT-123456789",
  contactPerson: "Mohammed Al-Otaibi",
  email: "sponsor@pharma.com",
  phone: "+966 00 000 0000",
  alternatePhone: "+966 00 000 0000",
  website: "www.pharma.com",
  address: "King Abdullah Road, Riyadh, Saudi Arabia",
  description: "Leading pharmaceutical and healthcare company in the Middle East, specializing in innovative medical solutions and research partnerships.",
  yearEstablished: "1998",
  employeeCount: "500+",
  industry: "Pharmaceuticals & Healthcare",
  logo: "/images/placeholder-logo.png",
  socialMedia: {
    linkedin: "pharma",
    twitter: "@pharma",
    instagram: "pharma",
  },
};

// Sponsorship Package Details
export const sponsorshipPackage = {
  tier: "Platinum",
  amount: "SAR 250,000",
  paidAmount: "SAR 125,000",
  dueDate: "Feb 28, 2026",
  status: "Active",
  contractSigned: "Jan 15, 2026",
  validUntil: "Dec 31, 2026",
  benefits: [
    {
      category: "Branding Benefits",
      icon: "Globe",
      items: [
        "Logo on main stage backdrop",
        "Logo on all event materials",
        "Company profile in event app",
        "Branding in conference hall",
        "Social media mentions (6 posts)",
        "Logo on event website homepage",
        "Branding on registration area",
      ],
    },
    {
      category: "Speaking Opportunities",
      icon: "Video",
      items: [
        "Keynote speech (30 min)",
        "Panel discussion participation",
        "Workshop hosting (2 hours)",
        "Welcome remarks",
        "Moderator opportunity",
      ],
    },
    {
      category: "Exhibition Benefits",
      icon: "ShoppingBag",
      items: [
        "Premium booth location (36m²)",
        "Private meeting room",
        "Hospitality suite",
        "15 complimentary registrations",
        "Dedicated storage area",
        "Premium furniture package",
      ],
    },
    {
      category: "Networking Benefits",
      icon: "Users",
      items: [
        "VIP networking dinner (6 seats)",
        "Private dinner with keynote speakers",
        "Access to VIP lounge",
        "Dedicated networking app access",
        "Meet & greet with celebrities",
      ],
    },
  ],
  documents: [
    { name: "Sponsorship Brochure", url: "#", size: "2.5 MB" },
    { name: "Sponsorship Contract", url: "#", size: "1.2 MB" },
    { name: "Benefits Guide", url: "#", size: "3.1 MB" },
    { name: "Terms & Conditions", url: "#", size: "0.8 MB" },
  ],
};

// Branding & Media Requirements
export const brandingRequirements = [
  {
    type: "Primary Logo",
    format: "PNG, SVG, AI",
    dimensions: "500x500px min",
    deadline: "Feb 20, 2026",
    status: "pending",
    description: "Full color logo with transparent background",
  },
  {
    type: "Secondary Logo",
    format: "PNG, SVG",
    dimensions: "200x200px min",
    deadline: "Feb 20, 2026",
    status: "pending",
    description: "White/grayscale version for dark backgrounds",
  },
  {
    type: "Banner Image",
    format: "JPG, PNG",
    dimensions: "1920x1080px",
    deadline: "Feb 25, 2026",
    status: "pending",
    description: "Hero banner for event app and website",
  },
  {
    type: "Company Profile",
    format: "PDF",
    dimensions: "A4",
    deadline: "Feb 28, 2026",
    status: "uploaded",
    description: "Company overview and capabilities",
  },
  {
    type: "Video Presentation",
    format: "MP4",
    dimensions: "1920x1080",
    deadline: "Mar 5, 2026",
    status: "pending",
    description: "30-60 second promo video",
  },
  {
    type: "Social Media Kit",
    format: "ZIP",
    dimensions: "Various",
    deadline: "Feb 25, 2026",
    status: "pending",
    description: "Social media assets and guidelines",
  },
];

// Uploaded Media Files
export const uploadedMedia = [
  {
    id: 1,
    name: "company_logo_color.png",
    type: "image/png",
    size: "245 KB",
    uploadDate: "Jan 20, 2026",
    status: "approved",
    category: "Primary Logo",
  },
  {
    id: 2,
    name: "company_profile.pdf",
    type: "application/pdf",
    size: "1.2 MB",
    uploadDate: "Jan 25, 2026",
    status: "pending_review",
    category: "Company Profile",
  },
  {
    id: 3,
    name: "banner_hero.jpg",
    type: "image/jpeg",
    size: "856 KB",
    uploadDate: "Feb 1, 2026",
    status: "approved",
    category: "Banner Image",
  },
];

// Payment/Invoice Data
export const invoices = [
  {
    id: "INV-2026-001",
    date: "Jan 10, 2026",
    dueDate: "Jan 25, 2026",
    description: "Platinum Sponsorship - Initial Deposit",
    amount: "SAR 125,000",
    status: "paid",
    paidDate: "Jan 20, 2026",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "INV-2026-002",
    date: "Jan 26, 2026",
    dueDate: "Feb 28, 2026",
    description: "Platinum Sponsorship - Final Payment",
    amount: "SAR 125,000",
    status: "pending",
    paidDate: null,
    paymentMethod: null,
  },
];

export const paymentMethods = [
  { id: "bank", name: "Bank Transfer", icon: "Building", description: "Wire transfer to our account" },
  { id: "card", name: "Credit Card", icon: "CreditCard", description: "Visa, Mastercard, AMEX" },
  { id: "apple", name: "Apple Pay", icon: "Smartphone", description: "Secure mobile payment" },
];

export const paymentHistory = [
  { date: "Jan 20, 2026", amount: "SAR 125,000", method: "Bank Transfer", reference: "TRX-123456", status: "completed" },
];

// Event Information
export const eventDetails = {
  name: "Global Health Exhibition 2026",
  dates: "March 12-14, 2026",
  venue: "Riyadh International Convention Center",
  address: "King Abdullah Road, Riyadh, Saudi Arabia",
  expectedAttendees: "15,000+",
  expectedExhibitors: "300+",
  countriesRepresented: "50+",
  website: "www.globalhealthsa.com",
  timezone: "AST (UTC+3)",
};

export const eventSchedule = [
  {
    day: "Day 1 - March 12, 2026",
    sessions: [
      { time: "09:00 AM - 10:00 AM", title: "Opening Ceremony", location: "Main Hall", type: "Mandatory" },
      { time: "10:00 AM - 12:00 PM", title: "Keynote Sessions", location: "Conference Hall A", type: "All Sponsors" },
      { time: "12:00 PM - 02:00 PM", title: "Lunch Break & Networking", location: "Exhibition Floor", type: "All Attendees" },
      { time: "02:00 PM - 04:00 PM", title: "Scientific Sessions", location: "Breakout Rooms", type: "Optional" },
      { time: "04:00 PM - 06:00 PM", title: "Exhibition Opening Reception", location: "Exhibition Hall", type: "All Sponsors" },
    ],
  },
  {
    day: "Day 2 - March 13, 2026",
    sessions: [
      { time: "09:00 AM - 11:00 AM", title: "Platinum Sponsor Keynote", location: "Main Hall", type: "Exclusive" },
      { time: "11:00 AM - 01:00 PM", title: "Panel Discussions", location: "Conference Hall B", type: "All Sponsors" },
      { time: "01:00 PM - 03:00 PM", title: "Lunch & Learn Session", location: "VIP Lounge", type: "Platinum Only" },
      { time: "03:00 PM - 05:00 PM", title: "Workshops", location: "Workshop Rooms", type: "Optional" },
      { time: "07:00 PM - 10:00 PM", title: "VIP Networking Dinner", location: "Royal Ballroom", type: "Invitation Only" },
    ],
  },
  {
    day: "Day 3 - March 14, 2026",
    sessions: [
      { time: "09:00 AM - 11:00 AM", title: "Industry Forums", location: "Conference Hall A", type: "All Sponsors" },
      { time: "11:00 AM - 01:00 PM", title: "Innovation Showcase", location: "Exhibition Floor", type: "All Attendees" },
      { time: "01:00 PM - 03:00 PM", title: "Closing Ceremony", location: "Main Hall", type: "Mandatory" },
      { time: "03:00 PM - 04:00 PM", title: "Award Ceremony", location: "Main Hall", type: "All Sponsors" },
    ],
  },
];


// Support/Help Desk Data
export const faqs = [
  {
    question: "How do I upload branding materials?",
    answer: "Navigate to Branding & Media section, click 'Upload New', select your file, and submit for review. Our team will approve within 48 hours.",
    category: "Branding",
    helpful: 128,
  },
  {
    question: "When is the booth setup time?",
    answer: "Booth setup is on March 11, 2026 from 8:00 AM to 8:00 PM. Early setup available upon request.",
    category: "Logistics",
    helpful: 95,
  },
  {
    question: "How many complimentary registrations do I get?",
    answer: "Platinum sponsors receive 15 complimentary registrations. Additional registrations can be purchased at 20% discount.",
    category: "Registration",
    helpful: 156,
  },
  {
    question: "Can I upgrade my sponsorship package?",
    answer: "Upgrades are subject to availability. Please contact sponsor relations team at sponsors@medconfksa.com",
    category: "Package",
    helpful: 67,
  },
  {
    question: "How do I access the sponsor dashboard?",
    answer: "Use your registered email and password to login. For any issues, use the 'Forgot Password' option or contact support.",
    category: "Technical",
    helpful: 89,
  },
  {
    question: "What are the payment terms?",
    answer: "50% deposit upon signing, 50% due 30 days before event. Payment plans available upon request.",
    category: "Payments",
    helpful: 112,
  },
];

export const supportContacts = [
  {
    name: "Ahmed Al-Rashid",
    role: "Sponsor Relations Manager",
    email: "ahmed@event.com",
    phone: "+966 00 000 0000",
    availability: "9 AM - 6 PM",
    avatar: "/images/avatars/ahmed.jpg",
  },
  {
    name: "Sarah Al-Qahtani",
    role: "Branding Coordinator",
    email: "sarah@event.com",
    phone: "+966 55 888 7778",
    availability: "10 AM - 7 PM",
    avatar: "/images/avatars/sarah.jpg",
  },
];

export const supportTickets = [
  {
    id: "TKT-001",
    subject: "Logo upload issue",
    status: "resolved",
    date: "Feb 1, 2026",
    lastUpdate: "Feb 2, 2026",
    priority: "medium",
  },
  {
    id: "TKT-002",
    subject: "Invoice clarification",
    status: "in_progress",
    date: "Feb 5, 2026",
    lastUpdate: "Feb 6, 2026",
    priority: "high",
  },
];

// Color Theme Configuration
export const sponsorTheme = {
  primary: "from-amber-500 to-purple-600",
  secondary: "from-purple-500 to-pink-400",
  accent: "amber",
  gradient: {
    button: "from-amber-500 to-purple-600",
    header: "from-amber-600 to-purple-700",
    card: "from-amber-500/10 to-purple-500/10",
  },
  colors: {
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
    },
    purple: {
      400: "#a855f7",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
    },
  },
};