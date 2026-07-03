import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ShieldCheck,
  AlertTriangle,
  KeyRound,
  ScanSearch,
  Cable,
  Database,
  Cloud,
  CheckCircle2,
  Clock,
  FileText,
  Download,
} from "lucide-react";

export const Route = createFileRoute("/sample-report")({ component: SampleReportPage });

type Sev = "Critical" | "High" | "Medium" | "Low";

const findings: {
  id: string;
  sev: Sev;
  title: string;
  area: string;
  status: "Remediated" | "In progress" | "Open";
  impact: string;
  remediation: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: "SUS-001",
    sev: "Critical",
    title: "IDOR exposes customer KYC data",
    area: "POST /v2/users/{id}/kyc",
    status: "Remediated",
    impact:
      "Any authenticated user could request another customer's KYC documents (PAN, Aadhaar masked, address proofs) by changing the path parameter. This would trigger a DPDP/CERT-In reportable incident.",
    remediation:
      "Enforce object-level authorization in the controller — validate that the authenticated user owns the requested resource, not just that they're authenticated. Add automated authorization tests for every resource endpoint.",
    icon: KeyRound,
  },
  {
    id: "SUS-002",
    sev: "High",
    title: "Public Swagger reveals internal API routes",
    area: "GET /api-docs (production)",
    status: "Remediated",
    impact:
      "Internal admin and tenant-management routes were discoverable, accelerating reconnaissance for any attacker.",
    remediation:
      "Disable Swagger UI in production or restrict to authenticated internal IPs. Split internal-only routes into a separate API gateway.",
    icon: ScanSearch,
  },
  {
    id: "SUS-003",
    sev: "High",
    title: "OCPP WebSocket accepts weak charger identity",
    area: "WSS /ocpp/{chargerId}",
    status: "In progress",
    impact:
      "Chargers were authenticated via predictable identifiers without HMAC or mTLS. An attacker could impersonate a charger, submit transactions, or disrupt fleet operations.",
    remediation:
      "Adopt mTLS for charger ↔ CSMS connections (OCPP 2.0.1 security profile 3) or HMAC-signed bootstrap with rotating credentials. Rate-limit per charger ID.",
    icon: Cable,
  },
  {
    id: "SUS-004",
    sev: "Medium",
    title: "API returns excessive user metadata",
    area: "GET /me",
    status: "Open",
    impact:
      "Response includes internal feature flags, role hints, and experiment buckets — useful for an attacker to map the admin surface.",
    remediation:
      "Define explicit DTOs per endpoint. Whitelist response fields server-side; never spread the full DB record into responses.",
    icon: Database,
  },
  {
    id: "SUS-005",
    sev: "Medium",
    title: "Cloud logs expose internal bearer tokens",
    area: "AWS CloudWatch · prod-api log group",
    status: "Open",
    impact:
      "Error-path logs include full request bodies, occasionally containing valid bearer tokens — accessible to anyone with CloudWatch read access.",
    remediation:
      "Add a request-body redaction middleware before logging. Restrict CloudWatch read to a small IAM group. Rotate tokens that may have been logged.",
    icon: Cloud,
  },
];

