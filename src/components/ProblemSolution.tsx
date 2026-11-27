import { Card } from "./Card";
import { Section } from "./Section";

const cards = [
  {
    title: "Manual Follow-Ups",
    body: "Replace awkward Excel tracking and manual emails with polite, automated WhatsApp & email nudges.",
  },
  {
    title: "Cross-Border Friction",
    body: "Collect payments locally in AED, SAR, or INR without manual FX reconciliation headaches.",
  },
  {
    title: "Zero Cash-Flow Blindspots",
    body: "See exact 30/60/90-day incoming cash projections on one clean dashboard.",
  },
];

export function ProblemSolution() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-lg24 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title} title={card.title}>
            {card.body}
          </Card>
        ))}
      </div>
    </Section>
  );
}
