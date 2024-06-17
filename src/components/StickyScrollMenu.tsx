'use client'
import React from 'react'
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const whyChooseUsData = [
  {
    title: "Unmatched Experience",
    description: "With over 20 years in the industry, we bring a wealth of knowledge and expertise to every project. Our team of certified professionals is dedicated to delivering top-notch solutions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Customer Satisfaction",
    description: "We pride ourselves on our 98% customer satisfaction rate, backed by thousands of positive reviews. Our commitment to excellence ensures that our customers are always happy.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Quality and Innovation",
    description: "Utilizing the latest technologies and highest-quality materials, we provide innovative solutions that stand the test of time. Our products are designed for durability and performance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Affordable Pricing",
    description: "We offer competitive pricing without compromising on quality. Our value-for-money approach means you get the best services at the best prices, with no hidden costs.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Exceptional Support",
    description: "Our customer support team is available 24/7 to assist you with any inquiries or issues. We believe in providing comprehensive support to ensure your satisfaction.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Proven Track Record",
    description: "We have successfully completed over 500 projects, earning the trust and loyalty of our clients. Our track record speaks for itself, showcasing our ability to deliver outstanding results.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
];



function StickyScrollMenu() {
  return (
    <div className="p-10">
    <StickyScroll content={whyChooseUsData} />
  </div>
  )
}

export default StickyScrollMenu
