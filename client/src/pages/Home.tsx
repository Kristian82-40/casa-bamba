import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Offer } from '@/components/Offer';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

/**
 * Casa Bamba - Home Page
 * 
 * Design Philosophy: Bohemian Artisan Warmth
 * - Authentic, hand-crafted aesthetic
 * - Warm, inviting color palette (earth browns, vibrant oranges, yellows, greens, blues)
 * - Organic, flowing layout with asymmetric design
 * - Smooth transitions and micro-interactions
 * - Bilingual support (Spanish/English)
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Offer />
      <Contact />
      <Footer />
    </div>
  );
}
