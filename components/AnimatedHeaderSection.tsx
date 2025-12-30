"use client";

import { useRef } from "react";
import { AnimatedTextLines } from "./AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface AnimatedHeaderSectionProps {
  subTitle: string;
  title: string;
  text: string;
  textColor: string;
  withScrollTrigger?: boolean;
}

const AnimatedHeaderSection: React.FC<AnimatedHeaderSectionProps> = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const shouldSplitTitle = title.includes(" ");
  const titleParts = shouldSplitTitle ? title.split(" ") : [title];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? { trigger: contextRef.current }
        : undefined,
    });
    tl.from(contextRef.current, {
      y: "60vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);

  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
        >
          <p
            className={`text-sm font-light tracking-[0.2rem] uppercase px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          <div className="px-10">
            <h1
              className={`flex flex-col text-xl gap-12 tracking-wide uppercase sm:gap-16 md:block ${textColor}`}
            >
              {titleParts.map((part, index) => (
                <span key={index}>{part} </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2 border-canvas-border/70" />
        <div className="text-end">
          <AnimatedTextLines
            text={text}
            className={`uppercase text-sm text-gray-200/70 value-text-responsive ${textColor}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;