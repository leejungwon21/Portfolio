import Link from "next/link";
import Image from "next/image";

export default function AsapPage() {
  const accent = "var(--blue)";
  const accentLight = "var(--blue-light)";

  const sections = [
    {
      label: "Overview",
      content:
        "취업 준비에 필요한 정보가 채용 공고 사이트, 커뮤니티, 메모장, 캘린더 등 여러 곳에 흩어져 관리가 어렵다는 문제에서 출발했습니다. 취업 준비의 전 과정을 하나의 플랫폼에서 관리할 수 있는 서비스를 기획했습니다.",
    },
    {
      label: "Problem",
      items: [
        "취업 정보가 여러 플랫폼에 분산되어 있어 관리가 어렵다",
        "지원 현황, 면접 일정, 자기소개서 버전이 파편화되어 있다",
        "취업 준비 과정을 통합적으로 추적할 수 있는 도구가 없다",
      ],
    },
    {
      label: "My Role",
      items: [
        "사용자 리서치 설계 및 진행",
        "페르소나 및 사용자 여정지도 작성",
        "핵심 기능 정의 및 정보 구조 설계",
        "Figma UI/UX 프로토타입 제작",
        "AI 도구를 활용한 웹사이트 직접 구현",
        "실사용 및 친구 피드백 반영한 개선 반복",
      ],
    },
    {
      label: "Process",
      items: [
        "사용자 인터뷰 및 설문으로 핵심 Pain Point 도출",
        "타깃 페르소나 정의 — 취업 준비 3개월 차 대학교 4학년",
        "사용자 여정지도로 공고 탐색 → 지원 → 면접 → 복기 흐름 시각화",
        "기능 우선순위 정의",
        "Figma로 와이어프레임 → 프로토타입 제작",
        "개발 리소스 한계를 AI 도구로 극복, 직접 웹사이트 구현",
      ],
    },
    {
      label: "Result",
      items: [
        "Figma 기반 UI/UX 프로토타입 완성",
        "AI 도구 활용 실제 동작하는 웹사이트 구현",
        "친구 3인 사용 피드백 반영, 핵심 플로우 2회 개선",
      ],
    },
    {
      label: "What I Learned",
      content:
        "기획은 화면 설계에서 끝나지 않는다는 것을 배웠습니다. 실제 사용 흐름을 검증하고 피드백을 반영해 개선하는 과정이 이어져야 진짜 서비스 기획입니다. 이 프로젝트에서 사용자 시뮬레이션 테스트의 중요성을 직접 경험했습니다.",
    },
  ];

  return (
    <div style={{ paddingTop: "6rem", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        style={{
          padding: "5rem 3rem 4rem",
          borderBottom: "1px solid var(--line)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "2rem",
            right: "3rem",
            fontFamily: "DM Serif Display, serif",
            fontSize: "clamp(80px, 12vw, 160px)",
            color: accent,
            opacity: 0.05,
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.04em",
          }}
        >
          01
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 3,
            height: "100%",
            background: accent,
          }}
        />

        <div style={{ maxWidth: 800 }}>
          <p
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--ink)",
              opacity: 0.65,
              marginBottom: "1rem",
            }}
          >
            01
          </p>

          <span
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: 2,
              background: accentLight,
              color: accent,
              display: "inline-block",
              marginBottom: "1.25rem",
              fontWeight: 600,
            }}
          >
            서비스 기획 프로젝트
          </span>

          <h1
            style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: "clamp(40px, 7vw, 80px)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: "0.5rem",
            }}
          >
            ASAP
          </h1>

          <p
            style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: "clamp(20px, 3vw, 32px)",
              color: "var(--ink)",
              marginBottom: "1.5rem",
            }}
          >
            취업 준비생 통합 플랫폼
          </p>

          <p
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: 12,
              color: "var(--ink)",
              opacity: 0.65,
              letterSpacing: "0.08em",
              marginBottom: "1.5rem",
            }}
          >
            2025
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {[
              "서비스 기획",
              "UX Research",
              "Figma",
              "사용자 여정지도",
              "AI 구현",
              "피드백 개선",
            ].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "DM Mono, monospace",
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  padding: "3px 10px",
                  border: "1px solid var(--line)",
                  color: "var(--ink)",
                  opacity: 0.8,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* JOBMATE 링크 */}
      <div
        style={{
          padding: "2rem 3rem",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            padding: "2rem",
            background: accentLight,
            borderRadius: 6,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "DM Mono, monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: accent,
                marginBottom: 6,
                fontWeight: 600,
              }}
            >
              관련 프로젝트
            </p>

            <p
              style={{
                fontSize: 15,
                color: "var(--ink)",
                fontWeight: 500,
              }}
            >
              JOBMATE — 취업 준비의 모든 것
            </p>
          </div>

          <a
            href="https://jobmate-olive.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.1em",
              color: accent,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
              borderBottom: `1px solid ${accent}`,
              paddingBottom: 2,
              whiteSpace: "nowrap",
              fontWeight: 600,
            }}
          >
            바로가기 ↗
          </a>
        </div>
      </div>

      {/* 사용자 여정지도 */}
      <div style={{ borderBottom: "1px solid var(--line)" }}>
        <div style={{ padding: "3rem 3rem 1.5rem" }}>
          <p
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "1.25rem",
              fontWeight: 600,
            }}
          >
            User Journey Map
          </p>
        </div>

        <div
          style={{
            width: "100%",
            background: "var(--surface)",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            padding: "0 3rem 4rem",
          }}
        >
          <Image
            src="/images/asap-journey-map.png"
            alt="ASAP 사용자 여정지도"
            width={1200}
            height={675}
            style={{
              width: "100%",
              maxWidth: 950,
              height: "auto",
              display: "block",
              border: "1px solid var(--line)",
              borderRadius: 6,
            }}
          />
        </div>
      </div>

      {/* 본문 섹션 */}
      <div style={{ padding: "4rem 3rem", maxWidth: 850 }}>
        {sections.map((s, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              gap: "1rem 3rem",
              paddingBottom: "3rem",
              marginBottom: "3rem",
              borderBottom:
                i < sections.length - 1 ? "1px solid var(--line)" : "none",
            }}
          >
            <p
              style={{
                fontFamily: "DM Mono, monospace",
                fontSize: 10,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: accent,
                paddingTop: 4,
                fontWeight: 600,
              }}
            >
              {s.label}
            </p>

            <div>
              {"items" in s && s.items ? (
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.65rem",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {s.items.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: "1rem",
                        fontSize: 16,
                        color: "var(--ink)",
                        lineHeight: 1.75,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "DM Mono, monospace",
                          fontSize: 10,
                          color: accent,
                          opacity: 0.7,
                          marginTop: 5,
                          flexShrink: 0,
                        }}
                      >
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  style={{
                    fontSize: 16,
                    color: "var(--ink)",
                    lineHeight: 1.85,
                  }}
                >
                  {s.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 푸터 */}
      <div
        style={{
          padding: "3rem",
          borderTop: "1px solid var(--line)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "DM Mono, monospace",
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "var(--ink)",
            opacity: 0.7,
            textDecoration: "none",
          }}
        >
          ← All Projects
        </Link>

        <p
          style={{
            fontFamily: "DM Mono, monospace",
            fontSize: 11,
            color: "var(--ink)",
            opacity: 0.7,
            letterSpacing: "0.08em",
          }}
        >
          © 2026 원이정
        </p>
      </div>
    </div>
  );
}
