'use server'
import { prisma } from "@/module/_global"

export default async function funGetOneAdmin({ id }: { id: any }) {
   const data = await prisma.adminUser.findUnique({
      where: { id: Number(id) }
   })

   return data
}