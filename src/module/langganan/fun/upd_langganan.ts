'use server'
import { prisma } from "@/module/_global"
import { revalidatePath } from "next/cache"

export default async function funUpdateLangganan({ kat, body }: { kat: any, body: any }) {
   if (kat == "active") {
      await prisma.langganan.update({
         where: {
            id: body.id
         },
         data: {
            isActive: body.isActive
         }
      })
   }

   revalidatePath('/langganan')

   return { success: true }
}