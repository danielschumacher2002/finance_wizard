import PageLayout from "../Layout/PageLayout";
import NoticeText from "../components/NoticeText";

export default function NoticePage() {
  const legalNoticeContent = {
    title: "Legal Notice",
    switchLink: {
      to: "/finance_wizard/impressum",
      label: "For the German version click here",
    },
    blocks: [
      {
        type: "lines",
        heading: "Information according to § 5 German Telemedia Act (TMG)",
        lines: ["Daniel Schumacher", "Am Rehwechsel 4", "73577 Ruppertshofen"],
      },
      {
        type: "contact",
        items: [
          {
            label: "Phone",
            value: "+49 7176 448198",
            href: "tel:+497176448198",
          },
          {
            label: "Email",
            value: "daniel.schumacher.2024@gmail.com",
            href: "mailto:daniel.schumacher.2024@gmail.com",
          },
        ],
      },
    ],
  };

  return (
    <PageLayout>
      <NoticeText
        title={legalNoticeContent.title}
        switchLink={legalNoticeContent.switchLink}
        blocks={legalNoticeContent.blocks}
      ></NoticeText>
    </PageLayout>
  );
}
