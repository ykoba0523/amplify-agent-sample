import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amplify Agent Sample',
  description: 'AI Chat Assistant powered by AWS Amplify',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
