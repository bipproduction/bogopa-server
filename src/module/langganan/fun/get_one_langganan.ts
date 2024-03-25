'use server'
import { prisma } from "@/module/_global"
import _ from "lodash"

export default async function funGetOneLangganan({ id }: { id: any }) {
   const data = await prisma.langganan.findUnique({
      where: {
         id: Number(id)
      }
   })

   const fitur = await prisma.langgananDetail.findMany({
      where: {
         idLangganan: Number(id)
      },
      select: {
         LanggananComponent: {
            select: {
               name: true
            }
         }
      }
   })
   const resultFitur = fitur.map(a => a.LanggananComponent.name)

   const harga = await prisma.langgananRange.findMany({
      where: {
         idLangganan: Number(id)
      },
      select: {
         id: true,
         price: true,
         name: true,
         rangeTime: true
      }
   })

   const allData = {
      langganan: data,
      fitur: resultFitur,
      harga: harga
   }

   return allData
}