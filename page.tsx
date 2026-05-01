import {HeroSlider} from '@/components/sections/HeroSlider';
import {ProductsGrid} from '@/components/sections/ProductsGrid';
import {ServicesSection} from '@/components/sections/ServicesSection';
import {GlobalReach} from '@/components/sections/GlobalReach';
import {AISelectorTool} from '@/components/sections/AISelectorTool';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import {ShieldCheck, Clock, Zap, Star} from 'lucide-react';

const stats = [
  {icon: Star, title: 'High Quality', desc: 'Sourced from premium mines and mills worldwide.'},
  {icon: Clock, title: 'Fast Delivery', desc: 'Optimized logistics for timely bulk arrivals.'},
  {icon: Zap, title: 'Bulk Supply', desc: 'Capacity to handle massive industrial volume.'},
  {icon: ShieldCheck, title: 'Trusted Partner', desc: 'Transparent dealings with global institutions.'}
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      
      {/* About Preview */}
      <section className="section-spacing bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h3 className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm">Our Legacy</h3>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-brand-greyDark leading-tight">
            Defined by Trust, Driven by Excellence.
          </h2>
          <p className="text-brand-greyDark/60 leading-relaxed text-lg">
            SREE RECORRA PINNACLE TRADING LLP is not just a trading house; we are an operational backbone for global industries. We combine deep market intelligence with a world-class logistics network to deliver industrial resilience to our partners worldwide.
          </p>
          <div className="pt-6">
            <Button asChild variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-greyDark rounded-none px-12 py-8 text-lg font-bold">
              <Link href="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <ProductsGrid />
      <ServicesSection />
      <AISelectorTool />
      <GlobalReach />

      {/* Why Choose Us */}
      <section className="section-spacing bg-brand-greyDark text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-4 text-center md:text-left">
                <stat.icon className="text-brand-gold mx-auto md:mx-0" size={48} />
                <h4 className="font-headline text-2xl font-bold">{stat.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-gold">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tight">
            Ready for a Quote?
          </h2>
          <p className="text-white/80 text-xl font-light">
            Get precision pricing within 10–15 minutes on WhatsApp or through our secure form.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button asChild size="lg" className="bg-brand-greyDark hover:bg-black text-white px-12 py-10 text-xl font-bold rounded-none shadow-2xl">
              <Link href="https://wa.me/919133371000">WHATSAPP US NOW</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-brand-greyDark text-brand-greyDark hover:bg-brand-greyDark hover:text-white px-12 py-10 text-xl font-bold rounded-none shadow-2xl">
              <Link href="/quote">SECURE REQUEST FORM</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}