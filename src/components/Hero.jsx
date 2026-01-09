import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clapperboard, CheckCircle2 } from "lucide-react";

const Hero = () => {
  // PAYMENT LINK HANDLER
  const handleEnroll = () => {
    window.open(
      "https://superprofile.bio/vp/%F0%9F%8E%AC-ai-filmmaking-course--beginner-to-pro--255",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-md text-cyan-400 text-sm font-semibold mb-8 hover:border-cyan-500/50 transition-colors cursor-default shadow-lg shadow-cyan-900/10"
        >
          <Clapperboard size={16} />
          <span>No Camera or Crew Needed</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1]"
        >
          Become an <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            AI Filmmaker
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Turn your imagination into reality. Learn to make short films, ads,
          and cinematic stories using AI tools like{" "}
          <b className="text-white font-medium">
            Runway ML, Midjourney, & ElevenLabs.
          </b>
        </motion.p>

        {/* CTA Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          {/* UPDATED BUTTON: Opens Payment Link */}
          <button
            onClick={handleEnroll}
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-white text-lg shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <span className="relative flex items-center gap-2">
              Enroll Now for ₹299{" "}
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </span>
          </button>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-500" />
              Limited Time Offer
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-500" />
              Lifetime Access
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-500" />
              Certified Course
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
