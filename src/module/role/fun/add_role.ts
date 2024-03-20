'use server'
import { prisma } from "@/module/_global"
import { revalidatePath } from "next/cache"

export default async function funAddRoleAdmin({ body }: { body: any }) {
   const insert = await prisma.adminRole.create({
      data: {
         name: body.name
      },
      select: {
         id: true
      }
   })

   let dataKomponen = []
   const componen = body.komponen
   for (let index = 0; index < componen.length; index++) {
      const element = componen[index]
      const find = await prisma.adminComponent.findFirst({
         where: {
            name: element
         }
      })

      dataKomponen.push({
         idAdminRole: insert.id,
         idAdminComponent: Number(find?.id)
      })
   }

   await prisma.adminAccess.createMany({
      data: dataKomponen
   })

   revalidatePath('/role')

   return { success: true, data: insert.id }
}