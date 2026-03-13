import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Loader2, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-gray-50 border-t border-black/5 relative">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-16 h-16 bg-white border border-black/5 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                        <Mail size={32} className="text-black" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-black">Let's Create Together</h2>
                    <p className="text-gray-600 font-medium text-lg mb-12 max-w-2xl mx-auto">
                        Ready to bring your vision to life? Fill out the form below and I'll get back to you within 24 hours.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    onSubmit={handleSubmit}
                    className="text-left space-y-6 max-w-2xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-gray-700">Name</label>
                            <input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-black focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all placeholder:text-gray-400 font-medium shadow-sm"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-black focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all placeholder:text-gray-400 font-medium shadow-sm"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-gray-700">Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-black focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all resize-none placeholder:text-gray-400 font-medium shadow-sm"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status !== 'idle'}
                        className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                    >
                        {status === 'idle' && <>Send Message <ArrowRight size={18} /></>}
                        {status === 'loading' && <><Loader2 size={18} className="animate-spin" /> Sending...</>}
                        {status === 'success' && <><CheckCircle size={18} className="text-green-400" /> Sent Successfully</>}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
