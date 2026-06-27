import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailStr = String(email).trim().toLowerCase();
    const { db } = await connectToDatabase();

    // Fetch user doc to get completions count
    const user = await db.collection("users").findOne({ email: emailStr });
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Fetch 5 recent test results
    const recentTests = await db
      .collection("test_results")
      .find({ email: emailStr })
      .sort({ createdAt: -1 })
      .limit(5)
      .toArray();

    return NextResponse.json({
      success: true,
      fullModeCompletions: user.fullModeCompletions || 0,
      recentTests: recentTests.map((t) => ({
        id: t._id.toString(),
        score: t.score,
        total: t.total,
        percentage: t.percentage,
        createdAt: t.createdAt,
      })),
    });
  } catch (error: any) {
    console.error("Get profile stats error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
