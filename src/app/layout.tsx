
type CompProps = { children: React.ReactNode };

export default function RootLayout({ children }: CompProps) {
  return (
    <html lang='es'>
      <head />
      <body>{children}</body>
    </html>
  )
}
