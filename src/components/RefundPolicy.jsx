import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  AlertTriangle,
  Headphones,
  CreditCard,
  Scale,
  FileText,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: FileText,
      title: "Digital Product Disclaimer",
      content:
        "All courses sold on Alife Stable Academy are digital products with instant access after purchase. By completing a purchase, you acknowledge that the product is digital and cannot be returned once delivered.",
    },
    {
      icon: ShieldAlert,
      title: "No Refunds on Completed Access",
      content:
        "Due to the nature of online courses, we do not offer refunds once the course content is accessed. This is standard practice for digital products to prevent intellectual property theft.",
    },
    {
      icon: CreditCard,
      title: "Cancellation Before Payment Completion",
      content:
        "If a payment fails or is canceled before full access is granted, no charges will be processed. You will only be charged upon successful enrollment.",
    },
    {
      icon: Scale,
      title: "Disputes",
      content:
        "All refund or payment disputes will be handled in accordance with Razorpay’s terms and applicable laws. We aim to resolve all legitimate disputes amicably.",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30">
      <Navbar />

      {/* Header Section */}
      <div className="relative pt-32 pb-12 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Refund{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Policy
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative z-10 text-slate-400 max-w-2xl mx-auto text-lg"
        >
          Transparent, fair, and simple terms for our learners.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 relative z-10">
        {/* Policy Cards */}
        <div className="grid gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <section.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {section.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Box (Highlighted) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 p-8 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Headphones size={120} />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="text-yellow-400" /> Exceptions & Support
            </h3>
            <p className="text-slate-300 mb-6 max-w-xl leading-relaxed">
              We value our learners. If you experience technical issues
              preventing access to course content, please contact us
              immediately. We will make all reasonable efforts to resolve access
              issues promptly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:md.naushad3520@gmail.com"
                className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors text-white font-medium"
              >
                📧 md.naushad3520@gmail.com
              </a>
              <a
                href="https://wa.me/918084037252"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 rounded-lg transition-colors text-green-400 font-medium"
              >
                💬 WhatsApp: +91 80840 37252
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
