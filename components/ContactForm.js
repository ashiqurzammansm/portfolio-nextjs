"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function submit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const name = fd.get("name")?.toString().trim();
    const email = fd.get("email")?.toString().trim();
    const subject = fd.get("subject")?.toString().trim();
    const message = fd.get("message")?.toString().trim();

    if (!name || !email || !subject || !message) {
      setStatus("Please fill in the required fields.");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (res.ok) {
      setStatus("Thanks! Your message has been sent.");
      e.currentTarget.reset();
    } else {
      setStatus("Something went wrong. Try again.");
    }
  }

  return (
    <form onSubmit={submit} className="card" noValidate>
      <h2 className="font-semibold text-xl">Contact Form</h2>

      <label className="grid gap-1 mt-2">
        Name
        <input className="input" name="name" placeholder="Your full name" required />
      </label>

      <label className="grid gap-1">
        Email
        <input className="input" type="email" name="email" placeholder="you@example.com" required />
      </label>

      <label className="grid gap-1">
        Subject
        <input className="input" name="subject" placeholder="Subject" required />
      </label>

      <label className="grid gap-1">
        Message
        <textarea className="textarea" name="message" rows="5" placeholder="Your message…" required />
      </label>

      <div className="mt-3">
        <button className="btn" type="submit">Send Message</button>
      </div>

      <p className="text-emerald-400 text-sm mt-2" aria-live="polite">{status}</p>
    </form>
  );
}
