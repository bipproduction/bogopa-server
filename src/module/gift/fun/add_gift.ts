'use server'
import { prisma } from "@/module/_global"

export default async function funAddGift({ body }: { body: any }) {
   const insert = await prisma.gift.create({
      data: {
         name: body.name,
         price: body.price,
         img: body.img
      },
      select: {
         id: true
      }
   })

   return {
      success: true,
      data: insert.id
   }
}