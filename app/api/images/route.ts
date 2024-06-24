import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { numbers } = await request.json();
  try {
    const responses = await Promise.all(
      numbers.map(async (num: number) => {
        const response = await fetch(`https://xkcd.com/${num}/info.0.json`);
        const data = await response.json();
        return data.img;
      })
    );
    return NextResponse.json(responses);
  } catch (error) {
    console.error("Error in POST function:", error);
    return NextResponse.json({ error: "Error in getting images" });
  }
};
