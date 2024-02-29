import { ViewDetailVip } from '@/module/vip';
import React from 'react';

export default function Page({params}: {params: {id: string}}) {
  return (
    <>
    <ViewDetailVip id={params.id}/>
    </>
  );
}

