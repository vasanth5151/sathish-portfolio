import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
    {
        id: 1,
        image: '/sb1.png',
        category: '#01',
        title: 'Video Editing',
        description: 'Precise cuts, seamless pacing and narrative structure that keeps audiences engaged from the very first frame.',
    },
    {
        id: 2,
        image: '/sb2.png',
        category: '#02',
        title: 'Color Grading',
        description: 'Cinematic color science — warm, teal, or monochrome — crafted to support the story and elevate the mood.',
    },
    {
        id: 3,
        image: '/sb3.png',
        category: '#03',
        title: 'Motion Graphics',
        description: 'Dynamic titles, animated lower thirds and stunning visual effects to boost production value.',
    },
    {
        id: 4,
        image: '/sb4.png',
        category: '#04',
        title: 'Sound Design',
        description: 'Immersive audio mixing, foley and music sync that breathes life into every visual moment.',
    },
];

// ── Responsive visible count helper ──────────────────────────────────────────
const getVisible = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;  // mobile → 1 card
    if (window.innerWidth < 1024) return 2;  // tablet → 2 cards
    return 3;                                 // desktop → 3 cards
};

// ── Single banner card ────────────────────────────────────────────────────────
const BannerCard = ({ banner, cardWidth }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'relative',
                borderRadius: 20,
                overflow: 'hidden',
                cursor: 'default',
                height: 440,
                flexShrink: 0,
                width: cardWidth,
            }}
        >
            <img
                src={banner.image}
                alt={banner.title}
                style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    transform: hovered ? 'scale(1.07)' : 'scale(1)',
                    display: 'block',
                }}
            />
            {/* Dark gradient base */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)',
            }} />

            {/* Category badge */}
            <span style={{
                position: 'absolute', top: 20, left: 20,
                color: '#f15a24', fontSize: '0.8rem', fontWeight: 700,
            }}>
                {banner.category}
            </span>

            {/* Hover text reveal */}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'absolute', bottom: 0, left: 0, right: 0,
                            padding: '24px',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)',
                        }}
                    >
                        <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.4rem', marginBottom: 8, letterSpacing: '-0.02em' }}>
                            {banner.title}
                        </h3>
                        <p style={{ color: '#ccc', fontSize: '0.85rem', lineHeight: 1.6 }}>
                            {banner.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Static title when not hovered */}
            {!hovered && (
                <div style={{ position: 'absolute', bottom: 20, left: 24 }}>
                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>{banner.title}</h3>
                </div>
            )}
        </div>
    );
};

// ── Main Services section ─────────────────────────────────────────────────────
const Services = () => {
    const [visible, setVisible] = useState(getVisible);
    const [current, setCurrent] = useState(0);

    // Update visible cards on resize and keep current in bounds
    const handleResize = useCallback(() => {
        const v = getVisible();
        setVisible(v);
        setCurrent(c => Math.min(c, Math.max(0, banners.length - v)));
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    const maxIndex = banners.length - visible;
    const canPrev = current > 0;
    const canNext = current < maxIndex;

    const prev = () => setCurrent(c => Math.max(0, c - 1));
    const next = () => setCurrent(c => Math.min(maxIndex, c + 1));

    // Card width: distribute gap evenly
    const GAP = 24;
    const cardWidth = `calc(${100 / visible}% - ${(GAP * (visible - 1)) / visible}px)`;

    return (
        <section id="service-banners" style={{ background: '#fff', padding: '80px 0' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
                    <div>
                        <p style={{ color: '#f15a24', fontWeight: 700, fontSize: '0.9rem', marginBottom: 6 }}>What I Do</p>
                        <h2 style={{ color: '#000', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
                            Services &<br />Expertise
                        </h2>
                    </div>

                    {/* Arrow controls */}
                    <div style={{ display: 'flex', gap: 12 }}>
                        <button
                            onClick={prev}
                            disabled={!canPrev}
                            aria-label="Previous"
                            style={{
                                width: 48, height: 48, borderRadius: '50%',
                                border: `2px solid ${canPrev ? '#000' : '#ddd'}`,
                                background: canPrev ? '#000' : 'transparent',
                                color: canPrev ? '#fff' : '#ccc',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: canPrev ? 'pointer' : 'not-allowed',
                                transition: 'all 0.2s',
                            }}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={next}
                            disabled={!canNext}
                            aria-label="Next"
                            style={{
                                width: 48, height: 48, borderRadius: '50%',
                                border: `2px solid ${canNext ? '#f15a24' : '#ddd'}`,
                                background: canNext ? '#f15a24' : 'transparent',
                                color: canNext ? '#fff' : '#ccc',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: canNext ? 'pointer' : 'not-allowed',
                                transition: 'all 0.2s',
                            }}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Slider viewport — clips overflow */}
                <div style={{ overflow: 'hidden' }}>
                    <motion.div
                        animate={{ x: `calc(-${current} * (${cardWidth} + ${GAP}px))` }}
                        transition={{ type: 'spring', stiffness: 300, damping: 36 }}
                        style={{ display: 'flex', gap: GAP }}
                    >
                        {banners.map(banner => (
                            <BannerCard
                                key={banner.id}
                                banner={banner}
                                cardWidth={cardWidth}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Dots */}
                {maxIndex > 0 && (
                    <div style={{ display: 'flex', gap: 8, marginTop: 32, justifyContent: 'center' }}>
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                style={{
                                    width: i === current ? 28 : 8,
                                    height: 8,
                                    borderRadius: 4,
                                    background: i === current ? '#f15a24' : '#ddd',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: 0,
                                    transition: 'all 0.3s',
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services;
