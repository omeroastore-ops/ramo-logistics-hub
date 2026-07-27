import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/cookiebeleid")({
  head: () => ({
    meta: [
      { title: "Cookiebeleid — RAMO TRANSPORT BV" },
      { name: "description", content: "Cookiebeleid van RAMO TRANSPORT BV: welke cookies wij plaatsen en hoe u uw voorkeuren kunt beheren." },
      { property: "og:title", content: "Cookiebeleid — RAMO TRANSPORT BV" },
      { property: "og:url", content: "/cookiebeleid" },
    ],
    links: [{ rel: "canonical", href: "/cookiebeleid" }],
  }),
  component: () => (
    <LegalLayout title="Cookiebeleid" updated="27/07/2026">
      <p>{COMPANY.legalName} gebruikt cookies en gelijkaardige technologieën op ramo-transport.be conform de Belgische Wet van 13 juni 2005 (Wet Elektronische Communicatie) en de AVG.</p>

      <h2>1. Wat zijn cookies</h2>
      <p>Cookies zijn kleine tekstbestanden die op uw toestel worden opgeslagen wanneer u onze website bezoekt, om functionaliteit en gebruikservaring te verbeteren.</p>

      <h2>2. Categorieën</h2>
      <ul>
        <li><strong>Essentiële cookies</strong> — noodzakelijk voor het functioneren van de website (bv. taalvoorkeur, cookie-consent). Geen toestemming vereist.</li>
        <li><strong>Analytische cookies</strong> — geanonimiseerde statistieken over sitegebruik. Enkel geplaatst na toestemming.</li>
        <li><strong>Functionele cookies</strong> — onthouden van voorkeuren zoals taal en regio.</li>
      </ul>

      <h2>3. Beheer van voorkeuren</h2>
      <p>U kan uw voorkeuren aanpassen via de cookie-banner of via de instellingen van uw browser. Het uitschakelen van bepaalde cookies kan de functionaliteit beperken.</p>

      <h2>4. Bewaartermijn</h2>
      <p>Cookies worden bewaard voor een periode van maximaal 12 maanden.</p>

      <h2>5. Contact</h2>
      <p>Vragen kunnen worden gericht aan <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
    </LegalLayout>
  ),
});
