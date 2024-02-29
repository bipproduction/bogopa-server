'use client'
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import * as echarts from 'echarts';
import { useState } from "react";
import { useShallowEffect } from "@mantine/hooks";
import { Box } from "@mantine/core";
import { Warna } from "@/module/_global";


export default function EchartLive() {
    const [options, setOptions] = useState<EChartsOption>({})

    useShallowEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        const option: EChartsOption = {
            title: {
              text: 'Total Live',
              textStyle: {
                fontSize: 20,
                color: Warna.biruTua
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2023-10-16', '2023-10-17', '2023-10-18', "2023-10-19", "2023-10-20", "2023-10-21", "2023-10-22", "2023-10-23"],
                        boundaryGap: false,
                        axisLabel: {
                            verticalAlign: "middle",
                            rotate: 47,
                            color: "dark"
                        },
                    },
    
                ],
                yAxis: {
                    type: 'value',
                    axisLabel: {
    
                        color: "dark"
                    },
    
                },
                tooltip: {
                    trigger: 'axis'
                },
                series: [
                    {
                        data: [40, 20, 40, 76, 83, 12, 10, 42],
                        type: 'line',
                        color: Warna.ungu,
                        showSymbol: false,
                        areaStyle: {
                            opacity: 1,
                            color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [
                                {
                                    offset: 0,
                                    color: 'white'
                                },
                                {
                                    offset: 1,
                                    color: Warna.ungu
                                }
                            ])
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
                    <EChartsReact style={{ height: 290, }} option={options} />
                  </Box>
                </Box>
            </Box>
        </>
    )
}