// components/ui/skeleton.jsx
export function Skeleton({ className = "" }) {
    return (
      <div
        className={`animate-pulse bg-gray-200 rounded ${className}`}
      />
    );
  }
  