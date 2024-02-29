'use client'
import { ButtonBack, Warna } from "@/module/_global"
import { Box, Text } from "@mantine/core"

export default function ViewDetailTransaksi() {
   return (
      <>
      <ButtonBack />
      <Box pt={20}>
        <Text fz={25} c={Warna.biruTua} fw={'bold'}>DETAIL TRANSAKSI</Text>
      </Box>
      </>
   )
}