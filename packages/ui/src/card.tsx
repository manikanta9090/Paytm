import React from "react";

export function Card({
  title,
  children,
  className = "",
}: {
  title: string;
  children?: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 p-8 ${className}`}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-slate-200">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};

