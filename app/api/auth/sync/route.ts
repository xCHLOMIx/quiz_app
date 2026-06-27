import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email, passedIds } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailStr = String(email).trim().toLowerCase();
    const validatedPassedIds = Array.isArray(passedIds)
      ? passedIds.filter((id): id is number => Number.isFinite(id))
      : [];

    const { db } = await connectToDatabase();

    const result = await db.collection("users").updateOne(
      { email: emailStr },
      { $set: { passedIds: validatedPassedIds } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, email: emailStr, passedIds: validatedPassedIds },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Sync progress error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
