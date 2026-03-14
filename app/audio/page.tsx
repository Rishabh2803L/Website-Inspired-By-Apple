import Navbar from '@/components/Navbar';
import Cart from '@/components/Cart';
import { CartProvider } from '@/context/CartContext';

export default function AudioPage() {
    return (
        <CartProvider>
            <main className="min-h-screen bg-black text-white">
                <Navbar />
                <Cart />
                <div className="pt-32 px-6 max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold mb-12">Audio Performance</h1>

                    <section className="mb-24">
                        <h2 className="text-3xl font-semibold mb-6 text-blue-500">H2 Chip</h2>
                        <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                            The Apple-designed H2 chip is the force behind AirPods Pro and its advanced audio performance. It works in concert with a custom-built driver and amplifier to deliver crisp, clear high notes and deep, rich bass in stunning definition—so every sound is more vivid than ever.
                        </p>
                    </section>

                    <section className="mb-24 grid md:grid-cols-2 gap-12">
                        <div className="bg-white/5 p-12 rounded-3xl">
                            <h3 className="text-2xl font-semibold mb-4">Custom Driver</h3>
                            <p className="text-white/60">
                                A custom-built low-distortion driver delivers crisp, clear high notes and deep, rich bass in stunning definition.
                            </p>
                        </div>
                        <div className="bg-white/5 p-12 rounded-3xl">
                            <h3 className="text-2xl font-semibold mb-4">Amplifier</h3>
                            <p className="text-white/60">
                                The custom amplifier powers the driver to remove background noise and adjust audio at a frequency of 48,000 times per second.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </CartProvider>
    );
}
