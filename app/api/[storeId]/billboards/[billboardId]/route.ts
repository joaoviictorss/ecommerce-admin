import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function GET(
  req: Request,
  { params }: { params: { billboardId: string } }
) {
  try {
    if (!params.billboardId) {
      return new NextResponse("BillboardId é obrigatório", { status: 400 });
    }

    const billboard = await prismadb.store.findUnique({
      where: {
        id: params.billboardId,
      },
    });

    return NextResponse.json(billboard);
  } catch (error) {
    console.log(`[BILLBOARD_GET]`, error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string; billboardId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { label, imageUrl } = body;

    if (!userId) {
      return new NextResponse("Não autenticado", { status: 401 });
    }

    if (!label) {
      return new NextResponse("Nome é obrigatório", { status: 400 });
    }
    if (!imageUrl) {
      return new NextResponse("Url da imagem é obrigatório", { status: 400 });
    }

    if (!params.billboardId) {
      return new NextResponse("BillboardId é obrigatório", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Não autorizado", { status: 403 });
    }

    const billboard = await prismadb.billboard.updateMany({
      where: {
        id: params.billboardId,
      },
      data: {
        label,
        imageUrl,
      },
    });

    return NextResponse.json(billboard);
  } catch (error) {
    console.log(`[BILLBOARD_PATCH]`, error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE (
  req: Request,
  { params }: { params: { storeId: string, billboardId: string }}
) {
  try {
      const { userId } = auth();

      if (!userId) {
          return new NextResponse("Não autenticado", { status: 401 })
      }

      if(!params.billboardId) {
          return new NextResponse("Billboard id é obrigatorio", { status: 400 });
      }

      const storeByUserId = await prismadb.store.findFirst({
          where: {
              id: params.storeId,
              userId
          }
      })

      if (!storeByUserId) {
          return new NextResponse("Sem autorização", { status: 403 });
      }

      const billboard = await prismadb.billboard.deleteMany({
          where: {
              id: params.billboardId,
          }
      })

      return NextResponse.json(billboard);
  } catch (err) {
      console.log('[BILLBOARD_DELETE]', err)
      return new NextResponse('Internal error', { status: 500 })
  }
}