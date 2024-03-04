'use client'
import { ButtonBack, Warna } from "@/module/_global"
import { Box, Text } from "@mantine/core"
import TabTransaksiDetail from "../components/tab_transaksi_detail"

export default function ViewDetailTransaksi() {
   return (
      <>
         <ButtonBack />
         <Box pt={20}>
            <Text fz={25} c={Warna.biruTua} fw={'bold'}>TRANSAKSI #1137592245</Text>
         </Box>
         <Box style={{
            border: `1px solid ${Warna.warnaBorder}`,
            borderRadius: 10,
            boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
         }} mt={20}>
            <Box p={30}>
               <TabTransaksiDetail />
            </Box>
         </Box>
      </>
   )
}