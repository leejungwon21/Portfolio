import Link from "next/link";

interface Section {
  label: string;
  content: string | string[];
}

interface ProjectLayoutProps {
  num: string;
  type: string;
  title: string;
  period: string;
  tags: string[];
  accentColor: string;
  accentLight: string;
  sections: Section[];
  link?: { href: string; label: string };
}

export default function ProjectLayout({
  num, type, title, period, tags, accentColor, accentLight, sections, link
}: ProjectLayoutProps) {
  return (
    <div style={{ paddingTop: "6rem", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{
        padding: "5rem 3rem 4rem",
        borderBottom: "1px solid var(--line)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* 배경 번호 */}
        <div style={{
          position: "absolute", top: "2rem", right: "3rem",
          fontFamily: "DM Serif Display, serif",
          fontSize: "clamp(80px, 12vw, 160px)",
          color: accentColor, opacity: 0.05,
          lineHeight: 1, userSelect: "none", pointerEvents: "none",
          letterSpacing: "-0.04em",
        }}>{num}</div>

        {/* 왼쪽 컬러 바 */}
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: 3, height: "100%", background: accentColor,
        }} />

        <div style={{ maxWidth: 800 }}>
          <p style={{
            fontFamily: "DM Mono, monospace", fontSize: 11,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "var(--ink-faint)", marginBottom: "1rem",
          }}>{num}</p>
          <span style={{
            fontFamily: "DM Mono, monospace", fontSize: 10,
            letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "4px 10px", borderRadius: 2,
            background: accentLight, color: accentColor,
            display: "inline-block", marginBottom: "1.25rem",
          }}>{type}</span>
          <h1 style={{
            fontFamily: "DM Serif Display, serif",
            fontSize: "clamp(40px, 7vw, 80px)",
            lineHeight: 1.0, letterSpacing: "-0.02em",
            color: "var(--ink)", marginBottom: "1.5rem",
          }}>{title}</h1>
          <p style={{
            fontFamily: "DM Mono, monospace", fontSize: 12,
            color: "var(--ink-faint)", letterSpacing: "0.08em",
            marginBottom: "1.5rem",
          }}>{period}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {tags.map(t => (
              <span key={t} style={{
                fontFamily: "DM Mono, monospace", fontSize: 10,
                letterSpacing: "0.08em", padding: "3px 10px",
                border: "1px solid var(--line)", color: "var(--ink-muted)",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 본문 섹션 */}
      <div style={{ padding: "4rem 3rem", maxWidth: 800 }}>
        {sections.map((s, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr",
            gap: "1rem 3rem",
            paddingBottom: "3rem",
            marginBottom: "3rem",
            borderBottom: i < sections.length - 1 ? "1px solid var(--line)" : "none",
          }}>
            <p style={{
              fontFamily: "DM Mono, monospace", fontSize: 10,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: accentColor, paddingTop: 4,
            }}>{s.label}</p>
            <div>
              {Array.isArray(s.content) ? (
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {s.content.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: "1rem", fontSize: 15, color: "var(--ink-muted)", lineHeight: 1.7 }}>
                      <span style={{ fontFamily: "DM Mono, monospace", fontSize: 10, color: accentColor, opacity: 0.5, marginTop: 5, flexShrink: 0 }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ fontSize: 15, color: "var(--ink-muted)", lineHeight: 1.8 }}>{s.content}</p>
              )}
            </div>
          </div>
        ))}

        {/* 링크 */}
        {link && (
          <a href={link.href} target="_blank" rel="noopener" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "DM Mono, monospace", fontSize: 11,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: accentColor, textDecoration: "none",
            borderBottom: `1px solid ${accentColor}`, paddingBottom: 2,
          }}>
            {link.label} ↗
          </a>
        )}
      </div>

      {/* 푸터 */}
      <div style={{
        padding: "3rem",
        borderTop: "1px solid var(--line)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <Link href="/" style={{
          fontFamily: "DM Mono, monospace", fontSize: 11,
          letterSpacing: "0.08em", color: "var(--ink-faint)", textDecoration: "none",
        }}>
          ← All Projects
        </Link>
        <p style={{
          fontFamily: "DM Mono, monospace", fontSize: 11,
          color: "var(--ink-faint)", letterSpacing: "0.08em",
        }}>© 2026 원이정</p>
      </div>
    </div>
  );
}
