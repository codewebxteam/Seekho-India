import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";

const FAQ = () => {
  // --- PAYMENT LINK HANDLER ---
  const handleEnroll = () => {
    window.open(
      "https://superprofile.bio/vp/%F0%9F%8E%AC-ai-filmmaking-course--beginner-to-pro--255",
      "_blank"
    );
  };

  const faqs = [
    {
      question: "Do I need a powerful computer?",
      answer:
        "Not at all! This course is designed to be mobile-friendly. We teach you how to use AI tools that work on any device, including your smartphone.",
    },
    {
      question: "Are all the AI tools free?",
      answer:
        "We focus on tools that have generous free tiers, allowing you to create your first films without spending extra money. We also show you how to get the most out of these free plans.",
    },
    {
      question: "Can beginners join this course?",
      answer:
        "Absolutely! This course is perfect for beginners. We start from the absolute basics of storytelling and AI tools and guide you step-by-step.",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes, upon successful completion of the course and your final project, you will receive a Certificate of Completion from Seekho India.",
    },
    {
      question: "How do I access the course?",
      answer:
        "After payment, you will get instant access to the course content. It is a pre-recorded course with lifetime access, so you can learn at your own pace, anytime, anywhere.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="text-cyan-400" size={20} />
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">
              Got Questions?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Questions
            </span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={activeIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">
            Still have questions? We're here to help.
          </p>
          <button
            onClick={handleEnroll} // UPDATED: Opens Payment Link
            className="group relative px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all cursor-pointer"
          >
            <span className="flex items-center gap-2">
              Enroll Now & Start Learning
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Extracted Accordion Item
const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "bg-slate-900/80 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
          : "bg-slate-900/30 border-slate-800 hover:border-slate-700"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span
          className={`text-lg font-semibold transition-colors ${
            isOpen ? "text-white" : "text-slate-300"
          }`}
        >
          {faq.question}
        </span>
        <div
          className={`p-2 rounded-full transition-colors ${
            isOpen
              ? "bg-cyan-500/20 text-cyan-400"
              : "bg-slate-800 text-slate-400"
          }`}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQ;
