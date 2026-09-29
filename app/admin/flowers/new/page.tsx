"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createFlower, getCategories, getCurrentUser, getToken } from "@/lib/api";

export default function NewFlowerPage() {
  const [categories, setCategories] = useState<{id: number, name: string}[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      if (!getToken()) {
        router.push("/auth");
        return;
      }
      try {
        const user = await getCurrentUser();
        if (user.role !== "admin") {
          router.push("/auth");
          return;
        }
        const cats = await getCategories();
        setCategories(cats);
      } catch (err: any) {
        setError(err.message || "Failed to load categories.");
      }
    }
    load();
  }, [router]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      category_id: parseInt(formData.get("category_id") as string, 10),
      name: formData.get("name") as string,
      price: parseFloat(formData.get("price") as string),
      image: formData.get("image") as string,
      rating: formData.get("rating") ? parseFloat(formData.get("rating") as string) : 0,
      description: formData.get("description") as string,
      stock: parseInt(formData.get("stock") as string, 10),
      is_active: formData.get("is_active") === "on",
    };

    try {
      await createFlower(data);
      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "Failed to create flower.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#fffaf8] px-6 pb-20 pt-32">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-4xl text-[#292326]">Add New Flower</h1>
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 rounded-2xl border border-[#f0dfe3] bg-white p-8">
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select name="category_id" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#552b38] focus:ring-[#552b38] sm:text-sm border p-2">
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#552b38] focus:ring-[#552b38] sm:text-sm border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input type="number" step="0.01" name="price" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#552b38] focus:ring-[#552b38] sm:text-sm border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input type="text" name="image" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#552b38] focus:ring-[#552b38] sm:text-sm border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating (0-5)</label>
            <input type="number" step="0.1" name="rating" min="0" max="5" defaultValue="0" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#552b38] focus:ring-[#552b38] sm:text-sm border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#552b38] focus:ring-[#552b38] sm:text-sm border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Stock</label>
            <input type="number" name="stock" required min="0" defaultValue="10" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#552b38] focus:ring-[#552b38] sm:text-sm border p-2" />
          </div>
          <div className="flex items-center">
            <input type="checkbox" name="is_active" defaultChecked className="h-4 w-4 rounded border-gray-300 text-[#552b38] focus:ring-[#552b38]" />
            <label className="ml-2 block text-sm text-gray-900">Active</label>
          </div>
          <button type="submit" disabled={loading} className="w-full rounded-xl bg-[#552b38] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3e2029]">
            {loading ? "Saving..." : "Add Flower"}
          </button>
        </form>
      </div>
    </main>
  );
}
