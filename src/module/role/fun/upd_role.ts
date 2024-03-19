'use server'
import { prisma } from "@/module/_global"

export default async function funUpdateRoleAdmin({ kat, body }: { kat: any, body: any }) {
   if (kat == "active") {
      await prisma.adminRole.update({
         where: {
            id: body.id,
         },
         data: {
            isActive: body.isActive
         }
      })
   } else {
      prisma.adminRole.update({
         where: {
            id: body.id,
         },
         data: {
            isActive: body.isActive,
            name: body.name
         }
      })
   }


   return { success: true }
}