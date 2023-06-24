

export const metadata = {
  title: 'Login Page'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="box-border bg-slate-400 w-full h-full ">{children}</body>
    </html>
  )
}
