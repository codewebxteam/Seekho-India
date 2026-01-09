import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Copyright Line */}
        <p className="text-slate-400 text-sm mb-2">
          &copy; 2025{" "}
          <span className="text-white font-semibold">Seekho India</span>. All
          rights reserved.
        </p>

        {/* Disclaimer Text */}
        <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
          This site is for educational purposes. All trademarks, logos, and
          brand names are the property of their respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
