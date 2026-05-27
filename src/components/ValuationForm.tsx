"use client";
import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

/**
 * HOW TO CONNECT THIS FORM TO YOUR EMAIL INBOX (using Formspree — free):
 * ──────────────────────────────────────────────────────────────────────
 * 1. Go to https://formspree.io and sign up for a free account.
 * 2. Click "New Form", give it a name (e.g. "Valuation Enquiry"), and enter
 *    the email address where you want to receive submissions.
 * 3. Copy the Form ID — it looks like:  xpwzabcd
 * 4. Replace the placeholder below:
 *       const FORMSPREE_ID = "YOUR_FORM_ID";
 *    with your actual ID, e.g.:
 *       const FORMSPREE_ID = "xpwzabcd";
 * 5. Save the file and deploy.  That's it — every form submission will now
 *    arrive in your email inbox automatically.
 */
const FORMSPREE_ID = "YOUR_FORM_ID"; // ← replace this

const PURPOSES = [
  "Insurance Claim / Policy",
  "Bank Loan or Leasing",
  "Vehicle Ownership Transfer",
  "Legal / Court Purpose",
  "Other",
];

const VEHICLE_TYPES = [
  "Car (Sedan / Hatchback)",
  "SUV / Crossover",
  "Van",
  "Lorry / Truck",
  "Motorcycle",
  "Three-Wheeler",
  "Bus",
  "Heavy Machinery",
  "Other",
];

export default function ValuationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError]   = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (FORMSPREE_ID === "YOUR_FORM_ID") {
      setError(
        "Form not yet connected. Follow the instructions in ValuationForm.tsx to link it to your email."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Server error");
      }
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or call us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-green-800 mb-1">Enquiry Sent!</h3>
        <p className="text-green-700 text-sm">
          Thank you — we&apos;ll contact you within 24 hours to confirm your appointment.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition duration-150";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Kamal Perera"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+94 77 123 4567"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="vehicle-type" className="block text-sm font-medium text-slate-700 mb-1">
            Vehicle Type <span className="text-red-500">*</span>
          </label>
          <select
            id="vehicle-type"
            name="vehicle_type"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>Select type…</option>
            {VEHICLE_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="vehicle-make" className="block text-sm font-medium text-slate-700 mb-1">
            Make, Model &amp; Year
          </label>
          <input
            id="vehicle-make"
            name="vehicle_make_model_year"
            type="text"
            placeholder="e.g. Toyota Aqua 2018"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="purpose" className="block text-sm font-medium text-slate-700 mb-1">
          Purpose of Valuation <span className="text-red-500">*</span>
        </label>
        <select
          id="purpose"
          name="purpose"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>Select purpose…</option>
          {PURPOSES.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Vehicle registration number, preferred branch, or any other details…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3.5 px-6 rounded-xl bg-amber text-white font-semibold text-base hover:bg-amber-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 shadow-md shadow-amber/20 flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
            </svg>
            Sending…
          </>
        ) : (
          "Request a Valuation"
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        We&apos;ll call you back within 24 hours to confirm your appointment.
      </p>
    </form>
  );
}
