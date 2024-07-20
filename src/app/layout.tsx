import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Yautja",
  description: "When you need to find the perfect job",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex items-center justify-between flex-wrap gap-x-4 gap-y-2 p-4">
      <a href="/" className="text-xl font-bold">
        Yautja
      </a>
      <div><a href="">Sign In</a></div>
      <div className="block lg:hidden">
        <button className="flex items-center rounded border border-sky-400 px-3 py-2 text-sky-200 hover:border-white hover:text-white">
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="block hidden w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            className="mr-4 block text-sky-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Dashboard
          </a>
          <a
            href="/"
            className="block text-sky-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Opportunities
          </a>
        </div>
        <div>
          <div className="text-xs">
            <a
              href="/"
              className="block text-sky-200 hover:text-white lg:inline-block"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <TopNav />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
