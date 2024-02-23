import LayoutDashboard from '@/module/_global/dahsboard/view/layout_dashboard';
import React from 'react';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <LayoutDashboard>
      {children}
    </LayoutDashboard>
    </>
  );
}

