// Stats Cards Data
export const exhibitorStats = [
  {
    title: "Booked Booth",
    value: "A12",
    sub: "18m² Premium Corner",
    icon: "Store",
    trend: "Confirmed",
  },
  {
    title: "Booking Status",
    value: "Confirmed",
    sub: "Ready for exhibition",
    icon: "CheckCircle",
    trend: "Active",
  },
  {
    title: "Total Cost",
    value: "SAR 85,000",
    sub: "Paid: SAR 42,500",
    icon: "AttachMoney",
    trend: "50% Paid",
  },
];

// Notifications Data
export const exhibitorNotifications = [
  {
    id: 1,
    title: "Booth construction deadline",
    message: "Complete your booth design by March 1st, 2026",
    time: "2 days ago",
    category: "deadline",
  },
  {
    id: 2,
    title: "Payment reminder",
    message: "Final payment of SAR 42,500 due by Feb 15th",
    time: "5 days ago",
    category: "payment",
  },
  {
    id: 3,
    title: "New visitor leads",
    message: "12 new leads scanned from your booth",
    time: "1 week ago",
    category: "leads",
  },
  {
    id: 4,
    title: "Booth setup guidelines",
    message: "Updated exhibitor manual now available",
    time: "2 weeks ago",
    category: "info",
  },
];

// Upcoming Events
export const exhibitorEvents = [
  {
    id: 1,
    title: "Exhibitor Briefing",
    date: "March 10, 2026",
    time: "10:00 AM",
    location: "Main Hall A",
    type: "mandatory",
  },
  {
    id: 2,
    title: "Networking Reception",
    date: "March 12, 2026",
    time: "7:00 PM",
    location: "Ballroom",
    type: "social",
  },
  {
    id: 3,
    title: "Award Ceremony",
    date: "March 14, 2026",
    time: "6:00 PM",
    location: "Main Stage",
    type: "ceremony",
  },
  {
    id: 4,
    title: "Booth Setup Window",
    date: "March 10-11, 2026",
    time: "8:00 AM - 8:00 PM",
    location: "Hall 1",
    type: "setup",
  },
];

// Quick Links for Exhibitor
export const exhibitorQuickLinks = [
  { name: "Download Exhibitor Kit", icon: "FileText", link: "#" },
  { name: "Staff Registration", icon: "Users", link: "#" },
  { name: "Order Extras", icon: "ShoppingCart", link: "#" },
  { name: "View Floor Plan", icon: "Map", link: "#" },
 
];

// Booth Details Data
export const boothDetails = {
  boothNumber: "A12",
  size: "18 m² (6m x 3m)",
  location: "Hall 1, Corner Booth",
  boothType: "Premium Corner",
  status: "Confirmed",
  price: "SAR 75,000",
  amenities: [
    "Electricity (3kW)",
    "Wi-Fi Connection",
    "2 Spotlights",
    "1 Table",
    "2 Chairs",
    "Waste Basket",
    "Carpet",
    "Company Signage",
  ],
  specifications: {
    width: "6 meters",
    depth: "3 meters",
    height: "2.5 meters",
    powerSupply: "220V, 3kW",
  },
};

// Contract Data
export const contractData = {
  contractNumber: "EXH-2026-001",
  signedDate: "Jan 15, 2026",
  status: "signed",
  parties: {
    organizer: "HPQL Exhibition Organizer",
    exhibitor: "PharmaCo Exhibitions",
  },
  boothDetails: {
    number: "A12",
    size: "18m²",
    location: "Hall 1",
  },
  paymentTerms: {
    totalAmount: "SAR 85,000",
    deposit: "SAR 42,500 (50%)",
    depositDue: "Upon signing",
    finalPayment: "SAR 42,500 (50%)",
    finalDue: "Feb 15, 2026",
  },
  cancellationPolicy: {
    beforeJan15: "75% refund",
    afterJan15: "No refund",
  },
  terms: [
    "Exhibitor agrees to comply with all exhibition rules and regulations",
    "Booth setup must be completed by March 11, 2026, 8:00 PM",
    "Booth breakdown starts March 14, 2026, 8:00 PM",
    "No subletting or sharing of booth space without written consent",
    "All promotional materials must adhere to exhibition guidelines",
  ],
};

