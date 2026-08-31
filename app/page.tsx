import type { Metadata } from 'next'
import { ThemeToggle } from '@/components/theme-toggle'

export const metadata: Metadata = {
  title: 'Haoran Zhang — learning dynamics',
}

const links = [
  { label: 'email', href: 'mailto:haoranzhang.cmplx@proton.me' },
  { label: 'ORCID', href: 'https://orcid.org/0009-0002-5585-1104' },
  { label: 'GitHub', href: 'https://github.com/haoranzhang-research' },
]

const questions = [
  {
    label: 'Intervention activity',
    q: 'My current manuscript finds finite-horizon intervention activity in the tested SGDM systems. Evidence for native-direction and recurrent-persistence specificity varies across settings and regimes; native-direction ordering also changes under an alternative matching contract.',
  },
  {
    label: 'Local response',
    q: 'When can the effect of optimizer memory be represented using local geometric information, and when does that approximation break down as the reference state becomes stale or activation patterns change?',
  },
  {
    label: 'Predictive state',
    q: "Without observing future minibatches, what information must be retained at the forecast origin? Ongoing work compares weights, local geometry, optimizer memory, and the optimizer state's immediate function-space action, then asks whether earlier history still adds practically relevant predictive information at a declared horizon.",
  },
]

const publications = [
  {
    title:
      'When Does Inherited Momentum Appear Special? Matching-Dependent Evidence from Position-Matched Interventions',
    titleHref: null,
    venue:
      'Manuscript submitted to Transactions on Machine Learning Research (TMLR), 2026',
    status: 'submitted',
    links: [],
    notes: [
      'Uses position-matched SGDM interventions, paired future minibatches, an explicit open-loop comparator, and direction × persistence controls to separate finite-horizon intervention activity from claims of intrinsic momentum specificity.',
    ],
  },
  {
    title:
      'Early Warning of Financial Crises Through Critical Field Dynamics: A Nonlocal Trend-Inhibition Delay Equation Framework',
    titleHref: 'https://doi.org/10.1016/j.physa.2025.131161',
    venue: 'Physica A 682 (2026) 131161',
    status: 'published',
    links: [
      { label: 'paper', href: 'https://doi.org/10.1016/j.physa.2025.131161' },
      {
        label: 'reproduction',
        href: 'https://doi.org/10.5281/zenodo.21771606',
      },
    ],
    notes: [
      'Develops a nonlocal trend-inhibition delay equation and evaluates propagation-aware early-warning measures across seven crisis episodes under a strictly forward-looking, no-lookahead protocol.',
    ],
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
          What must a learning system remember to predict what happens next?
        </p>
        <p className="mt-4 font-mono text-sm text-ink-soft">
          <span className="text-ink">optimizer history</span> → finite-horizon
          response → <span className="text-ink">predictive state</span> →
          coarse-graining
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
          My research asks what information is needed to describe and predict an
          evolving learning system. I study how optimizer state and local geometry
          shape finite-horizon neural-network dynamics, and when training history
          can be compressed into an effective predictive state.
        </p>

        <p className="mt-4 text-pretty">
          I use position-matched interventions, function-space measurements,
          future-blind prediction, and reproducible computational experiments.
          Three questions organize the current programme:
        </p>

        <ol className="mt-4 space-y-3">
          {questions.map((item, i) => (
            <li key={item.label} className="flex gap-3">
              <span className="font-mono text-sm text-ink-soft select-none">
                {i + 1}.
              </span>
              <span>
                <strong className="font-semibold">{item.label}</strong>
                {': '}
                {item.q}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-6 font-mono text-sm text-ink-soft">
          My earlier Physica A paper studied early warning in collective financial
          dynamics. That work remains part of the path to the present question,
          while learning dynamics is now my main research focus.
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
                      [{link.label}]
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
        <p className="mt-4 text-pretty">
          I am an independent researcher at Meta Sci working on learning dynamics,
          stochastic optimization, and effective predictive states.
        </p>

        <p className="mt-4 text-pretty">
          My route into learning dynamics began in cybersecurity, multi-agent
          digital systems, and quantitative decision tools. Across these settings,
          I repeatedly encountered the same difficulty: outcomes were easier to
          observe than the hidden state needed to explain or predict them. Learning
          dynamics provides a setting in which that question can be tested through
          controlled intervention.
        </p>

        <p className="mt-4 text-pretty">
          I conduct this work independently through{' '}
          <a
            href="https://metasci.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent underline-offset-4 hover:underline"
          >
            Meta Sci
          </a>
          , where I develop and release versioned code, protocols, and evidence
          packages alongside major results.
        </p>
      </section>
    </main>
  )
}
