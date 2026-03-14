'use client';

import ImageSequence from '@/components/ImageSequence';
import Navbar from '@/components/Navbar';
import TextOverlay from '@/components/TextOverlay';
import Cart from '@/components/Cart';
import { CartProvider, useCart } from '@/context/CartContext';

function PageContent() {
  const { addToCart } = useCart();

  const handleBuy = () => {
    addToCart({
      id: 'airpods-pro-2',
      name: 'AirPods Pro (2nd Gen)',
      price: 249.00,
      image: '/airpods/ezgif-frame-001.jpg',
      quantity: 1
    });
  };

  return (
    <main className="relative min-h-[600vh]">
      <Navbar />
      <Cart />

      {/* Sticky Background Canvas */}
      <ImageSequence />

      {/* Scroll-triggered Text Overlays */}

      {/* Section 1: Hero (0% - 15%) */}
      <TextOverlay start={0} end={0.15}>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-4">
          AirPods Pro
        </h1>
        <p className="text-xl md:text-2xl font-medium text-white/60">
          Rebuilt from the sound up.
        </p>
      </TextOverlay>

      {/* Section 2: Audio/Chip (20% - 35%) */}
      <TextOverlay start={0.20} end={0.35} align="left">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          H2 Chip.
        </h2>
        <p className="text-lg md:text-xl text-white/60 leading-relaxed">
          The new H2 chip carries out more functions than ever,
          using computational audio to deliver even smarter noise cancellation.
        </p>
      </TextOverlay>

      {/* Section 3: Immersion (40% - 55%) */}
      <TextOverlay start={0.40} end={0.55} align="right">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Immersive Sound.
        </h2>
        <p className="text-lg md:text-xl text-white/60 leading-relaxed">
          A custom-built driver and amplifier work with the H2 chip to provide
          lower distortion during playback.
        </p>
      </TextOverlay>

      {/* Section 4: Noise Cancellation (60% - 75%) */}
      <TextOverlay start={0.60} end={0.75} align="left">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          1,2,3,4... Silence.
        </h2>
        <p className="text-lg md:text-xl text-white/60 leading-relaxed">
          Up to 2x more Active Noise Cancellation than their predecessor.
          Control what you hear — and what you don't.
        </p>
      </TextOverlay>

      {/* Section 5: CTA (80% - 95%) */}
      <TextOverlay start={0.80} end={0.95}>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
          Magic like you've<br /> never heard.
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center pointer-events-auto">
          <button
            onClick={handleBuy}
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all"
          >
            Buy Now
          </button>
          <button className="px-8 py-4 text-blue-600 font-semibold text-lg hover:underline">
            Compare Models
          </button>
        </div>
      </TextOverlay>

      {/* Scroll Spacer to ensure we can scroll to the end */}
      <div className="h-screen w-full"></div>
    </main>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <PageContent />
    </CartProvider>
  );
}
