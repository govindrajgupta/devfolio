import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "400", "700", '900'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/" sizes="any" />
      </head>
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}


// Change this data with your own 🤭
export const metadata: Metadata = {
  title: {
    default: 'Govind ✷ Portfolio',
    template: '%s - Govind Raj Gupta',
  },
  description:"I'm a Full Stack Developer, I love to build things that make a difference.",
  icons: {
    icon: './favicon.ico',
  },
  applicationName: 'Frontend Portfolio Template by Govind Raj Gupta',
  authors: [
    {
      name: 'Goviind Raj Gupta',
      url: 'https://www.linkedin.com/in/govind-raj-gupta/',
    },
  ],
  generator: 'Next.js',
  referrer: 'origin',
  themeColor: '#120012',
  colorScheme: 'dark',
  viewport: 'width=device-width, initial-scale=1',
};
