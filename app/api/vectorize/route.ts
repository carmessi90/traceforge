import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "TraceForge Vector API online 🚀",
    version: "0.1.0",
  });
}