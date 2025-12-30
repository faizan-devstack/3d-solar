"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextLinesProps {
  text: string;
  className?: string;
}

export const AnimatedTextLines = ({ text, className }: AnimatedTextLinesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const lines = text.split("\n").filter((line) => line.trim() !== "");

  useGSAP(() => {
    const validLines = lineRefs.current.filter((el): el is HTMLSpanElement => el !== null);

    if (validLines.length > 0) {
      gsap.from(validLines, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          ref={(el) => {
            lineRefs.current[index] = el;
          }}
          className="block leading-relaxed tracking-wide text- overflow-hidden"
        >
          {/* Optional wrapper for smoother animation */}
          <span className="block">{line}</span>
        </span>
      ))}
    </div>
  );
};