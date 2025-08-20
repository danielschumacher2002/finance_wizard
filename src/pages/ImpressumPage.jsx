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

export default function ImpressumPage() {
  const [menuOpen, toggleSideMenu] = useSideMenu();

  return (
    <MainLayout>
      {/* Sind fixed */}
      <Header toggleSideMenu={toggleSideMenu} />
      <SideMenu isOpen={menuOpen} />
      <Overlay isActive={menuOpen} toggleFunc={toggleSideMenu} />
      <MainLayoutInner>
        <div
          className="bg-secondary rounded-sm
                                flex items-center justify-center"
        >
          <svg
            className="fill-primary
                                    size-1/4
                                    m-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            {/*Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com
                            License - https://fontawesome.com/license/free Copyright 2025
                            Fonticons, Inc.*/}
            <path d={idIconPath} />
          </svg>
        </div>

        <div className="bg-secondary rounded-sm flex flex-col gap-8 sm:gap-10 p-4 sm:p-6">
          <LegalPrivacySection>
            <h1 className="text-primary text-2xl font-[Inter] font-bold tracking-wide sm:text-3xl">
              Impressum
            </h1>
            <p className="text-white/80 text-md font-[Inter] font-bold tracking-wide sm:text-lg">
              Angaben gemäß § 5 DDG
            </p>

            {/* Sprachwechsel zurück zur EN-Seite */}
            <Link
              to="/legal"
              className="text-primary text-md font-[Inter] font-bold tracking-wide underline sm:text-lg"
            >
              Click here for the English version
            </Link>
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
              <LegalParagraph>
                E-Mail: danielschumacher2025@proton.me
              </LegalParagraph>
              <LegalParagraph>Telefon: +49 17647230184</LegalParagraph>
            </div>
          </LegalPrivacySection>

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
