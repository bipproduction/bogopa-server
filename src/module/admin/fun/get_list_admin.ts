'use server'
import { prisma } from "@/module/_global"
import _, { ceil } from "lodash"

export default async function funGetListAdmin({ search, page }: { search?: any, page: any }) {
   const dataSkip = _.toNumber(page) * 25 - 25

   const resultAwal = await prisma.adminUser.findMany({
      skip: dataSkip,
      take: 25,
      where: {
         name: {
            contains: search,
            mode: 'insensitive'
         }
      },
      select: {
         id: true,
         email: true,
         isActive: true,
         name: true,
         password: true,
         phone: true,
         AdminRole: {
            select: {
               name: true
            }
         }
      }
   })

   const result = resultAwal.map((v) => ({
      ..._.omit(v, ['AdminRole']),
      role: v.AdminRole.name
   }))

   const allData = {
      data: result,
      nPage: ceil(result.length / 25)
   }

   return allData
}