import { ViewEditVip } from '@/module/vip';
import React from 'react';

export default function Page({params}: { params: {id: string} }) {
  return (
    <>
    <ViewEditVip id={params.id}/>
    </>
  );
}
