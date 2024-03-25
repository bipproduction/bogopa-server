'use server'
import { prisma } from "@/module/_global"

export default async function funDeleteDetailLangganan({ id }: { id: any }) {
   await prisma.langgananRange.delete({
      where: {
         id: Number(id),
      }
   })

   return {
      success: true
   }
}