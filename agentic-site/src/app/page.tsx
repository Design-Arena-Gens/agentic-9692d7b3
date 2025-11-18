import styles from "./page.module.css";

export default function Home() {
  const heroMeta = [
    {
      label: "Guiding Brands",
      value: "Everlane · Cuts · True Classic · Buck Mason",
    },
    { label: "Growth Horizon", value: "0 → $50M ARR in 36 months" },
    { label: "Experience North Star", value: "Premium basics, radical transparency" },
    { label: "Architecture Principle", value: "Composable, API-first, privacy by design" },
  ];

  const stackRows = [
    {
      layer: "Front-end",
      recommendation: "Next.js 14 (App Router) with TypeScript, React Server Components, edge rendering on Vercel",
      rationale:
        "Mirrors Everlane’s editorial storytelling and Cuts’ performance-focused product pages with hybrid SSG/SSR, advanced image optimization, and instant route transitions.",
    },
    {
      layer: "Back-end",
      recommendation:
        "Headless commerce via Shopify Plus (Storefront API + Shopify Functions) orchestrated with a Node.js/Express middleware layer deployed on Vercel Edge Functions",
      rationale:
        "Combines True Classic’s conversion tooling and Buck Mason’s inventory sophistication with enterprise-grade merchandising, discounts, and OMS connectivity while preserving developer control.",
    },
    {
      layer: "Database & Persistence",
      recommendation:
        "Primary: PostgreSQL (Neon serverless) for operational data. Secondary: Shopify data cache (PlanetScale read replica) and Redis (Upstash) for session & personalization state.",
      rationale:
        "Postgres delivers relational integrity for custom domains (drops, memberships); read-optimized replicas keep PDPs instant; Redis powers real-time fit recommendations and cart recirculation.",
    },
    {
      layer: "Content & Experience",
      recommendation:
        "Sanity CMS for storytelling, lookbooks, fit guides; Builder.io for on-brand landing experiments managed by growth teams without developer intervention.",
      rationale:
        "Matches Everlane’s long-form transparency modules and Cuts’ agile campaign cadence via visual editing, localized content, and scheduled releases.",
    },
    {
      layer: "Search & Discovery",
      recommendation:
        "Algolia for search, facet personalization, 'Find Your Fit' quiz, and synonym management; integrates with Shopify and Sanity via webhooks.",
      rationale:
        "Delivers Buck Mason-level category refinement and True Classic’s guided selling flows with sub-200ms response times globally.",
    },
    {
      layer: "Data & Intelligence",
      recommendation:
        "Segment Connections → Snowflake warehouse; dbt modeling; Looker Studio dashboards; Hightouch reverse ETL feeding Klaviyo/Braze personalization.",
      rationale:
        "Unified behavioral + transactional data unlocks Everlane-style transparency metrics, LTV cohorts, and predictive replenishment automations.",
    },
    {
      layer: "Payments & Checkout",
      recommendation:
        "Shopify Checkout Extensibility with Shop Pay, PayPal, Apple Pay; integrate Returnly/Loop for optimized returns, and Partial.ly for bundles & subscriptions.",
      rationale:
        "Preserves True Classic’s high-converting checkout, enables Buck Mason’s try-before-you-buy and Everlane’s Choose What You Pay mechanics.",
    },
    {
      layer: "Infrastructure & DevOps",
      recommendation:
        "Vercel for hosting/deployment, GitHub Actions CI, Sentry monitoring, LaunchDarkly feature flags, Clerk for passwordless auth, Cloudflare Turnstile for bot defense.",
      rationale:
        "Edge-first delivery keeps Cuts-level performance SLAs; opinionated CI/CD ensures velocity with enterprise governance and audit trails.",
    },
  ];

  const experienceCards = [
    {
      title: "Brand Narrative & Transparency",
      body:
        "Adopt Everlane’s radical transparency with interactive cost breakdowns, sustainability dashboards, and factory storytelling modules powered by Sanity dynamic content blocks.",
      accent: "cool",
    },
    {
      title: "Performance Athleisure Merchandising",
      body:
        "Channel Cuts through hero PDPs featuring motion video, athlete testimonials, and AI-generated fit notes tuned by customer segments from Hightouch reverse ETL feeds.",
      accent: "warm",
    },
    {
      title: "Fit Confidence & Guided Shopping",
      body:
        "Bring in True Classic’s guided fit quiz, stack size-predictive models (True Fit or Bold Metrics) with heat-map visualizations, and offer Buck Mason-style capsule builders.",
      accent: "cool",
    },
    {
      title: "Post-Purchase Loyalty Flywheel",
      body:
        "Create a membership tier (Inspired by Buck Mason’s Slub Club) with auto-replenish, early access drops, and Everlane-grade donation matching—managed via Recharge + Shopify Functions.",
      accent: "warm",
    },
  ];

  const architectureColumns = [
    {
      title: "Composable Services Layer",
      items: [
        "API Gateway: GraphQL Mesh stitching Shopify, Sanity, Algolia, and proprietary services.",
        "Edge Middleware: Geo-aware shopping experience (currency, fulfillment promise) with Vercel Edge Config.",
        "Product Domain: Orchestrates bundles, style stories, and drop calendars sourced from CMS + ERP.",
        "Checkout Domain: Checkout UI extensions, upsells, loyalty accrual, returns portal integration.",
      ],
      accent: "cool",
    },
    {
      title: "Operational Backbone",
      items: [
        "ERP/WMS: Integrate Netsuite or Skubana for multi-node fulfillment, demand planning, procurement.",
        "CDP Sync: Segment unified profiles, feed into Braze/Klaviyo for triggered flows and RFM segmentation.",
        "Analytics: Real-time dashboards for merchandising KPIs, contribution margin, supply-chain KPIs.",
        "Automation: Temporal workflows for drop launches, low-stock alerts, and sustainability reporting.",
      ],
      accent: "warm",
    },
  ];

  const lifecycleCards = [
    {
      title: "Acquisition",
      body:
        "SEO-first content (Everlane playbook) supported by performance landing pages built in Builder.io; optimize Paid Social funnels with dynamic PDP variants and Cuts-inspired video storytelling.",
    },
    {
      title: "Conversion",
      body:
        "Server-driven experiments via LaunchDarkly, incremental bundling logic, Fit Finder overlays, localized shipping promises, and Shop Pay accelerated checkout to minimize drop-off.",
    },
    {
      title: "Retention",
      body:
        "Deploy Braze journeys tied to LTV cohorts; surface Buck Mason-like wardrobe planners, restock notifications, loyalty tiers, and Transparent Impact reports to reinforce brand trust.",
    },
    {
      title: "Advocacy",
      body:
        "Enable community-building with Gatsby-style stories, affiliate dashboards, and user-generated lookbooks; reward reviews with Friendbuy referrals and curated ambassador kits.",
    },
  ];

  const operationsList = [
    "Zero Trust security posture with Clerk SSO, OAuth scopes for internal tooling, and granular RBAC across CMS, commerce, and data platforms.",
    "PII minimization using Shopify customer vaulting, tokenized payment data, and field-level encryption for custom profiles stored in Postgres.",
    "Observability triad: Sentry for UX errors, Datadog for infrastructure metrics, and Loki/Grafana stack for log aggregation.",
    "Compliance roadmap: SOC 2 Type II, GDPR/CCPA readiness, ISO 27001-aligned policies, accessibility audits aligned with WCAG 2.2 AA.",
    "Disaster recovery via multi-region backups (Neon logical backups + Vercel global failover) and automated load testing before major drops.",
  ];

  const roadmap = [
    {
      phase: "Phase 0 · 2 Weeks",
      focus:
        "Discovery, data architecture blueprint, success metrics, and integration contracts. Finalize brand system tokens and governance framework.",
    },
    {
      phase: "Phase 1 · 6 Weeks",
      focus:
        "MVP commerce core: Next.js storefront, Shopify Plus integration, essential CMS schemas, Algolia search scaffold, baseline analytics and error monitoring.",
    },
    {
      phase: "Phase 2 · 8 Weeks",
      focus:
        "Experience accelerators: Fit Finder, bundle builder, long-form editorial templates, personalization engine MVP, loyalty program beta.",
    },
    {
      phase: "Phase 3 · 6 Weeks",
      focus:
        "Automation & intelligence: dbt models, predictive replenishment, triggered lifecycle orchestrations, growth experimentation tooling, and global store enablement.",
    },
    {
      phase: "Phase 4 · Ongoing",
      focus:
        "Optimization sprints, A/B experimentation, expansion into wholesale portal, and continuous security/compliance hardening.",
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <span className={styles.tagline}>DTC T-Shirt Commerce Blueprint</span>
            <h1 className={styles.heroTitle}>
              Architecting a best-in-class, high-conversion T-shirt experience.
            </h1>
            <p className={styles.heroSubtitle}>
              A north-star product and technology plan synthesizing the winning plays from Everlane,
              Cuts Clothing, True Classic, and Buck Mason—engineered for scale, velocity, and trust.
            </p>
          </div>
          <div className={styles.metaGrid}>
            {heroMeta.map((item) => (
              <div key={item.label} className={styles.metaCard}>
                <div className={styles.metaLabel}>{item.label}</div>
                <div className={styles.metaValue}>{item.value}</div>
              </div>
            ))}
          </div>
        </header>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>01 · Technology Stack Recommendation</span>
            <h2 className={styles.sectionTitle}>Composable, future-proof platform decisions.</h2>
            <p className={styles.sectionSubtitle}>
              Opinionated stack choices that blend enterprise reliability with the experimentation
              speed demanded by modern DTC apparel brands.
            </p>
          </div>
          <div className={styles.contentGrid}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Layer</th>
                  <th>Recommendation</th>
                  <th>Rationale</th>
                </tr>
              </thead>
              <tbody>
                {stackRows.map((row) => (
                  <tr key={row.layer}>
                    <td>{row.layer}</td>
                    <td>{row.recommendation}</td>
                    <td>{row.rationale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.footnote}>
              Deployment baseline: <strong>Vercel</strong> for CI/CD, preview environments, and edge
              observability. Governance via <strong>GitHub</strong> protected branches, code owners,
              and automated compliance checks.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>02 · Experience Pillars</span>
            <h2 className={styles.sectionTitle}>Differentiated customer journeys from day one.</h2>
            <p className={styles.sectionSubtitle}>
              Translate the signature strengths of the benchmark brands into modular experience
              layers that can be tuned per cohort, campaign, and geography.
            </p>
          </div>
          <div className={styles.dualColumn}>
            {experienceCards.map((card) => (
              <article
                key={card.title}
                className={`${styles.card} ${
                  card.accent === "warm" ? styles.cardAccentWarm : styles.cardAccent
                }`}
              >
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>03 · Commerce Architecture</span>
            <h2 className={styles.sectionTitle}>Composable domains enabling rapid retail iteration.</h2>
            <p className={styles.sectionSubtitle}>
              Domain-driven architecture isolates complexity, safeguards performance, and unlocks
              omnichannel extensions (pop-ups, wholesale, retail) without rewriting the core.
            </p>
          </div>
          <div className={styles.dualColumn}>
            {architectureColumns.map((column) => (
              <article
                key={column.title}
                className={`${styles.card} ${
                  column.accent === "warm" ? styles.cardAccentWarm : styles.cardAccent
                }`}
              >
                <h3 className={styles.cardTitle}>{column.title}</h3>
                <ul className={styles.list}>
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>04 · Customer Lifecycle & Personalization</span>
            <h2 className={styles.sectionTitle}>Full-funnel orchestration anchored by data unity.</h2>
            <p className={styles.sectionSubtitle}>
              Lifecycle automation blends storytelling with utility—scaling Everlane’s trust, Cuts’
              performance credibility, True Classic’s conversion funnels, and Buck Mason’s loyalty
              loop.
            </p>
          </div>
          <div className={styles.dualColumn}>
            {lifecycleCards.map((card) => (
              <article key={card.title} className={`${styles.card} ${styles.cardAccent}`}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>05 · Operations, Security & Compliance</span>
            <h2 className={styles.sectionTitle}>Protect the brand while empowering velocity.</h2>
            <p className={styles.sectionSubtitle}>
              A resilient foundation balancing marketing agility with enterprise-grade guardrails,
              meeting privacy, reliability, and trust expectations from the outset.
            </p>
          </div>
          <ul className={styles.list}>
            {operationsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>06 · Roadmap & Delivery Motion</span>
            <h2 className={styles.sectionTitle}>Timeboxed, outcome-driven execution path.</h2>
            <p className={styles.sectionSubtitle}>
              Agile increments with embedded feedback loops, dedicated growth pods, and rigorous QA
              to ensure the launch story balances speed, quality, and differentiation.
            </p>
          </div>
          <div className={styles.contentGrid}>
            {roadmap.map((entry) => (
              <article key={entry.phase} className={`${styles.card} ${styles.cardAccentWarm}`}>
                <h3 className={styles.cardTitle}>{entry.phase}</h3>
                <p className={styles.cardBody}>{entry.focus}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
