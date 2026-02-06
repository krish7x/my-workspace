"use client";

import { useState } from "react";

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
}

export function LeadForm() {
  const [formState, setFormState] = useState<FormState>({ status: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState({ status: "loading" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      page: typeof window !== "undefined" ? window.location.pathname : "",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setFormState({ status: "error", message: data.error || "Something went wrong" });
        return;
      }

      setFormState({ status: "success", message: "Thank you! We'll be in touch soon." });
      form.reset();
    } catch {
      setFormState({ status: "error", message: "Failed to submit. Please try again." });
    }
  }

  if (formState.status === "success") {
    return (
      <div className="p-4 bg-green-50 text-green-800 rounded-lg">
        {formState.message}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
          disabled={formState.status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
          disabled={formState.status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
          disabled={formState.status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
          disabled={formState.status === "loading"}
        />
      </div>
      {formState.status === "error" && (
        <p className="text-red-600 text-sm">{formState.message}</p>
      )}
      <button
        type="submit"
        disabled={formState.status === "loading"}
        className="w-full py-3 px-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {formState.status === "loading" ? "Submitting..." : "Get Free Consultation"}
      </button>
    </form>
  );
}
