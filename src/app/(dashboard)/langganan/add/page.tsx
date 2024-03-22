import { ViewAddLangganan, funGetAllLanggananComponent } from '@/module/langganan';
import React from 'react';

export default async function Page() {
  const komponen = await funGetAllLanggananComponent()
  return (
    <>
      <ViewAddLangganan komponen={komponen}/>
    </>
  );
}
