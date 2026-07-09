import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json(
      {
        success: false,
        message: "Nessun file ricevuto",
      },
      { status: 400 }
    );
  }

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
  <circle cx="200" cy="200" r="140"
          fill="none"
          stroke="#00d8ff"
          stroke-width="12"/>

  <text x="200"
        y="215"
        font-size="34"
        fill="white"
        text-anchor="middle">
      TraceForge
  </text>
</svg>
`;

  return NextResponse.json({
    success: true,
    svg,
  });
}