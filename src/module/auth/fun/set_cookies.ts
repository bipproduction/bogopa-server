'use server'
import { pwd_key_config } from "@/module/_global"
import { sealData } from "iron-session"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"

/**
 * Setting cookies setelah login dan verification berhasil
 * @param user id user
 * @returns array data success dan message
 */

export async function funSetCookies({ user }: { user: any }) {

   // menyimpan dan mengunci data id user
   const tkn = await sealData(user, { password: pwd_key_config as string })

   // set cookies yg berisi data yang telah dikunci
   cookies().set(
      {
         name: "_cookiesBogopaServer",
         value: tkn
      }
   )


   return redirect('/home')
}