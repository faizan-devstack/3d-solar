"use client";

import HeroSection from '@/components/hero';
import ContactSection from '@/components/contact';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pin = ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
      });

      gsap.to(contactRef.current, {
        y: "-100vh",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={heroRef} className="relative">
        <HeroSection />
        <div className="scroll-hint absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-background/10 backdrop-blur-md border border-foreground/20 animate-bounce">
              <ChevronDown className="w-8 h-8 text-foreground/80" />
            </div>
          </div>
        </div>
      </div>

      <div ref={contactRef} className="relative">
        <ContactSection />
      </div>
    </>
  );
}