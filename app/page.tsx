"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [dataNumbers, setDataNumbers] = useState([]);
  const [dataImages, setDataImages] = useState([]);

  useEffect(() => {
    async function fetchNumbers() {
      const response = await fetch("http://localhost:3000/api/numbers");
      const data = await response.json();
      setDataNumbers(data);
    }

    fetchNumbers();
  }, []);

  useEffect(() => {
    async function fetchImages() {
      if (dataNumbers.length > 0) {
        const response = await fetch("http://localhost:3000/api/images", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ numbers: dataNumbers }),
        });
        const data = await response.json();
        setDataImages(data);
      }
    }

    fetchImages();
  }, [dataNumbers]);
  return (
    <main className="min-h-screen w-full bg-slate-900">
      <div className="flex size-full flex-col items-center justify-center gap-6 p-6">
        {dataImages.map((image: string, index: number) => (
          <div key={index}>
            <Image src={image} alt="" width={800} height={400} />
          </div>
        ))}
      </div>
    </main>
  );
}
