"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Loader2, CheckCircle2 } from "lucide-react";

export function ContactForm() {
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
        <h3 className="text-2xl font-black text-bold-black mb-2">Message Sent!</h3>
        <p className="text-stone-gray">Thank you for reaching out! We've received your message and will respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-bold text-deep-teal">First Name</label>
          <input id="firstName" type="text" required className="w-full rounded-xl border-2 border-stone-gray/10 p-4 focus:outline-none focus:border-deep-teal/20" />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-bold text-deep-teal">Last Name</label>
          <input id="lastName" type="text" required className="w-full rounded-xl border-2 border-stone-gray/10 p-4 focus:outline-none focus:border-deep-teal/20" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-bold text-deep-teal">Email Address</label>
        <input id="email" type="email" required className="w-full rounded-xl border-2 border-stone-gray/10 p-4 focus:outline-none focus:border-deep-teal/20" />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-deep-teal">Your Message</label>
        <textarea id="message" rows={5} required className="w-full rounded-xl border-2 border-stone-gray/10 p-4 focus:outline-none focus:border-deep-teal/20 resize-none" placeholder="How can we help you?" />
      </div>
      <Button type="submit" disabled={status === "loading"} className="w-full h-14 text-lg">
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Submit Message"
        )}
      </Button>
    </form>
  );
}
