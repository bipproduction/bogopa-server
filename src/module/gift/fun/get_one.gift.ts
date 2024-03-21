'use server'
import { prisma } from "@/module/_global"

export default async function funGetOneGift({ id }: { id: any }) {
   const data = await prisma.gift.findUnique({
      where: { id: Number(id) }
   })

   return data
}