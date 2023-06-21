import { Copyright } from './components/copyright';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Automated Dashboard</title>
      </head>
      <body>
        <main>{children}</main>
        <Copyright />
      </body>
    </html>
  );
}
