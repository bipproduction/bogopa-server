'use server'
import { prisma } from "@/module/_global"
import _, { ceil } from "lodash"

export default async function funGetListLangganan({ search, page }: { search?: any, page: any }) {
   const dataSkip = _.toNumber(page) * 25 - 25

   const result = await prisma.langganan.findMany({
      skip: dataSkip,
      take: 25,
      where: {
         name: {
            contains: search,
            mode: 'insensitive'
         }
      }
   })

   const allData = {
      data: result,
      nPage: ceil(result.length / 25)
   }

   return allData
}