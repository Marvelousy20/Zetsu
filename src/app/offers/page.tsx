"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Plus, Check } from "lucide-react";
import { FileWithPath, useDropzone } from "react-dropzone";
import router from "next/router";
import Link from "next/link";
import { data } from "./data";

interface FileProps {
  onDrop: (acceptedFiles: FileWithPath[]) => void;
}

export default function Offers() {
  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState(data);
  const [uploadedImages, setUploadedImages] = useState<FileWithPath[]>([]);

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setUploadedImages(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const uploadImages = () => {
    if (uploadedImages.length >= 1) {
      router.push("/offers");
      console.log("uploaded images", uploadedImages);
    }
  };

  const handleSelected = (index: number) => {
    const updatedOffers = [...offers];
    updatedOffers[index] = {
      ...updatedOffers[index],
      checked: !updatedOffers[index].checked,
    };
    setOffers(updatedOffers);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="max-w-[45rem] mx-auto">
      {isLoading ? (
        <div className="min-h-[80vh] flex items-center justify-center bg-[#F66FFED]">
          <img src="/images/Loading/loading1.gif" alt="loading" />
        </div>
      ) : (
        <div className="px-5 md:px-0 pb-20 md:pb-0">
          <div className="flex justify-between items-center">
            <div className="flex justify-between p-2 py-4 bg-[#F6FFED] md:gap-x-[8rem] items-center w-full md:w-auto">
              <h3 className="font-SFProRegular">Uploaded Successful</h3>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <button className="text-sm bg-[#fff] border bg-opacity-60 p-2">
                  Reupload
                </button>
              </div>
            </div>
            <div className="md:block min-w-[240px] z-20 fixed md:static bottom-0 left-0 w-full md:w-auto">
              <Button className="w-full">
                <span>To Checkout (2)</span>{" "}
                <span className="text-[#BFBFBF] ml-2"> &euro;30.41</span>
                <span className="ml-5">
                  <ArrowRight />
                </span>
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <p>3 items Found</p>

            <div className="flex flex-wrap gap-5 mt-6">
              {offers.map((offer, index) => (
                <div key={index}>
                  <div className="relative">
                    <Link href={`/offers/${offer.id}`}>
                      <Image
                        src={offer.img}
                        alt={offer.img}
                        width={165}
                        height={165}
                      />
                    </Link>

                    {!offer.checked ? (
                      <div
                        className="h-8 w-8 bg-black rounded-full flex items-center justify-center absolute bottom-3 right-3"
                        onClick={() => handleSelected(index)}
                      >
                        <Plus color="white" />
                      </div>
                    ) : (
                      <div
                        className="h-8 w-8 bg-[#D9F7BE] rounded-full flex items-center justify-center absolute bottom-3 right-3"
                        onClick={() => handleSelected(index)}
                      >
                        <Check color="black" />
                      </div>
                    )}
                  </div>

                  <h3 className="font-SFProSemibold mt-2">{offer.name}</h3>
                  <h6 className="mt-1 font-SFProRegular">
                    &euro;{offer.price}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
