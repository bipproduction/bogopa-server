import { ViewDetailUser } from '@/module/user';
import React from 'react';

export default function Page({params}: {params: {id: string}}) {
  return (
    <>
    <ViewDetailUser id={params.id}/>
    </>
  );
}
