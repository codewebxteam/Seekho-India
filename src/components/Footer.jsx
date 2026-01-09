import React from "react";
import { Link } from "react-router-dom"; // Link component import kiya

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Legal Links Section (NEW) */}
        <div className="flex justify-center gap-6 mb-4 text-sm font-medium">
          <Link
            to="/privacy-policy"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-slate-700">|</span>
          <Link
            to="/refund-policy"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            Refund Policy
          </Link>
        </div>

        {/* Copyright Line */}
        <p className="text-slate-500 text-sm mb-2">
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
