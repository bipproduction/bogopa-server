'use client'
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import * as echarts from 'echarts';
import React, { useState } from 'react';
import { useShallowEffect } from "@mantine/hooks";
import { Box, Text } from "@mantine/core";
import { Warna } from "@/module/_global";

export default function PieChartVip() {
  const [options, setOptions] = useState<EChartsOption>({})

  useShallowEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    const option: EChartsOption = {
      tooltip: {
        trigger: 'item'
      },
      title: {
        text: 'TRANSAKSI VIP',
        left: 'center',
        textStyle: {
          fontSize: 16,
          color: Warna.pink,
        }
      },
      legend: {
        bottom: 10,
         left: 'center',
       },
          series: [
            {
              labelLine: {
                show: false,
              },
    
              label: {
                position: "inner",
                formatter: (a) => {
                  return `${a.value}`;
                },
              },
              name: 'TRANSAKSI VIP',
              type: 'pie',
              radius: '80%',
              data: [
            { value: 1048, name: 'VIP' },
            { value: 735, name: 'GOLD' },
            { value: 580, name: 'PREMIUM' },
          ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
    
            }
          ]
        }
    setOptions(option);
  }
  return (
    <>
      <Box>
        <Box style={{
          border: `1px solid ${Warna.warnaBorder}`,
          borderRadius: 10,
          boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
        }} p={0}>
          <Box p={10}>
            <EChartsReact style={{ height: 280, }} option={options} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

