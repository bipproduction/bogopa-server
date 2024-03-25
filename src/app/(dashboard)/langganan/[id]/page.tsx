import { ViewDetailLangganan, funGetOneLangganan } from '@/module/langganan';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await funGetOneLangganan({ id: params.id })
  return (
    <>
      <ViewDetailLangganan data={data} />
    </>
  );
}

