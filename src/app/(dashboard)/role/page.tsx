import { ViewRole, funGetAllRole } from '@/module/role';
import React from 'react';

export default async function Page() {
  const data = await funGetAllRole({ page: 1 })
  return (
    <ViewRole data={data}/>
  );
}
