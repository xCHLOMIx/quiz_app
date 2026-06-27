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

    // Retrieve passedIds from DB to return to client (do NOT merge automatically here)
    const dbPassedIds = Array.isArray(user.passedIds) ? user.passedIds : [];

    return NextResponse.json(
      { success: true, email: emailStr, passedIds: dbPassedIds },
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
