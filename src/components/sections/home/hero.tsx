"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { InfiniteProductCards } from "@/components/ui/infinite-product-cards";
import products from "@/components/data/products";
import { shuffleArray } from "@/functions/shuffle";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type ProductArray = {
  image: string;
  alt: string;
}[][];

export default function HeroSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const [shuffledProductArrays, setShuffledProductArrays] =
    useState<ProductArray>([]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }

    const generateShuffledProductArrays = (count: number) => {
      return Array.from({ length: count }, () =>
        shuffleArray(products).map((product) => ({
          image: product.imageUrl,
          alt: product.name,
        })),
      );
    };

    // Set the shuffled product arrays after component mounts
    setShuffledProductArrays(generateShuffledProductArrays(6));
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="w-full min-h-screen relative flex items-center justify-center p-12 border-y mt-14 bg-black"
    >
      <div className="px-4 md:px-6 z-40">
        <div className="grid max-w-screen p-8 space-y-4 bg-white shadow-xl ring-4 ring-emerald-200 rounded-xl border">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Moosie Couture for Every Occasion
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="text-gray-500 text-sm">
              Discover our collection of unique, hand-crafted, animal-themed
              products that will bring a touch of cuteness to your daily
              routine.
            </p>
            <div className="w-full flex flex-row justify-between items-end">
              <div className="flex items-center justify-center space-x-2">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                  href="#"
                >
                  Browse
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                  href="#"
                >
                  Go to Etsy
                </Link>
              </div>
              <Image
                width={200}
                height={200}
                alt="Moosie Couture"
                src="/main/MoosieCouture.webp"
                className="hidden md:block md:size-24"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center absolute top-0 right-0 overflow-hidden">
        {shuffledProductArrays.map((shuffledProducts, index) => (
          <InfiniteProductCards
            key={index}
            items={shuffledProducts}
            speed="slow"
            direction={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </motion.section>
  );
}
