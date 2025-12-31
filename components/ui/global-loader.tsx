"use client";

import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function GlobalLoader() {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setIsReady(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (isReady) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground">
      <p className="mb-6 text-2xl tracking-widest animate-pulse font-light">
        Loading {Math.round(progress)}%
      </p>
      <div className="w-80 h-1 bg-foreground/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-foreground transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}