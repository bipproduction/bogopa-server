import { ViewEditRole, funGetAllComponent, funGetOneRole } from '@/module/role';
import React from 'react';

export default async function Page({ params }: { params: { id: any } }) {
  const data = await funGetOneRole({ id: params.id })
  const dataKomponen = await funGetAllComponent()
  return (
    <ViewEditRole data={data} komponen={dataKomponen}/>
  );
}
