"use client";

import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
interface FileProps {
  onDro: (acceptedFiles: FileWithPath[]) => void;
}

export default function Hero() {
  const [uploadedImages, setUploadedImages] = useState<FileWithPath[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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

  return (
    <div className="px-5 md:px-0 mt-5">
      <div className="md:text-center max-w-[28.5rem] mx-auto">
        <h1 className="text-[2.375rem] md:text-5xl font-darkerGrotesque font-semibold">
          Shop the Look
        </h1>
        <p className="text-2xl leading-[32px] font-SFProLight mt-2">
          Snap, upload, and shop every item within your photo. Your perfect
          style awaits you.
        </p>
      </div>

      <div className="mt-8 max-w-[22.5rem] mx-auto flex items-center flex-col">
        <div {...getRootProps()} className="w-full border border-dashed p-4">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <div className="flex items-center gap-5">
              <div>
                <h5 className="font-SFProRegular opacity-85">
                  Click this area to upload
                </h5>
                <h6 className="opacity-45">
                  Support for a single or bulk upload
                </h6>
              </div>

              <div>
                <Image
                  src="/images/upload.gif"
                  alt="uplaod1"
                  width={200}
                  height={205}
                />
              </div>
            </div>
          )}
        </div>
        {/* <button
          className="bg-black font-SFProMedium w-full text-white py-4 mt-6"
          onClick={uploadImages}
        >
          Get Started
        </button> */}
        <Button className="mt-6" onClick={uploadImages}>
          Get Started
        </Button>
      </div>
    </div>
  );
}
