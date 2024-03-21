import { ViewEditGift, funGetOneGift } from '@/module/gift';
import React from 'react';

export default async function Page({ params }: { params: { id: any } }) {
  const data = await funGetOneGift({ id: params.id })
  return (
    <>
      <ViewEditGift data={data}/>
    </>
  );
}
