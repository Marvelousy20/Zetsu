"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Offers() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="max-w-[45rem] mx-auto">
      {isLoading ? (
        <div className="min-h-[80vh] flex items-center justify-center">
          <img src="/images/Loading/loading1.gif" alt="loading" />
        </div>
      ) : (
        <div>
          <h1>This is the offers page</h1>
          {/* Your actual content here */}
        </div>
      )}
    </div>
  );
}
