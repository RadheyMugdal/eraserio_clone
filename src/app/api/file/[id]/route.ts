import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { error: "File id is required to get file" },
        { status: 400 }
      );
    }
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized :User is not authenticated" },
        { status: 401 }
      );
    }
    const file = await prisma.files.findUnique({
      where: {
        id,
        user_id: session.user.id,
      },
    });
    return NextResponse.json({ file }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error getting files" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { error: "File id is required to delete file" },
        { status: 400 }
      );
    }
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized :User is not authenticated" },
        { status: 401 }
      );
    }
    const file = await prisma.files.delete({
      where: {
        id,
        user_id: session.user.id,
      },
    });
    return NextResponse.json({ file }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error getting files" }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { error: "File id is required to update file" },
        { status: 400 }
      );
    }
    const { canvas_data, text_data, name } = await req.json();
    if (!canvas_data && !text_data && !name) {
      return NextResponse.json(
        { error: "At least one field is required to update file" },
        { status: 400 }
      );
    }

    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized :User is not authenticated" },
        { status: 401 }
      );
    }

    const file = await prisma.files.update({
      where: {
        id,
        user_id: session.user.id,
      },
      data: {
        ...(canvas_data && { canvas_data }),
        ...(text_data && { text_data }),
        ...(name && { name }),
      },
    });
    return NextResponse.json({ file }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error updating file" }, { status: 500 });
  }
}
