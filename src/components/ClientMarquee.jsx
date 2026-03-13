import React from 'react';

const clients = [
    'Supa Blox', 'Hype Blox', 'Ultra Blox', 'Frame Blox', 'Nova Blox',
    'Cine Blox', 'Pixel Blox', 'Flux Blox', 'Edge Blox', 'Wave Blox',
];

// Duplicate for seamless loop
const doubled = [...clients, ...clients];

const ClientMarquee = () => {
    return (
        <section style={{ background: '#f5f5f5', padding: '100px 0', overflow: 'hidden' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-8 mb-6">
                <p style={{ color: '#999', fontSize: '0.8rem', fontWeight: 600, whiteSpace: 'nowrap', lineHeight: 1.4 }}>
                    Trusted by Brands<br />I've Helped Shape
                </p>
                <div style={{ height: 1, background: '#ddd', flex: 1 }} />
            </div>

            {/* Marquee track */}
            <div
                style={{ display: 'flex', overflow: 'hidden', width: '100%', paddingLeft: 48 }}
                className="group"
            >
                <div
                    style={{
                        display: 'flex',
                        gap: '64px',
                        animation: 'marquee 22s linear infinite',
                        whiteSpace: 'nowrap',
                        willChange: 'transform',
                    }}
                >
                    {doubled.map((name, i) => (
                        <div
                            key={i}
                            style={{
                                display: 'flex', alignItems: 'center', gap: 10,
                                flexShrink: 0,
                            }}
                        >
                            {/* Simple icon placeholder */}
                            <span style={{
                                width: 28, height: 28, borderRadius: '50%',
                                background: '#000', display: 'inline-flex',
                                alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <span style={{ color: '#fff', fontSize: '0.6rem', fontWeight: 900 }}>
                                    {name[0]}
                                </span>
                            </span>
                            <span style={{ color: '#111', fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};

export default ClientMarquee;
