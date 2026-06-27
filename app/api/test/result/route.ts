import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email, score, total } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailStr = String(email).trim().toLowerCase();
    
    if (typeof score !== "number" || typeof total !== "number" || total <= 0) {
      return NextResponse.json(
        { error: "Valid score and total are required" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    const resultDoc = {
      email: emailStr,
      score,
      total,
      percentage: Math.round((score / total) * 100),
      createdAt: new Date(),
    };

    await db.collection("test_results").insertOne(resultDoc);

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Save test result error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
