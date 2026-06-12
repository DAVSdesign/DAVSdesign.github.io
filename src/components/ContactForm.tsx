"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.phone && !/^[+]?[\d\s()-]{8,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      // We will use a Google Apps Script Web App URL for unlimited free emails
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";
      
      if (!scriptUrl) {
        throw new Error("No script URL provided");
      }

      // Google Apps Script usually works best with form data or plain text body for CORS
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone || "Not provided");
      formDataToSend.append("company", formData.company || "Not provided");
      formDataToSend.append("service", formData.service || "Not provided");
      formDataToSend.append("message", formData.message);

      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      });

      // When using 'no-cors', the response is opaque, meaning we can't read response.ok or response.json().
      // If the fetch didn't throw a network error, we assume it was sent successfully.
      setStatus("success");
      setFormData(initialFormData);
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses = (field: keyof FormData) =>
    `w-full px-4 py-3 bg-white/5 border rounded-sm text-white placeholder-charcoal-500 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-orange-primary ${
      errors[field]
        ? "border-red-500 focus:border-red-500"
        : "border-white/10 focus:border-orange-primary"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      id="contact-form"
      noValidate
    >
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClasses("name")}
            aria-required="true"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClasses("email")}
            aria-required="true"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Phone & Company Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={inputClasses("phone")}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-gray-300 mb-2">
            Company Name
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company"
            className={inputClasses("company")}
          />
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label htmlFor="contact-service" className="block text-sm font-medium text-gray-300 mb-2">
          Service Required
        </label>
        <select
          id="contact-service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`${inputClasses("service")} appearance-none cursor-pointer`}
        >
          <option value="" className="bg-charcoal-900 text-white">Select a service</option>
          <option value="Tool Design & Engineering" className="bg-charcoal-900 text-white">Tool Design & Engineering</option>
          <option value="CAD & Technical Drafting" className="bg-charcoal-900 text-white">CAD & Technical Drafting</option>
          <option value="Design Optimization" className="bg-charcoal-900 text-white">Design Optimization</option>
          <option value="Other" className="bg-charcoal-900 text-white">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">
          Project Details *
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your project requirements, tolerances, quantities, timelines..."
          rows={5}
          className={`${inputClasses("message")} resize-none`}
          aria-required="true"
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "sending"}
        className={`w-full sm:w-auto btn-primary flex items-center justify-center gap-2 ${
          status === "sending" ? "opacity-70 pointer-events-none" : ""
        }`}
        id="contact-submit"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Get an Engineering Consultation
          </>
        )}
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <div className="flex items-center gap-3 p-4 bg-green-900/30 border border-green-500/20 rounded-sm text-green-400 text-sm animate-fade-in">
          <CheckCircle size={18} />
          <p>
            Thank you! We&apos;ve received your inquiry and will respond within 24-48 hours.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-900/30 border border-red-500/20 rounded-sm text-red-400 text-sm animate-fade-in">
          <AlertCircle size={18} />
          <p>
            Something went wrong. Please try again or email us directly at davsslon@gmail.com
          </p>
        </div>
      )}
    </form>
  );
}
