// import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const filePath = path.join(process.cwd(), "/public/numbers.txt");
    const data = fs.readFileSync(filePath, "utf8");
    const numbers = data.split(",").map(Number);
    return NextResponse.json(numbers);
  } catch (error) {
    console.error("Error in GET function:", error);
    return NextResponse.json({ error: "Error in getting numbers" });
  }
};
