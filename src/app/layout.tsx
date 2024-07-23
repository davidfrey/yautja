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
    <nav className="flex flex-wrap items-center justify-between bg-sky-800 p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <svg
          className="h-11 w-11 fill-current"
          width="60"
          height="60"
          viewBox="0 0 540 540"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M269.868,310.427c-14.046,-0.335 -32.129,-11.004 -49.483,-25.036c-15.076,-12.191 -26.662,-25.818 -37.785,-38.477c-6.281,-7.148 -18.784,-46.081 -16.816,-69.143c2.232,-26.135 51.58,-70.083 104.134,-71.854l0,-0.018c0.096,0.003 0.193,0.006 0.289,0.009c0.096,-0.003 0.193,-0.006 0.289,-0.009l-0,0.018c52.554,1.771 101.902,45.719 104.133,71.854c1.969,23.062 -10.534,61.995 -16.815,69.143c-11.123,12.659 -22.709,26.286 -37.785,38.477c-17.354,14.032 -35.437,24.701 -49.483,25.036c-0,0.005 -0,0.008 -0,0.008c-0.113,0 -0.226,-0 -0.339,-0.002c-0.113,0.002 -0.226,0.002 -0.339,0.002c0,0 0,-0.003 0,-0.008Zm-0.234,164.08c-14.972,-0.137 -29.725,-2.093 -33.547,-5.697c0.275,0.241 12.879,-120.277 12.32,-121.026c9.91,3.152 15.918,4.831 21.8,4.996c5.882,-0.165 11.89,-1.844 21.8,-4.996c-0.559,0.749 12.045,121.267 12.32,121.026c-3.822,3.604 -18.575,5.56 -33.547,5.697c-0,0.004 -0.001,0.007 -0.001,0.007c-0.191,-0.001 -0.381,-0.002 -0.572,-0.003c-0.191,0.001 -0.381,0.002 -0.572,0.003c-0,-0 -0.001,-0.003 -0.001,-0.007Zm0.179,-402.086l0,-0.001c0.132,-0 0.263,-0 0.394,0c0.131,-0 0.262,-0 0.393,-0l0,0.001c115.476,0.333 147.858,73.985 151.578,93.914c4.058,21.742 -31.173,48.687 -38.689,55.715c-6.41,5.994 -20.162,21.518 -20.162,21.518c0,0 13.885,-20.376 15.171,-52.998c6.275,-1.71 11.626,-5.129 11.228,-24.171c-0.396,-19.017 -33.093,-73.982 -119.519,-74.123c-86.426,0.141 -119.123,55.106 -119.52,74.123c-0.397,19.042 4.954,22.461 11.229,24.171c1.286,32.622 15.171,52.998 15.171,52.998c-0,0 -13.753,-15.524 -20.163,-21.518c-7.515,-7.028 -42.747,-33.973 -38.688,-55.715c3.72,-19.929 36.102,-93.581 151.577,-93.914Zm-90.779,219.343c0,0 34.903,25.773 51.916,40.419c-7.391,4.717 -20.166,6.239 -34.718,-8.343c-14.553,-14.582 -17.198,-32.076 -17.198,-32.076Zm183.853,0c0,0 -2.644,17.494 -17.197,32.076c-14.552,14.582 -27.327,13.06 -34.719,8.343c17.014,-14.646 51.916,-40.419 51.916,-40.419Zm-261.925,153.214c0,-0 -22.349,-38.72 -25.661,-104.934c-3.312,-66.213 30.037,-136.071 40.543,-157.26c5.647,19.011 22.489,30.126 22.489,30.126c-0,-0 -48.015,79.926 -47.89,130.419c0.124,50.493 10.519,101.649 10.519,101.649Zm40.078,-228.791c11.459,7.453 15.665,14.471 15.665,14.471c-0,-0 -2.276,23.725 34.64,63.868c-33.84,-19.415 -51.823,-46.318 -51.823,-46.318c-0,-0 -9.93,-15.776 1.518,-32.021Zm-10.574,32.042c0,0 7.046,17.498 14.737,23.607c-1.153,19.324 -16.506,43.862 -21.654,92.334c-5.149,48.473 7.215,108.368 7.215,108.368c-0,0 -24.254,-52.081 -19.751,-135.701c2.153,-39.998 19.453,-88.608 19.453,-88.608Zm15.443,60.174c0,-0 9.046,18.888 8.784,28.978c-0.369,14.196 -6.832,23.095 -10.996,56.196c-4.165,33.102 7.947,78.887 7.947,78.887c0,-0 -20.025,-48.058 -18.39,-93.213c1.635,-45.154 12.655,-70.848 12.655,-70.848Zm4.222,101.346l4.6,-13.271c0,0 4.786,15.765 13.639,36.031c3.979,9.11 20.563,38.24 20.563,38.24c-0,-0 -22.296,-25.306 -27.35,-34.05c-11.029,-19.085 -11.452,-26.95 -11.452,-26.95Zm118.034,-67.866c-67.595,-20.144 -111.588,-99.055 -108.037,-110.673c51.233,59.751 93.596,81.162 108.08,84.609c2.321,15.449 0.114,26.111 -0.043,26.064Zm-100.967,27.805c12.172,18.509 48.325,23.041 60.544,40.67c8.219,11.858 -0.925,67.355 -0.934,67.315c-5.004,-22.738 -27.352,-54.254 -60.305,-79.696c-3.647,-12.978 0.618,-28.406 0.695,-28.289Zm1.916,-18.604c23.898,15.367 59.693,23.351 66.548,46.174c0.037,0.124 -0.799,13.657 -2.812,20.259c-1.012,-25.92 -56.755,-32.569 -64.605,-50.959c0.358,-3.507 0.857,-9.617 0.869,-15.474Zm-14.662,-69.82c35.37,70.567 85.308,65.958 85.308,65.958c0,-0 3.548,1.585 -3.088,45.158c-2.258,-16.707 -38.841,-28.647 -67.34,-45.017c0.982,-13.667 -0.889,-21.772 -14.88,-66.099Zm285,163.714c-0,-0 10.395,-51.156 10.519,-101.649c0.125,-50.493 -47.89,-130.419 -47.89,-130.419c0,-0 16.842,-11.115 22.489,-30.126c10.506,21.189 43.855,91.047 40.543,157.26c-3.312,66.214 -25.661,104.934 -25.661,104.934Zm-40.078,-228.791c11.448,16.245 1.518,32.021 1.518,32.021c0,-0 -17.983,26.903 -51.823,46.318c36.915,-40.143 34.64,-63.868 34.64,-63.868c0,-0 4.206,-7.018 15.665,-14.471Zm10.573,32.042c0,0 17.301,48.61 19.454,88.608c4.503,83.62 -19.751,135.701 -19.751,135.701c0,0 12.364,-59.895 7.215,-108.368c-5.148,-48.472 -20.501,-73.01 -21.654,-92.334c7.691,-6.109 14.736,-23.607 14.736,-23.607Zm-15.442,60.174c-0,-0 11.019,25.694 12.655,70.848c1.635,45.155 -18.39,93.213 -18.39,93.213c-0,-0 12.112,-45.785 7.947,-78.887c-4.164,-33.101 -10.627,-42 -10.996,-56.196c-0.262,-10.09 8.784,-28.978 8.784,-28.978Zm-4.223,101.346c0,0 -0.422,7.865 -11.451,26.95c-5.054,8.744 -27.35,34.05 -27.35,34.05c0,-0 16.583,-29.13 20.563,-38.24c8.853,-20.266 13.639,-36.031 13.639,-36.031l4.599,13.271Zm-118.034,-67.866c-0.156,0.047 -2.363,-10.615 -0.043,-26.064c14.485,-3.447 56.848,-24.858 108.08,-84.609c3.552,11.618 -40.441,90.529 -108.037,110.673Zm100.968,27.805c0.077,-0.117 4.342,15.311 0.695,28.289c-32.953,25.442 -55.301,56.958 -60.305,79.696c-0.009,0.04 -9.153,-55.457 -0.934,-67.315c12.219,-17.629 48.372,-22.161 60.544,-40.67Zm-1.917,-18.604c0.013,5.857 0.512,11.967 0.869,15.474c-7.849,18.39 -63.593,25.039 -64.604,50.959c-2.013,-6.602 -2.849,-20.135 -2.812,-20.259c6.855,-22.823 42.65,-30.807 66.547,-46.174Zm14.663,-69.82c-13.991,44.327 -15.862,52.432 -14.88,66.099c-28.499,16.37 -65.082,28.31 -67.34,45.017c-6.636,-43.573 -3.088,-45.158 -3.088,-45.158c-0,-0 49.937,4.609 85.308,-65.958Z" />
          <g id="Layer1"></g>
        </svg>

        <span className="text-xl font-semibold tracking-tight">
          Yautja Planner
        </span>
      </div>

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
