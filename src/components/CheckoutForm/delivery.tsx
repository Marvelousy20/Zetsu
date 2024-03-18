"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

export const DeliveryForm = () => {
  const deliverySchema = z.object({
    country: z.string().min(3, {
      message: "Select your country",
    }),
    firstName: z.string().min(5, {
      message: "Please enter your first name",
    }),
    lastName: z.string().min(5, {
      message: "Please enter your last name",
    }),
    address: z.string().min(5, {
      message: "Please enter your address",
    }),
    addressInfo: z.string().min(5, {
      message: "Please enter your additional address info",
    }),
    postalCode: z.string().min(5, {
      message: "Please enter your postal code",
    }),
    city: z.string().min(5, {
      message: "Please enter your city",
    }),
    phone: z.string().min(5, {
      message: "Please enter your phone number",
    }),
  });

  const { handleSubmit, reset, register, formState, setValue, watch } = useForm<
    z.infer<typeof deliverySchema>
  >({
    resolver: zodResolver(deliverySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      addressInfo: "",
      postalCode: "",
      city: "",
      phone: "",
    },
  });

  const { errors } = formState;

  const onSubmit = (values: z.infer<typeof deliverySchema>) => {
    console.log(values);
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <section className="flex flex-col gap-2">
        <div>
          <Select
            onValueChange={(value) =>
              setValue("country", value, {
                shouldValidate: true,
              })
            }
            defaultValue={watch().country}
          >
            <SelectTrigger>
              <SelectValue
                placeholder="Select your state"
                className="text-lg font-normal text-grayInactive"
              />
            </SelectTrigger>
            <SelectContent className="text-lg font-normal text-grayInactive">
              {["Nigeria", "usa", "german", "europe"].map((country, _i) => (
                <SelectItem key={_i} className="rounded-xl" value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="pt-1 text-sm font-normal text-red-500">
            {errors.country?.message}
          </div>
        </div>

        <div>
          <Input
            placeholder="First name"
            {...register("firstName")}
            className="border text-base font-normal text-[#595959] font-SFProRegular"
          />
          {errors.firstName && (
            <div className="pt-3 text-sm font-normal text-red-500 ">
              {errors.firstName?.message}
            </div>
          )}
        </div>

        <div>
          <Input
            placeholder="Last name"
            {...register("lastName")}
            className="border text-base font-normal text-[#595959] font-SFProRegular"
          />
          {errors.lastName && (
            <div className="pt-3 text-sm font-normal text-red-500 ">
              {errors.lastName?.message}
            </div>
          )}
        </div>

        <div>
          <Input
            placeholder="Address"
            {...register("address")}
            className="border text-base font-normal text-[#595959] font-SFProRegular"
          />
          {errors.address && (
            <div className="pt-3 text-sm font-normal text-red-500 ">
              {errors.address?.message}
            </div>
          )}
        </div>

        <div>
          <Textarea
            className="border text-base font-normal text-[#595959] font-SFProRegular"
            placeholder="Additional address info"
            {...register("addressInfo")}
          />
          {errors.addressInfo && (
            <div className="pt-3 text-sm font-normal text-red-500 ">
              {errors.addressInfo?.message}
            </div>
          )}
        </div>

        <div>
          <Input
            placeholder="Postal code"
            {...register("postalCode")}
            className="border text-base font-normal text-[#595959] font-SFProRegular"
          />
          {errors.postalCode && (
            <div className="pt-3 text-sm font-normal text-red-500 ">
              {errors.postalCode?.message}
            </div>
          )}
        </div>

        <div>
          <Input
            placeholder="City"
            {...register("city")}
            className="border text-base font-normal text-[#595959] font-SFProRegular"
          />
          {errors.city && (
            <div className="pt-3 text-sm font-normal text-red-500 ">
              {errors.city?.message}
            </div>
          )}
        </div>

        <div>
          <Input
            placeholder="Phone"
            {...register("phone")}
            className="border text-base font-normal text-[#595959] font-SFProRegular"
          />
          {errors.phone && (
            <div className="pt-3 text-sm font-normal text-red-500 ">
              {errors.phone?.message}
            </div>
          )}
        </div>
      </section>
      <Button className="text-base font-medium text-white font-SFProSemibold">
        Next
      </Button>
    </form>
  );
};
