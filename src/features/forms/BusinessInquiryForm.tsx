"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Loader2, CheckCircle2 } from "lucide-react";

export function BusinessInquiryForm() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center animate-in fade-in zoom-in duration-500">
        <CheckCircle2 className="h-16 w-16 text-fresh-lime mb-4" />
        <h3 className="text-2xl font-black text-bold-black mb-2">Inquiry Sent!</h3>
        <p className="text-stone-gray">Thank you! Our team will review your inquiry and get back to you within 24 business hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="businessName" className="text-sm font-bold text-deep-teal uppercase tracking-wider">Business Name</label>
          <input id="businessName" type="text" required className="w-full rounded-xl border-2 border-stone-gray/10 p-4 focus:outline-none focus:border-deep-teal/20" />
        </div>
        <div className="space-y-2">
          <label htmlFor="contactPerson" className="text-sm font-bold text-deep-teal uppercase tracking-wider">Contact Person</label>
          <input id="contactPerson" type="text" required className="w-full rounded-xl border-2 border-stone-gray/10 p-4 focus:outline-none focus:border-deep-teal/20" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-bold text-deep-teal uppercase tracking-wider">Phone Number</label>
          <input id="phone" type="tel" required className="w-full rounded-xl border-2 border-stone-gray/10 p-4 focus:outline-none focus:border-deep-teal/20" />
        </div>
        <div className="space-y-2">
          <label htmlFor="businessType" className="text-sm font-bold text-deep-teal uppercase tracking-wider">Business Type</label>
          <select id="businessType" required className="w-full rounded-xl border-2 border-stone-gray/10 p-4 focus:outline-none focus:border-deep-teal/20 bg-white">
            <option value="">Select Type</option>
            <option value="restaurant">Restaurant / Cafe</option>
            <option value="cloud-kitchen">Cloud Kitchen</option>
            <option value="office">Corporate Office</option>
            <option value="retail">Retail Store</option>
            <option value="catering">Catering</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="reqType" className="text-sm font-bold text-deep-teal uppercase tracking-wider">Requirement Type</label>
        <select id="reqType" required className="w-full rounded-xl border-2 border-stone-gray/10 p-4 focus:outline-none focus:border-deep-teal/20 bg-white">
          <option value="">Select Requirement</option>
          <option value="corporate-meals">Corporate Meals</option>
          <option value="bulk-sourcing">Bulk Ingredient Sourcing</option>
          <option value="white-label">White Label Products</option>
          <option value="custom">Custom Programme</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="quantity" className="text-sm font-bold text-deep-teal uppercase tracking-wider">Approximate Quantity</label>
        <input id="quantity" type="text" required placeholder="e.g. 100 meals/day or 500kg/week" className="w-full rounded-xl border-2 border-stone-gray/10 p-4 focus:outline-none focus:border-deep-teal/20" />
      </div>
      <div className="space-y-2">
        <label htmlFor="details" className="text-sm font-bold text-deep-teal uppercase tracking-wider">Additional Details</label>
        <textarea id="details" rows={4} className="w-full rounded-xl border-2 border-stone-gray/10 p-4 focus:outline-none focus:border-deep-teal/20 resize-none" placeholder="Tell us more about your needs..." />
      </div>
      <Button type="submit" disabled={status === "loading"} className="w-full h-14 text-lg">
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending Inquiry...
          </>
        ) : (
          "Send Business Inquiry"
        )}
      </Button>
    </form>
  );
}
