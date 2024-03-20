import { funGetOneAdmin } from '@/module/admin';
import ViewEditAdmin from '@/module/admin/view/view_edit_admin';
import { funGetListRoleAdmin } from '@/module/role';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await funGetOneAdmin({ id: params.id })
  const role = await funGetListRoleAdmin()
  return (
    <>
      <ViewEditAdmin data={data} role={role}/>
    </>
  );
}

