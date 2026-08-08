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

const SITE_URL = 'https://haoranzhang-research.github.io'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Haoran Zhang — from agents to fields',
  description:
    'Haoran Zhang is an independent researcher at Meta Sci studying empirical field admissibility, stochastic agent-to-field closure, finite-size early-warning limits, and collective-system control.',
  alternates: {
    canonical: SITE_URL,
  },
  generator: 'v0.app',
  openGraph: {
    type: 'profile',
    title: 'Haoran Zhang — from agents to fields',
    description:
      'Empirical admissibility, stochastic closure, finite-size monitoring, and collective-system control.',
    url: SITE_URL,
    siteName: 'Haoran Zhang',
  },
  twitter: {
    card: 'summary',
    title: 'Haoran Zhang — from agents to fields',
    description:
      'Empirical admissibility, stochastic closure, finite-size monitoring, and collective-system control.',
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
