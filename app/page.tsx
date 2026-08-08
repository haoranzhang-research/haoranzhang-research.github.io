import type { Metadata } from 'next'
import { ThemeToggle } from '@/components/theme-toggle'

export const metadata: Metadata = {
  title: 'Haoran Zhang — from agents to fields',
}

const links = [
  { label: 'email', href: 'mailto:haoranzhang.cmplx@proton.me' },
  { label: 'ORCID', href: 'https://orcid.org/0009-0002-5585-1104' },
  { label: 'GitHub', href: 'https://github.com/haoranzhang-research' },
]

const questions = [
  {
    label: 'Admissibility',
    q: 'What properties must a real system possess before a delayed, nonlocal field description has mechanistic meaning? Are there dynamically sufficient coarse variables, identifiable response delays, cross-unit interactions, and a closed action-to-state feedback loop?',
  },
  {
    label: 'Closure and validity',
    q: 'Once an admissible stochastic agent model is identified, when does it reduce to a nonlocal delayed field equation, and where does that reduction fail because of finite size, heterogeneous delays, nonlinearities, or missing state variables?',
  },
  {
    label: 'Observability',
    q: "Can a finite, coarse-grained observer recover the system's stability margin from partial and noisy measurements? Which early-warning signals remain faithful near a transition, and which fail silently?",
  },
  {
    label: 'Multi-field dynamics',
    q: 'How do human decisions, AI workloads, information or price signals, and physical computing resources interact across unequal timescales? When can these coupled fields be reduced without erasing the mechanism that drives instability?',
  },
  {
    label: 'Control and human-timescale governance',
    q: 'What is the minimal intervention available to a controller that observes and actuates only aggregate variables? Which interventions remain effective when critical authority must stay on human rather than machine timescales?',
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
      { label: 'paper', href: 'https://doi.org/10.1016/j.physa.2025.131161' },
      { label: 'code', href: 'https://doi.org/10.5281/zenodo.21772041' },
    ],
    notes: [
      'Introduces NTIDE as an interpretable nonlocal delayed-field framework for studying financial instability and early-warning signals.',
    ],
  },
  {
    title:
      'Finite-size limits of variance-based early warning in delayed stochastic-agent fields',
    titleHref: null,
    venue: 'Manuscript under review',
    status: 'submitted',
    links: [
      { label: 'code', href: 'https://doi.org/10.5281/zenodo.21771415' },
    ],
    notes: [
      'Studies how local occupancy and total population constrain variance-based early warning near delayed instabilities.',
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
          From agents to fields — when collective dynamics are real, observable,
          and controllable.
        </p>
        <p className="mt-4 font-mono text-sm text-ink-soft">
          <span className="text-ink">agents</span> → admissibility →{' '}
          <span className="text-ink">fields</span> → monitoring →{' '}
          <span className="text-ink">control</span>
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
          . I study when heterogeneous human and machine agents can be reduced
          to interpretable mesoscopic field dynamics, where those reductions
          remain valid, and whether they can support reliable monitoring and
          control.
        </p>

        <p className="mt-4 text-pretty">
          The guiding premise is conditional rather than universal: systemic
          instability may emerge from timescale mismatch, nonlocal coupling, and
          reflexive feedback — but only when the underlying system contains an
          identifiable closed loop from state, through interaction and agent
          response, back to aggregate state. Not every multi-agent system
          satisfies this condition.
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
          The published paper introduces NTIDE as a phenomenological framework
          for financial early warning. A manuscript under review tests the
          finite-size limits of variance-based warning in delayed
          stochastic-agent fields. My current work examines when marketplace
          observations justify coarse-grained field models, using GPU compute
          markets as an empirical test case.
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
          I am an independent researcher working on the statistical physics of
          collective systems: when interacting agents can be reduced to fields,
          when those fields can be trusted, and whether instability can be seen
          and controlled before failure.
        </p>

        <p className="mt-4 text-pretty">
          My path is unconventional. I began in security engineering at Tencent,
          competed in cybersecurity challenges, and spent several years building
          and operating multi-agent digital systems. Alongside that work, I
          trained independently in stochastic processes, PDEs, statistical
          mechanics, nonlinear dynamics, and scientific computing. These threads
          converged into a single research program: field admissibility,
          stochastic microfoundations, finite-size effects, early warning, and
          timescale-constrained control in human–AI systems.
        </p>

        <p className="mt-4 text-pretty">
          I conduct and publish this work through{' '}
          <a
            href="https://metasci.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent underline-offset-4 hover:underline"
          >
            Meta Sci
          </a>
          , the independent research studio I founded, and release open
          reproducibility code with each major result.
        </p>
      </section>
    </main>
  )
}
