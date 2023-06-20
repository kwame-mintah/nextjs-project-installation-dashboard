import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next Layout Example</title>
      </head>
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/projects">Games</Link>
            <Link href="/user">Games</Link>
            <Link href="/settings">Games</Link>
          </nav>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
