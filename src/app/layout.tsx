import { Metadata, Viewport } from "next";
import { Slide, ToastContainer } from "react-toastify";
import {
  Bitcount_Prop_Single,
  Source_Code_Pro,
  Noto_Sans,
} from "next/font/google";
import NavBar from "./components/NavBar";
import { SiteProvider } from "./components/contexts/SiteContext";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

// font stuff
const font_BitcountPropSingle = Bitcount_Prop_Single({
  subsets: ["latin"],
  variable: "--font-bitcount",
  display: "swap",
  fallback: ["Arial"],
});
const font_SourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  display: "swap",
  fallback: ["Courier New", "Courier"],
});
const font_NotoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
  fallback: ["Arial"],
});

// Font files can be colocated inside of `app`
// const font_dlfont = localFont({
//   src: './style/fonts/dlfont.css',
//   display: 'swap',
// })

export const metadata: Metadata = {
  metadataBase: new URL("https://userbyte.xyz"),
  title: "userbyte.xyz",
  description: "home of all things userbyte",
  keywords: ["userbyte", "userbyte.xyz", "developer", "personal"],
  manifest: "/pwa/manifest.json",
  icons: {
    icon: "/img/svg/userbyte.svg",
    shortcut: "/img/svg/userbyte.svg",
    apple: "/img/png/userbyte.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/img/png/userbyte.png",
    },
  },
  openGraph: {
    siteName: "userbyte.xyz",
    images: "/img/png/userbyte.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#1f4b24",
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${font_BitcountPropSingle.variable} ${font_SourceCodePro.variable} ${font_NotoSans.variable}`}
    >
      <body>
        <Header />
        <SiteProvider>{children}</SiteProvider>
        <ToastContainer
          position="bottom-center"
          theme="dark"
          closeOnClick={true}
          transition={Slide}
        />
      </body>
    </html>
  );
}
