"use client";

import Link from "next/link";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { CountryCodeSelector } from "./ui/CountryCodeSelector";
import { CountryDropdown } from "./ui/CountryDropdown";
import { Controller } from "react-hook-form";

// Zod schema for validation
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  countryCode: z.string().min(1, "Code required"),
  mobile: z
    .string()
    .min(5, "Mobile number is too short")
    .regex(/^\d+$/, "Mobile number must contain only digits"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  country: z.string().min(1, "Please select a country"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type FormData = z.infer<typeof formSchema>;

const COUNTRIES = [
  "Australia",
  "Austria",
  "Canada",
  "China",
  "Dubai",
  "France",
  "Georgia",
  "Germany",
  "Hong Kong",
  "Hungary",
  "India",
  "Ireland",
  "Italy",
  "Luxembourg",
  "Malaysia",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Poland",
  "Portugal",
  "Russia",
  "Saudi Arabia",
  "Singapore",
  "South Africa",
  "Spain",
  "Sweden",
  "UK",
  "USA",
  "Other"
];

// Helper to get emoji flag from country code - Kept for reference if needed, but selecting uses CountryCodeSelector now
function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      countryCode: "+91", // Default to India
      mobile: "",
      email: "",
      country: "",
      terms: false,
    },
  });

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Prepare payload
      const payload = {
        ...data,
        // Combine code and mobile for the final phone field if backend expects one string
        fullPhone: `${data.countryCode}${data.mobile}`,
        page: typeof window !== "undefined" ? window.location.pathname : "",
        message: `Consultation Request from ${data.country}`, // inferred message
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative">
      {/* Floating WhatsApp Button - styled to match screenshot roughly */}
      <a
        href="https://wa.me/918939138886?text=How%20can%20I%20help%20you%20today%3F%0A%0AName%3A%0APhone%3A%0APreferred%20Country%3A%0A%0AOur%20experts%20will%20reach%20you%20shortly!%20Thanks%20for%20your%20patience.%0A%0ARegards%2C%0APassX%20Immigration"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors md:hidden"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {submitStatus === "success" ? (
        <div className="p-6 bg-green-50 border border-green-200 text-green-800 rounded-lg text-center">
          <p className="font-semibold text-lg">Thank you!</p>
          <p>We have received your request and will contact you shortly.</p>
          <button
            onClick={() => setSubmitStatus("idle")}
            className="mt-4 text-sm underline text-green-700 hover:text-green-900"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="w-full px-3 py-2.5 border-b border-slate-300 focus:border-slate-900 focus:outline-none focus:ring-0 bg-transparent transition-colors placeholder:text-slate-400"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Mobile Field */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-slate-700 mb-1">
              Mobile No <span className="text-red-500">*</span>
            </label>
            <div className="flex border-b border-slate-300 focus-within:border-slate-900 transition-colors">
              <Controller
                name="countryCode"
                control={control}
                render={({ field }) => (
                  <CountryCodeSelector
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.countryCode?.message}
                  />
                )}
              />
              <input
                id="mobile"
                type="tel"
                {...register("mobile")}
                className="flex-1 w-full px-3 py-2.5 border-none focus:outline-none focus:ring-0 bg-transparent placeholder:text-slate-400"
                placeholder="Mobile Number"
              />
            </div>
            {errors.mobile && (
              <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email ID
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full px-3 py-2.5 border-b border-slate-300 focus:border-slate-900 focus:outline-none focus:ring-0 bg-transparent transition-colors placeholder:text-slate-400"
              placeholder="E-mail ID"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Country Field */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
              Country
            </label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <CountryDropdown
                  value={field.value}
                  onChange={field.onChange}
                  options={COUNTRIES}
                  error={errors.country?.message}
                />
              )}
            />
            {errors.country && (
              <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="md:col-span-2">
            <div className="flex items-start gap-3 mt-1">
              <div className="relative flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  {...register("terms")}
                  className="w-5 h-5 border-2 border-slate-300 rounded focus:ring-slate-500 focus:border-slate-500 text-slate-900 cursor-pointer"
                />
              </div>
              <label htmlFor="terms" className="text-sm text-slate-600 cursor-pointer select-none">
                I accept the <Link href="/terms-and-conditions" className="text-blue-600 hover:text-blue-800 hover:underline">Terms and conditions</Link>.
              </label>
            </div>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-xs mt-0 ml-1">{errors.terms.message}</p>
          )}

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-auto py-3 px-8 bg-[#0B2545] text-white font-bold text-lg rounded-lg hover:bg-[#06152a] disabled:opacity-70 disabled:cursor-not-allowed transition-colors shadow-lg mt-2"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </div>

          {submitStatus === "error" && (
            <p className="text-red-600 text-center text-sm">Failed to submit. Please try again.</p>
          )}

        </form>
      )}
    </div>
  );
}
