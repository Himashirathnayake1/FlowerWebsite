"use client";

import { useState } from "react";
import { addToCart, getToken } from "@/lib/api";

export default function AddToCartButton({ flowerId }: { flowerId: number }) {
  const [message, setMessage] = useState("");

  async function handleAdd() {
    if (!getToken()) { setMessage("Log in to add items"); return; }
    try { await addToCart(flowerId); setMessage("Added to cart"); }
    catch (error) { setMessage(error instanceof Error ? error.message : "Unable to add item"); }
  }

  return <div className="mt-4"><button type="button" onClick={handleAdd} className="w-full rounded-full bg-[#d95c83] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#c4476d]">Add to cart</button>{message && <p className="mt-2 text-center text-[11px] text-[#8f3452]">{message}</p>}</div>;
}