"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import testimonials, { Testimonial } from "@/components/data/testimonials";
import { InfiniteTestimonialCards } from "@/components/ui/infinite-testimonial-cards";

export default function TestimonialsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Hear from our satisfied customers who love their Moosie Couture
            products!
          </p>
        </div>
        <InfiniteTestimonialCards
          items={testimonials}
          direction="left"
          speed="slow"
          pauseOnHover={false}
          className="mt-8"
        />
      </div>
    </motion.section>
  );
}
