'use client'
import { Warna } from '@/module/_global';
import { Box, Grid, Group, Tabs, Text, rem } from '@mantine/core';
import { FaMoneyBillTransfer } from "react-icons/fa6";

export default function TabTransaksiDetail() {
   const iconStyle = { width: rem(20), height: rem(20) };

   return (
      <Tabs variant="default" color={Warna.pink} defaultValue="Detail">
         <Tabs.List>
            <Tabs.Tab value="Detail" leftSection={<FaMoneyBillTransfer style={iconStyle} color={Warna.pink} />} w={"50%"}>
               Detail
            </Tabs.Tab>
         </Tabs.List>

         <Tabs.Panel value="Detail">
            <Box pt={20}>
               Detail
            </Box>
         </Tabs.Panel>
      </Tabs>
   );
}
