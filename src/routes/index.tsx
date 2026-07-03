import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Radar,
  Cloud,
  FileCheck2,
  Zap,
  Lock,
  KeyRound,
  Database,
  Server,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Cable,
  Building2,
  Activity,
  Eye,
  ScanSearch,
  GitBranch,
  ClipboardList,
  CircleDot,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <TrustProblem />
      <Services />
      <HowItWorks />
      <ProductPreview />
      <SampleFindings />
      <TargetCustomers />
      <Pricing />
      <LeadCapture />
    </main>
  );
}

/* ------------------------------- HERO ------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-cyber-blue/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-fade-up">
            <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-cyber-cyan" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyber-cyan" />
              </span>
              <span>Now accepting Q3 audit slots</span>
              <span className="text-foreground/60">·</span>
              <span className="font-mono uppercase tracking-wider text-foreground/80">
                EV · Fintech · Health · SaaS
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Stop{" "}
              <span className="text-gradient">silent API data leaks</span>{" "}
              before attackers find them.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Suss Security helps EV, fintech, healthcare, and SaaS startups
              discover IDOR/BOLA flaws, exposed internal APIs, leaked sensitive
              data, OCPP risks, and cloud misconfigurations — before bug bounty
              hunters or attackers do.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm"
              >
                Book Free API Exposure Review
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/sample-report"
                className="btn-ghost inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm"
              >
                View Sample Report
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-hairline pt-6">
              {[
                { k: "120+", v: "APIs audited" },
                { k: "40+", v: "Startups protected" },
                { k: "0", v: "Public disclosures" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl font-bold text-foreground">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="relative animate-fade-up [animation-delay:120ms]">
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-cyber-purple/20 via-cyber-blue/15 to-cyber-cyan/20 blur-2xl" />
      <div className="glass-strong overflow-hidden rounded-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-hairline bg-surface/40 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-severity-critical/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-severity-medium/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyber-cyan/80" />
            <span className="ml-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              suss-scanner › acme-fintech
            </span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-hairline bg-background/40 px-2.5 py-1 text-[10px] text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyber-cyan" />
            Scanning · 14s
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4">
          <StatTile
            icon={<Radar className="h-4 w-4" />}
            label="Endpoints"
            value="248"
            sub="+12 today"
          />
          <StatTile
            icon={<AlertTriangle className="h-4 w-4 text-severity-critical" />}
            label="Critical"
            value="3"
            sub="IDOR · KYC"
            tone="critical"
          />
          <StatTile
            icon={<Cable className="h-4 w-4" />}
            label="OCPP checks"
            value="11/12"
            sub="1 weak ident"
          />
          <StatTile
            icon={<Cloud className="h-4 w-4" />}
            label="Cloud exposure"
            value="2"
            sub="S3 · logs"
            tone="warn"
          />
        </div>

        <div className="border-t border-hairline px-4 pb-4 pt-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Live findings stream
            </p>
            <span className="text-[11px] text-muted-foreground">5 of 28</span>
          </div>
          <ul className="space-y-2">
            {[
              {
                sev: "CRIT",
                tone: "critical",
                t: "IDOR on /v2/users/{id}/kyc returns 200",
                ep: "POST · auth.acme.io",
              },
              {
                sev: "HIGH",
                tone: "high",
                t: "Public Swagger at /api-docs reveals admin routes",
                ep: "GET · api.acme.io",
              },
              {
                sev: "HIGH",
                tone: "high",
                t: "OCPP accepts charger ID without HMAC",
                ep: "WSS · csms.acme.io",
              },
              {
                sev: "MED",
                tone: "medium",
                t: "Excessive metadata in /me response",
                ep: "GET · api.acme.io",
              },
              {
                sev: "MED",
                tone: "medium",
                t: "Cloud log group exposes internal token",
                ep: "AWS · us-east-1",
              },
            ].map((f) => (
              <li
                key={f.t}
                className="group flex items-center gap-3 rounded-lg border border-hairline bg-background/40 px-3 py-2.5 transition-colors hover:bg-background/70"
              >
                <SevPill sev={f.sev} tone={f.tone as Tone} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] text-foreground">{f.t}</p>
                  <p className="truncate font-mono text-[11px] text-muted-foreground">
                    {f.ep}
                  </p>
                </div>
                <Eye className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

type Tone = "critical" | "high" | "medium" | "low" | "warn";

function SevPill({ sev, tone }: { sev: string; tone: Tone }) {
  const map: Record<Tone, string> = {
    critical: "bg-severity-critical/15 text-severity-critical border-severity-critical/30",
    high: "bg-severity-high/15 text-severity-high border-severity-high/30",
    medium: "bg-severity-medium/15 text-severity-medium border-severity-medium/30",
    low: "bg-severity-low/15 text-severity-low border-severity-low/30",
    warn: "bg-severity-medium/15 text-severity-medium border-severity-medium/30",
  };
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-semibold ${map[tone]}`}
    >
      {sev}
    </span>
  );
}

function StatTile({
  icon,
  label,
  value,
  sub,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  tone?: "critical" | "warn";
}) {
  const ring =
    tone === "critical"
      ? "border-severity-critical/30"
      : tone === "warn"
      ? "border-severity-medium/30"
      : "border-hairline";
  return (
    <div className={`rounded-xl border ${ring} bg-background/40 p-3`}>
      <div className="flex items-center justify-between text-muted-foreground">
        <span className="flex items-center gap-2 text-[11px] uppercase tracking-wider">
          {icon} {label}
        </span>
      </div>
      <p className="mt-2 font-display text-2xl font-bold text-foreground">
        {value}
      </p>
      <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{sub}</p>
    </div>
  );
}

/* --------------------------- TRUST / PROBLEM --------------------------- */

