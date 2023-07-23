import "@styles/globals.scss";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import Provider from "@components/Provider";
import { Suspense } from "react";

export const metadata = {
  title: "Asahm Cultural Product Marketplace",
  description:
    "Asahm Cultural Product Marketplace",
  twitter: {
    card: "summary_large_image",
    title: "Asham - Product Marketplace",
    description:
      "Asham is the all-in-one solution for Cultural product | Artifact.",
    creator: "@omishitu",
  },
  metadataBase: new URL("https://asham.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={cx(sfPro.variable, inter.variable)}>
          {/* <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" /> */}
          <div className='main'>
            <div className='gradient' />
          </div>
          <Suspense fallback="...">
            {/* Server Component */}
            {/* Nav */}
          </Suspense>
          <main className="app">
            <Nav />
            {children}
            <Footer />
          </main>
        </body>
      </Provider>
    </html>
  );
}
