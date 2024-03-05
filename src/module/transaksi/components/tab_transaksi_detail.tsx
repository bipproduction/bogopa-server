'use client'
import { Warna } from '@/module/_global';
import { Box, Grid, Group, Tabs, Text, rem } from '@mantine/core';
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdOutlineMailOutline, MdOutlinePhoneIphone } from 'react-icons/md';
import { FaUserTie } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaGift } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { GrStatusUnknown } from "react-icons/gr";

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
            <Grid pb={20}>
              <Grid.Col span={3}>
                <Group gap={8} >
                  <BsCalendarDateFill size={25} color={Warna.pink} />
                  <Text c={"pink"}>Tanggal</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={9}>
                <Text >:  24, Desember 2023</Text>
              </Grid.Col>
            </Grid>
            <Grid pb={20}>
              <Grid.Col span={3}>
                <Group gap={8} >
                  <FaUserTie size={25} color={Warna.pink} />
                  <Text c={"pink"}>Nama User</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={9}>
                <Text >:  Gibran</Text>
              </Grid.Col>
            </Grid>
            <Grid pb={20}>
              <Grid.Col span={3}>
                <Group gap={8} >
                  <FaMoneyBillTransfer size={25} color={Warna.pink} />
                  <Text c={"pink"}>Total Transaksi</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={9}>
                <Text >:  239.000-,</Text>
              </Grid.Col>
            </Grid>
            <Grid pb={20}>
              <Grid.Col span={3}>
                <Group gap={8} >
                  <FaGift size={25} color={Warna.pink} />
                  <Text c={"pink"}>Item</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={9}>
                <Text >:  Gift</Text>
              </Grid.Col>
            </Grid>
            <Grid pb={20}>
              <Grid.Col span={3}>
                <Group gap={8} >
                  <AiOutlineTransaction size={25} color={Warna.pink} />
                  <Text c={"pink"}>Metode Pembayaran</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={9}>
                <Text >:  BCA</Text>
              </Grid.Col>
            </Grid>
            <Grid pb={20}>
              <Grid.Col span={3}>
                <Group gap={8} >
                  <GrStatusUnknown size={25} color={Warna.pink} />
                  <Text c={"pink"}>Status</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={9}>
                <Text >:  On Prosess</Text>
              </Grid.Col>
            </Grid>
            </Box>
         </Tabs.Panel>
      </Tabs>
   );
}
