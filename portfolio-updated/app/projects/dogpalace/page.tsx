import ProjectLayout from "@/components/ProjectLayout";

export default function DogPalacePage() {
  return (
    <ProjectLayout
      num="03"
      type="Data & Business"
      title={"강아지 궁전\nDB 구축 및 사업개발"}
      period="2025"
      tags={["DB 설계", "데이터 구조화", "사업 모델", "운영 프로세스 개선", "SQL"]}
      accentColor="var(--green)"
      accentLight="var(--green-light)"
      sections={[
        {
          label: "Overview",
          content: "반려견 관련 서비스 운영 시 발생하는 고객, 반려견, 예약/이용 내역 등의 운영 데이터가 체계 없이 쌓이고 있었습니다. 데이터가 일관되게 관리될 수 있도록 DB 구조를 설계하고, 이를 바탕으로 운영 프로세스 개선안과 사업 모델을 정리했습니다.",
        },
        {
          label: "Problem",
          content: [
            "고객, 반려견, 예약 데이터가 체계 없이 분산 관리되고 있었다",
            "데이터 항목이 일관되지 않아 운영 분석이 어려웠다",
            "서비스 확장을 위한 사업 모델 검토가 필요했다",
          ],
        },
        {
          label: "My Role",
          content: [
            "핵심 데이터 항목 정의 및 DB 구조 설계",
            "고객 / 반려견 / 예약 / 이용 내역 테이블 설계",
            "정보 흐름 정리 및 운영 프로세스 개선안 도출",
            "사업 모델 검토 및 확장 방향 정리",
          ],
        },
        {
          label: "Process",
          content: [
            "기존 운영 방식 분석 — 어떤 데이터가 어떻게 쌓이는지 파악",
            "핵심 엔티티(고객, 반려견, 예약, 이용) 정의",
            "테이블 간 관계(ERD) 설계",
            "데이터 기반 운영 개선안 도출 — 고객 재방문율, 이용 패턴 분석 가능 구조 구축",
            "사업 모델 정리 — 구독형 / 패키지형 확장 방향 검토",
          ],
        },
        {
          label: "Result",
          content: [
            "DB 구조도(ERD) 및 테이블 정의서 완성",
            "운영 프로세스 개선안 도출",
            "사업 모델 정리 및 확장 방향 제안서 작성",
          ],
        },
        {
          label: "What I Learned",
          content: "서비스 운영에는 사용자 경험뿐 아니라 데이터가 일관되게 쌓이고 관리되는 구조가 반드시 필요합니다. 기획 단계에서 데이터 구조를 함께 고려해야 나중에 분석과 개선이 가능하다는 것을 이 프로젝트를 통해 배웠습니다.",
        },
      ]}
    />
  );
}
