import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
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

    return NextResponse.json({
      success: true,
      message: "File ricevuto correttamente!",
      fileName: file.name,
      size: file.size,
      type: file.type,
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Errore del server",
      },
      { status: 500 }
    );
  }
}