const logos = ["NORTHWIND", "AL FAHIM GROUP", "NIMBUS FINANCE", "SOUQ CAPITAL"];

export function SocialProof() {
  return (
    <section className="border-t border-border-default py-xl32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-lg24 px-lg24">
        <p className="text-sm font-medium text-text-secondary">
          Trusted by 140+ finance teams across Dubai, Riyadh, and Bengaluru
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2xl48">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-base font-semibold tracking-wide text-[#94a3b8] transition-colors hover:text-text-primary"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
