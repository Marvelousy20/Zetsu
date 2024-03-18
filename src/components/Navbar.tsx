"use client";

import Image from "next/image";
import { useCart } from "@/context/cartContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { cartItems } = useCart();
  const { push } = useRouter();

  return (
    <nav className="px-5 md:px-0 py-5 md:py-10 max-w-[45rem] mx-auto">
      <ul className="flex">
        <li className="text-2xl font-bold z-20">
          {/* <Image src="/logo1.png" alt="logo" width={100} height="100" /> */}
          Zetsu
        </li>

        <li className="flex-1"></li>

        <li className="mr-5">
          <Image src="/images/User.svg" alt="user" width={24} height={24} />
        </li>

        <li onClick={() => push("/cart")} className="relative cursor-pointer">
          {cartItems.length >= 1 && (
            <span className="h-[13px] w-[13px] rounded-full bg-[#CF1322] text-white text-[8px] absolute top-2 flex items-center justify-center right-0 top-0">
              {cartItems.length}
            </span>
          )}

          <Image src="/images/Shopping.svg" alt="user" width={24} height={24} />
        </li>
      </ul>
    </nav>
  );
}
