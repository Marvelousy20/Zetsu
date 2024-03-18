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
    <section className="mt-5 px-5 md:px-0 max-w-[45rem] mx-auto">
      <h3 className=" pb-6 font-darkerGrotesque font-medium text-2xl text-black">
        Cart (2 items)
      </h3>
      <div className="flex items-center justify-between border-b pb-1 font-SFProLight font-normal text-base text-[#595959]">
        <p>Product</p>
        <p>Total</p>
      </div>
      <div className="grid grid-rows-2 mb-5">
        {items.map((items, idx) => (
          <section key={idx} className="">
            <article className="flex items-start space-x-8 py-6 border-b h-full">
              <Image src={items.image} width={100} height={100} alt="outfit" />
              <div className="flex flex-col w-full h-full justify-between">
                <section className="flex items-start justify-between w-full">
                  <div className="flex flex-col">
                    <p className=" font-SFProBold font-medium text-base text-black">
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
                <section className=" flex items-center justify-between w-full">
                  <div className="w-fit border-2 flex items-center  font-normal text-base font-SFProRegular text-black">
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
          <p className="font-bold text-base font-SFProBold text-black">
            Estimated delivery
          </p>
          <p className="font-normal text-base text-black font-SFProRegular">
            Tue, 27/02 - Thu, 29/02
          </p>
        </div>

        <div className=" flex flex-col space-y-4">
          <h3 className="font-bold text-base font-SFProBold text-black">
            We accept
          </h3>
          <div className="flex  items-center gap-3">
            {images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                width={80}
                height={80}
                alt="paymentcards"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-3 border-b-2">
          <h3 className="font-bold text-base font-SFProBold text-black">
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
        <section className="flex items-start justify-between w- py-3">
          <p className="font-medium text-base font-SFProSemibold text-black">
            Total (VAT Included)
          </p>
          <p className=" font-bold text-base font-SFProBold text-[#262626]">
            €99.83
          </p>
        </section>

        <div className="w-full flex items-center gap-3">
          <Button className="w-1/2 bg-white border-2 !item-start text-[#595959] font-normal text-base font-SFProRegular">
            Add a voucher (optional)
          </Button>
          <Button className="w-1/2 font-medium text-base font-SFProSemibold text-white">
            Checkout
          </Button>
        </div>
      </section>
    </section>
  );
}
