'use client';

import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { Copyright } from './components/copyright';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CssBaseline enableColorScheme={true} />
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="./favicon.ico" />
          <title>Automated Dashboard</title>
        </head>
        <body>
          <main>{children}</main>
          <Copyright />
        </body>
      </html>
    </>
  );
}