// Payment Data
export const paymentData = {
  totalAmount: "SAR 85,000",
  paidAmount: "SAR 42,500",
  remainingAmount: "SAR 42,500",
  paymentSchedule: [
    {
      id: 1,
      title: "Initial Deposit (50%)",
      amount: "SAR 42,500",
      dueDate: "Upon signing",
      status: "paid",
      paidDate: "Jan 15, 2026",
    },
    {
      id: 2,
      title: "Final Payment (50%)",
      amount: "SAR 42,500",
      dueDate: "Feb 15, 2026",
      status: "pending",
      paidDate: null,
    },
  ],
  invoiceItems: [
    { description: "Booth A12 - 18m² Premium Corner", amount: "SAR 75,000" },
    { description: "Electricity & Internet", amount: "SAR 5,000" },
    { description: "Furniture Package", amount: "SAR 5,000" },
  ],
  paymentMethods: [
    "Bank Transfer",
    "Credit Card",
    "SPAN (Saudi Payment Network)",
  ],
};

// Exhibitor Profile Data
export const exhibitorProfile = {
  companyName: "PharmaCo Exhibitions",
  commercialRegistration: "CR-2024-12345",
  taxNumber: "3001234567",
  contactPerson: "Ahmed Al-Saud",
  email: "exhibitor@pharmaco.com",
  phone: "+966 50 123 4567",
  alternatePhone: "+966 12 345 6789",
  website: "www.pharmaco-exhibits.com",
  address: "King Fahd Road, Riyadh, Saudi Arabia",
  description:
    "Leading pharmaceutical company specializing in medical equipment and supplies. Exhibiting at major healthcare conferences across Saudi Arabia and the Middle East.",
  industry: "Pharmaceuticals",
  employees: "50-100",
  yearEstablished: "2010",
  logoInitial: "P",
};

// Documents Data
export const exhibitorDocuments = [
  {
    category: "Exhibitor Kit",
    icon: "FileText",
    items: [
      { name: "Exhibitor_Manual_2026.pdf", size: "2.4 MB", type: "PDF" },
      { name: "Technical_Specifications.pdf", size: "1.2 MB", type: "PDF" },
      { name: "Booth_Construction_Guidelines.pdf", size: "3.1 MB", type: "PDF" },
    ],
  },
  {
    category: "Marketing Materials",
    icon: "Image",
    items: [
      { name: "Event_Logo_Pack.zip", size: "5.2 MB", type: "ZIP" },
      { name: "Social_Media_Templates.pptx", size: "4.8 MB", type: "PPTX" },
      { name: "Banner_Design_Specs.pdf", size: "1.5 MB", type: "PDF" },
    ],
  },
  {
    category: "Forms & Applications",
    icon: "FileText",
    items: [
      { name: "Staff_Badge_Registration.xlsx", size: "0.8 MB", type: "XLSX" },
      { name: "Equipment_Order_Form.pdf", size: "0.6 MB", type: "PDF" },
      { name: "Catering_Request_Form.pdf", size: "0.9 MB", type: "PDF" },
    ],
  },
];

