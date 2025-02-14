import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const filename = await req.nextUrl.searchParams.get("filename");
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const files = await prisma.files.findMany({
      where: {
        user_id: session.user.id,
        name: {
          contains: filename ? filename : "",
        },
      },
    });

    return NextResponse.json({ files }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { name, workspaceId } = await req.json();
    if (!name || !workspaceId) {
      return NextResponse.json(
        { error: "Name and workspaceId are required" },
        {
          status: 400,
        }
      );
    }
    const files = await prisma.files.create({
      data: {
        name: name,
        user_id: session.user.id as string,
        workspaceId,
      },
    });
    return NextResponse.json({ files }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
