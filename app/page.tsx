import type { Metadata } from 'next'
import { ThemeToggle } from '@/components/theme-toggle'

export const metadata: Metadata = {
  title: 'Haoran Zhang — statistical physics of collective silence',
}

const links = [
  { label: 'email', href: 'mailto:haoranzhang.cmplx@proton.me' },
  { label: 'ORCID', href: 'https://orcid.org/0009-0002-5585-1104' },
  { label: 'GitHub', href: 'https://github.com/haoranzhang-research' },
]

const questions = [
  {
    label: 'Mechanism',
    q: 'Do coordinated withdrawals in markets, compute supply, and AI agent collectives share one propagation mechanism?',
  },
  {
    label: 'Legitimacy',
    q: 'When is a phenomenological field equation the controlled limit of its underlying stochastic agents, and where does it fail?',
  },
  {
    label: 'Observability',
    q: 'Which early-warning signals remain faithful to a coarse-grained observer, and which fail silently near the transition?',
  },
  {
    label: 'Controllability',
    q: 'Given the mechanism and trustworthy instruments, what is the minimal intervention that steers a system away from criticality?',
  },
  {
    label: 'Human primacy as a constraint',
    q: 'What does optimal intervention look like when critical control variables must remain on human timescales?',
  },
]

const publications = [
  {
    title:
      'Early Warning of Financial Crises Through Critical Field Dynamics: A Nonlocal Trend-Inhibition Delay Equation Framework',
    titleHref: 'https://doi.org/10.1016/j.physa.2025.131161',
    venue: 'Physica A 682 (2026) 131161',
    status: 'published',
    links: [
      { label: 'doi', text: '10.1016/j.physa.2025.131161', href: 'https://doi.org/10.1016/j.physa.2025.131161' },
      { label: 'code', text: 'doi.org/10.5281/zenodo.20746031', href: 'https://doi.org/10.5281/zenodo.20746031' },
    ],
    notes: [
      'Formulated the Nonlocal Trend-Inhibition Delay Equation (NTIDE) framework by extending the Ginzburg–Landau / Allen–Cahn family with nonlocal coupling, trend-sensitive inhibition, and heterogeneous delays.',
      'Derived an interpretable stability margin and propagation-aware hazard score, and evaluated the framework under a causal protocol across seven crisis episodes.',
      'Tested model-implied predictions including the front-velocity scaling law c ∝ √D and convergence of independent critical indicators near a common threshold.',
    ],
  },
  {
    title:
      'When Does a Nonlocal Delayed Field Model Follow from Stochastic Agents? A Transferable Closure and Its Validity Map',
    titleHref: 'https://doi.org/10.5281/zenodo.21010527',
    venue: 'Submitted to Physical Review E',
    status: 'submitted',
    links: [
      { label: 'code', text: 'doi.org/10.5281/zenodo.21010527', href: 'https://doi.org/10.5281/zenodo.21010527' },
    ],
    notes: [
      'Derives a single dispersion relation for a delimited class of binary agent models and charts a quantitative validity map — including a monitoring-validity boundary δ* ~ (NK)^(−1/2) separating trustworthy from silently-failing early-warning signals.',
    ],
  },
  {
    title: 'Supply-Side Silence Waves in Decentralized Compute Markets',
    titleHref: null,
    venue: 'In preparation',
    status: 'in prep',
    links: [],
    notes: [],
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs tracking-widest text-ink-soft uppercase">
      {children}
    </h2>
  )
}

