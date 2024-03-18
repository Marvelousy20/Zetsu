"ue client";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const items = [
  {
    image: "/images/shirt1.svg",
    name: "AEL Contrast Irregular Design Knit Sweater",
    price: "€75.99",
    total: "€75.99",
  },
  {
    image: "/images/shirt1.svg",
    name: "AEL Contrast Irregular Design Knit Sweater",
    price: "€22.73",
    total: "€75.99",
  },
];

const images = [
  "/images/mastercard.svg",
  "/images/visacard.svg",
  "/images/amexcard.svg",
  "/images/paypalcard.svg",
  "/images/invoicecard.svg",
  "/images/sepacard.svg",
  "/images/dinerscard.svg",
  "/images/discovercard.svg",
];
export default function Carts() {
  return (
    <section className="mt-5 px-5 md:px-0 max-w-[45rem] mx-auto mb-[80px]">
      <h3 className="pb-6 text-2xl font-medium text-black font-darkerGrotesque">
        Cart (2 items)
      </h3>
      <div className="flex items-center justify-between border-b pb-1 font-SFProLight font-normal text-base text-[#595959]">
        <p>Product</p>
        <p>Total</p>
      </div>
      <div className="grid grid-rows-2 mb-5">
        {items.map((items, idx) => (
          <section key={idx} className="">
            <article className="flex items-start h-full py-6 space-x-8 border-b">
              <Image src={items.image} width={100} height={100} alt="outfit" />
              <div className="flex flex-col justify-between w-full h-full">
                <section className="flex items-start justify-between w-full">
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-black font-SFProBold">
                      {items.name}
                    </p>
                    <p className="font-normal text-base font-SFProRegular text-[#262626]">
                      {items.price}
                    </p>
                  </div>
                  <p className="font-normal text-base font-SFProRegular text-[#262626]">
                    {items.total}
                  </p>
                </section>
                <section className="flex items-center justify-between w-full ">
                  <div className="flex items-center text-base font-normal text-black border-2 w-fit font-SFProRegular">
                    <span className="px-4 py-2 bg-[#FAFAFA] cursor-pointer">
                      +
                    </span>
                    <span className="px-4 py-2 bg-white cursor-pointer">1</span>
                    <span className="px-4 py-2 bg-[#FAFAFA] cursor-pointer">
                      -
                    </span>
                  </div>
                  <Trash2
                    size={20}
                    color="#8C8C8C"
                    className="cursor-pointer"
                  />
                </section>
              </div>
            </article>
          </section>
        ))}
      </div>

      {/* Estimate delivery */}
      <section className="flex flex-col space-y-6">
        <div className="flex flex-col">
          <p className="text-base font-bold text-black font-SFProBold">
            Estimated delivery
          </p>
          <p className="text-base font-normal text-black font-SFProRegular">
            Tue, 27/02 - Thu, 29/02
          </p>
        </div>

        <div className="flex flex-col space-y-4 ">
          <h3 className="text-base font-bold text-black font-SFProBold">
            We accept
          </h3>
          <div className="flex items-center gap-3">
            {images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                width={50}
                height={50}
                alt="paymentcards"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-3 border-b-2">
          <h3 className="text-base font-bold text-black font-SFProBold">
            Total
          </h3>
          <section className="flex items-start justify-between w-full">
            <p className=" font-SFProLight font-normal text-base text-[#595959]">
              Sub total
            </p>
            <p className="font-normal text-base font-SFProRegular text-[#262626]">
              €99.83
            </p>
          </section>
          <section className="flex items-start justify-between w-full">
            <p className=" font-SFProLight font-normal text-base text-[#595959]">
              Delivery
            </p>
            <p className="font-normal text-base font-SFProRegular text-[#262626]">
              €99.83
            </p>
          </section>
        </div>
        <section className="flex items-start justify-between py-3 w-">
          <p className="text-base font-medium text-black font-SFProSemibold">
            Total (VAT Included)
          </p>
          <p className=" font-bold text-base font-SFProBold text-[#262626]">
            €99.83
          </p>
        </section>

        <div className="flex items-center w-full gap-3">
          <Button className="w-1/2 bg-white border-2 !item-start text-[#595959] font-normal text-base font-SFProRegular">
            Add a voucher (optional)
          </Button>
          <Button className="w-1/2 text-base font-medium text-white font-SFProSemibold">
            Checkout
          </Button>
        </div>
      </section>
    </section>
  );
}
