import { ViewAdmin, funGetListAdmin } from '@/module/admin';
import React from 'react';

export default async function Page() {
  const data = await funGetListAdmin({ page: 1 })
  return (
    <ViewAdmin data={data}/>
  );
}