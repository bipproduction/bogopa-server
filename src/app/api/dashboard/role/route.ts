import { prisma } from "@/module/_global";

export async function POST(req: Request) {
   const data = await req.json()
   const ins = await prisma.adminRole.create({
      data: data,
      select: {
         id: true
      }
   })
   return Response.json(
      { 'message': 'post' }
   )
}

export async function GET() {
   return Response.json(
      { 'message': 'get' }
   )
}