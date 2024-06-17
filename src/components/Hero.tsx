"use Client"

import React from 'react'
import Link from 'next/link';
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";


function Hero() {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex 
    flex-col items-center justify-center relative 
    overflow-hidden mx-auto py-10 md:py-0'
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className='p-4 relative w-full text-center'>
                <h1
                    className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text 
            text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >Master the art of music</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    Mastering the art of music is a journey of relentless passion and dedication.
                    It demands not only technical prowess and an understanding of theory but also an
                    emotional connection that breathes life into every note. This mastery involves
                    continual learning, experimentation, and the courage to express one's unique voice.
                </p>

                <div className='mt-4'>
                    <Link href={"/courses"}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Explore Courses
                        </Button>

                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Hero
