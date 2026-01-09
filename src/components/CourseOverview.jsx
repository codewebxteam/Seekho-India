import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Smartphone,
  Palette,
  Calendar,
  Trophy,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const CourseOverview = () => {
  // PAYMENT LINK HANDLER
  const handleEnroll = () => {
    window.open(
      "https://superprofile.bio/vp/%F0%9F%8E%AC-ai-filmmaking-course--beginner-to-pro--255",
      "_blank"
    );
  };

  const features = [
    {
      icon: Rocket,
      title: "Zero to Hero Learning",
      desc: "From idea generation to final editing — everything simplified for beginners.",
      color: "text-red-500",
      delay: 0.1,
    },
    {
      icon: Smartphone,
      title: "Designed for Mobile Users",
      desc: "No high-end laptop needed. Learn and create amazing films using just your phone!",
      color: "text-green-400",
      delay: 0.2,
    },
    {
      icon: Palette,
      title: "AI + Creativity",
      desc: "Master MidJourney, Runway ML, Eleven Labs, and DaVinci Resolve for studio-like results.",
      color: "text-purple-400",
      delay: 0.3,
    },
    {
      icon: Calendar,
      title: "Make Your First Film in 7 Days",
      desc: "Our structured path takes you from concept to a finished short film in just one week.",
      color: "text-pink-400",
      delay: 0.4,
    },
    {
      icon: Trophy,
      title: "Get Certified",
      desc: "Receive a Seekho India Certification to kickstart your creative career and build your portfolio.",
      color: "text-amber-400",
      delay: 0.5,
    },
  ];

  return (
    <section id="overview" className="py-20 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ==================== PART 1: VIDEO SECTION ==================== */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-cyan-400" size={20} />
              <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">
                Course Preview
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Watch the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Course Intro Video
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              See exactly how we take you from a beginner to an AI filmmaker in
              record time.
            </p>
          </motion.div>

          {/* Video Player Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl opacity-30 blur-xl animate-pulse" />

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <div className="aspect-video w-full relative">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/3OY-Qk-YMwU?rel=0&modestbranding=1&controls=1&showinfo=0&disablekb=1&iv_load_policy=3"
                  title="Course Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* --- PRO TRICK: Invisible Layers to Disable Share/Watch Later --- */}
                <div
                  className="absolute top-0 right-0 w-[180px] h-[80px] z-20 bg-transparent cursor-default"
                  onClick={(e) => e.stopPropagation()}
                />
                <div
                  className="absolute top-0 left-0 w-[200px] h-[80px] z-20 bg-transparent cursor-default"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>

            {/* "Watch Now & Enroll" Button */}
            <div className="flex justify-center -mt-6 relative z-30">
              <motion.button
                onClick={handleEnroll} // UPDATED: Opens Payment Link
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-950 border border-slate-700 text-white rounded-full font-bold shadow-xl shadow-black/50 flex items-center gap-3 hover:border-cyan-500 hover:text-cyan-400 transition-all group cursor-pointer"
              >
                Watch Now & Enroll
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* ==================== PART 2: FEATURES ==================== */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why This Course is a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Game-Changer
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6 max-w-6xl mx-auto">
            {/* Top Row: 3 Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.slice(0, 3).map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>

            {/* Bottom Row: 2 Items (Centered) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-3/4 mx-auto">
              {features.slice(3, 5).map((feature, index) => (
                <FeatureCard key={index + 3} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted Card Component
const FeatureCard = ({ feature }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: feature.delay, duration: 0.5 }}
      className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-600 hover:bg-slate-800/60 backdrop-blur-sm transition-all duration-300 group h-full hover:-translate-y-2 shadow-lg"
    >
      <div className="w-14 h-14 rounded-2xl bg-black border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <feature.icon size={28} className={feature.color} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
        {feature.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
};

export default CourseOverview;
