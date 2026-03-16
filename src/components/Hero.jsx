import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const services = [
    { num: '#01', label: 'Video Editing' },
    { num: '#02', label: 'Color Grading' },
    { num: '#03', label: 'Motion Graphics' },
    { num: '#04', label: 'Sound Design' },
];

const Hero = () => {
    return (
        <section
            id="home"
            style={{
                background: '#0d0d0d',
                borderBottomLeftRadius: '60px',
                borderBottomRightRadius: '60px',
                overflow: 'hidden',
                position: 'relative',
                minHeight: '100vh',
                paddingBottom: '30px', // Added padding to avoid clipping by rounded corners
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* ── Center image — sits behind all text ── */}
            <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                pointerEvents: 'none',
                zIndex: 0,
                overflow: 'hidden',
            }}>
                <img
                    src="/sathish-image1.png"
                    alt="Sathish"
                    style={{
                        height: '100%',
                        width: 'auto',
                        objectFit: 'contain',
                        objectPosition: 'bottom center',
                        display: 'block',
                    }}
                />
                {/* Left fade — keeps left text readable */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to right, #0d0d0d 18%, transparent 50%, #0d0d0d 82%)',
                    zIndex: 1
                }} />
                {/* Top fade */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, #0d0d0d 0%, transparent 20%, transparent 70%, #0d0d0d 100%)',
                    zIndex: 1
                }} />
            </div>

            {/* ── Main content (grows to fill space) ── */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '7rem', position: 'relative', zIndex: 2 }}>
                <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">

                    {/* LEFT — role + giant title */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <p style={{ color: '#f15a24', fontWeight: 700, fontStyle: 'italic', fontSize: 'clamp(1rem, 2vw, 1.3rem)', marginBottom: 4 }}>
                            Hey, I'm a
                        </p>
                        <h1 style={{
                            color: '#ffffff',
                            fontWeight: 900,
                            lineHeight: 0.88,
                            letterSpacing: '-0.04em',
                            fontSize: 'clamp(4.5rem, 12vw, 10rem)',
                        }}>
                            Video<br />Editor
                        </h1>
                    </motion.div>

                    {/* RIGHT — tagline + description */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
                        style={{ maxWidth: 360 }}
                    >
                        <h2 style={{ color: '#fff', fontWeight: 700, fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)', lineHeight: 1.3, marginBottom: 12 }}>
                            Great editing should feel invisible.
                        </h2>
                        <p style={{ color: '#999', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: 28 }}>
                            From pacing to color, I build cinematic narratives that captivate and convert audiences.
                        </p>
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                            <Link
                                to="service-banners"
                                smooth={true}
                                duration={500}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: 8,
                                    background: '#f15a24', color: '#fff',
                                    padding: '10px 22px', borderRadius: '999px',
                                    fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                                    border: 'none', textDecoration: 'none',
                                }}
                            >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="white"><polygon points="1,1 11,6 1,11" /></svg>
                                View Work
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: 8,
                                    background: '#fff', color: '#000',
                                    padding: '10px 22px', borderRadius: '999px',
                                    fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                                    border: 'none', textDecoration: 'none',
                                }}
                            >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="black"><polygon points="1,1 11,6 1,11" /></svg>
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Bottom numbered services row ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                    borderTop: '1px solid rgba(255,255,255,0.07)',
                    padding: '24px 0',
                    position: 'relative',
                    zIndex: 3
                }}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {services.map((s) => (
                        <div key={s.num}>
                            <span style={{ color: '#f15a24', fontSize: '0.75rem', fontWeight: 700, display: 'block', marginBottom: 4 }}>{s.num}</span>
                            <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>{s.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
