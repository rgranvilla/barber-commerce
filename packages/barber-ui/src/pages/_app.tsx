/* eslint-disable react/jsx-no-undef */
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

import { SidePanel } from "../components/SidePanel";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="flex">
        <SidePanel />
        <main>
          <NextNProgress />
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
}
