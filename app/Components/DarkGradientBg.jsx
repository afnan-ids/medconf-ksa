export default function DarkGradientBg() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900" />

      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
    </div>
  );
}