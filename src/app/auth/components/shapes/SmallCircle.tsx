import React from "react";

function SmallCircle({ className }: { className: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="11.9482"
        cy="11.9482"
        r="10.4482"
        stroke="#FFC4E0"
        strokeWidth="3"
      />
    </svg>
  );
}

export default SmallCircle;
