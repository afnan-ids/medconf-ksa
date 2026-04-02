// Color classes utility
export const getColorClasses = (color) => {
  const colors = {
    blue: {
      bg: "bg-gradient-to-r from-blue-500 to-cyan-500",
      bgLight: "bg-blue-500/10",
      text: "text-blue-400",
      textLight: "text-blue-300",
      border: "border-blue-500/30",
      hover: "hover:from-blue-600 hover:to-cyan-600",
      ring: "ring-blue-500",
      gradient: "from-blue-500 to-cyan-500",
      lightGradient: "from-blue-500/10 to-cyan-500/10",
    },
    emerald: {
      bg: "bg-gradient-to-r from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-500/10",
      text: "text-emerald-400",
      textLight: "text-emerald-300",
      border: "border-emerald-500/30",
      hover: "hover:from-emerald-600 hover:to-teal-600",
      ring: "ring-emerald-500",
      gradient: "from-emerald-500 to-teal-500",
      lightGradient: "from-emerald-500/10 to-teal-500/10",
    },
    violet: {
      bg: "bg-gradient-to-r from-violet-500 to-purple-500",
      bgLight: "bg-violet-500/10",
      text: "text-violet-400",
      textLight: "text-violet-300",
      border: "border-violet-500/30",
      hover: "hover:from-violet-600 hover:to-purple-600",
      ring: "ring-violet-500",
      gradient: "from-violet-500 to-purple-500",
      lightGradient: "from-violet-500/10 to-purple-500/10",
    },
    amber: {
      bg: "bg-gradient-to-r from-amber-500 to-orange-500",
      bgLight: "bg-amber-500/10",
      text: "text-amber-400",
      textLight: "text-amber-300",
      border: "border-amber-500/30",
      hover: "hover:from-amber-600 hover:to-orange-600",
      ring: "ring-amber-500",
      gradient: "from-amber-500 to-orange-500",
      lightGradient: "from-amber-500/10 to-orange-500/10",
    },
  };
  return colors[color] || colors.blue;
};