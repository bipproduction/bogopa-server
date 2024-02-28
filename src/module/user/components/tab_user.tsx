import { Warna } from '@/module/_global';
import { Box, Grid, Group, Tabs, Text, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { MdLiveTv } from "react-icons/md";
import Live from './live';

export default function TabUser() {
  const iconStyle = { width: rem(20), height: rem(20) };

  return (
    <Tabs variant="pills" radius="xl" defaultValue="Live">
      <Tabs.List>
        <Tabs.Tab value="Live" leftSection={<IconPhoto style={iconStyle} />} w={300}>
          Live
        </Tabs.Tab>
        <Tabs.Tab value="Match" leftSection={<IconMessageCircle style={iconStyle} />} w={300}>
          Match
        </Tabs.Tab>
        <Tabs.Tab value="Transaksi" leftSection={<IconSettings style={iconStyle} />} w={300}>
          Transaksi
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Live">
        <Box pt={20}>
          <Box style={{
            border: `1px solid ${Warna.warnaBorder}`,
            borderRadius: 10,
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.10)",
          }}>
            <Box p={20}>
              <Live />
            </Box>
          </Box>
        </Box>
      </Tabs.Panel>

      <Tabs.Panel value="Match">
        <Box pt={20}>
          <Box style={{
            border: `1px solid ${Warna.warnaBorder}`,
            borderRadius: 10,
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.10)",
          }}>
            <Box p={20}>
              MATCH
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
              TRANSAKSI
            </Box>
          </Box>
        </Box>
      </Tabs.Panel>
    </Tabs>
  );
}
