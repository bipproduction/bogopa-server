'use client'
import { Warna } from "@/module/_global"
import ButtonBack from "@/module/_global/components/button_back"
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