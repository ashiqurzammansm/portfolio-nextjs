"use client";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../data";

export default function ClientServices() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");
  const [status, setStatus] = useState("");

  function onOrder(name) {
    setService(name);
    setStatus("");
    setOpen(true);
  }

  async function submit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.toString().trim();
    const email = fd.get("email")?.toString().trim();
    const details = fd.get("details")?.toString().trim();

    if (!name || !email || !details) {
      setStatus("Please fill in all fields.");
      return;
    }

    const res = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({ service, name, email, details }),
    });

    if (res.ok) {
      setStatus("Order submitted! I'll contact you shortly.");
      setTimeout(() => setOpen(false), 1000);
      e.currentTarget.reset();
    } else {
      setStatus("Something went wrong. Try again.");
    }
  }

  return (
    <>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {services.map((s, i) => (
          <ServiceCard key={i} s={s} onOrder={onOrder} />
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <form onSubmit={submit} className="card w-full max-w-lg">
            <h3 className="font-bold text-xl">Order Service</h3>
            <p className="subtle mt-1">
              You’re ordering: <strong className="text-stone-200">{service}</strong>
            </p>

            <label className="grid gap-1 mt-3">
              Full Name
              <input className="input" name="name" placeholder="Your name" required />
            </label>

            <label className="grid gap-1">
              Email
              <input className="input" type="email" name="email" placeholder="you@example.com" required />
            </label>

            <label className="grid gap-1">
              Project Details
              <textarea
                className="textarea"
                name="details"
                rows="4"
                placeholder="Describe your project…"
                required
              />
            </label>

            <div className="mt-3 flex gap-2">
              <button className="btn" type="submit">Submit Order</button>
              <button type="button" className="btn-outline" onClick={() => setOpen(false)}>Cancel</button>
            </div>

            <p className="text-emerald-400 text-sm mt-2" aria-live="polite">{status}</p>
          </form>
        </div>
      )}
    </>
  );
}
