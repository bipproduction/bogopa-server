// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: ["200","300","400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  display: "fallback",
});

export const metadata = {
  
  title: 'BOGOPA',
  description: 'BOGOPA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body style={nunito.style}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}