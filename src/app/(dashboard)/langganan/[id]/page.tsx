import { ViewDetailLangganan, funGetOneDetailLangganan, funGetOneLangganan } from '@/module/langganan';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await funGetOneLangganan({ id: params.id })
  const hitung = await funGetOneDetailLangganan({ id: params.id })
  return (
    <>
      <ViewDetailLangganan data={data} terjual={hitung}/>
    </>
  );
}

