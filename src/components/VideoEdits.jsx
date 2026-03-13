import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ── Helper: extract YouTube video ID from any YouTube URL format ──────────────
// Supports: watch?v=ID, youtu.be/ID, /shorts/ID
const getYouTubeId = (url) => {
    if (!url) return null;
    const patterns = [
        /youtube\.com\/shorts\/([^?&/]+)/,
        /youtube\.com\/watch\?v=([^&]+)/,
        /youtu\.be\/([^?&/]+)/,
        /youtube\.com\/embed\/([^?&/]+)/,
    ];
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
};

// ── Replace video URLs with your own YouTube links ───────────────────────────
const edits = [
    {
        id: 1,
        video: 'https://www.youtube.com/shorts/L1V_VJjBHbE',
        poster: '/proj1.png',
        category: 'Commercial',
        title: 'Brand Film',
        description: 'High-paced cinematic cuts with color-graded visuals that drive brand impact.',
    },
    {
        id: 2,
        video: 'https://www.youtube.com/shorts/L1V_VJjBHbE',
        poster: '/proj2.png',
        category: 'Fashion',
        title: 'Style Edit',
        description: 'Editorial fashion reel crafted with rhythm-based cuts and moody color grading.',
    },
    {
        id: 3,
        video: 'https://www.youtube.com/shorts/L1V_VJjBHbE',
        poster: '/proj6.png',
        category: 'Documentary',
        title: 'Nature Doc',
        description: 'Slow-motion storytelling through lush landscapes and natural immersive sound.',
    },
    {
        id: 4,
        video: 'https://www.youtube.com/shorts/L1V_VJjBHbE',
        poster: '/proj5.png',
        category: 'Music Video',
        title: 'Concert Reel',
        description: 'Energy-driven live concert edit with fast cuts synced to every beat.',
    },
    {
        id: 5,
        video: 'https://www.youtube.com/shorts/L1V_VJjBHbE',
        poster: '/proj3.png',
        category: 'Product',
        title: 'Product Showcase',
        description: 'Luxury product commercial with smooth transitions and cinematic lighting.',
    },
    {
        id: 6,
        video: 'https://www.youtube.com/shorts/L1V_VJjBHbE',
        poster: '/proj4.png',
        category: 'Cinematic',
        title: 'Cinematic Reel',
        description: 'Dramatic visual storytelling with volcanic ambiance and tight close-ups.',
    },
];

