import { Warna } from '@/module/_global';
import { Box, Grid, Group, Tabs, Text, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { FaGrinHearts } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import Dating from './dating';
import Transaksi from './transaksi';

export default function TabUser() {
  const iconStyle = { width: rem(20), height: rem(20) };

  return (
    <Tabs variant="pills" color={Warna.pink} radius="xl" defaultValue="Dating">
      <Tabs.List>
        <Tabs.Tab value="Dating" leftSection={<FaGrinHearts style={iconStyle} />} w={300}>
          Dating
        </Tabs.Tab>
        <Tabs.Tab value="Transaksi" leftSection={<FaMoneyBillTransfer style={iconStyle} />} w={300}>
          Transaksi
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Dating">
        <Box pt={20}>
          <Box style={{
            border: `1px solid ${Warna.warnaBorder}`,
            borderRadius: 10,
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.10)",
          }}>
            <Box p={20}>
              <Dating />
            </Box>
          </Box>
        </Box>
      </Tabs.Panel>
      <Tabs.Panel value="Transaksi">
        <Box pt={20}>
          <Box style={{
            border: `1px solid ${Warna.warnaBorder}`,
            borderRadius: 10,
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.10)",
          }}>
            <Box p={20}>
              <Transaksi/>
            </Box>
          </Box>
        </Box>
      </Tabs.Panel>
    </Tabs>
  );
}
