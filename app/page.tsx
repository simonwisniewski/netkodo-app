import Image from "next/image";

export default async function Home() {
  const numbers = await fetch("http://localhost:3000/api/numbers", {
    method: "GET",
  });
  const dataNumbers = JSON.parse(await numbers.text());

  const images = await fetch("http://localhost:3000/api/images", {
    method: "POST",
    body: JSON.stringify({ numbers: dataNumbers }),
  });
  const dataImages = JSON.parse(await images.text());
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
