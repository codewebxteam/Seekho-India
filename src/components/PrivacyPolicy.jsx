import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Lock,
  Eye,
  Share2,
  Cookie,
  ShieldCheck,
  Mail,
  RefreshCw,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30">
      <Navbar />

      {/* Hero Header */}
      <div className="relative pt-32 pb-12 px-6 text-center overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[400px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Privacy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Policy
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative z-10 text-slate-400 max-w-2xl mx-auto text-lg"
        >
          Your data security is our priority. Here's how we handle your
          information.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 relative z-10 space-y-8">
        {/* Section 1: Collection */}
        <PolicySection
          icon={Eye}
          title="Information Collection"
          color="text-blue-400"
          bg="bg-blue-500/10"
        >
          We collect personal information such as{" "}
          <strong>name, email, phone number, and payment details</strong> solely
          for the purpose of course enrollment, account creation, and providing
          support.
        </PolicySection>

        {/* Section 2: Usage (Grid) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">
              How We Use Information
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Provide access to courses",
              "Send updates & announcements",
              "Process secure payments",
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-black/40 border border-slate-800 rounded-xl text-sm font-medium text-slate-300"
              >
                ✅ {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 3: Sharing */}
        <PolicySection
          icon={Share2}
          title="Information Sharing"
          color="text-green-400"
          bg="bg-green-500/10"
        >
          We{" "}
          <span className="text-white font-semibold">do not sell or share</span>{" "}
          your personal information with third parties, except:
          <ul className="list-disc list-inside mt-3 space-y-1 text-slate-400">
            <li>To comply with legal requirements.</li>
            <li>
              To process payments via <strong>Razorpay</strong> or other
              authorized payment processors.
            </li>
          </ul>
        </PolicySection>

        {/* Section 4: Cookies & Security */}
        <div className="grid md:grid-cols-2 gap-6">
          <PolicySection
            icon={Cookie}
            title="Cookies & Analytics"
            color="text-amber-400"
            bg="bg-amber-500/10"
          >
            We may use cookies and analytics tools to improve website experience
            and track course progress securely.
          </PolicySection>
          <PolicySection
            icon={ShieldCheck}
            title="Data Security"
            color="text-cyan-400"
            bg="bg-cyan-500/10"
          >
            We implement reasonable security measures to protect your personal
            information from unauthorized access or breaches.
          </PolicySection>
        </div>

        {/* Section 5: Rights & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8 mt-8"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Mail className="text-pink-400" /> Your Rights & Contact
          </h3>
          <p className="text-slate-400 mb-6">
            You may request access, correction, or deletion of your personal
            data by contacting us.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-mono text-slate-300">
            <span className="px-4 py-2 bg-slate-800 rounded-lg">
              📧 md.naushad3520@gmail.com
            </span>
            <span className="px-4 py-2 bg-slate-800 rounded-lg">
              📱 80840 37252
            </span>
          </div>
        </motion.div>

        
      </div>

      <Footer />
    </div>
  );
};

// Helper Component for consistent section styling
const PolicySection = ({ icon: Icon, title, children, color, bg }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl hover:bg-slate-900/60 transition-colors"
  >
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-lg ${bg} ${color}`}>
        <Icon size={24} />
      </div>
      <div>
        <h3 className={`text-xl font-bold text-white mb-3`}>{title}</h3>
        <div className="text-slate-400 leading-relaxed text-sm md:text-base">
          {children}
        </div>
      </div>
    </div>
  </motion.div>
);

export default PrivacyPolicy;
