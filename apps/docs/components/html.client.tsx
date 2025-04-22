'use client';

import { FC, ReactNode } from 'react';
import { fontClassName } from '@/components/fonts';
import { cn } from '@/lib/utils';

export const Html: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html
      className={cn(fontClassName, 'antialiased')}
      dir="ltr"
      lang="en"
      suppressHydrationWarning
    >
      {children}
    </html>
  );
};