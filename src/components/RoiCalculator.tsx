"use client";

import { animate, motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { Button } from "./Button";
import { Section } from "./Section";

const TARGET_DAYS = 15;
const RECOVERY_FACTOR = 0.6;

function computeUnlocked(monthlyRevenue: number, daysToGetPaid: number) {
  const raw =
    (monthlyRevenue * Math.max(0, daysToGetPaid - TARGET_DAYS) * RECOVERY_FACTOR) / 30;
  return Math.round(raw / 100) * 100;
}

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function RoiCalculator() {
  const [revenue, setRevenue] = useState(120000);
  const [days, setDays] = useState(45);
  const target = computeUnlocked(revenue, days);

  const displayed = useMotionValue(target);
  const [displayedValue, setDisplayedValue] = useState(target);
  useMotionValueEvent(displayed, "change", (latest) => {
    setDisplayedValue(Math.round(latest / 100) * 100);
  });

  useEffect(() => {
    const reduceMotion =
      typeof matchMedia === "function" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      displayed.set(target);
      return;
    }
    const controls = animate(displayed, target, {
      duration: 0.28,
      ease: [0.33, 1, 0.68, 1],
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  const revenueId = useId();
  const daysId = useId();

  return (
    <Section id="calculator" className="flex flex-col items-center gap-xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex w-full max-w-2xl flex-col items-center gap-xl rounded-lg border border-border-default bg-bg-primary p-xl"
      >
        <h2 className="max-w-lg text-center text-2xl font-semibold text-text-primary sm:text-3xl">
          How Much Cash Is Stuck in Your Unpaid Invoices?
        </h2>

        <div className="flex w-full flex-col gap-sm">
          <div className="flex items-baseline justify-between text-base text-text-primary">
            <label htmlFor={revenueId}>Average Monthly Revenue</label>
            <span className="font-semibold">
              {currency.format(revenue)}
            </span>
          </div>
          <input
            id={revenueId}
            type="range"
            min={10000}
            max={500000}
            step={1000}
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            aria-label="Average monthly revenue"
          />
        </div>

        <div className="flex w-full flex-col gap-sm">
          <div className="flex items-baseline justify-between text-base text-text-primary">
            <label htmlFor={daysId}>Average Days to Get Paid</label>
            <span className="font-semibold">{days} days</span>
          </div>
          <input
            id={daysId}
            type="range"
            min={15}
            max={90}
            step={1}
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            aria-label="Average days to get paid"
          />
        </div>

        <div className="flex w-full flex-col items-center gap-xs rounded-md bg-accent-subtle px-lg py-lg text-center">
          <p className="text-base text-text-secondary">You could unlock</p>
          <p className="font-mono text-4xl font-semibold tabular-nums text-accent-default">
            {currency.format(displayedValue)}
          </p>
          <p className="text-base text-text-secondary">
            in working capital within 30 days using automated follow-ups.
          </p>
        </div>

        <Button
          href="mailto:demo@payflowmena.com?subject=15-Minute%20Demo%20Request"
          variant="primary"
        >
          Unlock This Cash Flow →
        </Button>
      </motion.div>
    </Section>
  );
}
