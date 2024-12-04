import { Inter } from 'next/font/google'
import { i18n } from '@/i18n-config'
import { Locale } from '@/i18n-config'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getDictionary } from '@/lib/dictionary'
import '../globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang)

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={cn(
        inter.variable,
        'font-sans antialiased'
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header lang={params.lang} dictionary={dictionary} />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer lang={params.lang} dictionary={dictionary} />
        </ThemeProvider>
      </body>
    </html>
  )
}