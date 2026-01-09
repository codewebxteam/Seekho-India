import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Mail,
  MessageCircle,
  ArrowRight,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom"; // Agar router use kar rahe ho

const ThankYou = () => {
  // --- META PIXEL TRACKING LOGIC ---
  useEffect(() => {
    // Check if fbq exists (standard Meta Pixel function)
    if (typeof window.fbq === "function") {
      window.fbq("track", "Purchase", {
        value: 299.0,
        currency: "INR",
        content_name: "AI Filmmaking Mastery Course",
        content_type: "product",
      });
      console.log("Meta Purchase Event Fired! 🚀");
    }
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden p-6">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-slate-900/60 border border-slate-800 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center shadow-2xl relative z-10"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.2,
          }}
          className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
        >
          <CheckCircle className="text-green-500 w-12 h-12" strokeWidth={3} />
        </motion.div>

        {/* Headlines */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Payment Successful!
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Welcome to the family! You have successfully enrolled in the <br />
          <span className="text-cyan-400 font-semibold">
            AI Filmmaking Mastery Course
          </span>
          .
        </p>

        {/* Order Details Box */}
        <div className="bg-black/40 border border-slate-800 rounded-xl p-6 mb-8 text-left">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-500 text-sm">Amount Paid</span>
            <span className="text-white font-bold">₹299.00</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-500 text-sm">Transaction ID</span>
            <span className="text-slate-300 font-mono text-sm">
              TXN-{Math.floor(100000 + Math.random() * 900000)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500 text-sm">Status</span>
            <span className="text-green-400 text-sm font-bold flex items-center gap-1">
              <CheckCircle size={12} /> Confirmed
            </span>
          </div>
        </div>

        {/* Next Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 flex flex-col items-center">
            <Mail className="text-cyan-400 mb-3" size={28} />
            <h3 className="text-white font-semibold mb-1">Check Your Email</h3>
            <p className="text-slate-400 text-xs">
              Login details have been sent to your registered email.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 flex flex-col items-center">
            <MessageCircle className="text-green-400 mb-3" size={28} />
            <h3 className="text-white font-semibold mb-1">Join Community</h3>
            <p className="text-slate-400 text-xs">
              Connect with other filmmakers on our private WhatsApp group.
            </p>
          </div>
        </div>

    

        <p className="mt-8 text-xs text-slate-500">
          Need help? Contact support at{" "}
          <span className="text-slate-300">ask.seekhoindia@gmail.com</span>
        </p>
      </motion.div>
    </div>
  );
};

export default ThankYou;
