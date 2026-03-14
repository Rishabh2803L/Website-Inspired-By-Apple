'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'; // We might need to install lucide-react or use simple SVG
import Image from 'next/image';

// Simple SVG Icon replacements if lucide is not installed
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

export default function Cart() {
    const { isOpen, closeCart, items, removeFromCart, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-[#111] border-l border-white/10 z-[70] shadow-2xl p-6 flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-white">Your Bag</h2>
                            <button onClick={closeCart} className="text-white/60 hover:text-white p-2">
                                <CloseIcon />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-6">
                            {items.length === 0 ? (
                                <div className="text-center text-white/40 py-12">
                                    <p>Your bag is empty.</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl">
                                        <div className="relative w-16 h-16 bg-white rounded-md overflow-hidden shrink-0">
                                            {/* Placeholder or real image */}
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-black text-xs">
                                                Img
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-white font-medium">{item.name}</h3>
                                            <p className="text-white/60 text-sm">${item.price}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-white font-medium">x{item.quantity}</span>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-400 text-xs hover:text-red-300"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="mt-8 border-t border-white/10 pt-6">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-white/60">Total</span>
                                <span className="text-2xl font-bold text-white">${cartTotal.toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-4 rounded-full font-semibold hover:bg-blue-700 transition w-full">
                                Check Out
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
