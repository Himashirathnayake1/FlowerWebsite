"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCart, getCurrentUser, getToken, removeCartItem, updateCartItem } from "@/lib/api";

type Cart = { items: { id: number; quantity: number; flower: { name: string; price: number } }[] };

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [mounted, setMounted] = useState(false);
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [message, setMessage] = useState("");
  async function load() {
    if (!getToken()) { setAuthenticated(false); return; }
    try {
      await getCurrentUser();
      setAuthenticated(true);
      setCart(await getCart());
    } catch (error) {
      setAuthenticated(false);
      setMessage(error instanceof Error ? error.message : "Unable to load cart");
    }
  }
  useEffect(() => { setMounted(true); load(); }, []);
  const total = cart?.items.reduce((sum, item) => sum + Number(item.flower.price) * item.quantity, 0) ?? 0;

  return (
    <main className="min-h-screen bg-[#fffaf8] px-6 pb-20 pt-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d95c83]">Your selection</p>
        <h1 className="mt-4 font-serif text-5xl text-[#292326]">Shopping Cart</h1>
        {!mounted || authenticated === null ? <div className="mt-12 rounded-3xl border border-[#f0dfe3] bg-white p-12 text-center text-sm text-gray-500">Loading your cart...</div> : !authenticated ? <div className="mt-12 rounded-3xl border border-[#f0dfe3] bg-white p-12 text-center"><p className="text-sm text-gray-500">Log in to view your cart.</p><Link href="/auth" className="mt-5 inline-block rounded-full bg-[#d95c83] px-6 py-3 text-xs text-white">Log in</Link></div> : cart?.items.length ? <div className="mt-12 space-y-4">{cart.items.map((item) => <div key={item.id} className="flex items-center justify-between rounded-2xl border border-[#f0dfe3] bg-white p-5"><div><h2 className="font-serif text-xl text-[#552b38]">{item.flower.name}</h2><p className="mt-1 text-sm text-gray-500">Rs. {Number(item.flower.price).toLocaleString()}</p></div><div className="flex items-center gap-3"><input type="number" min="1" value={item.quantity} onChange={async (event) => setCart(await updateCartItem(item.id, Number(event.target.value)))} className="w-16 border border-[#ead8dd] p-2 text-center" /><button onClick={async () => setCart(await removeCartItem(item.id))} className="text-xs text-[#8f3452] underline">Remove</button></div></div>)}<div className="flex items-center justify-between border-t border-[#ead8dd] pt-6"><strong className="font-serif text-2xl text-[#552b38]">Rs. {total.toLocaleString()}</strong><Link href="/checkout" className="rounded-full bg-[#d95c83] px-6 py-3 text-xs text-white">Checkout</Link></div></div> : <div className="mt-12 rounded-3xl border border-[#f0dfe3] bg-white p-12 text-center text-sm text-gray-500">{message || "Your cart is empty."}</div>}
      </div>
    </main>
  );
}
