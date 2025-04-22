'use client';

import { motion } from 'motion/react';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-8xl font-bold">deck
        <motion.span
          animate={{ opacity: [1, 1, 0, 0, 1] }}
          transition={{
          repeat: Infinity,
          duration: 1.0,
          times: [0, 0.7, 0.8, 0.9, 1],
          }}
        >.</motion.span>
      </h1>
      <div className="flex justify-center text-center">
        <p className="text-fd-muted-foreground w-xs">
          Beautiful presentation generation framework for designers and engineers.
        </p>
      </div>
      <div className="flex flex-row m-10 justify-center text-center">
        <span className="text-fd-muted-foreground rounded-full bg-slate-800 px-3 py-1 text-sm/6 font-semibold text-slate-100 ring-1 ring-slate-100 ring-inset">
          Coming soon
        </span>
      </div>
    </main>
  );
}
