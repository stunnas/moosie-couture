"use client";

import React, { useEffect, useState } from "react";

export const InfiniteProductCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  items: {
    image: string;
    alt?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current!.appendChild(duplicatedItem);
    });

    getDirection();
    getSpeed();
    setStart(true);
  }

  const getDirection = () => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );
  };

  const getSpeed = () => {
    if (!containerRef.current) return;

    const speeds = { fast: "20s", normal: "40s", slow: "80s" };
    containerRef.current.style.setProperty(
      "--animation-duration",
      speeds[speed],
    );
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-10 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${start && "animate-scroll"} ${pauseOnHover && "hover:[animation-play-state:paused]"} `}
      >
        {items.map((item, idx) => (
          <li
            className="size-24 md:size-28 lg:size-32 relative rounded-2xl flex-shrink-0 ring-1 ring-emerald-200 p-2"
            key={idx}
          >
            <img
              src={item.image}
              alt={item.alt || "Product"}
              className="w-full h-full object-cover rounded-lg"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
