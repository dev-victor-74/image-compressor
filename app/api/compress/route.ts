import { NextRequest, NextResponse } from "next/server";
import tinify from "tinify";

// Set your Tinify API key
tinify.key = process.env.Tinify_API_key!;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        {
          error: "Invalid file type. Only JPEG, PNG, and WebP are supported.",
        },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    const originalSize = buffer.length;

    try {
      // Compress with Tinify
      const compressedBuffer = await tinify.fromBuffer(buffer).toBuffer();
      const compressedSize = compressedBuffer.length;

      // Calculate compression ratio
      const compressionRatio = (
        ((originalSize - compressedSize) / originalSize) *
        100
      ).toFixed(1);

      // Convert compressed buffer to base64 for response
      const base64 = Buffer.from(compressedBuffer).toString("base64");
      const dataUrl = `data:${file.type};base64,${base64}`;

      return NextResponse.json({
        success: true,
        originalSize,
        compressedSize,
        compressionRatio: parseFloat(compressionRatio),
        compressedImage: dataUrl,
        filename: file.name,
        mimeType: file.type,
      });
    } catch (tinifyError: any) {
      console.error("Tinify compression error:", tinifyError);
      return NextResponse.json(
        {
          error: `Compression failed: ${
            tinifyError.message || "Unknown error"
          }`,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("API route error:", error);
    return NextResponse.json(
      {
        error: `Server error: ${error.message || "Unknown error"}`,
      },
      { status: 500 }
    );
  }
}
