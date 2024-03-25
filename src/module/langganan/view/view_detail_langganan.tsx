'use client'
import { ButtonBack, Warna } from '@/module/_global';
import { Box, Grid, Group, Image, List, SimpleGrid, Stack, Text, ThemeIcon } from '@mantine/core';
import React from 'react';
import { FaUserTag } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import moment from 'moment';

export default function ViewDetaiLangganan({ data, terjual }: { data: any, terjual: any }) {
  return (
    <>
      <ButtonBack />
      <Box pb={20} pt={20}>
        <Text fz={25} c={Warna.biruTua} fw={'bold'}>DETAIL LANGGANAN</Text>
      </Box>
      <Box style={{
        border: `1px solid ${Warna.warnaBorder}`,
        borderRadius: 10,
        boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
      }}>
        <Box p={20}>
          <Box pb={20}>
            <Box style={{
              border: `1px solid ${Warna.warnaBorder}`,
              borderRadius: 10,
              boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
            }}>
              <Box p={20}>
                <Box pb={10}>
                  <Text fz={20} c={Warna.biruTua}></Text>
                </Box>
                <Text>Name : {data.langganan.name}</Text>
                <Text>Description : {data.langganan.description}</Text>
              </Box>
            </Box>
          </Box>
          <Grid>
            <Grid.Col span={3}>
              <Box>
                <Box style={{
                  backgroundColor: '#E5E9F1',
                  padding: 10,
                  borderRadius: 10,
                }}>
                  <Text c={"grey"} pl={10}>Amount Sold</Text>
                  <Group gap={8} pt={20} pb={20} justify='center'>
                    <FaUserTag size={25} color={Warna.pink} />
                    <Text c={"pink"} pt={5}>{terjual}</Text>
                  </Group>
                </Box>
              </Box>
            </Grid.Col>
            <Grid.Col span={3}>
              <Box>
                <Box style={{
                  backgroundColor: '#E5E9F1',
                  padding: 10,
                  borderRadius: 10,
                }}>
                  <Text c={"grey"} pl={10}>Last Updated</Text>
                  <Group gap={8} pt={20} pb={20} justify='center'>
                    <MdOutlineAccessTimeFilled size={25} color={Warna.pink} />
                    <Text c={"pink"} pt={5}>{moment(data.langganan.updatedAt).format('Do MMMM YYYY, h:mm')}</Text>
                  </Group>
                </Box>
              </Box>
            </Grid.Col>
          </Grid>
          <Box pt={20}>
            <Box style={{
              border: `1px solid ${Warna.warnaBorder}`,
              borderRadius: 10,
              boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
            }}>
              <Box p={20}>
                <Box pb={10}>
                  <Text fz={20} c={Warna.biruTua}>LIST FITUR</Text>
                </Box>
                {data.fitur.map((v: any, i: any) => (
                  <List
                    key={i}
                    spacing="xs"
                    size="sm"
                    center
                    icon={
                      <ThemeIcon color="pink" size={24} radius="xl">
                        <FaRegCheckCircle style={{ width: 25, height: 25 }} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>{v}</List.Item>
                  </List>
                ))}
              </Box>
            </Box>
          </Box>

          <Box pt={20}>
            <Box style={{
              border: `1px solid ${Warna.warnaBorder}`,
              borderRadius: 10,
              boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
            }}>
              <Box p={20}>
                <Box pb={10}>
                  <Text fz={20} c={Warna.biruTua}>LIST HARGA</Text>
                </Box>
                {data.harga.map((v: any, i: any) => (
                  <List
                    key={i}
                    spacing="xs"
                    size="sm"
                    center
                    icon={
                      <ThemeIcon color="pink" size={24} radius="xl">
                        <FaRegCheckCircle style={{ width: 25, height: 25 }} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>name : {v.name}, price: Rp. {v.price}, duration: {v.rangeTime} days</List.Item>
                  </List>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}