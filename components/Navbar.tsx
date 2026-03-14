'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
    const { scrollY } = useScroll();
    const { openCart, items } = useCart();

    // Transform values properly typed
    const opacity = useTransform(scrollY, [0, 50], [0, 1]);
    const y = useTransform(scrollY, [0, 50], [-20, 0]);
    const blur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);

    return (
        <motion.nav
            style={{
                backdropFilter: blur,
                backgroundColor: "rgba(5, 5, 5, 0.7)",
            }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10"
        >
            <div className="flex items-center gap-4">
                <Link href="/" className="text-lg font-semibold tracking-tight text-white">
                    AirPods Pro
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                <Link href="/" className="hover:text-white transition-colors">Overview</Link>
                <Link href="/audio" className="hover:text-white transition-colors">Audio</Link>
                <Link href="/noise-cancellation" className="hover:text-white transition-colors">Noise Cancellation</Link>
                <Link href="/specs" className="hover:text-white transition-colors">Specs</Link>
            </div>

            <div className="flex items-center gap-4">
                <button onClick={openCart} className="relative p-2 text-white hover:text-white/80 transition-colors">
                    {/* Simple SVG Bag Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    {items.length > 0 && (
                        <span className="absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded-full"></span>
                    )}
                </button>
                <button
                    onClick={openCart}
                    className="px-4 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-sm"
                >
                    Buy
                </button>
            </div>
        </motion.nav>
    );
}
