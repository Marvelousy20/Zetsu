"use client";

import { useParams } from "next/navigation";
import { data } from "../data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ItemPage() {
  const { id } = useParams();

  const item = data.find((it) => it.id === Number(id));

  console.log(item);

  // Retrieve offer data based on the id

  return (
    <div className="mt-5 px-5 md:px-0 max-w-[45rem] mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-x-6">
        <div className="hidden md:block">
          <img src={item?.fullImage} alt="img" />
        </div>

        <div className="block md:hidden">
          <div>
            <img src={item?.fullImage} alt="img" />
          </div>

          <h3 className="font-SFProSemibold mt-2">{item?.name}</h3>
          <h6 className="mt-1 font-SFProRegular">
            &euro;{item?.price}
            <span className="text-sm font-SFProLight">VAT Included</span>
          </h6>

          <Button className="mt-6">Add to Cart</Button>
        </div>

        <div className="mt-6 w-full pb-20 md:pb-0 md:mt-0 md:w-auto">
          <div className="hidden md:block">
            <h3 className="font-SFProSemibold mt-2">{item?.name}</h3>
            <h6 className="mt-1 font-SFProRegular">
              &euro;{item?.price}
              <span className="text-sm font-SFProLight">VAT Included</span>
            </h6>

            <Button className="mt-6">Add to Cart</Button>
          </div>

          <div className="flex items-center border p-5 gap-x-5 md:mt-6">
            <Image src="/images/bus.svg" alt="bus" width={32} height={32} />
            <div>
              <h4 className="font-SFProMedium">8-10 Working days</h4>
              <h6 className="font-SFProLight text-sm">
                Shipping fee calculated at checkout
              </h6>
            </div>
          </div>
          <div className="flex items-center border p-5 gap-x-5">
            <Image src="/images/bus.svg" alt="bus" width={32} height={32} />
            <div>
              <h4 className="font-SFProMedium">
                Free delivery and free returns
              </h4>
              <h6 className="font-SFProLight text-sm">
                Read terms and conditions
              </h6>
            </div>
          </div>
          <div className="flex items-center border p-5 gap-x-5">
            <Image src="/images/return.svg" alt="bus" width={32} height={32} />
            <div>
              <h4 className="font-SFProMedium">30 days return policy</h4>
              <h6 className="font-SFProLight text-sm">
                Make sure it&apos;s to your taste
              </h6>
            </div>
          </div>

          <div className="md:block min-w-[240px] z-20 fixed md:static bottom-0 left-0 w-full md:w-auto md:mt-6">
            <Button className="w-full">
              <span>To Checkout (2)</span>{" "}
              <span className="text-[#BFBFBF] ml-2"> &euro;30.41</span>
              <span className="ml-5">
                <ArrowRight />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
