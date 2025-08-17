import PageLayout from "../Layout/PageLayout";
import { Link } from "react-router";
import PrivacySection from "../components/PrivacySection";

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PrivacyPolicy />
    </PageLayout>
  );
}

function PrivacyPolicy() {
  return (
    <div className="m-auto max-w-3xl bg-secondary/30  text-white p-10 flex flex-col gap-8 md:text-xl">
      <h1 className="text-special text-4xl font-extrabold border-b border-white/10 pb-4">
        Privacy Policy
      </h1>

      <p className="text-sm text-gray-400 md:text-lg">
        This page explains how personal data is handled when you use this
        website. It is a simple, non-commercial project with no backend.
      </p>

      <Link
        className="inline-block text-lg underline text-special md:text-xl"
        to="/datenschutz"
      >
        For the German version click here
      </Link>

      <PrivacySection title="1 Controller">
        <p>Daniel Schumacher</p>
        <p>Am Rehwechsel 4</p>
        <p>73577 Ruppertshofen, Germany</p>
        <p>
          Email:{" "}
          <a
            className="underline"
            href="mailto:daniel.schumacher.2024@gmail.com"
          >
            daniel.schumacher.2024@gmail.com
          </a>
        </p>
      </PrivacySection>

      <PrivacySection title="2 Purpose & Scope">
        <p>
          This site provides a minimal tool to calculate and visualize numbers.
          All values you enter are processed{" "}
          <span className="text-white font-medium">
            locally in your browser
          </span>
          . There is{" "}
          <span className="text-white font-medium">
            no communication with a backend
          </span>{" "}
          and no server-side storage of your inputs.
        </p>
      </PrivacySection>

      <PrivacySection title="3 Hosting & Server Logs (GitHub Pages)">
        <p>
          The website is hosted on{" "}
          <span className="text-white font-medium">GitHub Pages</span>. When you
          access the site, GitHub (as hosting provider) may process technical
          server log data (e.g., IP address, date/time, requested URL, referrer,
          user agent) to deliver the site and ensure security. The legal basis
          under the GDPR is Art. 6(1)(f) (legitimate interests in stable and
          secure provision of the service). Log retention is determined by
          GitHub.
        </p>
      </PrivacySection>

      <PrivacySection title="4 Cookies & Local Storage">
        <p>
          No analytics or marketing cookies are used. The site may use your
          browser’s{" "}
          <span className="text-white font-medium">Local Storage</span> to keep
          simple UI states (e.g., open menus or temporary form values). These
          data remain on your device and can be cleared via your browser
          settings.
        </p>
      </PrivacySection>

      <PrivacySection title="5 Inputs in Calculators">
        <p>
          Inputs you provide in the calculators are handled only in the browser
          session to display results. They are not transmitted to a server by
          this site.
        </p>
      </PrivacySection>

      <PrivacySection title="6 External Links (GitHub Repository)">
        <p>
          The navigation includes a link to my GitHub repository. Once you click
          it, you leave this website. Any processing on GitHub is the
          responsibility of GitHub.
        </p>
      </PrivacySection>

      <PrivacySection title="7 Contact">
        <p>
          If you contact me by email, I will process the information you provide
          solely to respond to your request and delete it when no longer needed
          unless legal retention duties apply.
        </p>
      </PrivacySection>

      <PrivacySection title="8 Your Rights (GDPR)">
        <ul className="list-disc pl-6 space-y-1">
          <li>Right of access, rectification, and erasure</li>
          <li>Restriction of processing and data portability</li>
          <li>Right to object to processing based on legitimate interests</li>
          <li>Right to lodge a complaint with a supervisory authority</li>
        </ul>
      </PrivacySection>

      <PrivacySection title="9 Changes to this Policy">
        <p>
          This policy will be updated if the site’s functionality or legal
          requirements change.
        </p>
      </PrivacySection>

      <p className="text-sm text-gray-500">Last updated: 17 Aug 2025</p>
    </div>
  );
}
