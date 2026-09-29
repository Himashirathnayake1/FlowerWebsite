"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, getToken, login, logout, register } from "@/lib/api";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!getToken()) {
      setCheckingSession(false);
      return;
    }

    getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setCheckingSession(false));
  }, []);

  async function submit(event: FormEvent) {
    event.preventDefault();
    try {
      const result = mode === "login" ? await login(email, password) : await register(name, email, password);
      if (!result.token) throw new Error("Authentication succeeded but no session token was returned.");
      localStorage.setItem("flower_token", result.token);
      router.replace("/cart");
      router.refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to authenticate");
    }
  }

  async function handleLogout() {
    await logout();
    setUser(null);
    setMessage("");
    router.refresh();
  }

  if (checkingSession) {
    return (
      <main className="min-h-screen bg-[#fffaf8] px-6 pb-20 pt-32 text-center">
        <p className="text-sm text-gray-500">Checking your account...</p>
      </main>
    );
  }

  if (user) {
    return (
      <main className="min-h-screen bg-[#fffaf8] px-6 pb-20 pt-32">
        <div className="mx-auto max-w-md rounded-3xl border border-[#f0dfe3] bg-white p-8">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d95c83]">Your account</p>
          <h1 className="mt-4 font-serif text-4xl text-[#292326]">Welcome, {user.name}</h1>
          <p className="mt-3 text-sm text-gray-500">{user.email}</p>
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-[#d95c83]">{user.role}</p>
          {user.role === "admin" && <a href="/admin" className="mt-6 block text-center text-xs text-[#8f3452] underline">Open admin dashboard</a>}
          <button type="button" onClick={handleLogout} className="mt-8 w-full rounded-full border border-[#d95c83] px-4 py-3 text-xs font-medium uppercase tracking-wider text-[#8f3452]">Log out</button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf8] px-6 pb-20 pt-32">
      <form onSubmit={submit} className="mx-auto max-w-md rounded-3xl border border-[#f0dfe3] bg-white p-8">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d95c83]">Your account</p>
        <h1 className="mt-4 font-serif text-4xl text-[#292326]">{mode === "login" ? "Welcome back" : "Create account"}</h1>
        {mode === "register" && <input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" className="mt-8 w-full border-b border-[#ead8dd] px-1 py-3 text-sm outline-none" />}
        <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" className="mt-8 w-full border-b border-[#ead8dd] px-1 py-3 text-sm outline-none" />
        <input required minLength={8} type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password (8+ characters)" className="mt-4 w-full border-b border-[#ead8dd] px-1 py-3 text-sm outline-none" />
        <button className="mt-8 w-full rounded-full bg-[#d95c83] px-4 py-3 text-xs font-medium uppercase tracking-wider text-white">{mode === "login" ? "Log in" : "Register"}</button>
        {message && <p className="mt-4 text-sm text-[#8f3452]">{message}</p>}
        <button type="button" onClick={() => setMode(mode === "login" ? "register" : "login")} className="mt-6 text-xs text-[#8f3452] underline">{mode === "login" ? "Need an account? Register" : "Already registered? Log in"}</button>
      </form>
    </main>
  );
}
