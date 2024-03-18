"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import Image from "next/image";

const images = [
  "/images/mastercard.svg",
  "/images/visacard.svg",
  "/images/paypalcard.svg",
];

export const PaymentForm = () => {
  const paymentSchema = z.object({
    cardNumber: z.string().min(5, {
      message: "Enter your card number",
    }),
    date: z.string().min(5, {
      message: "Enter  your expiry date",
    }),
    cvv: z.string().min(3, {
      message: "Enter your cvv number",
    }),
  });

  const { handleSubmit, reset, register, formState } = useForm<
    z.infer<typeof paymentSchema>
  >({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardNumber: "",
      date: "",
      cvv: "",
    },
  });

  const { errors } = formState;

  const onSubmit = (values: z.infer<typeof paymentSchema>) => {
    console.log(values);
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h3 className="text-base font-bold text-black font-SFProSemibold">
          Payment
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
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            placeholder="Card number"
            {...register("cardNumber")}
            className="border text-base font-normal text-[#595959] font-SFProRegular"
          />
          {errors.cardNumber && (
            <div className="pt-3 text-sm font-normal text-red-500 ">
              {errors.cardNumber?.message}
            </div>
          )}
        </div>

        <div>
          <Input
            placeholder="Expiry date"
            {...register("date")}
            className="border text-base font-normal text-[#595959] font-SFProRegular"
          />
          {errors.date && (
            <div className="pt-3 text-sm font-normal text-red-500 ">
              {errors.date?.message}
            </div>
          )}
        </div>

        <div>
          <Input
            placeholder="CVV"
            {...register("cvv")}
            className="border text-base font-normal text-[#595959] font-SFProRegular"
          />
          {errors.cvv && (
            <div className="pt-3 text-sm font-normal text-red-500 ">
              {errors.cvv?.message}
            </div>
          )}
        </div>
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" required />
            <p className="text-sm font-normal text-black font-SFProRegular">
              Save information for faster checkout
            </p>
          </div>
          <p className="text-sm font-normal text-[#8C8C8C] font-SFProRegular">
            By default we use your shipping address as your billing address
          </p>
        </section>
        <Button
          type="submit"
          className="text-base font-medium text-white font-SFProSemibold"
        >
          Complete Order
        </Button>
      </form>
    </section>
  );
};
