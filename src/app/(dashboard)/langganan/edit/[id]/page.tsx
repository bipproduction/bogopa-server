import { ViewEditLangganan } from '@/module/langganan';
import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <ViewEditLangganan id={params.id} />
    </>
  );
}
