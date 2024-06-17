"use client"
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

const testimonials = [
    {
      quote:
        "This company exceeded my expectations in every way. Their attention to detail and customer service is top-notch. Highly recommend!",
      name: "John Doe",
      title: "CEO, Tech Innovations",
    },
    {
      quote:
        "Outstanding experience from start to finish. The team was professional, knowledgeable, and committed to delivering quality work.",
      name: "Jane Smith",
      title: "Marketing Director, Creative Solutions",
    },
    {
      quote:
        "I've worked with many vendors, but this company stands out for their dedication and excellence. They truly care about their clients.",
      name: "Sam Wilson",
      title: "Project Manager, BuildRight Construction",
    },
    {
      quote:
        "Their innovative approach and keen understanding of our needs resulted in a product that exceeded our expectations. Fantastic work!",
      name: "Emily Davis",
      title: "Product Manager, FutureTech",
    },
    {
      quote:
        "Prompt, professional, and proficient. They delivered on time and went above and beyond to ensure our satisfaction. A pleasure to work with.",
      name: "Michael Brown",
      title: "Operations Head, Green Energy Corp",
    },
    {
      quote:
        "Their customer support is unparalleled. They were there for us every step of the way, ensuring a smooth and successful project.",
      name: "Sarah Johnson",
      title: "Head of Customer Success, Retail Solutions",
    },
  ];
  

function MovingCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
  />
        </div>
    </div>
</div>
  )
}

export default MovingCards
