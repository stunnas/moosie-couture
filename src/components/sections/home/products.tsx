"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { shuffleArray } from "@/functions/shuffle";
import products, { Product } from "@/components/data/products";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProductsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.75 } },
  };

  const [shuffledProducts, setShuffledProducts] = useState<Product[]>([]);
  // Shuffle products on component mount
  useEffect(() => {
    const shuffled = shuffleArray(products);
    setShuffledProducts(shuffled.slice(0, 8));
  }, []);

  const cardContentStyle = {
    title: { minHeight: "3em" },
    typePrice: { minHeight: "3em" },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full min-h-screen flex flex-row items-center justify-center border py-12 md:py-24 lg:py-32"
    >
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Discover Our Products
            </h2>
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {shuffledProducts.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-lg border-2"
              style={{ minHeight: "100%" }}
            >
              <Link href={product.etsyUrl} className="absolute inset-0 z-10">
                <span className="sr-only">View details of {product.name}</span>
              </Link>
              <img
                alt={product.name}
                className="object-cover w-full h-60"
                src={product.imageUrl}
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                height={300}
                width={400}
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3
                  className="font-semibold text-lg md:text-xl"
                  style={cardContentStyle.title}
                >
                  {product.name}
                </h3>
                <p
                  className="text-sm text-gray-500 dark:text-gray-400"
                  style={cardContentStyle.typePrice}
                >
                  {product.type}
                </p>
                <h4 className="font-semibold text-base md:text-lg">
                  {`$${product.minPrice.toFixed(2)} ${product.maxPrice ? `- $${product.maxPrice.toFixed(2)}` : ""}`}
                </h4>
                <Button className="mt-2" size="sm">
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
