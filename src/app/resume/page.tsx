import { Metadata } from "next";
import { siteConfig, experience, socialLinks } from "@/lib/constants";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume — Jaden S. Wang",
  description: "Resume of Jaden S. Wang — software engineer and engineering leader.",
};

export default function ResumePage() {
  const email = socialLinks.find((l) => l.platform === "Email");
  const github = socialLinks.find((l) => l.platform === "GitHub");
  const linkedin = socialLinks.find((l) => l.platform === "LinkedIn");

  return (
    <div className="resume-page min-h-screen bg-background text-foreground">
      {/* Print button — hidden in print */}
      <div className="print:hidden fixed top-6 right-6 z-50 flex gap-3">
        <a
          href="/"
          className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          &larr; Back
        </a>
        <PrintButton />
      </div>

      <main className="mx-auto max-w-[8.5in] px-8 py-16 print:max-w-none print:px-0 print:py-0">
        {/* Header */}
        <header className="mb-8 border-b border-border pb-6 print:border-black/20">
          <h1 className="font-display text-4xl font-bold tracking-tight print:text-3xl">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-lg text-muted print:text-base">
            {siteConfig.title}
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted print:text-xs">
            {email && (
              <a href={email.href} className="hover:text-foreground print:text-black">
                {email.href.replace("mailto:", "")}
              </a>
            )}
            {github && (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground print:text-black"
              >
                {github.href.replace("https://", "")}
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground print:text-black"
              >
                {linkedin.href.replace("https://", "")}
              </a>
            )}
            <span className="hover:text-foreground print:text-black">
              jadenswang.com
            </span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="mb-3 font-display text-sm font-semibold tracking-widest uppercase text-muted print:text-xs print:text-black/60">
            Summary
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/80 print:text-sm print:text-black/80">
            {siteConfig.bio}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="mb-4 font-display text-sm font-semibold tracking-widest uppercase text-muted print:text-xs print:text-black/60">
            Experience
          </h2>
          <div className="flex flex-col gap-5">
            {experience.map((exp) => (
              <div key={exp.id} className="print:break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold print:text-base">
                      {exp.role}
                    </h3>
                    <p className="text-base text-foreground/70 print:text-sm print:text-black/70">
                      {exp.company}
                    </p>
                  </div>
                  {exp.period && (
                    <p className="shrink-0 text-sm text-muted print:text-xs print:text-black/50">
                      {exp.period}
                    </p>
                  )}
                </div>
                <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-foreground/60 print:text-xs print:text-black/70">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills — fill in as needed */}
        <section className="mb-8">
          <h2 className="mb-3 font-display text-sm font-semibold tracking-widest uppercase text-muted print:text-xs print:text-black/60">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "TypeScript",
              "Go",
              "Rust",
              "React",
              "Next.js",
              "Node.js",
              "PostgreSQL",
              "Docker",
              "Kubernetes",
              "Terraform",
              "GPU Infrastructure",
              "Linux",
              "Networking",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-3 py-1 text-sm text-foreground/70 print:border-black/20 print:text-xs print:text-black/70"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education — placeholder */}
        <section className="mb-8">
          <h2 className="mb-3 font-display text-sm font-semibold tracking-widest uppercase text-muted print:text-xs print:text-black/60">
            Education
          </h2>
          <div>
            <h3 className="text-lg font-semibold print:text-base">
              University of Washington — Seattle
            </h3>
            <p className="text-sm text-foreground/60 print:text-xs print:text-black/70">
              B.S. Electrical Engineering
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
