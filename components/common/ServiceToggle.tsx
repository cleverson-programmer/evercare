"use client";
import React from "react";

type ServiceType = "cleaning" | "care";

interface ServiceToggleProps {
  selected: ServiceType;
  onChange: (value: ServiceType) => void;
}

export const ServiceToggle: React.FC<ServiceToggleProps> = ({
  selected,
  onChange,
}) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-full p-2 border border-gray-200 gap-2 w-full max-w-md">
    <button
        onClick={() => onChange("cleaning")}
        className={`flex-1 text-center py-4 rounded-full text-lg font-bold transition-all duration-300 cursor-pointer ${
        selected === "cleaning"
            ? "bg-blue-600 text-white shadow"
            : "text-gray-600 hover:bg-blue-100 hover:text-blue-700"
        }`}
    >
        Cleaning
    </button>

    <button
        onClick={() => onChange("care")}
        className={`flex-1 text-center py-4 rounded-full text-lg font-bold transition-all duration-300 cursor-pointer ${
        selected === "care"
            ? "bg-blue-600 text-white shadow"
            : "text-gray-600 hover:bg-green-100 hover:text-green-700"
        }`}
    >
        Care
    </button>
    </div>
  );
};
