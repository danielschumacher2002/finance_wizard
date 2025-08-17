import PageLayout from "../Layout/PageLayout";
import { Link } from "react-router";
import PrivacySection from "../components/PrivacySection";

export default function DatenSchutzPage() {
  return (
    <PageLayout>
      <Datenschutz />
    </PageLayout>
  );
}

function Datenschutz() {
  return (
    <div className="m-auto max-w-3xl text-white p-10 flex flex-col gap-8 md:text-xl">
      <h1 className="text-3xl font-extrabold border-b border-white/10 pb-4 text-special">
        Datenschutzerklärung
      </h1>

      <p className="text-sm text-gray-400 md:text-lg">
        Diese Seite erklärt, wie personenbezogene Daten beim Besuch dieser
        Website verarbeitet werden. Es handelt sich um ein einfaches,
        nicht-kommerzielles Projekt ohne Backend.
      </p>

      <Link
        className="inline-block text-lg underline text-special md:text-xl"
        to="/privacy"
      >
        Für die englische Version klicken Sie hier
      </Link>

      <PrivacySection title={"1 Verantwortlicher"}>
        <p>Daniel Schumacher</p>
        <p>Am Rehwechsel 4</p>
        <p>73577 Ruppertshofen, Deutschland</p>
        <p>
          E-Mail:{" "}
          <a
            className="underline"
            href="mailto:daniel.schumacher.2024@gmail.com"
          >
            daniel.schumacher.2024@gmail.com
          </a>
        </p>
      </PrivacySection>

      <PrivacySection title={"2 Zweck & Umfang"}>
        <p>
          Diese Seite stellt ein minimales Tool zur Berechnung und
          Visualisierung von Zahlen bereit. Alle eingegebenen Werte werden{" "}
          <span className="text-white font-medium">lokal in Ihrem Browser</span>{" "}
          verarbeitet. Es findet{" "}
          <span className="text-white font-medium">
            keine Kommunikation mit einem Backend
          </span>{" "}
          und keine serverseitige Speicherung statt.
        </p>
      </PrivacySection>

      <PrivacySection title={"3 Hosting & Server-Logs (GitHub Pages)"}>
        <p>
          Die Website wird auf{" "}
          <span className="text-white font-medium">GitHub Pages</span> gehostet.
          Beim Aufruf der Seite kann GitHub (als Hosting-Anbieter) technische
          Server-Log-Daten verarbeiten (z. B. IP-Adresse, Datum/Uhrzeit,
          angeforderte URL, Referrer, User Agent), um die Seite bereitzustellen
          und die Sicherheit zu gewährleisten. Rechtsgrundlage gemäß DSGVO ist
          Art. 6 Abs. 1 lit. f (berechtigtes Interesse an einer stabilen und
          sicheren Bereitstellung). Die Dauer der Speicherung wird von GitHub
          bestimmt.
        </p>
      </PrivacySection>

      <PrivacySection title={"4 Cookies & Local Storage"}>
        <p>
          Es werden keine Analyse- oder Marketing-Cookies eingesetzt. Die Seite
          kann den <span className="text-white font-medium">Local Storage</span>{" "}
          Ihres Browsers nutzen, um einfache UI-Zustände zu speichern (z. B.
          geöffnete Menüs oder temporäre Formulareingaben). Diese Daten bleiben
          auf Ihrem Gerät und können über die Browser-Einstellungen gelöscht
          werden.
        </p>
      </PrivacySection>

      <PrivacySection title={"5 Eingaben in Rechnern"}>
        <p>
          Eingaben, die Sie in die Rechner machen, werden ausschließlich in der
          aktuellen Browsersitzung verarbeitet, um Ergebnisse darzustellen. Sie
          werden nicht an einen Server übertragen.
        </p>
      </PrivacySection>

      <PrivacySection title={"6 Externe Links (GitHub-Repository)"}>
        <p>
          Die Navigation enthält einen Link zu meinem GitHub-Repository. Sobald
          Sie diesen anklicken, verlassen Sie diese Website. Für eine etwaige
          Datenverarbeitung ist GitHub verantwortlich.
        </p>
      </PrivacySection>

      <PrivacySection title={"7 Kontakt"}>
        <p>
          Wenn Sie mich per E-Mail kontaktieren, verarbeite ich die von Ihnen
          angegebenen Daten ausschließlich zur Bearbeitung Ihrer Anfrage und
          lösche sie, sobald sie nicht mehr benötigt werden, sofern keine
          gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
      </PrivacySection>

      <PrivacySection title={"8 Ihre Rechte (DSGVO)"}>
        <ul className="list-disc pl-6 space-y-1">
          <li>Recht auf Auskunft, Berichtigung und Löschung</li>
          <li>
            Recht auf Einschränkung der Verarbeitung und Datenübertragbarkeit
          </li>
          <li>
            Widerspruchsrecht gegen Verarbeitung auf Grundlage berechtigter
            Interessen
          </li>
          <li>Beschwerderecht bei einer Aufsichtsbehörde</li>
        </ul>
      </PrivacySection>

      <PrivacySection title={"9 Änderungen dieser Datenschutzerklärung"}>
        <p>
          Diese Erklärung wird angepasst, falls sich die Funktionalität der
          Website oder rechtliche Anforderungen ändern.
        </p>
      </PrivacySection>

      <p className="text-sm text-gray-500">Stand: 17. August 2025</p>
    </div>
  );
}
