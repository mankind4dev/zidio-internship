import React from "react";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="flex items-center justify-center t-[100vh] font-bold text-sm sm:text-xl bg-slate-200 shadow-md w-ful p-4">
      <span className="text-slate-500">Real</span>
      <span className="text-slate-700">Castle.</span>
      <p className="ml-3">All Rights Reserved. &copy; {date.getFullYear()}</p>
    </footer>
  );
}
