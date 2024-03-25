import { ViewEditLangganan, funGetAllLanggananComponent, funGetOneLangganan } from '@/module/langganan';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await funGetOneLangganan({ id: params.id })
  const komponen = await funGetAllLanggananComponent()
  return (
    <>
      <ViewEditLangganan data={data} komponen={komponen} />
    </>
  );
}
