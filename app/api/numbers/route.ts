import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const revalidate = 0;

export const GET = async () => {
  try {
    const filePath = path.join(process.cwd(), "public", "numbers.txt");
    const data = fs.readFileSync(filePath, "utf8");
    const numbers = data.split(",").map(Number);

    return new NextResponse(JSON.stringify(numbers), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Error in GET function:", error);

    return new NextResponse(
      JSON.stringify({ error: "Error in getting numbers" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  }
};