export default function Page() {
  return (
    <main className="mx-auto max-w-[68ch] px-6 py-16 sm:py-24">
      {/* ── Header ───────────────────────────────── */}
      <header className="relative">
        {/* single decorative damped-oscillation curve, ~10% opacity */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 right-0 h-24 w-56 opacity-10"
          viewBox="0 0 224 96"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            className="curve-line"
            style={{ ['--curve-len' as string]: '460' }}
            d="M0 48 C 10 8, 22 8, 32 48 S 54 88, 64 48 S 86 18, 96 48 S 118 78, 128 48 S 150 30, 160 48 S 182 66, 192 48 S 214 42, 224 48"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>

        <div className="flex items-start justify-between gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Haoran Zhang
          </h1>
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>

        <p className="mt-3 font-mono text-sm text-ink-soft">
          Independent researcher ·{' '}
          <a
            href="https://metasci.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            Meta Sci
          </a>{' '}
          · Shenzhen / Hong Kong
        </p>
        <p className="mt-2 font-serif text-lg italic text-pretty">
          The statistical physics of collective silence — how coordinated
          withdrawal emerges, propagates, and can be detected before collapse.
        </p>
        <p className="mt-4 font-mono text-sm text-ink-soft">
          <span className="text-ink">c ∝ √D</span>
        </p>

        <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-accent underline-offset-4 hover:underline"
              {...(l.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              [{l.label}]
            </a>
          ))}
        </nav>
      </header>

      <hr className="my-12 border-0 border-t border-rule" />

      {/* ── §1 RESEARCH ──────────────────────────── */}
      <section>
        <SectionLabel>§1 Research</SectionLabel>
        <p className="mt-4">
          My work sits at the intersection of{' '}
          <strong className="font-semibold">statistical physics</strong>,{' '}
          <strong className="font-semibold">systemic risk</strong>, and the{' '}
          <strong className="font-semibold">
            governance of multi-agent systems
          </strong>
          . The central hypothesis: systemic risk in human–AI hybrid systems is
          driven by spatiotemporal mismatch × nonlocal coupling × reflexive
          feedback — not by the failure of any individual agent.
        </p>

        <p className="mt-4 font-mono text-sm text-ink-soft">
          Five questions organize the program:
        </p>

        <ol className="mt-4 space-y-3">
          {questions.map((item, i) => (
            <li key={item.label} className="flex gap-3">
              <span className="font-mono text-sm text-ink-soft select-none">
                {i + 1}.
              </span>
              <span>
                <strong className="font-semibold">{item.label}</strong>
                {' — '}
                {item.q}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-6 font-mono text-sm text-ink-soft">
          Questions 1–3 have published or submitted results; 4–5 are the road
          ahead.
        </p>
      </section>

      <hr className="my-12 border-0 border-t border-rule" />

      {/* ── §2 PUBLICATIONS ──────────────────────── */}
      <section>
        <SectionLabel>§2 Publications</SectionLabel>
        <ul className="mt-6 space-y-8">
          {publications.map((p, i) => (
            <li key={i}>
              {p.titleHref ? (
                <a
                  href={p.titleHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium leading-snug text-accent underline-offset-4 hover:underline"
                >
                  {p.title}
                </a>
              ) : (
                <span className="text-lg font-medium leading-snug">
                  {p.title}
                </span>
              )}
              <div className="mt-1 flex flex-wrap items-center gap-x-3 font-mono text-sm text-ink-soft">
                <span>{p.venue}</span>
                <span
                  className={
                    p.status === 'published' ? 'text-accent' : 'text-ink'
                  }
                >
                  [{p.status}]
                </span>
              </div>
              {p.links.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-x-3 font-mono text-sm">
                  {p.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      {link.label}: {link.text}
                    </a>
                  ))}
                </div>
              )}
              {p.notes.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {p.notes.map((n, j) => (
                    <li key={j} className="flex gap-3 text-ink-soft">
                      <span
                        aria-hidden="true"
                        className="font-mono text-accent select-none"
                      >
                        ·
                      </span>
                      <span className="text-pretty">{n}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>

      <hr className="my-12 border-0 border-t border-rule" />

      {/* ── §3 ABOUT ─────────────────────────────── */}
      <section>
        <SectionLabel>§3 About</SectionLabel>
        <p className="mt-4">
          I am an independent researcher working on nonequilibrium field
          dynamics of collective behavior. My path is unconventional: a
          security-engineering background (Tencent; national CTF champion),
          several years building multi-agent digital systems, and self-directed
          training in stochastic processes, PDEs, and statistical mechanics —
          which converged into a sustained research program on how populations
          of interacting agents destabilize, and how a supervisor watching only
          aggregate signals can see it coming. I publish as sole author under{' '}
          <a
            href="https://metasci.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent underline-offset-4 hover:underline"
          >
            Meta Sci
          </a>
          , the research studio I founded, and release reproduction code with
          every result.
        </p>
      </section>
    </main>
  )
}
