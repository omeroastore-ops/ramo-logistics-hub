import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/algemene-voorwaarden")({
  head: () => ({
    meta: [
      { title: "Algemene Voorwaarden — RAMO TRANSPORT BV" },
      { name: "description", content: "Algemene voorwaarden voor transport- en logistieke diensten van RAMO TRANSPORT BV, onder Belgisch recht en CMR-conventie." },
      { property: "og:title", content: "Algemene Voorwaarden — RAMO TRANSPORT BV" },
      { property: "og:url", content: "/algemene-voorwaarden" },
    ],
    links: [{ rel: "canonical", href: "/algemene-voorwaarden" }],
  }),
  component: () => (
    <LegalLayout title="Algemene Voorwaarden" updated="27/07/2026">
      <p>Deze algemene voorwaarden zijn van toepassing op alle diensten geleverd door {COMPANY.legalName}, met zetel te {COMPANY.address.street}, {COMPANY.address.postal} {COMPANY.address.city}, ingeschreven onder KBO {COMPANY.kbo} — BTW {COMPANY.btw}.</p>

      <h2>1. Toepasselijk recht</h2>
      <p>Alle overeenkomsten worden beheerst door het Belgisch recht. Nationaal wegvervoer valt onder de Wet van 15 juli 2013. Internationaal wegvervoer valt onder de CMR-conventie (Verdrag van Genève van 19 mei 1956).</p>

      <h2>2. Offertes en overeenkomsten</h2>
      <p>Offertes zijn geldig gedurende 30 dagen, tenzij anders vermeld. Een overeenkomst komt tot stand na schriftelijke bevestiging door beide partijen.</p>

      <h2>3. Uitvoering van transport</h2>
      <p>De opdrachtgever staat in voor de correcte aangifte van aard, gewicht en verpakking van de goederen. Gevaarlijke goederen (ADR) worden enkel vervoerd na uitdrukkelijke schriftelijke aanvaarding.</p>

      <h2>4. Aansprakelijkheid</h2>
      <p>Onze aansprakelijkheid is beperkt tot de bedragen bepaald in de CMR-conventie (8,33 SDR per kg beschadigd of verloren gegaan brutogewicht) voor internationaal transport, en tot de wettelijke plafonds voor nationaal transport.</p>

      <h2>5. Prijzen en betaling</h2>
      <p>Facturen zijn betaalbaar binnen 30 dagen na factuurdatum. Bij niet-betaling worden verwijlintresten aangerekend conform de Wet van 2 augustus 2002 betreffende de bestrijding van betalingsachterstand bij handelstransacties, verhoogd met een forfaitaire schadevergoeding van 10 % met een minimum van € 40.</p>

      <h2>6. Overmacht</h2>
      <p>Wij zijn niet aansprakelijk voor vertragingen of niet-uitvoering ten gevolge van overmacht (stakingen, weersomstandigheden, wettelijke maatregelen, enz.).</p>

      <h2>7. Klachten</h2>
      <p>Klachten moeten schriftelijk worden ingediend binnen 7 dagen na levering, per aangetekend schrijven of via <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>

      <h2>8. Bevoegde rechtbank</h2>
      <p>Elk geschil valt onder de uitsluitende bevoegdheid van de {COMPANY.jurisdiction}.</p>
    </LegalLayout>
  ),
});
