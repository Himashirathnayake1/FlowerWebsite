"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAdminDashboard, getCurrentUser, getToken } from "@/lib/api";

type Dashboard = { users: number; flowers: number; categories: number; orders: number; revenue: string };

export default function AdminPage() {
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [message, setMessage] = useState("Loading dashboard...");

  useEffect(() => {
    async function load() {
      if (!getToken()) { setMessage("Please log in as an administrator."); return; }
      try {
        const user = await getCurrentUser();
        if (user.role !== "admin") { setMessage("Administrator access required."); return; }
        setDashboard(await getAdminDashboard());
      } catch (error) {
        setMessage(error instanceof Error ? error.message : "Unable to load dashboard");
      }
    }
    load();
  }, []);

  return (
    <main className="min-h-screen bg-[#fffaf8] px-6 pb-20 pt-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d95c83]">Administration</p>
        <div className="mt-4 flex items-center justify-between">
          <h1 className="font-serif text-5xl text-[#292326]">Store dashboard</h1>
          <Link href="/admin/flowers/new" className="rounded-xl bg-[#552b38] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3e2029]">Add New Flower</Link>
        </div>
        {dashboard ? <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{Object.entries(dashboard).map(([label, value]) => <div key={label} className="rounded-2xl border border-[#f0dfe3] bg-white p-5"><p className="text-xs uppercase tracking-wider text-gray-500">{label}</p><p className="mt-3 font-serif text-3xl text-[#552b38]">{label === "revenue" ? `Rs. ${Number(value).toLocaleString()}` : value}</p></div>)}</div> : <div className="mt-12 rounded-3xl border border-[#f0dfe3] bg-white p-12 text-center text-sm text-gray-500"><p>{message}</p><Link href="/auth" className="mt-5 inline-block text-[#8f3452] underline">Go to account</Link></div>}
      </div>
    </main>
  );
}