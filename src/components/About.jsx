import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const skills = [
    "Adobe Premiere Pro", "DaVinci Resolve", "After Effects",
    "Final Cut Pro", "Color Grading", "Sound Mixing",
    "Motion Graphics", "Storyboarding"
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-gray-50 relative border-t border-black/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-black">About Me</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            With over 3 years of experience in post-production, I specialize in
                            turning raw footage into compelling narratives. My approach bridges
                            technical precision with creative storytelling, ensuring every frame
                            serves the broader vision.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4 text-black">Core Skills & Tools</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {skills.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-700 font-medium">
                                        <CheckCircle2 size={18} className="text-[#f15a24]" />
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-8 border-t border-black/10 pt-8 mt-8">
                            <div>
                                <span className="block text-4xl font-bold text-[#f15a24] mb-1">3+</span>
                                <span className="text-sm text-gray-600 font-bold uppercase tracking-wider">Years Exp.</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-[#f15a24] mb-1">150+</span>
                                <span className="text-sm text-gray-600 font-bold uppercase tracking-wider">Projects Done</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-black/10 group shadow-lg">
                            <img
                                src="sathish-about.webp"
                                alt="Video Editor Working"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl">
                                    <p className="text-sm italic text-white font-medium">
                                        "Great editing goes unnoticed. It feels natural, invisible, and completely immersive."
                                    </p>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
