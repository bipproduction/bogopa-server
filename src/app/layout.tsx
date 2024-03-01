// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import "@mantine/dates/styles.css";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Nunito, Roboto } from "next/font/google";
import 'react-simple-toasts/dist/theme/dark.css'
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';


const nunito = Nunito({
  weight: ["300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  display: "fallback",
});

const roboto = Roboto({
  weight: ["500"],
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
      <body style={roboto.style} >
        <MantineProvider> <Notifications position='top-right' zIndex={1000} />{children}</MantineProvider>
      </body>
    </html>
  );
}