'use server'
import { prisma } from "@/module/_global"
import _ from "lodash"
import fs from 'fs'
import { revalidatePath } from "next/cache"

export default async function funUpdateGift({ kat, body, img }: { kat: any, body: any, img?: any }) {
   if (kat == "active") {
      await prisma.gift.update({
         where: {
            id: body.id
         },
         data: {
            isActive: body.isActive
         }
      })
   } else {
      const edit = await prisma.gift.update({
         where: {
            id: body.id
         },
         data: {
            name: body.name,
            price: body.price
         }
      })

      if (!_.isNull(img) && !_.isUndefined(img)) {
         fs.unlink(`./public/gift/${edit.img}`, (err) => { })
         const f: any = img.get('file')
         const fName = f.name
         const fExt = f.name.split(".").pop()

         const filenya = Buffer.from(await f.arrayBuffer())
         fs.writeFileSync(`./public/gift/${body.id}.${fExt}`, filenya)

         await prisma.gift.update({
            where: {
               id: body.id
            },
            data: {
               img: `${body.id}.${fExt}`
            }
         })
      }
   }

   revalidatePath('/gift')

   return { success: true }
}