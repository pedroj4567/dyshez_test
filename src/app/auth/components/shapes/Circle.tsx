import React from "react";

const Circle = ({ className }: { className: string }) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="21.6734"
        cy="21.6734"
        r="20.1734"
        stroke="#E3026F"
        strokeWidth="3"
      />
    </svg>
  );
};

export default Circle;
