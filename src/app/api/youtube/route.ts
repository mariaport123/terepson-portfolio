import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get("id");

  if (!videoId) {
    return NextResponse.json(
      { error: "Missing YouTube video ID" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      {
        next: {
          revalidate: 86400,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Could not retrieve YouTube metadata" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      title: data.title,
      thumbnail: data.thumbnail_url,
      author: data.author_name,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to retrieve YouTube metadata" },
      { status: 500 }
    );
  }
}