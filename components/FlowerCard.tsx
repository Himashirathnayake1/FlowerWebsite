import Image from "next/image";
import Link from "next/link";

import { Flower } from "@/models/Flower";
import BookmarkButton from "./BookmarkButton";
import AddToCartButton from "./AddToCartButton";

interface FlowerCardProps {
  flower: Flower;
}

export default function FlowerCard({
  flower,
}: FlowerCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#f0e1e4] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(150,60,90,0.10)]">

      {/* Image */}
      <div className="relative h-[310px] overflow-hidden bg-[#f6e9e5]">

        <Link href={`/products/${flower.id}`}>

          <Image
            src={flower.image}
            alt={flower.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

        </Link>

        {/* Bookmark */}
        <BookmarkButton flowerId={flower.id} />

      </div>

      {/* Product Information */}
      <div className="p-5">

        <Link href={`/products/${flower.id}`}>

          <h3 className="font-serif text-xl text-[#552b38] transition hover:text-[#c4476d]">
            {flower.name}
          </h3>

        </Link>

        <div className="mt-4 flex items-center justify-between">

          <span className="text-sm font-medium text-[#552b38]">
            Rs. {flower.price.toLocaleString()}
          </span>

          <span className="flex items-center gap-1 text-xs text-gray-600">
            <span className="text-[#e5a624]">
              ★
            </span>

            {flower.rating}
          </span>

        </div>

        <AddToCartButton flowerId={flower.id} />

      </div>

    </div>
  );
}