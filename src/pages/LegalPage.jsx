import Footer from "../components/Footer";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Overlay from "../components/Overlay";
import MainLayout from "../layouts/MainLayout";
import MainLayoutInner from "../layouts/MainLayoutInner";
import { idIconPath } from "../assets/data/iconPath";
import useSideMenu from "../hooks/SideMenuHook";
import ContentContainer from "../components/ContentContainer";
import { Link } from "react-router-dom";
import { LegalParagraph } from "../components/LegalParagraph";
import LegalPrivacySectionHeadLine from "../components/LegalPrivacySectionHeadLine";
import { LegalPrivacySection } from "../components/LegalPrivacySection";
import PageBanner from "../components/PageBanner";
import LegalPrivacyImportantLink from "../components/LegalPrivacyImportantLink";

export default function LegalPage() {
  const [menuOpen, toggleSideMenu] = useSideMenu();

  return (
    <MainLayout>
      {/* Sind fixed */}
      <Header toggleSideMenu={toggleSideMenu}></Header>
      <SideMenu isOpen={menuOpen}></SideMenu>
      <Overlay isActive={menuOpen} toggleFunc={toggleSideMenu}></Overlay>
      <MainLayoutInner>
        <PageBanner path={idIconPath}></PageBanner>

        <div
          className="bg-secondary rounded-sm
                        flex flex-col gap-8 sm:gap-10
                        p-4 sm:p-6"
        >
          <LegalPrivacySection>
            <h1 className="text-primary text-2xl font-[Inter] font-bold tracking-wide sm:text-3xl">
              Legal Notice
            </h1>

            <LegalPrivacyImportantLink
              to={"/impressum"}
              text={"Hier klicken für die deutsche Version"}
            ></LegalPrivacyImportantLink>
          </LegalPrivacySection>

          <LegalPrivacySection>
            <LegalPrivacySectionHeadLine>
              Controller
            </LegalPrivacySectionHeadLine>

            <div>
              <LegalParagraph>Daniel Schumacher</LegalParagraph>
              <LegalParagraph>Am Rehwechsel 4</LegalParagraph>
              <LegalParagraph>73577 Ruppertshofen</LegalParagraph>
            </div>
          </LegalPrivacySection>

          <LegalPrivacySection>
            <LegalPrivacySectionHeadLine>Contact</LegalPrivacySectionHeadLine>

            <div>
              <LegalParagraph>Telefon: +49 17647230184</LegalParagraph>
              <LegalParagraph>
                E-Mail: danielschumacher2025@proton.me
              </LegalParagraph>
            </div>
          </LegalPrivacySection>

          <LegalPrivacySection>
            <LegalPrivacySectionHeadLine>
              Editorial responsibility
            </LegalPrivacySectionHeadLine>
            <div>
              <LegalParagraph>Daniel Schumacher</LegalParagraph>
              <LegalParagraph>Am Rehwechsel 4</LegalParagraph>
              <LegalParagraph>73577 Ruppertshofen</LegalParagraph>
            </div>
          </LegalPrivacySection>

          <LegalParagraph>
            <div>Source:</div>

            <LegalPrivacyImportantLink
              to={"https://www.e-recht24.de/"}
              text={"https://www.e-recht24.de"}
            ></LegalPrivacyImportantLink>
          </LegalParagraph>

          <LegalPrivacySection>
            <LegalPrivacySectionHeadLine>
              Liability for Links
            </LegalPrivacySectionHeadLine>

            <div>
              <LegalParagraph>
                Our website contains links to external third-party websites,
                over whose content we have no control. Therefore, we cannot
                assume any liability for such external content. The respective
                provider or operator of the linked websites is always
                responsible for their content. The linked pages were checked for
                possible legal violations at the time the link was created. No
                unlawful content was recognizable at that time. However,
                continuous monitoring of the linked pages is not reasonable
                without concrete evidence of a violation. Should we become aware
                of any legal infringement, we will remove such links
                immediately.
              </LegalParagraph>
            </div>
          </LegalPrivacySection>

          <LegalPrivacySection>
            <LegalPrivacySectionHeadLine>
              Liability for Content
            </LegalPrivacySectionHeadLine>

            <div>
              <LegalParagraph>
                As the provider of this website, we are responsible for our own
                content on these pages in accordance with applicable laws (§ 7
                (1) TMG). According to §§ 8 to 10 TMG, however, we are not
                obliged to permanently monitor third-party information that has
                been transmitted or stored, nor to actively investigate
                circumstances that may indicate unlawful activity. Obligations
                to remove or block the use of information in accordance with
                general legal provisions remain unaffected. Any liability in
                this respect is only possible from the point in time when we
                become aware of a specific infringement. As soon as we are
                informed of such a violation, we will promptly remove the
                affected content.
              </LegalParagraph>
            </div>
          </LegalPrivacySection>
        </div>

        <Footer></Footer>
      </MainLayoutInner>
    </MainLayout>
  );
}
