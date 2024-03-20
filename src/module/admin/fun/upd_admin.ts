'use server'
import { prisma } from "@/module/_global"
import { revalidatePath } from "next/cache"

export default async function funUpdateAdmin({ kat, body }: { kat: any, body: any }) {
   if (kat == "active") {
      await prisma.adminUser.update({
         where: {
            id: body.id
         },
         data: {
            isActive: body.isActive
         }
      })
   } else {
      // cek email
      const cek = await prisma.adminUser.findUnique({
         where: {
            email: body.email
         }
      })

      if (cek && cek.id != body.id )
         return { success: false, message: 'Available email address' }

      await prisma.adminUser.update({
         where: {
            id: body.id
         },
         data: {
            idAdminRole: Number(body.idAdminRole),
            name: body.name,
            email: body.email,
            password: body.password,
            phone: String(body.phone),
         }
      })
   }

   revalidatePath('/admin')

   return { success: true }
}