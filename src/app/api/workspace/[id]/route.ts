import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json(
        {
          error: "Workspace id is required to delete workspace",
        },
        {
          status: 400,
        }
      );
    }
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized :User is not authenticated" },
        {
          status: 401,
        }
      );
    }

    const data = await prisma.workspaces.delete({
      where: {
        id,
        // userId:session.user.id
      },
    });
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error deleting workspace" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { name } = await req.json();
    if (!id || !name) {
      return NextResponse.json(
        {
          error: "Workspace id and name is required to update workspace",
        },
        {
          status: 400,
        }
      );
    }
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized :User is not authenticated" },
        {
          status: 401,
        }
      );
    }

    const data = await prisma.workspaces.update({
      where: {
        id,
        userId: session.user.id,
      },
      data: {
        name,
      },
    });
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error updating workspace" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        {
          error: "Workspace id is required to get workspace data",
        },
        {
          status: 400,
        }
      );
    }
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized :User is not authenticated" },
        {
          status: 401,
        }
      );
    }

    const data = await prisma.workspaces.findUnique({
      where: {
        id,
        userId: session.user.id,
      },
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        files: {
          select: {
            id: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error getting workspace" },
      { status: 500 }
    );
  }
}
