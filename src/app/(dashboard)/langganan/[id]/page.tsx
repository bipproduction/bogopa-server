import { ViewDetailLangganan } from '@/module/langganan';
import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <ViewDetailLangganan id={params.id} />
    </>
  );
}

