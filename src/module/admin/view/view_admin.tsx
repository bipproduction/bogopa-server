'use client'
import { Warna } from '@/module/_global';
import { Box, Button, Group, Input, Pagination, Text } from '@mantine/core';
import React, { useState } from 'react';
import TableAdmin from '../components/table_admin';
import { FiFolderPlus } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { GoSearch } from 'react-icons/go';
import { funGetListAdmin } from '..';

export default function ViewAdmin({ data }: { data: any }) {
  const router = useRouter()
  const [isData, setData] = useState(data.data)
  const [isSearch, setSearch] = useState("")
  const [isNPage, setNPage] = useState(data.nPage)
  const [isChoosePage, setChoosePage] = useState(1)


  async function onLoad(p: any) {
    const load = await funGetListAdmin({ search: isSearch, page: isChoosePage })
    setChoosePage(p)
    setData(load.data)
    setNPage(load.nPage)
  }

  async function onSearch(s: any) {
    const load = await funGetListAdmin({ search: s, page: 1 })
    setSearch(s)
    setChoosePage(1)
    setData(load.data)
    setNPage(load.nPage)
  }

  return (
    <>
      <Group >
        <Box>
          <Text fz={25} c={Warna.biruTua} fw={'bold'}>ADMIN</Text>
        </Box>
      </Group>
      <Box pt={20}>
        <Group pb={10} justify="space-between">
          <Input radius={10} placeholder="Search by name" leftSection={<GoSearch size={16} />} w={400}
            onChange={(val) => { onSearch(val.target.value) }} />
          <Button radius={"md"} leftSection={<FiFolderPlus />} onClick={() => router.push("/admin/add")} >Create</Button>
        </Group>
        <TableAdmin data={isData} />
        <Group justify='flex-end' pt={20}>
          <Pagination
            value={isChoosePage}
            onChange={(val) => {
              onLoad(val)
            }}
            total={isNPage}
          />
        </Group>
      </Box>
    </>
  );
}

