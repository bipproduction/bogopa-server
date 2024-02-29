import { ViewDetailGift } from '@/module/gift';
import React from 'react';

export default function Page({params}: {params: {id: string}}) {
  return (
    <>
    <ViewDetailGift id={params.id}/>
    </>
  );
}

