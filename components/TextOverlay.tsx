'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface TextOverlayProps {
    children: ReactNode;
    start: number; // 0-1
    end: number;   // 0-1
    align?: 'left' | 'center' | 'right';
}

export default function TextOverlay({ children, start, end, align = 'center' }: TextOverlayProps) {
    const { scrollYProgress } = useScroll();

    // Fade in: start to start + 0.05
    // Fade out: end - 0.05 to end
    const opacity = useTransform(
        scrollYProgress,
        [start, start + 0.05, end - 0.05, end],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [start, start + 0.05, end - 0.05, end],
        [50, 0, 0, -50]
    );

    // Z-index needed to sit above canvas
    return (
        <motion.div
            style={{ opacity, y }}
            className={`fixed inset-0 pointer-events-none flex items-center p-8 md:p-24 z-10 ${align === 'left' ? 'justify-start' :
                    align === 'right' ? 'justify-end' :
                        'justify-center'
                }`}
        >
            <div className={`max-w-xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
                {children}
            </div>
        </motion.div>
    );
}
