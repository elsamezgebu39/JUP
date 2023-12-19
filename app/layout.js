import "@app/styles/globals.scss";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
// import Provider from "@components/Provider";
import ReactQueryProvider from "@components/Provider/ReactQueryProvider";
import SessionProvider from "@components/Provider/SessionProvider";
import { Suspense } from "react";

export const metadata = {
  title: "Asahm Cultural Product Marketplace",
  description: "Asahm Cultural Product Marketplace",
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

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
      </head>

      <body className={cx(sfPro.variable, inter.variable)}>
        {/* <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" /> */}
        <div className="main">
          <div className="gradient" />
        </div>
        <ReactQueryProvider>
          <SessionProvider>
            <main className="">
              <div className="bg-red-500">
                <Nav />
              </div>
              <div className="flex-grow">{children}</div>
              <Footer />
            </main>
          </SessionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
