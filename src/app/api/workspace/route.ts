import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name } = await req.json();
    if (!name) {
      return NextResponse.json(
        { error: "Workspace name is required" },
        { status: 400 }
      );
    }
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized : User is not authenticated" },
        { status: 401 }
      );
    }
    const workspace = await prisma.workspaces.create({
      data: {
        name,
        userId: session.user.id as string,
      },
    });

    return NextResponse.json({ workspace }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error creating workspace" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const name = req.nextUrl.searchParams.get("name");
    const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
    const pageSize = parseInt(req.nextUrl.searchParams.get("pageSize") || "16");
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized :User is not authenticated" },
        { status: 401 }
      );
    }

    if (name) {
      const totalRecords = await prisma.workspaces.count({
        where: {
          userId: session.user.id,
          name: {
            contains: name as string,
          },
        },
      });
      const workspaces = await prisma.workspaces.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        where: {
          userId: session.user.id,
        },
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              name: true,
            },
          },
        },
      });
      return NextResponse.json({ workspaces, totalRecords }, { status: 200 });
    } else {
      const totalRecords = await prisma.workspaces.count({
        where: {
          userId: session.user.id,
        },
      });
      const workspaces = await prisma.workspaces.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        where: {
          userId: session.user.id,
          name: {
            contains: name as string,
          },
        },
        orderBy: {
          updatedAt: "desc",
        },
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              name: true,
            },
          },
        },
      });
      return NextResponse.json({ workspaces, totalRecords }, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error getting workspaces" },
      { status: 500 }
    );
  }
}
