import { ViewGift, funGetListGift } from '@/module/gift';
import React from 'react';

export default async function Page() {
  const data = await funGetListGift({ page: 1 })
  return (
    <ViewGift data={data}/>
  );
}
