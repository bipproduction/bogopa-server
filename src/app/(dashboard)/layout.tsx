import { pwd_key_config } from '@/module/_global';
import LayoutDashboard from '@/module/_global/dahsboard/view/layout_dashboard';
import { unsealData } from 'iron-session';
import _ from 'lodash';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const c = cookies().get("_cookiesBogopaServer")
  if (!c || _.isUndefined(c) || !c.value || _.isEmpty(c.value)) return redirect('/')
  const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })
  if (_.isEmpty(_.toString(dataCookies))) return redirect('/')

  return (
    <>
      <LayoutDashboard>
        {children}
      </LayoutDashboard>
    </>
  );
}

