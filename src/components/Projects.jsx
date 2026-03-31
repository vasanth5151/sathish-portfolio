import React from 'react';

const images = [
    { src: '/Srinidhi & Leelaram.png', alt: 'Srinidhi & Leelaram Wedding' },
    { src: '/Sri Suvetha_Jaya Easwar KS YT Thumbnail.png', alt: 'Sri Suvetha & Jaya Easwar Wedding' },
    { src: '/Rashmitha B_Nishanth Ethiraj THUMBNAIL.png', alt: 'Rashmitha & Nishanth Wedding' },
    { src: '/Sowmiya & Vasanth Thumbnail.png', alt: 'Sowmiya & Vasanth Wedding' },
    { src: '/Gravitians day insta thumbnail.png', alt: 'Gravitians Day 2025' },
    { src: '/YT Thumbnail.png', alt: 'YouTube Thumbnail' },
    { src: '/Valentines day thumbnail.png', alt: 'Valentines Day' },
    { src: '/Alpha design poster -19-02.png', alt: 'Alpha Design Poster' },
    { src: '/MAPC Admission 12-03.png', alt: 'MAPC Admission' },
    { src: '/Vermilion Curousel -2 Poster -15-11.png', alt: 'Vermilion Carousel' },
];

// Duplicate for seamless loop
const doubled = [...images, ...images];

const Projects = () => {
    return (
        <section id="projects" style={{ background: '#fff', padding: '80px 0', overflow: 'hidden' }}>

            {/* Section header */}
            <div style={{ textAlign: 'center', marginBottom: 48, padding: '0 24px' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    fontWeight: 900,
                    color: '#000',
                    letterSpacing: '-0.04em',
                    marginBottom: 12,
                }}>
                    Designing works
                </h2>
                <p style={{ color: '#777', fontSize: '1rem', maxWidth: 460, margin: '0 auto' }}>
                    A collection of my recent video editing and post-production projects.
                </p>
            </div>

            {/* Plain marquee strip */}
            <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>

                {/* Left fade */}
                <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, zIndex: 2,
                    background: 'linear-gradient(to right, #fff, transparent)',
                    pointerEvents: 'none',
                }} />
                {/* Right fade */}
                <div style={{
                    position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, zIndex: 2,
                    background: 'linear-gradient(to left, #fff, transparent)',
                    pointerEvents: 'none',
                }} />

                <div style={{
                    display: 'flex',
                    gap: 24,
                    width: 'max-content',
                    animation: 'plainMarquee 36s linear infinite',
                    padding: '16px 0',
                }}>
                    {doubled.map((img, i) => (
                        <div
                            key={i}
                            style={{
                                flexShrink: 0,
                                width: 300,
                                height: 400,
                                borderRadius: 16,
                                overflow: 'hidden',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes plainMarquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};

export default Projects;
