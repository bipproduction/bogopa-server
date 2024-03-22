'use server'
import { prisma } from "@/module/_global"

export default async function funGetOneLangganan({ id }: { id: any }) {
   const data = await prisma.langganan.findUnique({
      where: {
         id: Number(id)
      }
   })

   return data
}