'use client'
import { Box, Button, Grid, Select } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import React from 'react';

export default function ViewLog() {
  return (
    <>
      <Box>
        <Grid>
          <Grid.Col span={3}>
            <DateInput
              mt={5}
              placeholder="Tanggal Awal"
              radius={"md"}
              // onChange={(val) => {
              //   setDateFrom(val)
              // }}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <DateInput
              mt={5}
              placeholder="Tanggal Akhir"
              radius={"md"}
              // onChange={(val) => {
              //   setDateTo(val)
              // }}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Select
              mt={5}
              placeholder="Pilih User"
              // data={user.map((pro: any) => ({
              //   value: String(pro.id),
              //   label: pro.name,
              // }))}
              // value={isUser}
              // onChange={(val) => {
              //   setUser(val)
              // }}
              searchable
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <Box mt={5}>
              <Button
                ta={"center"}
                fullWidth
                radius={"md"}
              // onClick={() => {
              //   onLog(1)
              // }}
              >
                Cari
              </Button>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}
