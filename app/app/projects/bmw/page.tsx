import Link from "next/link";
import Image from "next/image";

const images = [
  { src: "/images/bmw-01-data-entry.png", caption: "Data Entry Portal — 엑셀 업로드로 자동 입력" },
  { src: "/images/bmw-02-network.png",    caption: "Dealer Network Overview — 전체 지점 현황" },
  { src: "/images/bmw-03-analytics.png",  caption: "KPI Analytics — 개별 지점 레이더 차트 & 인사이트" },
  { src: "/images/bmw-04-yoy.png",        caption: "Year-over-Year — 연도별 KPI 비교 테이블" },
  { src: "/images/bmw-05-trend.png",      caption: "Error Rate / TC Trend — 월별 트렌드 분석" },
];

const stats = [
  { before: "2시간", after: "5분", label: "리포트 작성 시간" },
  { before: "수작업", after: "자동화", label: "데이터 시각화" },
];

const sections = [
  {
    label: "Overview",
    content: "다수 지점의 KPI를 매번 엑셀로 수작업 시각화하고 배포하는 과정이 반복적이고 비효율적이었습니다. Raw data 입력만으로 주요 지표를 자동 시각화하는 AI 기반 대시보드를 기획 및 제작했습니다.",
  },
  {
    label: "Problem",
    items: [
      "KPI 시각화 리포트를 매번 엑셀로 수작업 — 약 2시간 소요",
      "반복 작업으로 인한 실수 가능성과 배포 지연",
      "데이터 구조가 정리되지 않아 지표 정의가 일관되지 않음",
    ],
  },
  {
    label: "My Role",
    items: [
      "데이터 구조 정리 및 핵심 KPI 지표 정의",
      "Figma를 활용한 대시보드 UI 설계",
      "Claude, Google Stitch 등 AI 도구로 화면 구성 및 기능 구현",
      "프롬프트 구조화를 통한 크레딧 사용량 최적화 및 결과 품질 개선",
      "SQL / VBA를 활용한 데이터 추출 및 전처리 자동화",
    ],
  },
  {
    label: "Process",
    items: [
      "기존 리포트 분석 → 핵심 KPI 재정의",
      "데이터 입력 구조 표준화 — Raw data 형식 통일",
      "Figma로 대시보드 레이아웃 및 시각화 방식 설계",
      "AI 도구로 실제 동작하는 대시보드 구현",
      "프롬프트 반복 개선으로 응답 품질 향상 및 크레딧 효율화",
    ],
  },
  {
    label: "Result",
    items: [
      "반복 리포트 작성 시간 약 2시간 → 5분으로 단축",
      "Raw data 입력만으로 자동 시각화되는 대시보드 완성",
      "프롬프트 구조화로 동일 결과 대비 크레딧 사용량 절감",
    ],
  },
  {
    label: "What I Learned",
    content: "AI 도구는 사용법보다 '어떻게 요청하느냐'가 결과를 결정한다는 것을 배웠습니다. 프롬프트를 구조화하고 반복 개선하는 과정에서 AI 응답의 품질을 평가하고 기준을 세우는 경험을 했습니다. 업무 자동화는 기술이 아니라 문제 정의에서 시작한다는 것도 이 프로젝트에서 얻은 인사이트입니다.",
  },
];

