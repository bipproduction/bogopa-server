'use server'
import { prisma } from "@/module/_global"
import { revalidatePath } from "next/cache"

export default async function funAddLangganan({ body, harga }: { body: any, harga: any }) {
   const insert = await prisma.langganan.create({
      data: {
         name: body.name,
         description: body.desc
      },
      select: {
         id: true
      }
   })

   let dataFitur = []
   const fitur = body.fitur
   for (let index = 0; index < fitur.length; index++) {
      const element = fitur[index]
      const find = await prisma.langgananComponent.findFirst({
         where: {
            name: element
         }
      })

      dataFitur.push({
         idLangganan: insert.id,
         idLanggananComponent: Number(find?.id)
      })
   }

   await prisma.langgananDetail.createMany({
      data: dataFitur
   })

   let dataHarga = []
   for (let index = 0; index < harga.length; index++) {
      if (harga[index].name != "") {
         dataHarga.push({
            idLangganan: insert.id,
            name: harga[index].name,
            rangeTime: harga[index].duration,
            price: harga[index].price,
         })
      }
   }

   await prisma.langgananRange.createMany({
      data: dataHarga
   })

   revalidatePath('/langganan')

   return { success: true, data: insert.id }
}