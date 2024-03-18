'use client'
import { Warna } from '@/module/_global';
import { Avatar, Badge, Box, Group, Pagination, Table, Text } from '@mantine/core';
import React, { useState } from 'react';

export default function TableLog({ data }: { data: any }) {
   const [isNPage, setNPage] = useState(0)
   const [isChoosePage, setChoosePage] = useState(1)
   let noAwal = isChoosePage * 25 - 24
   const User = [
      {
         id: 1,
         image: 'https://i.pravatar.cc/200?img=4',
         name: 'Doni Setiawan',
         action: 'UPDATE',
         role: 'Admin',
         timestamp: '25 Feb 2024 18:45:34',
         desc: 'User mengubah data gift'
      },
      {
         id: 2,
         image: 'https://i.pravatar.cc/200?img=5',
         name: 'Lina Udin',
         action: 'CREATE',
         role: 'Admin',
         timestamp: '23 Feb 2024 17:04:35',
         desc: 'User menambah data VIP'
      },
      {
         id: 3,
         image: 'https://i.pravatar.cc/200?img=7',
         name: 'Dandi Agung',
         action: 'DELETE',
         role: 'Developer',
         timestamp: '22 Feb 2024 15:20:30',
         desc: 'User menghapus data admin'
      },
      {
         id: 4,
         image: 'https://i.pravatar.cc/200?img=9',
         name: 'Dona Wulandari',
         action: 'UPDATE',
         role: 'Admin',
         timestamp: '22 Feb 2024 10:00:19',
         desc: 'User mengubah data VIP'
      },

   ]

   return (
      <>
         <Box style={{
            border: `1px solid ${Warna.warnaBorder}`,
            borderRadius: 10,
            boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
         }}>
            <Box p={20}>
               <Table  >
                  <Table.Thead>
                     <Table.Tr >
                        <Table.Th>USER</Table.Th>
                        <Table.Th>TIMESTAMP</Table.Th>
                        <Table.Th>ACTION</Table.Th>
                        <Table.Th>DESCRIPTION</Table.Th>
                     </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody  >
                     {data.map((v: any, i: any) => (
                        <Table.Tr key={i}>
                           <Table.Td>
                              <Group>
                                 <Avatar src={v.image} />
                                 <Box>
                                    <Text fw={"bold"}>{v.name}</Text>
                                    <Text c={"gray"} fz={14}>{v.role}</Text>
                                 </Box>
                              </Group>
                           </Table.Td>
                           <Table.Td >
                              <Text>{v.timestamp}</Text>
                           </Table.Td>
                           <Table.Td >
                              {(v.action == 'UPDATE') && <><Badge color="blue" >{v.action}</Badge></>}
                              {(v.action == 'CREATE') && <><Badge color="green" >{v.action}</Badge></>}
                              {(v.action == 'DELETE') && <><Badge color="red" >{v.action}</Badge></>}
                           </Table.Td>
                           <Table.Td >
                              <Text>{v.desc}</Text>
                           </Table.Td>
                        </Table.Tr>
                     ))}
                  </Table.Tbody>
               </Table>
            </Box>
         </Box>
         <Group justify='flex-end' pt={20}>
            <Pagination
               value={isChoosePage}
               // onChange={(val) => {
               //    onLog(val)
               // }}
               total={isNPage}
            />
         </Group>
      </>
   );
}
