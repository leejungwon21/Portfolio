"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const projects = [
  {
    num: "01",
    slug: "asap",
    type: "서비스 기획 프로젝트",
    title: "ASAP",
    subtitle: "취업 준비생 통합 플랫폼",
    desc: "흩어진 취업 정보를 하나로. 사용자 리서치부터 페르소나, 여정지도, Figma 프로토타입, AI 웹 구현, 피드백 개선까지.",
    tags: ["서비스 기획", "Figma", "UX Research", "사용자 여정지도", "AI 구현"],
    accentColor: "var(--blue)",
    accentLight: "var(--blue-light)",
  },
  {
    num: "02",
    slug: "bmw",
    type: "Internship Project",
    title: "BMW Korea",
    subtitle: "AI 기반 KPI 대시보드",
    desc: "반복적인 리포트 작성 2시간 → 5분. 데이터 구조 설계부터 AI 도구 활용 자동화까지.",
    tags: ["AI 활용", "대시보드 설계", "Figma", "업무 자동화"],
    accentColor: "var(--accent)",
    accentLight: "var(--accent-light)",
  },
];

const keywords = ["AI Tool 활용", "Data-driven Problem Solving", "User Flow & Service Planning"];

export default function Home() {
  const fadeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    fadeRefs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "flex-end", padding: "0 3rem 5rem", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "DM Serif Display, serif",
          fontSize: "clamp(80px, 15vw, 200px)",
          color: "var(--surface)", whiteSpace: "nowrap",
          userSelect: "none", pointerEvents: "none", letterSpacing: "-0.03em",
        }}>원이정</div>

        <p style={{
          fontFamily: "DM Mono, monospace", fontSize: 11,
          letterSpacing: "0.15em", textTransform: "uppercase",
          color: "var(--ink-faint)", marginBottom: "1.5rem", position: "relative",
        }}>Service Planner · AI Enthusiast</p>

        <h1 style={{
          fontFamily: "DM Serif Display, serif",
          fontSize: "clamp(52px, 9vw, 120px)",
          lineHeight: 0.9, letterSpacing: "-0.02em",
          color: "var(--ink)", marginBottom: "2rem", position: "relative",
        }}>
          <span style={{ position: "relative", display: "inline-block" }}>
            원이정
            <span style={{
              position: "absolute", bottom: 6, left: 0,
              width: "100%", height: 8,
              background: "var(--accent)", opacity: 0.18, borderRadius: 2,
            }} />
          </span>
        </h1>

        <p style={{
          fontSize: 16, color: "var(--ink-muted)",
          maxWidth: 460, lineHeight: 1.8, position: "relative",
        }}>
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>AI 도구와 데이터 분석</span>을 활용해<br />
          사용자 흐름과 서비스 개선점을 찾는 예비 서비스 기획자입니다.
        </p>

        <div style={{ display: "flex", gap: 10, marginTop: "2rem", flexWrap: "wrap", position: "relative" }}>
          {keywords.map(k => (
            <span key={k} style={{
              fontFamily: "DM Mono, monospace", fontSize: 10,
              letterSpacing: "0.1em", padding: "5px 14px",
              border: "1px solid var(--line)", color: "var(--ink-muted)", borderRadius: 2,
            }}>{k}</span>
          ))}
        </div>

        <div className="animate-nudge" style={{
          position: "absolute", bottom: "2rem", right: "3rem",
          fontFamily: "DM Mono, monospace", fontSize: 10,
          letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-faint)",
        }}>↓ scroll</div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "6rem 3rem" }}>
        <div style={{
          fontFamily: "DM Mono, monospace", fontSize: 10,
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "var(--ink-faint)", marginBottom: "3rem",
          display: "flex", alignItems: "center", gap: "1rem",
        }}>
          Projects
          <span style={{ flex: 1, height: 1, background: "var(--line)", display: "block" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
          {projects.map((p, i) => (
            <div key={p.slug} ref={el => { fadeRefs.current[i] = el; }} className="fade-up">
              <Link href={`/projects/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  style={{
                    background: "var(--bg)", padding: "2.5rem",
                    display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "3rem",
                    position: "relative", overflow: "hidden", transition: "background 0.25s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--surface)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--bg)")}
                >
                  <div style={{
                    position: "absolute", top: 0, left: 0,
                    width: 3, height: "100%", background: p.accentColor,
                  }} />
                  <div style={{
                    position: "absolute", top: "1.5rem", right: "2.5rem",
                    fontFamily: "DM Serif Display, serif", fontSize: 80,
                    color: p.accentColor, opacity: 0.06,
                    lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.04em",
                  }}>{p.num}</div>

                  <div style={{ flex: "0 0 300px", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <span style={{ fontFamily: "DM Mono, monospace", fontSize: 11, letterSpacing: "0.05em", color: p.accentColor }}>{p.num}</span>
                    <span style={{
                      fontFamily: "DM Mono, monospace", fontSize: 10,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      padding: "4px 10px", borderRadius: 2,
                      background: p.accentLight, color: p.accentColor,
                      display: "inline-block", width: "fit-content",
                    }}>{p.type}</span>
                    <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: 32, lineHeight: 1.05, letterSpacing: "-0.01em" }}>{p.title}</h2>
                    <p style={{ fontFamily: "DM Mono, monospace", fontSize: 11, color: "var(--ink-faint)", letterSpacing: "0.05em" }}>{p.subtitle}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {p.tags.map(t => (
                        <span key={t} style={{
                          fontFamily: "DM Mono, monospace", fontSize: 10,
                          letterSpacing: "0.08em", padding: "3px 10px",
                          border: "1px solid var(--line)", color: "var(--ink-muted)",
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 160 }}>
                    <p style={{ fontSize: 14, color: "var(--ink-muted)", lineHeight: 1.8, maxWidth: 420 }}>{p.desc}</p>
                    <div style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      paddingTop: "1.25rem", borderTop: "1px solid var(--line)", marginTop: "2rem",
                    }}>
                      <span style={{ fontFamily: "DM Mono, monospace", fontSize: 11, letterSpacing: "0.08em", color: "var(--ink-faint)" }}>자세히 보기</span>
                      <span style={{ fontSize: 18, color: p.accentColor }}>↗</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer style={{
        padding: "3rem", borderTop: "1px solid var(--line)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <p style={{ fontFamily: "DM Mono, monospace", fontSize: 11, color: "var(--ink-faint)", letterSpacing: "0.08em" }}>
          원이정 · Business Intelligence & AI Convergence
        </p>
        <p style={{ fontFamily: "DM Mono, monospace", fontSize: 11, color: "var(--ink-faint)", letterSpacing: "0.08em" }}>© 2026</p>
      </footer>
    </>
  );
}
