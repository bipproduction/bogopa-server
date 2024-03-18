'use server'
import { prisma, pwd_key_config } from "@/module/_global"
import { unsealData } from "iron-session"
import _ from "lodash"
import { cookies } from "next/headers"

export default async function funLogAdmin({ act, desc, idContent, tbContent }: { act: any, desc: any, idContent: any, tbContent: any }) {
   const c = cookies().get("_cookiesNinox")
   const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })
   await prisma.adminLog.create({
      data: {
         idAdminUser: Number(dataCookies),
         activity: _.toString(act),
         description: _.toString(desc),
         idContent: _.toString(idContent),
         tableContent: _.toString(tbContent)
      }
   })

   // berfungsi untuk menampilkan data success, message,
   // atau proses pengembalian yang terdiri dari success, message
   return {
      success: true,
      message: 'Sukses'
   }

}
