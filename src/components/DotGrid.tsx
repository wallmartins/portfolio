export default function DotGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <svg
        className="h-full w-full opacity-8 text-[#EFEDFD]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="dot-pattern"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
    </div>
  );
}
