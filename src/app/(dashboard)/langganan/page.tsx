import { ViewLangganan, funGetListLangganan } from '@/module/langganan';
import React from 'react';

export default async function Page() {
  const data = await funGetListLangganan({ page: 1 })
  return (
    <ViewLangganan data={data}/>
  );
}
