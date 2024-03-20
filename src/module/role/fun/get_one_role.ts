'use server'
import { prisma } from "@/module/_global"

export default async function funGetOneRole({ id }: { id: any }) {
   const data = await prisma.adminRole.findUnique({
      where: {
         id: Number(id)
      }
   })

   const dataKomponen = await prisma.adminAccess.findMany({
      where: {
         idAdminRole: Number(id)
      },
      select: {
         idAdminComponent: true,
         AdminComponent: {
            select: {
               name: true
            }
         }
      }
   })


   const result = dataKomponen.map(a => a.AdminComponent.name)

   const allData = {
      data: data,
      dataKomponen: result
   }

   return allData
}