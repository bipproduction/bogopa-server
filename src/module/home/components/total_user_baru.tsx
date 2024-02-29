import { Warna } from '@/module/_global';
import { Box, Flex, Group, Text } from '@mantine/core';
import React from 'react';

export default function TotalUserBaru() {
  return (
    <Box>
      <Box style={{
        border: `1px solid ${Warna.warnaBorder}`,
        borderRadius: 10,
        boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
      }} >
        <Box p={15} h={310}>
          <Text ml={5} c={Warna.biruTua} fz={20} fw={"bold"}>TOTAL USER BARU</Text>
          <Flex
            mih={50}
            gap="md"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
            h={250}
          >
            <Text c={Warna.ungu} fz={150} fw={"bold"}>320</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