function TrustProblem() {
  const items = [
    {
      icon: KeyRound,
      title: "Broken object-level authorization",
      body: "BOLA/IDOR flaws expose customer records by simply changing an ID in a request.",
    },
    {
      icon: ScanSearch,
      title: "Exposed Swagger & internal endpoints",
      body: "Internal API docs and debug routes reveal sensitive admin and tenant logic.",
    },
    {
      icon: Database,
      title: "Leaked KYC, PII & payment data",
      body: "Weak APIs return excessive data — patient records, payment info, identity proofs.",
    },
    {
      icon: Cable,
      title: "OCPP & EV backend risks",
      body: "Charger identity spoofing, weak WebSocket auth, and exposed fleet APIs.",
    },
    {
      icon: Cloud,
      title: "Cloud misconfigurations",
      body: "Public S3, exposed logs, leaked secrets, and over-permissive IAM in production.",
    },
  ];
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The problem"
          title={
            <>
              Your APIs are your{" "}
              <span className="text-gradient">biggest attack surface</span>.
            </>
          }
          subtitle="Modern startups ship APIs faster than they secure them. These are the gaps we find — quietly, before the wrong people do."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`glass rounded-2xl p-6 transition-transform hover:-translate-y-0.5 ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-cyber-blue/30 to-cyber-purple/20 ring-1 ring-cyber-blue/30">
                <it.icon className="h-5 w-5 text-cyber-cyan" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SERVICES ------------------------------ */

function Services() {
  const services = [
    {
      icon: ShieldCheck,
      tag: "A",
      title: "API Leak Audit",
      body: "Find IDOR/BOLA, broken authorization, sensitive data exposure, weak sessions, exposed internal APIs, and unsafe API responses.",
      points: ["IDOR / BOLA", "Auth & session", "Excessive data exposure", "Shadow endpoints"],
    },
    {
      icon: Cable,
      tag: "B",
      title: "EV / OCPP Security Audit",
      body: "Review EV charging backends, OCPP WebSocket security, charger identity handling, admin dashboards, firmware flows, and fleet APIs.",
      points: ["OCPP 1.6 / 2.0.1", "Charger identity", "Firmware & OTA", "Fleet & CSMS"],
    },
    {
      icon: Cloud,
      tag: "C",
      title: "Cloud Exposure Review",
      body: "Identify exposed S3 buckets, IAM risks, public endpoints, leaked secrets, logs, Lambda/EC2 misconfigurations, and insecure services.",
      points: ["S3 / GCS / Blob", "IAM least-priv", "Secrets in logs", "Edge & Lambda"],
    },
    {
      icon: FileCheck2,
      tag: "D",
      title: "Compliance Evidence Pack",
      body: "Clean evidence reports useful for DPDP, CERT-In, ISO 27001, SOC 2, and internal security reviews.",
      points: ["DPDP / CERT-In", "ISO 27001", "SOC 2", "Auditor-ready"],
    },
  ];
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Security services built for{" "}
              <span className="text-gradient">modern API-driven startups</span>.
            </>
          }
          subtitle="Four focused engagements. No bloat, no checkbox theatre — just findings your engineers can ship fixes for."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="glass group relative overflow-hidden rounded-2xl p-6 sm:p-8"
            >
              <div className="absolute right-0 top-0 -z-10 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-cyber-blue/10 blur-3xl transition-all group-hover:bg-cyber-purple/20" />
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyber-violet/30 to-cyber-cyan/20 ring-1 ring-cyber-blue/30">
                  <s.icon className="h-6 w-6 text-cyber-cyan" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Service · {s.tag}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-xs text-foreground/80"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyber-cyan" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- HOW IT WORKS ----------------------------- */

function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: ClipboardList,
      title: "Scope & Authorization",
      body: "We agree on targets, environments, rules of engagement, and obtain written authorization before any testing.",
    },
    {
      n: "02",
      icon: ScanSearch,
      title: "API & Asset Discovery",
      body: "We map your APIs, subdomains, cloud assets, OCPP endpoints, and shadow infrastructure.",
    },
    {
      n: "03",
      icon: Radar,
      title: "Security Testing & Risk Analysis",
      body: "Manual + tooling: IDOR/BOLA, broken auth, sensitive data exposure, OCPP, cloud misconfig.",
    },
    {
      n: "04",
      icon: GitBranch,
      title: "Developer-Friendly Report + Retest",
      body: "Clear remediation steps your engineers can act on, followed by a free retest of fixed issues.",
    },
  ];
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              A clean, predictable{" "}
              <span className="text-gradient">4-step engagement</span>.
            </>
          }
          subtitle="From scope to retest in 1–3 weeks depending on surface size."
        />

        <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <div className="glass relative h-full overflow-hidden rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    Step {s.n}
                  </span>
                  <s.icon className="h-5 w-5 text-cyber-cyan" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <div className="absolute -bottom-8 -right-8 font-display text-[7rem] font-bold leading-none text-foreground/[0.04]">
                  {s.n}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute right-[-12px] top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-cyber-blue/60 to-transparent lg:block" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* --------------------------- PRODUCT PREVIEW --------------------------- */

function ProductPreview() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Product Preview"
              title={
                <>
                  Suss Scanner:{" "}
                  <span className="text-gradient">continuous API exposure monitoring</span>.
                </>
              }
              subtitle="Beyond point-in-time audits — keep eyes on new endpoints, leaks, and misconfigurations as your team ships."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Continuous asset & endpoint discovery",
                "Sensitive data exposure alerts",
                "OCPP & charger identity checks",
                "Cloud exposure & secrets monitoring",
                "Retest tracking with diff history",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyber-cyan" />
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-hairline bg-background/40 px-3 py-1.5 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-cyber-cyan" />
              Currently in private beta — request access in any audit.
            </div>
          </div>

          <ScannerDashboard />
        </div>
      </div>
    </section>
  );
}

function ScannerDashboard() {
  const metrics = [
    { label: "Assets monitored", value: "184", delta: "+8" },
    { label: "API endpoints", value: "1,420", delta: "+37" },
    { label: "High-risk findings", value: "6", delta: "-2", tone: "good" as const },
    { label: "Exposed internal routes", value: "4", tone: "warn" as const },
    { label: "PII exposure alerts", value: "2", tone: "critical" as const },
    { label: "OCPP checks", value: "92%" },
    { label: "Cloud exposures", value: "3", tone: "warn" as const },
    { label: "Retests pending", value: "5" },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-tr from-cyber-violet/15 via-cyber-blue/10 to-cyber-cyan/15 blur-3xl" />
      <div className="glass-strong overflow-hidden rounded-2xl">
        <div className="flex items-center justify-between border-b border-hairline bg-surface/40 px-4 py-3">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-cyber-cyan" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              suss scanner · overview
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <CircleDot className="h-3 w-3 text-cyber-cyan animate-pulse-dot" />
            Live · synced 2m ago
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-4">
          {metrics.map((m) => {
            const toneCls =
              m.tone === "critical"
                ? "text-severity-critical"
                : m.tone === "warn"
                ? "text-severity-medium"
                : m.tone === "good"
                ? "text-cyber-cyan"
                : "text-foreground";
            return (
              <div
                key={m.label}
                className="rounded-lg border border-hairline bg-background/40 p-3"
              >
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </p>
                <p className={`mt-1.5 font-display text-xl font-bold ${toneCls}`}>
                  {m.value}
                </p>
                {m.delta && (
                  <p className="font-mono text-[10px] text-muted-foreground">
                    {m.delta} 7d
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="border-t border-hairline px-4 pb-4 pt-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Endpoint exposure · last 30d
            </p>
            <span className="text-[11px] text-muted-foreground">+12% surface</span>
          </div>
          <SparkBars />
        </div>
      </div>
    </div>
  );
}

function SparkBars() {
  const data = [
    14, 18, 12, 22, 26, 19, 24, 30, 28, 33, 26, 31, 38, 35, 41, 36, 44, 39, 47,
    52, 48, 54, 59, 51, 57, 63, 58, 66, 71, 67,
  ];
  const max = Math.max(...data);
  return (
    <div className="flex h-28 items-end gap-1.5">
      {data.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-cyber-blue/40 to-cyber-cyan/80"
          style={{ height: `${(v / max) * 100}%` }}
        />
      ))}
    </div>
  );
}

/* --------------------------- SAMPLE FINDINGS --------------------------- */

function SampleFindings() {
  const findings: {
    sev: string;
    tone: Tone;
    title: string;
    area: string;
    impact: string;
    status: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      sev: "CRITICAL",
      tone: "critical",
      title: "IDOR exposes customer KYC data",
      area: "POST /v2/users/{id}/kyc",
      impact: "Any authenticated user can fetch other customers' identity documents.",
      status: "Remediated · retested",
      icon: KeyRound,
    },
    {
      sev: "HIGH",
      tone: "high",
      title: "Public Swagger reveals internal API routes",
      area: "GET /api-docs · production",
      impact: "Internal admin routes and parameter schemas exposed to the internet.",
      status: "Remediated",
      icon: ScanSearch,
    },
    {
      sev: "HIGH",
      tone: "high",
      title: "OCPP WebSocket accepts weak charger identity",
      area: "WSS /ocpp/{chargerId}",
      impact: "Attackers can impersonate chargers and submit fake transactions.",
      status: "Fix in progress",
      icon: Cable,
    },
    {
      sev: "MEDIUM",
      tone: "medium",
      title: "API returns excessive user metadata",
      area: "GET /me",
      impact: "Internal flags, role hints, and feature toggles leak from responses.",
      status: "Open",
      icon: Database,
    },
    {
      sev: "MEDIUM",
      tone: "medium",
      title: "Cloud logs expose internal tokens",
      area: "AWS CloudWatch · prod-api",
      impact: "Bearer tokens logged in request bodies during error paths.",
      status: "Open",
      icon: Cloud,
    },
  ];
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sample findings"
          title={
            <>
              Real-world{" "}
              <span className="text-gradient">findings we surface</span>.
            </>
          }
          subtitle="A redacted snapshot of issues from recent engagements."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {findings.map((f) => (
            <article
              key={f.title}
              className="glass flex flex-col rounded-2xl p-5"
            >
              <div className="flex items-center justify-between">
                <SevPill sev={f.sev} tone={f.tone} />
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {f.status}
                </span>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-background/60 ring-1 ring-hairline">
                  <f.icon className="h-4 w-4 text-cyber-cyan" />
                </div>
                <h3 className="font-display text-base font-semibold leading-snug">
                  {f.title}
                </h3>
              </div>
              <p className="mt-3 font-mono text-[11px] text-muted-foreground">
                {f.area}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                {f.impact}
              </p>
            </article>
          ))}
          <a
            href="/sample-report"
            className="glass group flex flex-col items-start justify-between rounded-2xl p-5 transition-colors hover:bg-background/40"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Full report
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">
                Read a complete redacted sample report
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Executive summary, scope, findings table, business impact, and
                retest status.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm text-cyber-cyan">
              View sample report{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CUSTOMERS ----------------------------- */

function TargetCustomers() {
  const items = [
    { icon: Zap, title: "EV Charging & Fleet Platforms", body: "CSMS, OCPP, charger identity, mobile/admin apps." },
    { icon: Lock, title: "Fintech / Lending / KYC", body: "Payment APIs, KYC pipelines, lending workflows." },
    { icon: ShieldCheck, title: "Healthcare SaaS & Hospital", body: "EHR, patient APIs, telehealth and clinic platforms." },
    { icon: Server, title: "B2B SaaS with Public APIs", body: "Multi-tenant data isolation and partner APIs." },
    { icon: Building2, title: "Cloud-Native Startups", body: "Kubernetes, serverless, multi-account AWS / GCP." },
  ];
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who we work with"
          title={
            <>
              Built for teams{" "}
              <span className="text-gradient">handling sensitive data</span>.
            </>
          }
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-5">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-cyber-blue/25 to-cyber-purple/20 ring-1 ring-cyber-blue/30">
                <c.icon className="h-5 w-5 text-cyber-cyan" />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold">
                {c.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PRICING ------------------------------ */

function Pricing() {
  const tiers = [
    {
      name: "Starter Audit",
      price: "₹25,000",
      suffix: "+",
      blurb: "For early-stage startups that need a focused API exposure review.",
      features: [
        "API exposure review",
        "Basic endpoint discovery",
        "IDOR / BOLA checks",
        "Exposed Swagger and internal route checks",
        "PDF security report",
      ],
      cta: "Start Small",
      highlight: false,
    },
    {
      name: "Growth Security Audit",
      price: "₹75,000",
      suffix: "+",
      blurb: "For funded startups, SaaS teams, fintech platforms, healthcare products, and EV companies handling sensitive data.",
      features: [
        "Full API security audit",
        "IDOR / BOLA and broken authorization testing",
        "Sensitive data exposure checks",
        "Cloud exposure review",
        "Developer-friendly remediation guidance",
        "Free retest after fixes",
      ],
      cta: "Book Growth Audit",
      highlight: true,
    },
    {
      name: "Continuous Monitoring",
      price: "₹15,000",
      suffix: "/mo+",
      blurb: "For teams that ship fast and want ongoing visibility into API and cloud exposure risks.",
      features: [
        "Monthly exposure monitoring",
        "New endpoint and subdomain alerts",
        "Exposed internal API checks",
        "Risk summary report",
        "Retest support",
        "Security posture tracking",
      ],
      cta: "Stay Covered",
      highlight: false,
    },
  ];
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Transparent pricing.{" "}
              <span className="text-gradient">No mystery quotes</span>.
            </>
          }
          subtitle="Final pricing depends on the number of APIs, cloud assets, applications, environments, and testing depth."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-7 ${
                t.highlight ? "glass-strong glow-ring" : "glass"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-cyber-blue/40 bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyber-cyan">
                  Most Chosen
                </span>
              )}
              <h3 className="font-display text-lg font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-xs text-muted-foreground mr-1">Starting at</span>
                <span className="font-display text-3xl font-bold">{t.price}</span>
                <span className="text-muted-foreground">{t.suffix}</span>
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Includes</p>
              <ul className="mt-2 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyber-cyan" />
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm ${
                  t.highlight ? "btn-primary" : "btn-ghost"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Need a custom scope for EV/OCPP, fintech, healthcare, or cloud-heavy platforms?{" "}
          <a href="#contact" className="text-cyber-cyan underline-offset-2 hover:underline">
            Request a custom security review.
          </a>
        </p>
      </div>
    </section>
  );
}

/* ----------------------------- LEAD CAPTURE ----------------------------- */

function LeadCapture() {
  const [result, setResult] = useState("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "50b8c728-da1e-43dc-bf1b-34766cfd26e8");
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await res.json();
    setResult(data.success ? "success" : "error");
  };
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 grid-bg" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyber-purple/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-cyber-blue/20 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyber-cyan">
                Free review
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Want to know if your APIs are{" "}
                <span className="text-gradient">leaking data?</span>
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Send us your details and we'll do a free, non-intrusive exposure
                review of your public surface — no credentials needed.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Non-intrusive, no credentials needed",
                  "NDA available on request",
                  "Initial findings within 5 working days",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyber-cyan" />
                    <span className="text-foreground/85">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={onSubmit}
              className="rounded-2xl border border-hairline bg-background/50 p-6 backdrop-blur"
            >
              {result === "success" ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-cyber-cyan/20 ring-1 ring-cyber-cyan/40">
                    <CheckCircle2 className="h-6 w-6 text-cyber-cyan" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    Request received
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We'll get back to you within 1 business day from a @suss.security email.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {result === "error" && (
                    <p className="sm:col-span-2 text-sm text-severity-critical">Something went wrong. Please try again.</p>
                  )}
                  <Field label="Name" name="name" placeholder="Jane Cooper" />
                  <Field label="Company" name="company" placeholder="Acme Inc" />
                  <Field
                    label="Work email"
                    name="email"
                    type="email"
                    placeholder="jane@acme.io"
                  />
                  <Field
                    label="Phone number"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                  />
                  <Field
                    label="Website / App URL"
                    name="url"
                    placeholder="https://acme.io"
                  />
                  <div className="sm:col-span-2">
                    <Label>Industry</Label>
                    <select
                      name="industry"
                      className="mt-1.5 w-full rounded-md border border-hairline bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-cyber-blue/60 focus:ring-2 focus:ring-cyber-blue/20"
                    >
                      <option>EV / OCPP</option>
                      <option>Fintech / Lending</option>
                      <option>Healthcare</option>
                      <option>B2B SaaS</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <Label>Message</Label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your stack, APIs, and timeline."
                      className="mt-1.5 w-full rounded-md border border-hairline bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-cyber-blue/60 focus:ring-2 focus:ring-cyber-blue/20"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm"
                    >
                      Request Free Review
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="mt-3 text-center text-[11px] text-muted-foreground">
                      We respond from real humans, not auto-responders.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="mt-1.5 w-full rounded-md border border-hairline bg-background/60 px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-cyber-blue/60 focus:ring-2 focus:ring-cyber-blue/20"
      />
    </div>
  );
}
function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
      {children}
    </label>
  );
}

/* --------------------------- Section heading --------------------------- */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyber-cyan">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