// FAQ Data for Support
export const exhibitorFaqs = [
  {
    id: 1,
    question: "When can I set up my booth?",
    answer:
      "Booth setup is available on March 10-11, 2026, from 8:00 AM to 8:00 PM. Please complete your setup by March 11, 8:00 PM.",
    category: "Setup",
    helpful: 45,
  },
  {
    id: 2,
    question: "What is included in the booth package?",
    answer:
      "Each booth includes: electricity (3kW), Wi-Fi connection, 2 spotlights, 1 table, 2 chairs, waste basket, carpet, and company signage.",
    category: "Booth",
    helpful: 62,
  },
  {
    id: 3,
    question: "How do I register my staff?",
    answer:
      "Staff badges can be registered through the Exhibitor Portal under 'Staff Registration'. Each exhibitor receives 5 complimentary badges.",
    category: "Registration",
    helpful: 38,
  },
  {
    id: 4,
    question: "What is the cancellation policy?",
    answer:
      "Cancellations before January 15, 2026 receive 75% refund. No refunds for cancellations after January 15, 2026.",
    category: "Payment",
    helpful: 28,
  },
  {
    id: 5,
    question: "Can I bring my own furniture?",
    answer:
      "Yes, you may bring additional furniture. Please ensure it fits within your booth space and complies with safety regulations.",
    category: "Booth",
    helpful: 33,
  },
  {
    id: 6,
    question: "How do I collect visitor leads?",
    answer:
      "Use the Lead Scanner App available for download in the Quick Links section. The app allows you to scan visitor badges and capture contact information.",
    category: "Technology",
    helpful: 51,
  },
];

// Contact Options for Support
export const exhibitorContactOptions = [
  {
    title: "Technical Support",
    desc: "Booth setup, electrical, internet issues",
    icon: "Headphones",
    availability: "24/7 during event",
    contact: "+966 55 123 4567",
  },
  {
    title: "Payment & Billing",
    desc: "Invoice questions, payment issues",
    icon: "CreditCard",
    availability: "Sat-Thu, 9AM-6PM",
    contact: "finance@Hpql.com",
  },
  {
    title: "Logistics",
    desc: "Shipping, material handling, storage",
    icon: "Truck",
    availability: "Sat-Thu, 8AM-8PM",
    contact: "logistics@Hpql.com",
  },
];

// Menu Items for Sidebar
export const exhibitorMenuItems = [
  { id: "dashboard", label: "Dashboard", icon: "Dashboard" },
  { id: "floorplan", label: "Floor Plan", icon: "Map" },
  { id: "boothdetails", label: "Booth Details", icon: "Store" },
  { id: "contract", label: "Contract", icon: "FileText" },
  { id: "payment", label: "Payment", icon: "CreditCard" },
  { id: "documents", label: "Documents", icon: "Folder" },
  { id: "support", label: "Support", icon: "Headphones" },
];

// Leads Data (for future Leads page)
export const leadsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    company: "Riyadh General Hospital",
    title: "Chief Medical Officer",
    scannedAt: "2026-03-12 14:30",
    interests: ["Medical Devices", "Surgical Equipment"],
    rating: "high",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    company: "King Saud University",
    title: "Research Director",
    scannedAt: "2026-03-12 11:15",
    interests: ["Pharmaceuticals", "Clinical Trials"],
    rating: "medium",
  },
  {
    id: 3,
    name: "Ahmed Al-Rashid",
    company: "Modern Medical Supply",
    title: "Procurement Manager",
    scannedAt: "2026-03-11 16:45",
    interests: ["Equipment", "Supplies"],
    rating: "high",
  },
];

// Staff Data
export const staffData = [
  {
    id: 1,
    name: "Ahmed Al-Saud",
    role: "Booth Manager",
    email: "ahmed@pharmaco.com",
    phone: "+966 50 123 4567",
    shifts: ["March 12: 9AM-5PM", "March 13: 9AM-5PM", "March 14: 9AM-5PM"],
  },
  {
    id: 2,
    name: "Fatima Al-Zahrani",
    role: "Sales Representative",
    email: "fatima@pharmaco.com",
    phone: "+966 50 234 5678",
    shifts: ["March 12: 9AM-5PM", "March 13: 9AM-5PM"],
  },
  {
    id: 3,
    name: "Omar Al-Otaibi",
    role: "Technical Specialist",
    email: "omar@pharmaco.com",
    phone: "+966 50 345 6789",
    shifts: ["March 12: 1PM-8PM", "March 13: 1PM-8PM"],
  },
];