"use client"
import { Avatar, Badge, Box, Button, Grid, Group, Pagination, Select, Table, Text } from "@mantine/core"
import { DateInput } from "@mantine/dates"
import React, { useState } from "react"
import { Warna } from "@/module/_global"
import funGetLogAdmin from "../fun/get_log"
import moment from "moment"
import _ from "lodash"

export default function ViewLog({ admin }: { admin: any }) {
  const [show, setShow] = useState(false)
  const [dateFrom, setDateFrom] = useState<any>(new Date())
  const [dateTo, setDateTo] = useState<any>(new Date())
  const [isUser, setUser] = useState<any>("")
  const [isData, setData] = useState<any>([])
  const [isNPage, setNPage] = useState(0)
  const [isChoosePage, setChoosePage] = useState(1)
  let noAwal = isChoosePage * 25 - 24

  async function onLog(p: any) {
    const load = await funGetLogAdmin({
      body: {
        dateFrom: moment(dateFrom).format("YYYY-MM-DD"),
        dateTo: moment(dateTo).format("YYYY-MM-DD"),
        user: isUser,
        page: p,
      },
    });
    setShow(true)
    setChoosePage(p)
    setData(load.data)
    setNPage(load.nPage)
  }

  return (
    <>
      <Box>
        <Text fz={25} c={Warna.biruTua} fw={"bold"}>
          LOG ADMIN
        </Text>
      </Box>
      <Box pt={15}>
        <Grid>
          <Grid.Col span={3}>
            <DateInput
              mt={5}
              placeholder="Tanggal Awal"
              radius={"md"}
              onChange={(val) => {
                setDateFrom(val)
              }}
              value={dateFrom}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <DateInput
              mt={5}
              placeholder="Tanggal Akhir"
              radius={"md"}
              onChange={(val) => {
                setDateTo(val)
              }}
              value={dateTo}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Select
              mt={5}
              placeholder="Pilih User"
              data={admin.map((pro: any) => ({
                value: String(pro.id),
                label: pro.name,
              }))}
              value={isUser}
              onChange={(val) => {
                setUser(val)
              }}
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <Box mt={5}>
              <Button
                ta={"center"}
                fullWidth
                radius={"md"}
                onClick={() => {
                  onLog(1)
                }}
              >
                Cari
              </Button>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
      <Box pt={20}>
        {show &&
          <>
            <Box style={{
              border: `1px solid ${Warna.warnaBorder}`,
              borderRadius: 10,
              boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
            }}>
              <Box p={20}>
                <Table >
                  <Table.Thead>
                    <Table.Tr >
                      <Table.Th>NO</Table.Th>
                      <Table.Th>USER</Table.Th>
                      <Table.Th>TIMESTAMP</Table.Th>
                      <Table.Th>ACTION</Table.Th>
                      <Table.Th>DESCRIPTION</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody >
                    {isData.length > 0 && isData.map((v: any, i: any) => (
                      <Table.Tr key={i}>
                        <Table.Td>{noAwal++}</Table.Td>
                        <Table.Td>
                          <Group>
                            <Avatar />
                            <Box>
                              <Text fw={"bold"}>{v.name}</Text>
                              <Text c={"gray"} fz={14}>{v.role}</Text>
                            </Box>
                          </Group>
                        </Table.Td>
                        <Table.Td >
                          <Text>{v.time}</Text>
                        </Table.Td>
                        <Table.Td >
                          {(v.activity == 'UPDATE') && <><Badge color="blue" >{v.activity}</Badge></>}
                          {(v.activity == 'CREATE') && <><Badge color="green" >{v.activity}</Badge></>}
                          {(v.activity == 'DELETE') && <><Badge color="red" >{v.activity}</Badge></>}
                          {(v.activity == 'LOGIN') && <><Badge color="teal" >{v.activity}</Badge></>}
                        </Table.Td>
                        <Table.Td >
                          <Text>{v.description}</Text>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                    {isData.length <= 0 && <>
                      <Table.Tr>
                        <Table.Td colSpan={5} align="center" c={'gray'}><i>Data Kosong</i></Table.Td>
                      </Table.Tr>
                    </>}
                  </Table.Tbody>
                </Table>
              </Box>
            </Box>
            <Group justify='flex-end' pt={20}>
              <Pagination
                value={isChoosePage}
                onChange={(val) => {
                  onLog(val)
                }}
                total={isNPage}
              />
            </Group>
          </>
        }

      </Box>
    </>
  );
}
