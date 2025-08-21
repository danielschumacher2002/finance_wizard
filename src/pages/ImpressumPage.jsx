import Footer from "../components/Footer";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Overlay from "../components/Overlay";
import MainLayout from "../layouts/MainLayout";
import MainLayoutInner from "../layouts/MainLayoutInner";
import useSideMenu from "../hooks/SideMenuHook";
import { LegalParagraph } from "../components/LegalParagraph";
import LegalPrivacySectionHeadLine from "../components/LegalPrivacySectionHeadLine";
import { LegalPrivacySection } from "../components/LegalPrivacySection";
import { Link } from "react-router-dom";
import { idIconPath } from "../assets/data/iconPath";
import PageBanner from "../components/PageBanner";
import LegalPrivacyImportantLink from "../components/LegalPrivacyImportantLink";

export default function ImpressumPage() {
  const [menuOpen, toggleSideMenu] = useSideMenu();

  return (
    <MainLayout>
      {/* Sind fixed */}
      <Header toggleSideMenu={toggleSideMenu} />
      <SideMenu isOpen={menuOpen} />
      <Overlay isActive={menuOpen} toggleFunc={toggleSideMenu} />
      <MainLayoutInner>
        <PageBanner path={idIconPath}></PageBanner>

        <div className="bg-secondary rounded-sm flex flex-col gap-8 sm:gap-10 p-4 sm:p-6">
          <LegalPrivacySection>
            <h1 className="text-primary text-2xl font-[Inter] font-bold tracking-wide sm:text-3xl">
              Impressum
            </h1>

            <LegalPrivacyImportantLink
              to={"/legal"}
              text={"Click here for the English version"}
            ></LegalPrivacyImportantLink>
          </LegalPrivacySection>

          <LegalPrivacySection>
            <LegalPrivacySectionHeadLine>
              Verantwortlicher
            </LegalPrivacySectionHeadLine>
            <div>
              <LegalParagraph>Daniel Schumacher</LegalParagraph>
              <LegalParagraph>Am Rehwechsel 4</LegalParagraph>
              <LegalParagraph>73577 Ruppertshofen</LegalParagraph>
            </div>
          </LegalPrivacySection>

          <LegalPrivacySection>
            <LegalPrivacySectionHeadLine>Kontakt</LegalPrivacySectionHeadLine>
            <div>
              <LegalParagraph>Telefon: +49 17647230184</LegalParagraph>
              <LegalParagraph>
                E-Mail: danielschumacher2025@proton.me
              </LegalParagraph>
            </div>
          </LegalPrivacySection>

          <LegalPrivacySection>
            <LegalPrivacySectionHeadLine>
              Redaktionell verantwortlich
            </LegalPrivacySectionHeadLine>
            <div>
              <LegalParagraph>Daniel Schumacher</LegalParagraph>
              <LegalParagraph>Am Rehwechsel 4</LegalParagraph>
              <LegalParagraph>73577 Ruppertshofen</LegalParagraph>
            </div>
          </LegalPrivacySection>

          <LegalParagraph>
            <div>Quelle:</div>

            <LegalPrivacyImportantLink
              to={"https://www.e-recht24.de/"}
              text={"https://www.e-recht24.de"}
            ></LegalPrivacyImportantLink>
          </LegalParagraph>

          <LegalPrivacySection>
            <LegalPrivacySectionHeadLine>
              Haftung für Links
            </LegalPrivacySectionHeadLine>
            <LegalParagraph>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum
              Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft;
              rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar.
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </LegalParagraph>
          </LegalPrivacySection>

          <LegalPrivacySection>
            <LegalPrivacySectionHeadLine>
              Haftung für Inhalte
            </LegalPrivacySectionHeadLine>
            <LegalParagraph>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden entsprechender Rechtsverletzungen werden wir diese
              Inhalte umgehend entfernen.
            </LegalParagraph>
          </LegalPrivacySection>
        </div>

        <Footer />
      </MainLayoutInner>
    </MainLayout>
  );
}
