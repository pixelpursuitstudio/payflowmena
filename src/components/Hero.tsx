import { Button } from "./Button";
import { Section } from "./Section";

export function Hero() {
  return (
    <Section className="flex flex-col items-center gap-lg24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent-default">
        For Finance Teams in UAE &amp; India
      </p>
      <h1 className="max-w-3xl text-4xl font-bold leading-tight text-text-primary sm:text-5xl md:text-6xl">
        Stop Chasing Late Invoices. Get Paid 3x Faster Automatically.
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-text-secondary">
        Automated WhatsApp &amp; email payment reminders, multi-currency
        reconciliation (AED, SAR, INR), and instant payment links&mdash;built
        for growing B2B teams.
      </p>
      <div className="flex w-full flex-col items-center gap-md16 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
        <Button
          href="mailto:demo@payflowmena.com?subject=15-Minute%20Demo%20Request"
          size="large"
          variant="primary"
          className="w-full justify-center text-center sm:w-auto"
        >
          Book a 15-Min Live Demo
        </Button>
        <Button
          href="#calculator"
          size="large"
          variant="secondary"
          className="w-full justify-center text-center sm:w-auto"
        >
          Try the Late-Payment Calculator ↓
        </Button>
      </div>
    </Section>
  );
}
