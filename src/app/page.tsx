import { pwd_key_config } from "@/module/_global";
import { Login } from "@/module/auth";
import { unsealData } from "iron-session";
import _ from "lodash";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const c = cookies().get("_cookiesBogopaServer")
  if (c && !_.isUndefined(c) && c.value != '' && !_.isEmpty(c.value)) {
    const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })
    if (!_.isEmpty(_.toString(dataCookies))) return redirect('/home')
  }

  return (
    <>
      <Login />
    </>
  )
}
