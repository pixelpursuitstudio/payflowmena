import { Button } from "./Button";
import { Section } from "./Section";

export function BottomCta() {
  return (
    <Section className="flex flex-col items-center gap-xl32 border-t border-border-default text-center">
      <h2 className="max-w-md text-3xl font-semibold text-text-primary sm:text-4xl">
        Ready to Cut Your Receivables Time in Half?
      </h2>
      <Button
        href="/demo"
        size="large"
        variant="primary"
        className="w-full justify-center text-center sm:w-auto"
      >
        Schedule Your Custom Walkthrough
      </Button>
    </Section>
  );
}
