"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Loader2, CheckCircle2 } from "lucide-react";

export function WaitlistForm() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
        <CheckCircle2 className="h-16 w-16 text-fresh-lime mb-4" />
        <h3 className="text-2xl font-black text-bold-black mb-2">You're on the list!</h3>
        <p className="text-stone-gray">We'll reach out as soon as Zipplit is available in your area. 🎉</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold text-deep-teal">Full Name</label>
          <input
            id="name"
            type="text"
            required
            className="w-full rounded-xl border-2 border-stone-gray/10 p-3 focus:outline-none focus:border-deep-teal/20"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-bold text-deep-teal">Phone Number</label>
          <input
            id="phone"
            type="tel"
            required
            className="w-full rounded-xl border-2 border-stone-gray/10 p-3 focus:outline-none focus:border-deep-teal/20"
            placeholder="+91 00000 00000"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="area" className="text-sm font-bold text-deep-teal">Area / Location in Kochi</label>
        <input
          id="area"
          type="text"
          required
          className="w-full rounded-xl border-2 border-stone-gray/10 p-3 focus:outline-none focus:border-deep-teal/20"
          placeholder="e.g. Kakkanad, Edapally"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-deep-teal">How can we help you? (Optional)</label>
        <textarea
          id="message"
          rows={3}
          className="w-full rounded-xl border-2 border-stone-gray/10 p-3 focus:outline-none focus:border-deep-teal/20 resize-none"
          placeholder="Tell us your requirements..."
        />
      </div>
      <Button type="submit" disabled={status === "loading"} className="w-full h-14 text-lg">
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Joining...
          </>
        ) : (
          "Join the Waitlist"
        )}
      </Button>
    </form>
  );
}
