import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/privacybeleid")({
  head: () => ({
    meta: [
      { title: "Privacybeleid — RAMO TRANSPORT BV (AVG / GDPR)" },
      { name: "description", content: "Privacybeleid van RAMO TRANSPORT BV conform de Europese Algemene Verordening Gegevensbescherming (AVG/GDPR) en de Belgische GBA." },
      { property: "og:title", content: "Privacybeleid — RAMO TRANSPORT BV" },
      { property: "og:url", content: "/privacybeleid" },
    ],
    links: [{ rel: "canonical", href: "/privacybeleid" }],
  }),
  component: () => (
    <LegalLayout title="Privacybeleid" updated="27/07/2026">
      <p>Dit privacybeleid beschrijft hoe {COMPANY.legalName} ("wij", "ons") persoonsgegevens verzamelt, gebruikt en beschermt in overeenstemming met de Algemene Verordening Gegevensbescherming (Verordening (EU) 2016/679, "AVG/GDPR") en de Belgische Wet van 30 juli 2018 betreffende de bescherming van natuurlijke personen met betrekking tot de verwerking van persoonsgegevens.</p>

      <h2>1. Verwerkingsverantwoordelijke</h2>
      <p>{COMPANY.legalName} ({COMPANY.form}) — {COMPANY.address.street}, {COMPANY.address.postal} {COMPANY.address.city}, België. KBO: {COMPANY.kbo} — BTW: {COMPANY.btw}. Contact: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>

      <h2>2. Welke gegevens verzamelen wij</h2>
      <ul>
        <li>Identificatie: naam, bedrijfsnaam, functie.</li>
        <li>Contactgegevens: e-mail, telefoonnummer, adres.</li>
        <li>Transportgegevens: ophaal- en leveringsadressen, referenties, ladingdetails.</li>
        <li>Technische gegevens: IP-adres, browsertype, geanonimiseerde analytics.</li>
      </ul>

      <h2>3. Rechtsgronden</h2>
      <p>Wij verwerken uw gegevens op basis van (a) uw toestemming, (b) de uitvoering van een overeenkomst, (c) wettelijke verplichtingen (transport, boekhouding), of (d) ons gerechtvaardigd belang bij een efficiënte dienstverlening.</p>

      <h2>4. Bewaartermijn</h2>
      <p>Persoonsgegevens worden bewaard zolang noodzakelijk voor de dienstverlening en de wettelijke bewaartermijnen (o.a. 7 jaar voor boekhoudkundige stukken).</p>

      <h2>5. Uw rechten</h2>
      <p>U beschikt over het recht op inzage, rectificatie, wissing, beperking, bezwaar en overdraagbaarheid. U kunt deze rechten uitoefenen via <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. U heeft ook het recht klacht neer te leggen bij de Gegevensbeschermingsautoriteit (GBA), Drukpersstraat 35, 1000 Brussel — <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noreferrer noopener">gegevensbeschermingsautoriteit.be</a>.</p>

      <h2>6. Doorgifte aan derden</h2>
      <p>Gegevens worden enkel gedeeld met verwerkers die noodzakelijk zijn voor onze dienstverlening (IT, hosting, boekhouding, transportpartners) onder een verwerkersovereenkomst conform art. 28 AVG.</p>

      <h2>7. Beveiliging</h2>
      <p>Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen ongeautoriseerde toegang, verlies of misbruik.</p>

      <h2>8. Wijzigingen</h2>
      <p>Wij kunnen dit beleid aanpassen. De meest recente versie is steeds beschikbaar op deze pagina.</p>
    </LegalLayout>
  ),
});
