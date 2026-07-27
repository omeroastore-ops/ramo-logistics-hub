import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/juridische-vermeldingen")({
  head: () => ({
    meta: [
      { title: "Juridische Vermeldingen — RAMO TRANSPORT BV" },
      { name: "description", content: "Wettelijke bedrijfsinformatie van RAMO TRANSPORT BV: KBO, BTW, zetel, zaakvoerder en bevoegde rechtbank." },
      { property: "og:title", content: "Juridische Vermeldingen — RAMO TRANSPORT BV" },
      { property: "og:url", content: "/juridische-vermeldingen" },
    ],
    links: [{ rel: "canonical", href: "/juridische-vermeldingen" }],
  }),
  component: () => (
    <LegalLayout title="Juridische Vermeldingen">
      <h2>Bedrijfsinformatie</h2>
      <ul>
        <li><strong>Handelsnaam:</strong> {COMPANY.legalName}</li>
        <li><strong>Rechtsvorm:</strong> {COMPANY.form}</li>
        <li><strong>Zaakvoerder:</strong> {COMPANY.director}</li>
        <li><strong>Zetel:</strong> {COMPANY.address.street}, {COMPANY.address.postal} {COMPANY.address.city}, {COMPANY.address.country}</li>
        <li><strong>KBO-nummer:</strong> {COMPANY.kbo}</li>
        <li><strong>BTW-nummer:</strong> {COMPANY.btw}</li>
        <li><strong>Telefoon:</strong> <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a></li>
        <li><strong>E-mail:</strong> <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
        <li><strong>Bevoegde rechtbank:</strong> {COMPANY.jurisdiction}</li>
      </ul>

      <h2>Intellectuele eigendom</h2>
      <p>Alle inhoud op deze website (teksten, logo's, beeldmateriaal, grafisch ontwerp) is beschermd door het auteursrecht en behoort toe aan {COMPANY.legalName}. Reproductie, geheel of gedeeltelijk, is verboden zonder voorafgaande schriftelijke toestemming.</p>

      <h2>Hostingsverantwoordelijke</h2>
      <p>Deze website wordt gehost door de dienstverlener van {COMPANY.legalName}. Voor technische vragen: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>

      <h2>Aansprakelijkheid</h2>
      <p>Ondanks alle zorg die aan deze website wordt besteed, kan {COMPANY.legalName} niet aansprakelijk worden gesteld voor eventuele onjuistheden of onvolledigheden. Externe links worden verstrekt ter informatie; wij oefenen geen controle uit op de inhoud van deze sites.</p>
    </LegalLayout>
  ),
});
