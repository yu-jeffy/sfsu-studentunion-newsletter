export const metadata = {
    title: 'SFSU Student Union',
    description: 'Student Union Organization at San Francisco State University',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }