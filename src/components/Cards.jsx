import React from "react";
import { motion } from "framer-motion";
import {
  Clapperboard,
  BrainCircuit,
  PenTool,
  Wand2,
  Music,
  Rocket,
  Sparkles,
} from "lucide-react";

const Cards = () => {
  const modules = [
    {
      icon: Clapperboard,
      title: "AI Filmmaking Foundations",
      desc: "Basics of story, scene, and visual composition for powerful AI-generated content.",
      color: "text-slate-200",
      bg: "bg-slate-800",
    },
    {
      icon: BrainCircuit,
      title: "AI Tools Setup",
      desc: "Master Runway ML, Midjourney, Pika Labs, Kaiber, and ElevenLabs.",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
    {
      icon: PenTool,
      title: "Script to Screen",
      desc: "Write, visualize, and generate cinematic scenes from simple text prompts.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      icon: Wand2,
      title: "Animation & Editing",
      desc: "Animate and polish your visuals with AI tools and video editing software.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      icon: Music,
      title: "Voice & Sound Design",
      desc: "Create realistic voiceovers and background sound using AI generators.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      icon: Rocket,
      title: "Final Project",
      desc: "Build and publish your very own professional short AI film from scratch.",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
  ];

  // Animation variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="modules" className="py-24 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-purple-500" size={20} />
            <span className="text-purple-400 font-bold tracking-widest uppercase text-sm">
              Course Curriculum
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What You'll Learn Inside <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              This Course
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Step-by-step training to master every stage of AI filmmaking.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {modules.map((module, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:bg-slate-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
            >
              {/* Card Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${module.bg} border border-white/5 group-hover:scale-110 transition-transform duration-300`}
              >
                <module.icon size={28} className={module.color} />
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {module.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {module.desc}
              </p>

              {/* Decorative Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Cards;
