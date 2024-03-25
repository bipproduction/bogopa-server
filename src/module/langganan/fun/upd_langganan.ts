'use server'
import { prisma } from "@/module/_global"
import _ from "lodash"
import { revalidatePath } from "next/cache"

export default async function funUpdateLangganan({ kat, body, harga }: { kat: any, body: any, harga?: any }) {
   if (kat == "active") {
      await prisma.langganan.update({
         where: {
            id: body.id
         },
         data: {
            isActive: body.isActive
         }
      })
   } else {
      await prisma.langganan.update({
         where: {
            id: body.id
         },
         data: {
            name: body.name,
            description: body.description,
         }
      })

      await prisma.langgananDetail.deleteMany({
         where: {
            idLangganan: body.id
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
            idLangganan: body.id,
            idLanggananComponent: Number(find?.id)
         })
      }
      await prisma.langgananDetail.createMany({
         data: dataFitur
      })

      let dataHarga = []
      for (let index = 0; index < harga.length; index++) {
         if (!_.isUndefined(harga[index].id)) {
            if (harga[index].name != "") {
               await prisma.langgananRange.update({
                  where: {
                     id: harga[index].id
                  },
                  data: {
                     name: harga[index].name,
                     rangeTime: harga[index].rangeTime,
                     price: harga[index].price,
                  }
               })
            }
         } else {
            if (harga[index].name != "") {
               dataHarga.push({
                  idLangganan: body.id,
                  name: harga[index].name,
                  rangeTime: harga[index].rangeTime,
                  price: harga[index].price,
               })
            }
         }
      }

      if (dataHarga.length > 0) {
         await prisma.langgananRange.createMany({
            data: dataHarga
         })
      }
   }

   revalidatePath('/langganan')

   return { success: true }
}