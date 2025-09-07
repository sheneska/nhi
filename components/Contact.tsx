"use client";

import { useState } from "react";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // TODO: wire this up to your backend / Formspree / Airtable / Email, etc.
    // For now we just simulate a quick submit.
    await new Promise((r) => setTimeout(r, 800));

    setSubmitting(false);
    setSent(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl lg:text-5xl font-medium text-gray-900">Get Your Free Quote</h2>
          <p className="mt-4 text-lg text-gray-600">
            Ready to transform your home? Contact us today for a free consultation and estimate.
            We&apos;re here to bring your vision to life.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-6 sm:p-8 lg:p-10 max-w-5xl mx-auto">
          <div className="mb-6">
            <h3 className="text-gray-900 font-medium">Send Us a Message</h3>
            <p className="text-sm text-gray-600 mt-1">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="Enter your first name"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="Enter your last name"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Email / Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="mb-1 block text-sm font-medium text-gray-700">
                Project Type
              </label>
              <input
                id="projectType"
                name="projectType"
                type="text"
                placeholder="e.g., Kitchen Renovation, Bathroom Remodel"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Details */}
            <div>
              <label htmlFor="details" className="mb-1 block text-sm font-medium text-gray-700">
                Project Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={6}
                placeholder="Tell us about your project, budget, timeline, and any specific requirements..."
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700 disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Get Quote"}
              </button>
              {sent && (
                <p className="mt-3 text-sm text-green-600">
                  Thanks! Your request has been sent. We&apos;ll be in touch soon.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