// ── Single tall card ──────────────────────────────────────────────────────────
const EditCard = ({ edit }) => {
    const [hovered, setHovered] = useState(false);
    const videoId = getYouTubeId(edit.video);

    // YouTube embed URL: autoplay + mute (required) + no controls + loop
    const embedUrl = videoId
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&rel=0&playsinline=1&modestbranding=1`
        : null;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'relative',
                borderRadius: 20,
                overflow: 'hidden',
                flexShrink: 0,
                width: 360,
                height: 520,
                cursor: 'pointer',
                background: '#111',
            }}
        >
            {/* ── Default: Poster image ── */}
            <img
                src={edit.poster}
                alt={edit.title}
                style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'opacity 0.4s ease',
                    opacity: hovered ? 0 : 1,
                }}
            />

            {/* ── Hover: YouTube iframe ── */}
            {/* Render iframe only when hovered so it doesn't load on all cards */}
            {hovered && embedUrl && (
                <iframe
                    src={embedUrl}
                    title={edit.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen={false}
                    style={{
                        position: 'absolute', inset: 0,
                        width: '100%',
                        /* For Shorts (9:16), iframe needs to be taller than the card
                           so we push it up and scale it to fill the card */
                        height: '200%',
                        top: '-50%',
                        border: 'none',
                        pointerEvents: 'none', // prevent click-through to YouTube
                    }}
                />
            )}

            {/* Dark gradient — deepens on hover for text readability */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, transparent 55%)',
                opacity: hovered ? 1 : 0.35,
                transition: 'opacity 0.4s',
                zIndex: 2,
            }} />

            {/* Category badge */}
            <span style={{
                position: 'absolute', top: 18, left: 20, zIndex: 3,
                color: '#f15a24', fontSize: '0.78rem', fontWeight: 700,
                background: 'rgba(0,0,0,0.5)', padding: '3px 10px',
                borderRadius: 99, backdropFilter: 'blur(4px)',
            }}>
                {edit.category}
            </span>

            {/* Hover text reveal sliding from bottom */}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.33, 1, 0.68, 1] }}
                        style={{
                            position: 'absolute',
                            bottom: 0, left: 0, right: 0,
                            padding: '32px 28px',
                            zIndex: 3,
                        }}
                    >
                        <div style={{ width: 48, height: 3, background: '#f15a24', borderRadius: 2, marginBottom: 14 }} />
                        <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.7rem', letterSpacing: '-0.03em', marginBottom: 8 }}>
                            {edit.title}
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            {edit.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Static title when not hovered */}
            {!hovered && (
                <div style={{ position: 'absolute', bottom: 22, left: 24, zIndex: 3 }}>
                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>{edit.title}</h3>
                </div>
            )}
        </div>
    );
};

// ── Main VideoEdits section ───────────────────────────────────────────────────
const VideoEdits = () => {
    const [current, setCurrent] = useState(0);
    const visible = 3;
    const max = edits.length - visible;

    const prev = () => setCurrent(c => Math.max(0, c - 1));
    const next = () => setCurrent(c => Math.min(max, c + 1));

    return (
        <section
            id="video-edits"
            style={{ background: '#fff', padding: '80px 0', borderTop: '1px solid #f0f0f0' }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
                    <div>
                        <p style={{ color: '#f15a24', fontWeight: 700, fontSize: '0.9rem', marginBottom: 6 }}>My Work</p>
                        <h2 style={{ color: '#000', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
                            Edits of Video
                        </h2>
                    </div>

                    <div style={{ display: 'flex', gap: 12 }}>
                        <button
                            onClick={prev} disabled={current === 0} aria-label="Previous"
                            style={{
                                width: 48, height: 48, borderRadius: '50%',
                                border: `2px solid ${current === 0 ? '#e5e5e5' : '#000'}`,
                                background: current === 0 ? 'transparent' : '#000',
                                color: current === 0 ? '#ccc' : '#fff',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: current === 0 ? 'not-allowed' : 'pointer', transition: 'all 0.2s',
                            }}
                        ><ChevronLeft size={20} /></button>
                        <button
                            onClick={next} disabled={current === max} aria-label="Next"
                            style={{
                                width: 48, height: 48, borderRadius: '50%',
                                border: `2px solid ${current === max ? '#e5e5e5' : '#f15a24'}`,
                                background: current === max ? 'transparent' : '#f15a24',
                                color: current === max ? '#ccc' : '#fff',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: current === max ? 'not-allowed' : 'pointer', transition: 'all 0.2s',
                            }}
                        ><ChevronRight size={20} /></button>
                    </div>
                </div>

                {/* Slider viewport */}
                <div style={{ overflow: 'hidden' }}>
                    <motion.div
                        animate={{ x: `calc(-${current} * (360px + 24px))` }}
                        transition={{ type: 'spring', stiffness: 280, damping: 34 }}
                        style={{ display: 'flex', gap: 24 }}
                    >
                        {edits.map(edit => <EditCard key={edit.id} edit={edit} />)}
                    </motion.div>
                </div>

                {/* Dots */}
                <div style={{ display: 'flex', gap: 8, marginTop: 36, justifyContent: 'center' }}>
                    {Array.from({ length: max + 1 }).map((_, i) => (
                        <button key={i} onClick={() => setCurrent(i)}
                            style={{
                                width: i === current ? 28 : 8, height: 8, borderRadius: 4,
                                background: i === current ? '#f15a24' : '#ddd',
                                border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s',
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoEdits;
