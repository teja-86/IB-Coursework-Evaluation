import React from "react";

const SvgScoreIndicator = ({
  percentage,
  color = "#3BC289",
  fillColor = "#d6dfe4",
}) => {
  const radius = 45; // Radius of the circle
  const strokeWidth = 10; // Width of the stroke
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24"
    >
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke={fillColor}
        strokeWidth={strokeWidth}
      ></circle>
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        className="transition-all duration-500"
      ></circle>
    </svg>
  );
};

export default SvgScoreIndicator;
