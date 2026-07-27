export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 12h70c8 0 12-8 20-8s10 6 18 6c6 0 8-4 12-4s6 4 12 4c8 0 10-6 18-6s12 8 20 8h70"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="120" cy="12" r="2.5" fill="currentColor" />
      <circle cx="96" cy="12" r="1" fill="currentColor" />
      <circle cx="144" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}
