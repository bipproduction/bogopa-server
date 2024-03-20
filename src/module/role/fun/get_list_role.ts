'use server'
import { prisma } from "@/module/_global"

export default async function funGetListRoleAdmin() {
   const data = await prisma.adminRole.findMany({
      where: {
         isActive: true,
      }
   })

   return data
}