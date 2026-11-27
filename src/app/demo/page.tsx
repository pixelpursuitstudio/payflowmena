"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/Button";

type FormState = {
  name: string;
  email: string;
  company: string;
  country: string;
};

type FormErrors = Partial<Record<"name" | "email" | "company", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const nextSteps = [
  {
    num: "01",
    title: "We review your details",
    body: "Our team checks your business against common UAE & India B2B invoicing patterns.",
  },
  {
    num: "02",
    title: "You get time slots",
    body: "Within one business day, by email, with 2–3 options to choose from.",
  },
  {
    num: "03",
    title: "We hop on a 15-min call",
    body: "A live walkthrough of PayFlow MENA, tailored to your receivables.",
  },
];

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-xs4">
      <label htmlFor={id} className="text-sm font-semibold text-text-primary">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClasses(hasError: boolean) {
  return [
    "w-full rounded-md border bg-bg-primary px-md16 py-sm8 text-base text-text-primary",
    "focus:outline-none focus:border-accent-default",
    hasError ? "border-red-600" : "border-border-default",
  ].join(" ");
}

export default function DemoPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    country: "United Arab Emirates",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof FormState) {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { value } = e.target;
      setForm((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Enter your name.";
    if (!EMAIL_PATTERN.test(form.email)) nextErrors.email = "Enter a valid work email.";
    if (!form.company.trim()) nextErrors.company = "Enter your company name.";
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    const firstName = form.name.trim() ? form.name.trim().split(/\s+/)[0] : "there";
    return (
      <div className="flex min-h-full items-center justify-center px-lg24 py-4xl96">
        <div className="flex w-full max-w-2xl flex-col items-center gap-md16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-subtle">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M20 6 9 17l-5-5"
                stroke="#0f766e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-default">
            Demo Requested
          </p>
          <h1 className="text-3xl font-semibold text-text-primary sm:text-4xl">
            You&rsquo;re all set, {firstName}!
          </h1>
          <p className="text-base leading-relaxed text-text-secondary">
            We&rsquo;ve received your request for{" "}
            <strong className="text-text-primary">{form.company}</strong>. A confirmation
            has been sent to {form.email}.
          </p>

          <div className="mt-sm8 grid w-full grid-cols-1 gap-md16 text-left sm:grid-cols-3">
            {nextSteps.map((step) => (
              <div
                key={step.num}
                className="flex flex-col gap-xs4 rounded-md border border-border-default bg-bg-subtle p-md16"
              >
                <p className="font-mono text-sm font-semibold text-accent-default">
                  {step.num}
                </p>
                <h3 className="text-base font-semibold text-text-primary">{step.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-sm8 flex flex-wrap items-center justify-center gap-md16">
            <Button href="/" variant="primary">
              Back to Homepage
            </Button>
            <Button href="/#calculator" variant="secondary">
              Try the Calculator Again
            </Button>
          </div>

          <p className="mt-md16 text-sm text-text-secondary">
            Join 140+ finance teams across Dubai, Riyadh, and Bengaluru already automating
            collections.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-full items-center justify-center px-lg24 py-4xl96">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full max-w-md flex-col gap-lg24"
      >
        <Link
          href="/"
          className="self-start text-sm font-medium text-text-secondary hover:text-text-primary"
        >
          ← Back to homepage
        </Link>
        <div className="flex flex-col gap-sm8 text-center">
          <h1 className="text-2xl font-semibold text-text-primary">
            Book your 15-minute demo
          </h1>
          <p className="text-base leading-relaxed text-text-secondary">
            Tell us a bit about your team. We&rsquo;ll follow up within one business day to
            find a time that works.
          </p>
        </div>

        <Field id="demo-name" label="Full name" error={errors.name}>
          <input
            id="demo-name"
            type="text"
            value={form.name}
            onChange={updateField("name")}
            aria-invalid={!!errors.name}
            aria-describedby="demo-name-error"
            className={inputClasses(!!errors.name)}
          />
        </Field>

        <Field id="demo-email" label="Work email" error={errors.email}>
          <input
            id="demo-email"
            type="email"
            value={form.email}
            onChange={updateField("email")}
            aria-invalid={!!errors.email}
            aria-describedby="demo-email-error"
            className={inputClasses(!!errors.email)}
          />
        </Field>

        <Field id="demo-company" label="Company" error={errors.company}>
          <input
            id="demo-company"
            type="text"
            value={form.company}
            onChange={updateField("company")}
            aria-invalid={!!errors.company}
            aria-describedby="demo-company-error"
            className={inputClasses(!!errors.company)}
          />
        </Field>

        <Field id="demo-country" label="Country">
          <select
            id="demo-country"
            value={form.country}
            onChange={updateField("country")}
            className={inputClasses(false)}
          >
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="India">India</option>
            <option value="Other">Other</option>
          </select>
        </Field>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-accent-default px-lg24 py-md16 text-base font-semibold text-text-on-accent transition-colors hover:bg-accent-hover"
        >
          Confirm My Demo Slot
        </button>
      </form>
    </div>
  );
}
