"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "1.25rem 3rem",
      background: "var(--bg)",
      borderBottom: "1px solid var(--line)",
    }}>
      <Link href="/" style={{
        fontFamily: "DM Mono, monospace", fontSize: 13,
        letterSpacing: "0.08em", color: "var(--ink-muted)", textDecoration: "none"
      }}>
        원이정
      </Link>
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {isHome ? (
          <li>
            <a href="#projects" style={{
              fontFamily: "DM Mono, monospace", fontSize: 11,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--ink-muted)", textDecoration: "none"
            }}>
              Projects
            </a>
          </li>
        ) : (
          <li>
            <Link href="/#projects" style={{
              fontFamily: "DM Mono, monospace", fontSize: 11,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--ink-muted)", textDecoration: "none"
            }}>
              ← Back
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
