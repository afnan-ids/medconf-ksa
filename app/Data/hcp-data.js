import {
  Dashboard as DashboardIcon,
  CloudUpload as CloudUploadIcon,
  Event as EventIcon,
  Map as MapIcon,
  Storefront as StorefrontIcon,
  SupportAgent as SupportAgentIcon,
} from "@mui/icons-material";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import {
  Shield,
  Brain,
  Stethoscope,
  CheckCircle as CheckCircleIcon,
  Award,
  User,
} from "lucide-react";

// Menu items configuration
export const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: DashboardIcon, badge: null },
  {
    id: "document-upload",
    label: "Document Upload",
    icon: CloudUploadIcon,
    badge: null,
  },
  {
    id: "event-schedule",
    label: "Event Schedule",
    icon: EventIcon,
    badge: null,
  },
  {
    id: "exhibition-floor-plan",
    label: "Exhibition Floor Plan",
    icon: MapIcon,
    badge: null,
  },
  {
    id: "boot-details",
    label: "Boot Details",
    icon: StorefrontIcon,
    badge: null,
  },
  {
    id: "cpd-points",
    label: "CPD Points",
    icon: ScoreboardIcon,
    badge: null,
  },
  {
    id: "support-help-desk",
    label: "Support / Help Desk",
    icon: SupportAgentIcon,
    badge: null,
  },
];

// Stats data
export const statsData = [
  {
    title: "License Status",
    value: "Verified",
    icon: Shield,
    trend: { value: "+2", label: "days remaining", positive: true },
    color: "emerald",
    bgGradient: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    progress: 98,
  },
  {
    title: "CPD Points",
    value: "45",
    subtitle: "/50",
    icon: Brain,
    trend: { value: "90%", label: "of target", positive: true },
    color: "blue",
    bgGradient: "from-blue-500 to-cyan-600",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/30",
    progress: 90,
  },
  {
    title: "Event Access",
    value: "Full Access",
    icon: Stethoscope,
    trend: { value: "3", label: "upcoming events", positive: true },
    color: "purple",
    bgGradient: "from-purple-500 to-pink-600",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/30",
    progress: 100,
  },
];

// Recent activities
export const recentActivities = [
  {
    id: 1,
    action: "License verified successfully",
    time: "2 hours ago",
    icon: CheckCircleIcon,
    color: "emerald",
    details: "SCFHS License #12345",
    status: "completed",
    priority: "high",
  },
  {
    id: 2,
    action: "CPD points updated",
    time: "1 day ago",
    icon: Award,
    color: "blue",
    details: "+15 points from Cardiology Conference",
    status: "completed",
    priority: "medium",
  },
  {
    id: 3,
    action: "Profile information updated",
    time: "3 days ago",
    icon: User,
    color: "violet",
    details: "Contact details and specialty",
    status: "pending",
    priority: "low",
  },
];

// Upcoming events
export const upcomingEvents = [
  {
    id: 1,
    title: "Cardiology Conference 2024",
    date: "Mar 15, 2024",
    time: "09:00 AM",
    type: "Conference",
    color: "blue",
    location: "Virtual • Zoom",
    attendees: 234,
  },
  {
    id: 2,
    title: "CPD Workshop",
    date: "Mar 18, 2024",
    time: "02:00 PM",
    type: "Workshop",
    color: "violet",
    location: "Medical Center • Room 301",
    attendees: 45,
  },
  {
    id: 3,
    title: "Board Meeting",
    date: "Mar 20, 2024",
    time: "11:00 AM",
    type: "Meeting",
    color: "amber",
    location: "Conference Room A",
    attendees: 12,
  },
];

// Exhibition booths
export const booths = [
  {
    number: "B-123",
    name: "Cardiology Zone",
    status: "Booked",
    date: "01-03-2026",
    color: "blue",
  },
  {
    number: "B-789",
    name: "Pharmaceutical",
    status: "Booked",
    date: "02-02-2026",
    color: "violet",
  },
];

// Documents
export const docs = [
  {
    name: "Medical License",
    status: "Verified",
    date: "Jan 15, 2024",
    color: "emerald",
  },
  {
    name: "Specialty Certificate",
    status: "Pending",
    date: "Feb 20, 2024",
    color: "amber",
  },
  {
    name: "CPD Certificate",
    status: "Verified",
    date: "Mar 01, 2024",
    color: "emerald",
  },
];