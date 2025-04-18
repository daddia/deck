'use client';

import { motion } from "motion/react";

export default function Page() {
  return (
    <main className="grid min-h-full place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div>
            <p className="text-base text-sm font-light text-gray-400">COMING SOON</p>
          </div>
          <div>
          <h1 className="mt-4 text-8xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            deck<motion.span
              animate={{ opacity: [1, 1, 0, 0, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.1,
                times: [0, 0.7, 0.8, 0.9, 1]
              }}
            >.</motion.span>
          </h1>
          </div>
          <div className="deck-hero-text w-[350px] mx-auto">
          <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Beautiful presentations for designers and engineers.
          </p>
          </div>
        </div>
      </main>
  );
}
