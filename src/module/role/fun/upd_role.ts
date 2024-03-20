'use server'
import { prisma } from "@/module/_global"
import { revalidatePath } from "next/cache"

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
      let dataKomponen = []
      const componen = body.komponen
      await prisma.adminRole.update({
         where: {
            id: body.id
         },
         data: {
            name: body.name
         }
      })

      await prisma.adminAccess.deleteMany({
         where: {
            idAdminRole: body.id
         }
      })

      for (let index = 0; index < componen.length; index++) {
         const element = componen[index]
         const find = await prisma.adminComponent.findFirst({
            where: {
               name: element
            }
         })

         dataKomponen.push({
            idAdminRole: body.id,
            idAdminComponent: Number(find?.id)
         })
      }

      await prisma.adminAccess.createMany({
         data: dataKomponen
      })

   }

   revalidatePath('/role')

   return { success: true }
}