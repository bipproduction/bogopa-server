import { funGetAllAdmin } from "@/module/admin";
import { ViewLog } from "@/module/log";
import React from "react";

export default async function Page() {
  const admin = await funGetAllAdmin()
  return <ViewLog admin={admin} />
}
