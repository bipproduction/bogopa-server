import { ViewDetailGift, funGetOneDetailGift, funGetOneGift } from '@/module/gift';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await funGetOneGift({ id: params.id })
  const hitung = await funGetOneDetailGift({ id: params.id })
  return (
    <>
      <ViewDetailGift data={data} terbeli={hitung} />
    </>
  );
}

