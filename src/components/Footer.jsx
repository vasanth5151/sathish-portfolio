import React from 'react';
import { Link } from 'react-scroll';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'videoedits' },
    { name: 'Contact', to: 'contact' },
];

const socials = [
    {
        label: 'Facebook',
        href: '#',
        icon: <Facebook size={17} />,
    },
    {
        label: 'Instagram',
        href: '#',
        icon: <Instagram size={17} />,
    },
    {
        label: 'TikTok',
        href: '#',
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
            </svg>
        ),
    },
    {
        label: 'YouTube',
        href: '#',
        icon: <Youtube size={17} />,
    },
];

const Footer = () => {
    return (
        <footer style={{ background: '#111', color: '#fff', position: 'relative', overflow: 'hidden' }}>

            {/* ── Main footer content ── */}
            <div
                className="max-w-7xl mx-auto px-6 md:px-12"
                style={{ paddingTop: 72, paddingBottom: 40 }}
            >
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: 48,
                    alignItems: 'flex-start',
                }}>

                    {/* Left — Brand + CTA + Copyright */}
                    <div>
                        {/* Brand name */}
                        <Link
                            to="home"
                            smooth duration={500}
                            style={{
                                fontFamily: "'Mluvka', 'Outfit', sans-serif",
                                fontWeight: 700,
                                fontSize: '1.4rem',
                                color: '#fff',
                                cursor: 'pointer',
                                display: 'block',
                                marginBottom: 16,
                                textDecoration: 'none',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Sathish<span style={{ color: '#f15a24' }}>®</span>
                        </Link>

                        {/* Tagline */}
                        <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: 10 }}>
                            Great editing should feel invisible.
                        </p>

                        {/* Description */}
                        <p style={{ color: '#999', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: 28, maxWidth: 260 }}>
                            A video editor focused on building cinematic, immersive stories that connect and convert audiences.
                        </p>

                        {/* Get in touch button */}
                        <Link
                            to="contact"
                            smooth duration={500}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: 10,
                                background: '#222', color: '#fff',
                                padding: '10px 20px', borderRadius: '999px',
                                fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                                textDecoration: 'none', border: '1px solid #333',
                                marginBottom: 40,
                            }}
                        >
                            Get in touch
                            <span style={{
                                width: 30, height: 30, borderRadius: '50%',
                                background: '#f15a24',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="white">
                                    <path d="M2 11L11 2M11 2H4M11 2V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                            </span>
                        </Link>

                        {/* Copyright */}
                        <p style={{ color: '#555', fontSize: '0.8rem' }}>
                            © {new Date().getFullYear()} Copyright
                        </p>
                    </div>

                    {/* Middle — Menu */}
                    <div>
                        <p style={{ color: '#f15a24', fontSize: '0.85rem', fontWeight: 700, marginBottom: 20, letterSpacing: '0.04em' }}>
                            Menu
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {navLinks.map(link => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth duration={500}
                                    style={{
                                        color: '#ccc',
                                        fontSize: '1.05rem',
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                    onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right — Social */}
                    <div>
                        <p style={{ color: '#f15a24', fontSize: '0.85rem', fontWeight: 700, marginBottom: 20, letterSpacing: '0.04em' }}>
                            Social
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {socials.map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: 10,
                                        color: '#ccc', textDecoration: 'none',
                                        fontSize: '1.05rem', fontWeight: 500,
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                    onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
                                >
                                    {s.icon}
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Watermark name at the very bottom ── */}
            <div style={{
                overflow: 'hidden',
                lineHeight: 0.85,
                marginTop: 24,
                userSelect: 'none',
                pointerEvents: 'none',
                textAlign: 'center',
            }}>
                <p style={{
                    fontFamily: "'Mluvka', 'Outfit', sans-serif",
                    fontWeight: 900,
                    fontSize: 'clamp(5rem, 20vw, 18rem)',
                    color: 'rgba(255,255,255,0.05)',
                    letterSpacing: '-0.04em',
                    whiteSpace: 'nowrap',
                    margin: 0,
                    padding: '0 24px',
                }}>
                    Sathish
                </p>
            </div>

        </footer>
    );
};

export default Footer;
