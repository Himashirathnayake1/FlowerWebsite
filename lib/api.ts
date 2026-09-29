import { Flower } from "@/models/Flower";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

export function getToken(): string | null {
  return typeof window === "undefined" ? null : localStorage.getItem("flower_token");
}

async function request(path: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");
  const token = getToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);
  let response: Response;
  try {
    response = await fetch(`${API_URL}${path}`, { ...options, headers });
  } catch {
    throw new Error("Cannot connect to the API. Start Laravel on http://127.0.0.1:8000.");
  }
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("flower_token");
    }
    const validationMessage = body.errors
      ? Object.values(body.errors).flat().join(" ")
      : "";
    throw new Error(validationMessage || body.message || "Request failed");
  }
  return body;
}

type ApiFlower = Omit<Flower, "category"> & {
  category: { name: string } | null;
};

function toFlower(flower: ApiFlower): Flower {
  return {
    ...flower,
    category: flower.category?.name ?? "",
    price: Number(flower.price),
    rating: Number(flower.rating),
  };
}

export async function getFlowers(): Promise<Flower[]> {
  let response: Response;
  try {
    response = await fetch(`${API_URL}/flowers`, { cache: "no-store" });
  } catch {
    throw new Error("Cannot connect to the API. Start Laravel on http://127.0.0.1:8000.");
  }

  if (!response.ok) {
    throw new Error("Unable to load flowers");
  }

  const flowers = (await response.json()) as ApiFlower[];
  return flowers.map(toFlower);
}

export async function register(name: string, email: string, password: string) {
  return request("/auth/register", { method: "POST", body: JSON.stringify({ name, email, password }) });
}

export async function login(email: string, password: string) {
  return request("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
}

export async function getCurrentUser() {
  return request("/auth/me");
}

export async function logout() {
  try {
    return await request("/auth/logout", { method: "POST" });
  } finally {
    if (typeof window !== "undefined") {
      localStorage.removeItem("flower_token");
    }
  }
}

export async function getCart() { return request("/cart"); }
export async function addToCart(flower_id: number, quantity = 1) {
  return request("/cart/items", { method: "POST", body: JSON.stringify({ flower_id, quantity }) });
}
export async function updateCartItem(id: number, quantity: number) {
  return request(`/cart/items/${id}`, { method: "PATCH", body: JSON.stringify({ quantity }) });
}
export async function removeCartItem(id: number) { return request(`/cart/items/${id}`, { method: "DELETE" }); }
export async function checkout(details: { shipping_name: string; shipping_phone: string; shipping_address: string }) {
  return request("/checkout", { method: "POST", body: JSON.stringify(details) });
}

export async function getAdminDashboard() {
  return request("/admin/dashboard");
}

export async function createFlower(flowerData: any) {
  return request("/admin/flowers", { method: "POST", body: JSON.stringify(flowerData) });
}

export async function getCategories() {
  return request("/categories");
}