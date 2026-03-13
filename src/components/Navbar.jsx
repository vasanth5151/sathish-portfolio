import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'Services', to: 'services' },
        { name: 'About', to: 'about' },
        { name: 'Projects', to: 'videoedits' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 backdrop-blur-md py-4 border-b border-black/10'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className={`text-2xl font-bold tracking-tighter cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}
                >
                    Sathish<span className="text-[#f15a24]">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className={`text-sm font-medium ${isScrolled ? 'text-gray-600 hover:text-black' : 'text-gray-300 hover:text-white'} transition-colors cursor-pointer`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${isScrolled ? 'bg-black text-white hover:bg-[#f15a24]' : 'bg-white text-black hover:bg-gray-200'}`}
                    >
                        Let's Talk
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden ${isScrolled ? 'text-black hover:text-[#f15a24]' : 'text-white hover:text-gray-300'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-black/10 py-6 px-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-medium text-gray-800 hover:text-[#f15a24] transition-colors cursor-pointer"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
