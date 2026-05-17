import ProjectLayout from "@/components/ProjectLayout";

export default function AsapPage() {
  return (
    <ProjectLayout
      num="01"
      type="서비스 기획 프로젝트"
      title={"ASAP\n취업 준비생 통합 플랫폼"}
      period="2025"
      tags={["서비스 기획", "UX Research", "Figma", "사용자 여정지도", "AI 구현", "피드백 개선"]}
      accentColor="var(--blue)"
      accentLight="var(--blue-light)"
      sections={[
        {
          label: "Overview",
          content: "취업 준비에 필요한 정보가 채용 공고 사이트, 커뮤니티, 메모장, 캘린더 등 여러 곳에 흩어져 관리가 어렵다는 문제에서 출발했습니다. 취업 준비의 전 과정을 하나의 플랫폼에서 관리할 수 있는 서비스를 기획했습니다.",
        },
        {
          label: "Problem",
          content: [
            "취업 정보가 여러 플랫폼에 분산되어 있어 관리 비용이 높다",
            "지원 현황, 면접 일정, 자기소개서 버전이 파편화되어 있다",
            "취업 준비 과정을 통합적으로 추적할 수 있는 도구가 없다",
          ],
        },
        {
          label: "My Role",
          content: [
            "사용자 리서치 설계 및 진행",
            "페르소나 및 사용자 여정지도(User Journey Map) 작성",
            "핵심 기능 정의 및 정보 구조(IA) 설계",
            "Figma UI/UX 프로토타입 제작",
            "AI 도구를 활용한 웹사이트 직접 구현",
            "실사용 및 친구 피드백 반영한 개선 반복",
          ],
        },
        {
          label: "Process",
          content: [
            "사용자 인터뷰 및 설문으로 핵심 Pain Point 도출",
            "타깃 페르소나 정의 — 취업 준비 3개월 차 대학교 4학년",
            "사용자 여정지도로 정보 탐색 → 지원 → 면접 흐름 시각화",
            "기능 우선순위 정의 (Must Have / Should Have / Nice to Have)",
            "Figma로 와이어프레임 → 프로토타입 제작",
            "개발 리소스 한계를 AI 도구로 극복, 직접 웹사이트 구현",
          ],
        },
        {
          label: "Result",
          content: [
            "Figma 기반 UI/UX 프로토타입 완성",
            "AI 도구 활용 실제 동작하는 웹사이트 구현",
            "친구 3인 사용 피드백 반영, 핵심 플로우 2회 개선",
          ],
        },
        {
          label: "What I Learned",
          content: "기획은 화면 설계에서 끝나지 않는다는 것을 배웠습니다. 실제 사용 흐름을 검증하고 피드백을 반영해 개선하는 과정이 이어져야 진짜 서비스 기획입니다. 이 프로젝트에서 사용자 시뮬레이션 테스트의 중요성을 직접 경험했습니다.",
        },
      ]}
    />
  );
}
