import { type ReactNode } from 'react';
import { Outlet, createRootRoute, HeadContent } from '@tanstack/react-router';
import { RootProvider } from 'deck-ui/provider/base';
import appCss from '../app.css?url';
import { TanstackProvider } from 'deck-core/framework/tanstack';
import { Scripts } from '@tanstack/react-router';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'deck on TanStack Start',
      },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <TanstackProvider>
          <RootProvider>{children}</RootProvider>
        </TanstackProvider>
        <Scripts />
      </body>
    </html>
  );
}
