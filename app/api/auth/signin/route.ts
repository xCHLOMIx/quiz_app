import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { verifyPassword } from "@/lib/hash";

export async function POST(request: Request) {
  try {
    const { email, code, passedIds } = await request.json();

    if (!email || !code) {
      return NextResponse.json(
        { error: "Email and passcode are required" },
        { status: 400 }
      );
    }

    const emailStr = String(email).trim().toLowerCase();
    const codeStr = String(code).trim();

    const { db } = await connectToDatabase();

    // Find user
    const user = await db.collection("users").findOne({ email: emailStr });
    if (!user) {
      return NextResponse.json(
        { error: "User with this email not found" },
        { status: 400 }
      );
    }

    // Verify passcode
    const isPasscodeValid = verifyPassword(codeStr, user.passcodeHash);
    if (!isPasscodeValid) {
      return NextResponse.json(
        { error: "Invalid passcode" },
        { status: 401 }
      );
    }

    // Merge passedIds
    const dbPassedIds = Array.isArray(user.passedIds) ? user.passedIds : [];
    const localPassedIds = Array.isArray(passedIds)
      ? passedIds.filter((id): id is number => Number.isFinite(id))
      : [];

    const mergedPassedIds = Array.from(new Set([...dbPassedIds, ...localPassedIds]));

    // Update in database
    await db.collection("users").updateOne(
      { email: emailStr },
      { $set: { passedIds: mergedPassedIds } }
    );

    return NextResponse.json(
      { success: true, email: emailStr, passedIds: mergedPassedIds },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Signin error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
