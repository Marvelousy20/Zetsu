"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const emailSchema = z.object({
    email: z.string().email({
      message: "Enter your email address",
    }),
  });

  const { handleSubmit, reset, register, formState } = useForm<
    z.infer<typeof emailSchema>
  >({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const { errors } = formState;

  const onSubmit = (values: z.infer<typeof emailSchema>) => {
    console.log(values);
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <section className="flex flex-col gap-2">
        <div>
          <Input
            placeholder="Email"
            {...register("email")}
            className="border text-base font-normal text-[#595959] font-SFProRegular"
          />
          {errors.email && (
            <div className="pt-3 text-sm font-normal text-red-500 ">
              {errors.email?.message}
            </div>
          )}
        </div>
        <p className="text-base font-normal text-black font-SFProRegular">
          Have an account?{" "}
          <span className="text-[#1890FF] underline">Login</span>
        </p>
      </section>
      <Button className="text-base font-medium text-white font-SFProSemibold">
        Next
      </Button>
    </form>
  );
};
