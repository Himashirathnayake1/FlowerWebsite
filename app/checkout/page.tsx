"use client";

import { FormEvent, useEffect, useState } from "react";
import { checkout, getToken } from "@/lib/api";

export default function CheckoutPage() {
  const [details, setDetails] = useState({ shipping_name: "", shipping_phone: "", shipping_address: "" });
  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent) {
    event.preventDefault();
    try { const order = await checkout(details); setMessage(`Order #${order.id} placed successfully.`); }
    catch (error) { setMessage(error instanceof Error ? error.message : "Unable to place order"); }
  }
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <main className="min-h-screen bg-[#fffaf8] px-6 pb-20 pt-32 text-center"><p className="text-sm text-gray-500">Loading checkout...</p></main>;
  if (!getToken()) return <main className="min-h-screen bg-[#fffaf8] px-6 pb-20 pt-32 text-center"><p className="text-sm text-gray-500">Please log in before checkout.</p></main>;
  return <main className="min-h-screen bg-[#fffaf8] px-6 pb-20 pt-32"><form onSubmit={submit} className="mx-auto max-w-xl rounded-3xl border border-[#f0dfe3] bg-white p-8"><p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d95c83]">Delivery details</p><h1 className="mt-4 font-serif text-4xl text-[#292326]">Checkout</h1>{Object.entries(details).map(([key, value]) => <input key={key} required value={value} onChange={(event) => setDetails({ ...details, [key]: event.target.value })} placeholder={key.replace("shipping_", "").replace("_", " ")} className="mt-5 w-full border-b border-[#ead8dd] px-1 py-3 text-sm outline-none" />)}<button className="mt-8 w-full rounded-full bg-[#d95c83] px-4 py-3 text-xs uppercase tracking-wider text-white">Place order</button>{message && <p className="mt-5 text-sm text-[#8f3452]">{message}</p>}</form></main>;
}
