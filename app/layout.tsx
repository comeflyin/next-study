import Script from "next/script";
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://lf3-cdn-tos.bytegoofy.com/obj/goofy/locl/lark/external_js_sdk/h5-js-sdk-1.2.17.js"
        strategy="beforeInteractive"
      />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
