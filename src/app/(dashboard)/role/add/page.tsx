import { ViewAddRole, funGetAllComponent } from "@/module/role";
import React from 'react';

export default async function Page() {
   const dataKomponen = await funGetAllComponent()
   return (
      <>
         <ViewAddRole komponen={dataKomponen}/>
      </>
   )
}