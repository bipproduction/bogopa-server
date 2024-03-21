'use server'
import { prisma } from "@/module/_global"
import fs from 'fs'
import { revalidatePath } from "next/cache"

export default async function funAddGift({ body, img }: { body: any, img: any }) {
   const insert = await prisma.gift.create({
      data: {
         name: body.name,
         price: body.price,
      },
      select: {
         id: true
      }
   })

   const f: any = img.get('file')
   const fName = f.name
   const fExt = f.name.split(".").pop()

   const filenya = Buffer.from(await f.arrayBuffer())
   fs.writeFileSync(`./public/gift/${insert.id}.${fExt}`, filenya)

   await prisma.gift.update({
      where: {
         id: insert.id
      },
      data: {
         img: `${insert.id}.${fExt}`
      }
   })

   revalidatePath('/gift')

   return {
      success: true,
      data: insert.id
   }
}