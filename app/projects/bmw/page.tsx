import ProjectLayout from "@/components/ProjectLayout";

export default function BmwPage() {
  return (
    <ProjectLayout
      num="02"
      type="Internship Project"
      title={"BMW Korea\nKPI 대시보드"}
      period="2025 — 2026 · A-62 팀 (Warranty / After-Sales Operations)"
      tags={["AI 활용", "대시보드 설계", "Figma", "업무 자동화", "Claude", "Google Stitch", "SQL", "VBA"]}
      accentColor="var(--accent)"
      accentLight="var(--accent-light)"
      sections={[
        {
          label: "Overview",
          content: "다수 지점의 KPI를 매번 엑셀로 수작업 시각화하고 배포하는 과정이 반복적이고 비효율적이었습니다. Raw data 입력만으로 주요 지표를 자동 시각화하는 AI 기반 대시보드를 기획 및 제작했습니다.",
        },
        {
          label: "Problem",
          content: [
            "KPI 시각화 리포트를 매번 엑셀로 수작업 — 약 2시간 소요",
            "반복 작업으로 인한 실수 가능성과 배포 지연",
            "데이터 구조가 정리되지 않아 지표 정의가 일관되지 않음",
          ],
        },
        {
          label: "My Role",
          content: [
            "데이터 구조 정리 및 핵심 KPI 지표 정의",
            "Figma를 활용한 대시보드 UI 설계",
            "Claude, Google Stitch 등 AI 도구로 화면 구성 및 기능 구현",
            "프롬프트 구조화를 통한 크레딧 사용량 최적화 및 결과 품질 개선",
            "SQL / VBA를 활용한 데이터 추출 및 전처리 자동화",
          ],
        },
        {
          label: "Process",
          content: [
            "기존 리포트 분석 → 핵심 지표 (KPI) 재정의",
            "데이터 입력 구조 표준화 — Raw data 형식 통일",
            "Figma로 대시보드 레이아웃 및 시각화 방식 설계",
            "AI 도구로 실제 동작하는 대시보드 구현",
            "프롬프트 반복 개선으로 응답 품질 향상 및 크레딧 효율화",
          ],
        },
        {
          label: "Result",
          content: [
            "반복 리포트 작성 시간 약 2시간 → 5분으로 단축",
            "Raw data 입력만으로 자동 시각화되는 대시보드 완성",
            "프롬프트 구조화로 동일 결과 대비 크레딧 사용량 절감",
          ],
        },
        {
          label: "What I Learned",
          content: "AI 도구는 사용법보다 '어떻게 요청하느냐'가 결과를 결정한다는 것을 배웠습니다. 프롬프트를 구조화하고 반복 개선하는 과정에서 AI 응답의 품질을 평가하고 기준을 세우는 경험을 했습니다. 업무 자동화는 기술이 아니라 문제 정의에서 시작한다는 것도 이 프로젝트에서 얻은 인사이트입니다.",
        },
      ]}
    />
  );
}
