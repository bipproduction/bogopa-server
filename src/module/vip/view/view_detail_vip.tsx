'use client'
import { Warna } from '@/module/_global';
import ButtonBack from '@/module/_global/components/button_back';
import { Box, Grid, Group, Image, SimpleGrid, Stack, Text } from '@mantine/core';
import React from 'react';

export default function ViewDetailVip({ id }: { id: string }) {

  return (
    <>
      <ButtonBack />
      <Box pb={20} pt={20}>
        <Text fz={30} c={Warna.biruTua}>DETAIL VIP</Text>
      </Box>
      <Box style={{
        border: `1px solid ${Warna.warnaBorder}`,
        borderRadius: 10,
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.10)",
      }}>
        <Box p={50}>
          <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
          >
            <Box>
              <Box pb={20}>
                <Text fz={20} c={Warna.ungu}>NAME :</Text>
                <Text fz={20} c={Warna.biruTua}>- Gold</Text>
              </Box>
              <Box pb={20}>
                <Text fz={20} c={Warna.ungu}>LIST FITUR :</Text>
                <Text fz={20} c={Warna.biruTua}>- Lihat Siapa Suka Saya</Text>
              </Box>
              <Box pb={20}>
                <Text fz={20} c={Warna.ungu}>HARGA :</Text>
                <Text fz={20} c={Warna.biruTua}>- Rp. 150.000-,</Text>
              </Box>
              <Box pb={20}>
                <Text fz={20} c={Warna.ungu}>TIME UPDATE TERAKHIR :</Text>
                <Text fz={20} c={Warna.biruTua}>- 29, Februari 2024</Text>
              </Box>
              <Box >
                <Text fz={20} c={Warna.ungu}>JUMLAH TERBELI :</Text>
                <Text fz={20} c={Warna.biruTua}>- 356 Gold</Text>
              </Box>
            </Box>
            <Image alt='logo' src={'/web/logo.png'} h={400}
      w="auto"/>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
