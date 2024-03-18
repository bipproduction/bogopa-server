'use server'
import { prisma } from "@/module/_global"

export default async function funGetAllAdmin() {

   const data = await prisma.adminUser.findMany({
      where: {
         isActive: true
      }
   })

   return data
}