'use server'
import { prisma, pwd_key_config } from "@/module/_global"
import { unsealData } from "iron-session"
import { cookies } from "next/headers"

export default async function funGetUserByCookies() {
   const c = cookies().get("_cookiesBogopaServer")
   const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })


   const dataUser = await prisma.adminUser.findUnique({
      where: {
         id: Number(dataCookies)
      }
   })

   return dataUser
}