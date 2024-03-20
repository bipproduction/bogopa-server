'use server'
import { prisma } from "@/module/_global"
import { revalidatePath } from "next/cache"

export default async function funAddAdmin({ body }: { body: any }) {

   // cek email
   const cek = await prisma.adminUser.count({
      where: {
         email: body.email
      }
   })

   if (cek > 0)
      return {
         success: false,
         messsage: 'Available email address',
      }

   // find last id 
   const lastId = await prisma.adminUser.findFirst({
      orderBy: {
         id: 'desc'
      }
   })

   // created new admin
   const insert = await prisma.adminUser.create({
      data: {
         id: lastId!.id + 1,
         email: body.email,
         name: body.name,
         password: body.password,
         phone: String(body.phone),
         idAdminRole: Number(body.idAdminRole),
      },
      select: {
         id: true
      }
   })

   revalidatePath('/admin')

   return {
      success: true,
      messsage: 'You`ve successfully created new data',
      data: insert.id
   }
}