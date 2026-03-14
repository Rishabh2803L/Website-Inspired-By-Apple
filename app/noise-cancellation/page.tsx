import Navbar from '@/components/Navbar';
import Cart from '@/components/Cart';
import { CartProvider } from '@/context/CartContext';
import Image from 'next/image';

export default function ANCPage() {
    return (
        <CartProvider>
            <main className="min-h-screen bg-black text-white">
                <Navbar />
                <Cart />
                <div className="pt-32 px-6 max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold mb-12">Noise Cancellation</h1>

                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 text-blue-500">Active Noise Cancellation</h2>
                            <p className="text-xl text-white/70 leading-relaxed mb-8">
                                Up to 2x more Active Noise Cancellation than the previous generation. With control over what you hear—and don’t hear—you’ll be immersed in songs and podcasts like never before.
                            </p>
                            <ul className="space-y-4 text-white/60">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Microphones detect noise from outside
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Equal anti-noise cancels it out
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[400px] w-full bg-white/5 rounded-3xl overflow-hidden flex items-center justify-center">
                            <Image
                                src="/anc-visual.jpg"
                                alt="Active Noise Cancellation Visualization"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <section>
                        <h2 className="text-3xl font-semibold mb-6 text-blue-500">Adaptive Transparency</h2>
                        <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                            Adaptive Transparency harnesses the power of H2 to minimize the intensity of loud noises like sirens or power tools—so you can comfortably hear the world around you.
                        </p>
                    </section>
                </div>
            </main>
        </CartProvider>
    );
}
