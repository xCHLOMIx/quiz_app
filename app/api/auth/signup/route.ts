import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { hashPassword } from "@/lib/hash";
import { quizQuestions } from "@/data/questions";

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

    // Validate email basic regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate passcode is 6 digits
    if (!/^\d{6}$/.test(codeStr)) {
      return NextResponse.json(
        { error: "Passcode must be exactly 6 digits" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    // Check if user exists
    const existingUser = await db.collection("users").findOne({ email: emailStr });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Hash passcode and create user
    const passcodeHash = hashPassword(codeStr);
    const validatedPassedIds = Array.isArray(passedIds)
      ? passedIds.filter((id): id is number => Number.isFinite(id))
      : [];

    const totalQuestions = quizQuestions.length;
    const isCompleted = validatedPassedIds.length === totalQuestions;

    await db.collection("users").insertOne({
      email: emailStr,
      passcodeHash,
      passedIds: validatedPassedIds,
      fullModeCompleted: isCompleted,
      fullModeCompletions: isCompleted ? 1 : 0,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, email: emailStr, passedIds: validatedPassedIds },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
