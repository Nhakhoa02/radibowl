import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam"
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  style: ["normal", "italic"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: 'RediBowl VN - Nhà cung cấp gói ăn healthy lớn nhất Saigon',
  description: 'Giải pháp HEALTHY FOOD giao tận nơi. Kế hoạch bữa ăn hàng tuần cho một lối sống lành mạnh.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/new_logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/new_logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/new_logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/new_logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${beVietnamPro.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
