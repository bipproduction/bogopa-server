import { ViewAddAdmin } from '@/module/admin';
import { funGetListRoleAdmin } from '@/module/role';
import React from 'react';

export default async function Page() {
  const role = await funGetListRoleAdmin()

  return (
    <>
      <ViewAddAdmin role={role} />
    </>
  );
}
