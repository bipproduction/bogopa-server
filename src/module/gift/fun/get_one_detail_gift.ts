'use server'
import { prisma } from "@/module/_global"

export default async function funGetOneDetailGift({ id }: { id: any }) {
   const hitung = await prisma.giftPayment.count({
      where:{
         idGift : Number(id),
         statusPayment: 1
      }
   })

   return hitung
}