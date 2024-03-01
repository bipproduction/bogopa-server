import ViewEditAdmin from '@/module/admin/view/view_edit_admin';
import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <ViewEditAdmin id={params.id} />
    </>
  );
}

