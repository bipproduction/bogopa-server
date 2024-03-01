import { ViewEditGift } from '@/module/gift';
import React from 'react';

export default function Page({ params }: { params: { id: any } }) {
  return (
    <>
      <ViewEditGift />
    </>
  );
}
