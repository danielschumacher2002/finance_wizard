import PageLayout from "../Layout/PageLayout";
import NoticeText from "../components/NoticeText";

export default function ImpressumPage() {
  const legalNoticeContent = {
    title: "Impressum",
    switchLink: { to: "/finance_wizard/notice", label: "For the English version click here" },
    blocks: [
      {
        type: "lines",
        heading: "Angaben gemäß § 5 TMG",
        lines: ["Daniel Schumacher", "Am Rehwechsel 4", "73577 Ruppertshofen"],
      },
      {
        type: "contact",
        items: [
          {
            label: "Telefon",
            value: "+49 7176 448198",
            href: "tel:+497176448198",
          },
          {
            label: "E-Mail",
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
