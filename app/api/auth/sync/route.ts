import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { quizQuestions } from "@/data/questions";

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

    const totalQuestions = quizQuestions.length;
    const isCompletedNow = validatedPassedIds.length === totalQuestions;

    const { db } = await connectToDatabase();

    // Find the user to check their current completion state
    const user = await db.collection("users").findOne({ email: emailStr });
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const alreadyCompleted = user.fullModeCompleted === true;
    let updateDoc: any = {
      $set: { passedIds: validatedPassedIds }
    };

    if (isCompletedNow) {
      if (!alreadyCompleted) {
        updateDoc.$set.fullModeCompleted = true;
        updateDoc.$inc = { fullModeCompletions: 1 };
      }
    } else {
      // If passedIds.length < totalQuestions, set fullModeCompleted to false
      // to allow the user to complete it again and trigger another completion.
      updateDoc.$set.fullModeCompleted = false;
    }

    await db.collection("users").updateOne(
      { email: emailStr },
      updateDoc
    );

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

