import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Source_Serif_4, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const SITE_URL = 'https://haoranzhang.example'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Haoran Zhang — statistical physics of collective systems',
  description:
    'Haoran Zhang, independent researcher (Meta Sci). From agents to fields: field admissibility, stochastic microfoundations, finite-size effects, early warning, and timescale-constrained control in human–AI systems.',
  generator: 'v0.app',
  openGraph: {
    type: 'profile',
    title: 'Haoran Zhang — statistical physics of collective systems',
    description:
      'From agents to fields — when collective dynamics are real, observable, and controllable.',
    url: SITE_URL,
    siteName: 'Haoran Zhang',
  },
  twitter: {
    card: 'summary',
    title: 'Haoran Zhang — statistical physics of collective systems',
    description:
      'From agents to fields — when collective dynamics are real, observable, and controllable.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf7' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0c0c' },
  ],
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Haoran Zhang',
  jobTitle: 'Independent Researcher',
  affiliation: {
    '@type': 'Organization',
    name: 'Meta Sci',
    url: 'https://metasci.co',
  },
  url: SITE_URL,
  sameAs: [
    'https://orcid.org/0009-0002-5585-1104',
    'https://github.com/haoranzhang-research',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
