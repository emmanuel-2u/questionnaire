import { Open_Sans, Roboto_Condensed } from "next/font/google";
import Script from "next/script";
import "bulma/css/bulma.min.css";

import "./globals.css";

const sans = Open_Sans({ subsets: ["cyrillic"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Breast Cancer Prediction</title>
        <Script src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></Script>
      </head>
      <body className={sans.className}>{children}</body>
    </html>
  );
}