function SampleReportPage() {
  const counts = {
    Critical: findings.filter((f) => f.sev === "Critical").length,
    High: findings.filter((f) => f.sev === "High").length,
    Medium: findings.filter((f) => f.sev === "Medium").length,
    Low: findings.filter((f) => f.sev === "Low").length,
  };

  return (
    <main className="relative pb-24 pt-12 sm:pt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        {/* Report header */}
        <div className="glass-strong mt-6 overflow-hidden rounded-3xl">
          <div className="grid-bg relative px-6 py-10 sm:px-10 sm:py-14">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-cyber-cyan" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyber-cyan">
                Sample report · redacted
              </span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              API & Cloud Exposure Assessment
            </h1>
            <p className="mt-2 text-muted-foreground">
              Prepared for{" "}
              <span className="font-mono text-foreground/80">Acme Fintech (redacted)</span>{" "}
              · Engagement <span className="font-mono">SUS-2025-014</span>
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Badge>EV / Fintech</Badge>
              <Badge>API · Cloud</Badge>
              <Badge>2 week engagement</Badge>
              <button className="btn-ghost ml-auto inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs">
                <Download className="h-3.5 w-3.5" /> Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Executive summary */}
        <Section title="Executive Summary" icon={ShieldCheck}>
          <p>
            Suss Security performed a 2-week API and cloud exposure assessment of
            Acme Fintech's public and partner-facing APIs, OCPP backend, and AWS
            production environment. The engagement identified{" "}
            <strong className="text-foreground">5 findings</strong>, including{" "}
            <strong className="text-severity-critical">1 critical</strong> and{" "}
            <strong className="text-severity-high">2 high</strong> severity
            issues that could have led to mass disclosure of customer KYC data
            and impersonation of EV chargers on the network.
          </p>
          <p className="mt-3">
            All critical and high findings have been remediated or are in active
            remediation. A free retest was performed on remediated items and is
            included in this report.
          </p>
        </Section>

        {/* Scope */}
        <Section title="Scope" icon={ScanSearch}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ScopeCard
              label="In scope"
              items={[
                "api.acme.io — REST APIs",
                "auth.acme.io — Identity service",
                "csms.acme.io — OCPP 1.6 backend",
                "AWS account 1234·5678·9012 (prod)",
              ]}
            />
            <ScopeCard
              label="Out of scope"
              items={[
                "Marketing site (Webflow)",
                "Internal employee SSO",
                "Mobile app reverse engineering",
                "Physical / social engineering",
              ]}
            />
          </div>
        </Section>

        {/* Risk overview */}
        <Section title="Risk Overview" icon={AlertTriangle}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <RiskTile label="Critical" count={counts.Critical} tone="critical" />
            <RiskTile label="High" count={counts.High} tone="high" />
            <RiskTile label="Medium" count={counts.Medium} tone="medium" />
            <RiskTile label="Low" count={counts.Low} tone="low" />
          </div>
        </Section>

        {/* Findings table */}
        <Section title="Findings Table" icon={FileText}>
          <div className="overflow-hidden rounded-xl border border-hairline">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface/40 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Severity</th>
                  <th className="px-4 py-3">Finding</th>
                  <th className="px-4 py-3 hidden sm:table-cell">Area</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {findings.map((f) => (
                  <tr
                    key={f.id}
                    className="border-t border-hairline align-top hover:bg-background/40"
                  >
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {f.id}
                    </td>
                    <td className="px-4 py-3">
                      <SeverityChip sev={f.sev} />
                    </td>
                    <td className="px-4 py-3 text-foreground">{f.title}</td>
                    <td className="px-4 py-3 hidden font-mono text-xs text-muted-foreground sm:table-cell">
                      {f.area}
                    </td>
                    <td className="px-4 py-3 text-xs">
                      <StatusBadge status={f.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Individual findings */}
        <Section title="Individual Finding Details" icon={KeyRound}>
          <div className="space-y-4">
            {findings.map((f) => (
              <article
                key={f.id}
                className="glass overflow-hidden rounded-2xl"
              >
                <header className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-background/60 ring-1 ring-hairline">
                      <f.icon className="h-4 w-4 text-cyber-cyan" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {f.id}
                      </p>
                      <h3 className="font-display text-base font-semibold">
                        {f.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <SeverityChip sev={f.sev} />
                    <StatusBadge status={f.status} />
                  </div>
                </header>
                <div className="grid grid-cols-1 gap-5 px-5 py-5 sm:grid-cols-2">
                  <Block label="Affected area">
                    <p className="font-mono text-xs text-foreground/85">
                      {f.area}
                    </p>
                  </Block>
                  <Block label="Retest status">
                    <p className="text-sm text-foreground/85">
                      {f.status === "Remediated"
                        ? "Verified fixed during retest."
                        : f.status === "In progress"
                        ? "Fix pending; partial mitigations in place."
                        : "No fix submitted yet."}
                    </p>
                  </Block>
                  <Block label="Business impact">
                    <p className="text-sm text-foreground/85">{f.impact}</p>
                  </Block>
                  <Block label="Remediation">
                    <p className="text-sm text-foreground/85">{f.remediation}</p>
                  </Block>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Retest status */}
        <Section title="Retest Status" icon={CheckCircle2}>
          <div className="glass flex flex-col gap-3 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyber-cyan/15 ring-1 ring-cyber-cyan/40">
                <CheckCircle2 className="h-5 w-5 text-cyber-cyan" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold">
                  3 of 5 findings remediated and verified
                </p>
                <p className="text-xs text-muted-foreground">
                  Retest conducted 12 days after initial report delivery.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-4 w-4" /> Next retest window: scheduled
            </div>
          </div>
        </Section>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-hairline bg-background/40 p-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Want a report like this for your APIs and cloud?
          </p>
          <Link
            to="/"
            hash="contact"
            className="btn-primary inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm"
          >
            Book Free API Exposure Review
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-4 w-4 text-cyber-cyan" />
        <h2 className="font-display text-xl font-semibold">{title}</h2>
      </div>
      <div className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-hairline bg-background/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
      {children}
    </span>
  );
}

function ScopeCard({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="glass rounded-2xl p-5">
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li
            key={i}
            className="flex items-start gap-2 font-mono text-xs text-foreground/85"
          >
            <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-cyber-cyan" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RiskTile({
  label,
  count,
  tone,
}: {
  label: string;
  count: number;
  tone: "critical" | "high" | "medium" | "low";
}) {
  const map = {
    critical: "text-severity-critical border-severity-critical/30",
    high: "text-severity-high border-severity-high/30",
    medium: "text-severity-medium border-severity-medium/30",
    low: "text-severity-low border-severity-low/30",
  } as const;
  return (
    <div className={`glass rounded-2xl border ${map[tone]} p-5`}>
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className={`mt-2 font-display text-3xl font-bold ${map[tone]}`}>
        {count}
      </p>
    </div>
  );
}

function SeverityChip({ sev }: { sev: Sev }) {
  const tone: Record<Sev, string> = {
    Critical:
      "bg-severity-critical/15 text-severity-critical border-severity-critical/30",
    High: "bg-severity-high/15 text-severity-high border-severity-high/30",
    Medium:
      "bg-severity-medium/15 text-severity-medium border-severity-medium/30",
    Low: "bg-severity-low/15 text-severity-low border-severity-low/30",
  };
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${tone[sev]}`}
    >
      {sev}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Remediated: "bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan/30",
    "In progress":
      "bg-severity-medium/15 text-severity-medium border-severity-medium/30",
    Open: "bg-muted text-muted-foreground border-hairline",
  };
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
        map[status] ?? map.Open
      }`}
    >
      {status}
    </span>
  );
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
