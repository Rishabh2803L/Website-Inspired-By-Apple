import Navbar from '@/components/Navbar';
import Cart from '@/components/Cart';
import { CartProvider } from '@/context/CartContext';

export default function SpecsPage() {
    return (
        <CartProvider>
            <main className="min-h-screen bg-black text-white">
                <Navbar />
                <Cart />
                <div className="pt-32 px-6 max-w-4xl mx-auto pb-24">
                    <h1 className="text-5xl font-bold mb-12">Tech Specs</h1>

                    <div className="space-y-12">

                        <div className="border-b border-white/10 pb-12">
                            <h3 className="text-2xl font-semibold mb-6">Audio Technology</h3>
                            <ul className="space-y-4 text-white/70">
                                <li>Custom high-excursion Apple driver</li>
                                <li>Custom high dynamic range amplifier</li>
                                <li>Active Noise Cancellation</li>
                                <li>Adaptive Transparency</li>
                                <li>Vent system for pressure equalization</li>
                                <li>Personalized Spatial Audio with dynamic head tracking</li>
                                <li>Adaptive EQ</li>
                            </ul>
                        </div>

                        <div className="border-b border-white/10 pb-12">
                            <h3 className="text-2xl font-semibold mb-6">Sensors</h3>
                            <ul className="space-y-4 text-white/70">
                                <li>Dual beamforming microphones</li>
                                <li>Inward-facing microphone</li>
                                <li>Skin-detect sensor</li>
                                <li>Motion-detecting accelerometer</li>
                                <li>Speech-detecting accelerometer</li>
                                <li>Touch control</li>
                            </ul>
                        </div>

                        <div className="border-b border-white/10 pb-12">
                            <h3 className="text-2xl font-semibold mb-6">Chip</h3>
                            <ul className="space-y-4 text-white/70">
                                <li>Apple H2 headphone chip</li>
                                <li>Apple U1 chip in MagSafe Charging Case</li>
                            </ul>
                        </div>

                        <div className="pb-12">
                            <h3 className="text-2xl font-semibold mb-6">Battery</h3>
                            <ul className="space-y-4 text-white/70">
                                <li>Up to 6 hours of listening time with a single charge</li>
                                <li>Up to 30 hours of total listening time with the MagSafe Charging Case</li>
                                <li>5 minutes in the case provides around 1 hour of listening time</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </main>
        </CartProvider>
    );
}
