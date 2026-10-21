"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        hidden
        h-6
        w-6
        rounded-full
        border-2
        border-white
        bg-black/20
        shadow-[0_0_0_1px_rgba(0,0,0,0.5)]
        md:block
      "
      style={{
        transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0)`,
      }}
    />
  );
}