'use server'
import { prisma } from "@/module/_global"

export default async function funGetOneDetailLangganan({ id }: { id: any }) {
   const data = await prisma.langgananPayment.count({
      where: {
         idLangganan: Number(id),
         statusPayment: 1
      }
   })

   return data
}