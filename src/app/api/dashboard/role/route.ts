import { prisma } from "@/module/_global";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
   const data = await req.json()
   const ins = await prisma.adminRole.create({
      data: data,
      select: {
         id: true
      }
   })
   return NextResponse.json(
      { 'message': 'post' }
   )
}

export async function GET() {
   return NextResponse.json(
      { 'message': 'get' }
   )
}