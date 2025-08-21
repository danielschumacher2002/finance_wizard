import Footer from "../components/Footer";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Overlay from "../components/Overlay";
import MainLayout from "../layouts/MainLayout";
import MainLayoutInner from "../layouts/MainLayoutInner";
import { dataPrivacy } from "../assets/data/iconPath";
import useSideMenu from "../hooks/SideMenuHook";
import { Link } from "react-router-dom";
import { LegalParagraph } from "../components/LegalParagraph";
import LegalPrivacySectionHeadLine from "../components/LegalPrivacySectionHeadLine";
import { LegalPrivacySection } from "../components/LegalPrivacySection";
import { LegalPrivacySectionSubHeadLine } from "../components/LegalPrivacySectionSubHeadLine";
import { LegalPrivacySectionSubSubHeadLine } from "../components/LegalPrivacySectionSubSubHeadLine";
import PageBanner from "../components/PageBanner";
import LegalPrivacyImportantLink from "../components/LegalPrivacyImportantLink";
import LegalPrivacyList from "../components/LegalPrivacyList";

export default function DataPrivacy() {
  const [menuOpen, toggleSideMenu] = useSideMenu();

  const rights = [
    "Right to withdraw consent (Art. 7 GDPR)",
    "Right to object to processing (Art. 21 GDPR), including to direct marketing",
    "Right to lodge a complaint with a supervisory authority (Art. 77 GDPR)",
    "Right to data portability (Art. 20 GDPR)",
    "Right of access, rectification, erasure, and restriction (Arts. 15–18 GDPR)",
  ];

  const serverInfo = [
    "Browser type and version",
    "Operating system used",
    "Referrer URL",
    "Hostname of the accessing computer",
    "Time of the server request",
    "IP address",
  ];

  return (
    <MainLayout>
      {/* Sind fixed */}
      <Header toggleSideMenu={toggleSideMenu}></Header>
      <SideMenu isOpen={menuOpen}></SideMenu>
      <Overlay isActive={menuOpen} toggleFunc={toggleSideMenu}></Overlay>
      <MainLayoutInner>
        <PageBanner path={dataPrivacy}></PageBanner>

        <div
          className="bg-secondary rounded-sm
                        flex flex-col gap-8 sm:gap-10
                        p-4 sm:p-6"
        >
          <LegalPrivacySection>
            <h1 className="text-primary text-2xl font-[Inter] font-bold tracking-wide sm:text-3xl">
              Privacy Policy
            </h1>

            <LegalPrivacyImportantLink
              to={"/datenschutz"}
              text={"Hier klicken für die deutsche Version"}
            ></LegalPrivacyImportantLink>
          </LegalPrivacySection>

          <LegalPrivacySection>
            <LegalPrivacySectionHeadLine>
              1. Data protection at a glance
            </LegalPrivacySectionHeadLine>
            <LegalPrivacySectionSubHeadLine>
              General information
            </LegalPrivacySectionSubHeadLine>
            <LegalParagraph>
              The following notes provide a simple overview of what happens to
              your personal data when you visit this website. Personal data
              means all data with which you can be personally identified.
              Detailed information on the subject of data protection can be
              found in the privacy policy set out below.
            </LegalParagraph>

            <LegalPrivacySectionSubHeadLine>
              Data collection on this website
            </LegalPrivacySectionSubHeadLine>

            <LegalPrivacySectionSubSubHeadLine>
              Who is responsible for data collection on this website?
            </LegalPrivacySectionSubSubHeadLine>

            <LegalParagraph>
              Data processing on this website is carried out by the website
              operator. The operator’s contact details can be found in the
              section “Information on the Controller” of this privacy policy.
            </LegalParagraph>

            <LegalPrivacySectionSubSubHeadLine>
              How do we collect your data?
            </LegalPrivacySectionSubSubHeadLine>

            <LegalParagraph>
              On the one hand, your data is collected when you provide it to us.
              This may, for example, be data you enter into a contact form.
            </LegalParagraph>
            <LegalParagraph>
              Other data is collected automatically or after your consent when
              visiting the website through our IT systems. These are mainly
              technical data (e.g. browser type, operating system, time of
              access). The collection of this data occurs automatically as soon
              as you access this website.
            </LegalParagraph>

            <LegalPrivacySectionSubSubHeadLine>
              What do we use your data for?
            </LegalPrivacySectionSubSubHeadLine>

            <LegalParagraph>
              Some of the data is collected to ensure error-free provision of
              the website. Other data may be used to analyze your user behavior.
              Where contracts can be concluded or initiated via the website, the
              data provided will also be processed for contract offers, orders,
              or other inquiries.
            </LegalParagraph>

            <LegalPrivacySectionSubSubHeadLine>
              What rights do you have regarding your data?
            </LegalPrivacySectionSubSubHeadLine>

            <LegalParagraph>
              You have the right at any time to receive free information about
              the origin, recipients, and purpose of your stored personal data.
              You also have the right to request the rectification or deletion
              of this data. If you have given your consent to data processing,
              you may revoke this consent at any time with future effect.
              Furthermore, you have the right, under certain circumstances, to
              request the restriction of processing of your personal data. You
              also have the right to lodge a complaint with the competent
              supervisory authority. You can contact us at any time regarding
              this and other questions about data protection.
            </LegalParagraph>
          </LegalPrivacySection>

          <LegalPrivacySection>
            <LegalPrivacySectionHeadLine>
              2. Hosting
            </LegalPrivacySectionHeadLine>

            <LegalPrivacySectionSubHeadLine>
              External Hosting
            </LegalPrivacySectionSubHeadLine>

            <LegalParagraph>
              This website is hosted externally. Personal data collected on this
              website is stored on the servers of the hosting provider(s). This
              may include IP addresses, contact requests, meta and communication
              data, contract data, contact details, names, website access data,
              and other data generated via a website.
            </LegalParagraph>

            <LegalParagraph>
              External hosting is carried out for the purpose of fulfilling
              contracts with our potential and existing customers (Art. 6 (1)
              lit. b GDPR) and in the interest of secure, fast, and efficient
              provision of our online offering by a professional provider (Art.
              6 (1) lit. f GDPR). Where consent has been requested, processing
              is based exclusively on Art. 6 (1) lit. a GDPR and § 25 (1) TDDDG,
              insofar as the consent includes the storage of cookies or access
              to information in the user’s device (e.g. device fingerprinting).
              Consent can be revoked at any time.
            </LegalParagraph>

            <LegalParagraph>
              Our hosting provider will process your data only to the extent
              necessary to fulfill its contractual obligations and in accordance
              with our instructions.
            </LegalParagraph>

            <LegalParagraph>
              We use the following hosting provider:
            </LegalParagraph>

            <div>
              <LegalParagraph>GitHub, Inc.</LegalParagraph>
              <LegalParagraph>88 Colin P. Kelly Jr. Street</LegalParagraph>
              <LegalParagraph>San Francisco, CA 94107</LegalParagraph>
              <LegalParagraph>United States</LegalParagraph>
            </div>
          </LegalPrivacySection>

          <LegalPrivacySection>
            <LegalPrivacySectionHeadLine>
              3. General information and mandatory details
            </LegalPrivacySectionHeadLine>

            <LegalPrivacySectionSubHeadLine>
              Data protection
            </LegalPrivacySectionSubHeadLine>

            <LegalParagraph>
              The operators of this website take the protection of your personal
              data very seriously. We treat your personal data confidentially
              and in accordance with the statutory data protection regulations
              and this privacy policy.
            </LegalParagraph>

            <LegalParagraph>
              When you use this website, various personal data are collected.
              This privacy policy explains what data we collect and what we use
              it for. It also explains how and for what purpose this is done.
            </LegalParagraph>

            <LegalParagraph>
              We would like to point out that data transmission on the Internet
              (e.g. communication by e-mail) may have security gaps. Complete
              protection of the data against access by third parties is not
              possible.
            </LegalParagraph>

            <LegalPrivacySectionSubHeadLine>
              Information on the Controller
            </LegalPrivacySectionSubHeadLine>

            <div>
              <LegalParagraph>Daniel Schumacher</LegalParagraph>
              <LegalParagraph>Am Rehwechsel 4</LegalParagraph>
              <LegalParagraph>73577 Ruppertshofen</LegalParagraph>
              <LegalParagraph>Phone: +49 7176448198</LegalParagraph>
              <LegalParagraph>
                E-Mail: danielschumacher2025@proton.me
              </LegalParagraph>
            </div>

            <LegalParagraph>
              The controller is the natural or legal person who alone or jointly
              with others decides on the purposes and means of processing
              personal data (e.g. names, e-mail addresses, etc.).
            </LegalParagraph>

            <LegalPrivacySectionSubHeadLine>
              Storage duration
            </LegalPrivacySectionSubHeadLine>

            <LegalParagraph>
              Unless a more specific storage period has been stated in this
              privacy policy, your personal data will remain with us until the
              purpose for processing ceases. If you make a legitimate request
              for deletion or revoke your consent to processing, your data will
              be deleted unless we have other legally permissible reasons for
              storing it (e.g. retention periods under tax or commercial law);
              in the latter case, deletion takes place after these reasons no
              longer apply.
            </LegalParagraph>

            <LegalPrivacySectionSubHeadLine>
              Legal bases for data processing
            </LegalPrivacySectionSubHeadLine>

            <LegalParagraph>
              If you have given your consent to data processing, we process your
              personal data on the basis of Art. 6 (1) lit. a GDPR or Art. 9 (2)
              lit. a GDPR if special categories of data are processed. In case
              of explicit consent to transfer personal data to third countries,
              processing is also based on Art. 49 (1) lit. a GDPR. If you have
              consented to the storage of cookies or access to information on
              your device, processing is additionally based on § 25 (1) TDDDG.
              Consent may be revoked at any time.
            </LegalParagraph>

            <LegalParagraph>
              If your data is required for the performance of a contract or
              pre-contractual measures, we process it based on Art. 6 (1) lit. b
              GDPR. If processing is required for compliance with a legal
              obligation, we process it on Art. 6 (1) lit. c GDPR. Data may also
              be processed on the basis of our legitimate interest (Art. 6 (1)
              lit. f GDPR). The relevant legal basis in each case is explained
              in this privacy policy.
            </LegalParagraph>

            <LegalPrivacySectionSubHeadLine>
              Recipients of personal data
            </LegalPrivacySectionSubHeadLine>

            <LegalParagraph>
              In the course of our business activities we work with various
              external parties. Personal data is transferred only if necessary
              for fulfilling a contract, if we are legally required to do so, if
              we have a legitimate interest, or if there is another legal basis.
              Where processors are used, data is passed on only on the basis of
              a valid processing agreement. In the case of joint processing, a
              joint controller agreement is concluded.
            </LegalParagraph>

            <LegalPrivacySectionSubHeadLine>
              Your rights
            </LegalPrivacySectionSubHeadLine>

            <LegalPrivacyList items={rights}></LegalPrivacyList>

            <LegalPrivacySectionSubHeadLine>
              SSL/TLS encryption
            </LegalPrivacySectionSubHeadLine>

            <LegalParagraph>
              For security reasons and to protect the transmission of
              confidential content, this site uses SSL/TLS encryption. You can
              recognize an encrypted connection by the address line of the
              browser changing from “http://” to “https://” and by the lock
              symbol in your browser line. With encryption enabled, data you
              transmit to us cannot be read by third parties.
            </LegalParagraph>
          </LegalPrivacySection>

          <LegalPrivacySection>
            <LegalPrivacySectionHeadLine>
              4. Data collection on this website
            </LegalPrivacySectionHeadLine>

            <LegalPrivacySectionSubHeadLine>
              Server log files
            </LegalPrivacySectionSubHeadLine>

            <LegalParagraph>
              The provider of the website automatically collects and stores
              information in so-called server log files, which your browser
              automatically transmits. These include:
            </LegalParagraph>

            <LegalPrivacyList items={serverInfo}></LegalPrivacyList>

            <LegalParagraph>
              These data are not merged with other data sources. Collection is
              based on Art. 6 (1) lit. f GDPR: The website operator has a
              legitimate interest in the technically error-free presentation and
              optimization of the website. For this, the server log files must
              be collected.
            </LegalParagraph>

            <LegalPrivacySectionSubHeadLine>
              Requests by e-mail or phone
            </LegalPrivacySectionSubHeadLine>

            <LegalParagraph>
              If you contact us by e-mail or phone, your inquiry including all
              personal data provided (name, inquiry) will be stored and
              processed for the purpose of handling your request. This data will
              not be passed on without your consent.
            </LegalParagraph>

            <LegalParagraph>
              The processing of these data is based on Art. 6 (1) lit. b GDPR if
              your request is related to contract fulfillment or necessary for
              pre-contractual measures. In all other cases, processing is based
              on our legitimate interest (Art. 6 (1) lit. f GDPR) or on your
              consent (Art. 6 (1) lit. a GDPR) if requested. Consent can be
              revoked at any time.
            </LegalParagraph>

            <LegalParagraph>
              The data you send us via contact requests will remain with us
              until you request deletion, revoke your consent, or the purpose
              for data storage no longer applies. Mandatory legal provisions, in
              particular statutory retention periods, remain unaffected.
            </LegalParagraph>
          </LegalPrivacySection>

          <LegalParagraph>
            <div>Source:</div>

            <LegalPrivacyImportantLink
              to={"https://www.e-recht24.de/"}
              text={"https://www.e-recht24.de"}
            ></LegalPrivacyImportantLink>
          </LegalParagraph>
        </div>

        <Footer></Footer>
      </MainLayoutInner>
    </MainLayout>
  );
}