export default function BmwPage() {
  const accent = "var(--accent)";
  const accentLight = "var(--accent-light)";

  return (
    <div style={{ paddingTop: "6rem", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{
        padding: "5rem 3rem 4rem", borderBottom: "1px solid var(--line)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "2rem", right: "3rem",
          fontFamily: "DM Serif Display, serif", fontSize: "clamp(80px, 12vw, 160px)",
          color: accent, opacity: 0.05, lineHeight: 1,
          userSelect: "none", pointerEvents: "none", letterSpacing: "-0.04em",
        }}>02</div>
        <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: accent }} />
        <div style={{ maxWidth: 800 }}>
          <p style={{ fontFamily: "DM Mono, monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: "1rem" }}>02</p>
          <span style={{
            fontFamily: "DM Mono, monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "4px 10px", borderRadius: 2, background: accentLight, color: accent,
            display: "inline-block", marginBottom: "1.25rem",
          }}>Internship Project</span>
          <h1 style={{
            fontFamily: "DM Serif Display, serif", fontSize: "clamp(40px, 7vw, 80px)",
            lineHeight: 1.0, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: "0.5rem",
          }}>BMW Korea</h1>
          <p style={{ fontFamily: "DM Serif Display, serif", fontSize: "clamp(20px, 3vw, 32px)", color: "var(--ink-muted)", marginBottom: "1.5rem" }}>AI 기반 KPI 대시보드</p>
          <p style={{ fontFamily: "DM Mono, monospace", fontSize: 12, color: "var(--ink-faint)", letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
            2025 — 2026 · A-62 팀 (Warranty / After-Sales Operations)
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["AI 활용", "대시보드 설계", "Figma", "업무 자동화", "Claude", "Google Stitch", "SQL", "VBA"].map(t => (
              <span key={t} style={{
                fontFamily: "DM Mono, monospace", fontSize: 10, letterSpacing: "0.08em",
                padding: "3px 10px", border: "1px solid var(--line)", color: "var(--ink-muted)",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 임팩트 수치 카드 */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 1, background: "var(--line)",
        borderBottom: "1px solid var(--line)",
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: "var(--bg)", padding: "2.5rem 3rem" }}>
            <p style={{ fontFamily: "DM Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: "1rem" }}>{s.label}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontFamily: "DM Serif Display, serif", fontSize: 36, color: "var(--ink-faint)", textDecoration: "line-through" }}>{s.before}</span>
              <span style={{ fontFamily: "DM Mono, monospace", fontSize: 20, color: "var(--ink-faint)" }}>→</span>
              <span style={{ fontFamily: "DM Serif Display, serif", fontSize: 36, color: accent }}>{s.after}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 갤러리 */}
      <div style={{ borderBottom: "1px solid var(--line)" }}>
        <div style={{ padding: "3rem 3rem 1.5rem" }}>
          <p style={{ fontFamily: "DM Mono, monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: accent }}>Dashboard Screenshots</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--line)" }}>
          {images.map((img, i) => (
            <div key={i} style={{ background: "var(--surface)", position: "relative" }}>
              <Image
                src={img.src}
                alt={img.caption}
                width={1600}
                height={900}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{
                padding: "0.75rem 1.5rem",
                background: "var(--bg)",
                borderTop: "1px solid var(--line)",
              }}>
                <p style={{ fontFamily: "DM Mono, monospace", fontSize: 10, letterSpacing: "0.08em", color: "var(--ink-faint)" }}>
                  {String(i + 1).padStart(2, "0")} — {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 본문 섹션 */}
      <div style={{ padding: "4rem 3rem", maxWidth: 800 }}>
        {sections.map((s, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "160px 1fr",
            gap: "1rem 3rem", paddingBottom: "3rem", marginBottom: "3rem",
            borderBottom: i < sections.length - 1 ? "1px solid var(--line)" : "none",
          }}>
            <p style={{ fontFamily: "DM Mono, monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, paddingTop: 4 }}>{s.label}</p>
            <div>
              {"items" in s && s.items ? (
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {s.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: "1rem", fontSize: 15, color: "var(--ink-muted)", lineHeight: 1.7 }}>
                      <span style={{ fontFamily: "DM Mono, monospace", fontSize: 10, color: accent, opacity: 0.5, marginTop: 5, flexShrink: 0 }}>—</span>
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
      </div>

      {/* 푸터 */}
      <div style={{
        padding: "3rem", borderTop: "1px solid var(--line)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <Link href="/" style={{ fontFamily: "DM Mono, monospace", fontSize: 11, letterSpacing: "0.08em", color: "var(--ink-faint)", textDecoration: "none" }}>
          ← All Projects
        </Link>
        <p style={{ fontFamily: "DM Mono, monospace", fontSize: 11, color: "var(--ink-faint)", letterSpacing: "0.08em" }}>© 2026 원이정</p>
      </div>
    </div>
  );
}
