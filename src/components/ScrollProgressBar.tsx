import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    // Smooth scroll progress animation with GSAP ScrollTrigger
    const st = ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        gsap.to(el, {
          scaleX: self.progress,
          transformOrigin: 'left center',
          duration: 0.1,
          ease: 'none'
        });
      }
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-[#001752] via-[#C41E1E] to-[#DF8383] scale-x-0 shadow-xs"
        style={{ transformOrigin: 'left center' }}
      />
    </div>
  );
}
