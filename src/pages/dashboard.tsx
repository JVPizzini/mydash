//Next
import dynamic from 'next/dynamic';

//Chakra-ui
import { Box, SimpleGrid, Flex, Text, theme } from '@chakra-ui/react';

//Components
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

//ApexCharts
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories:
      [
        '2021-10-18T00:00:00.000Z',
        '2021-10-19T00:00:00.000Z',
        '2021-10-20T00:00:00.000Z',
        '2021-10-21T00:00:00.000Z',
        '2021-10-22T00:00:00.000Z',
        '2021-10-23T00:00:00.000Z',
        '2021-10-24T00:00:00.000Z',
      ]
  },
  theme: {
    mode: 'light',
    palette: 'palette1',
    monochrome: {
      enabled: true,
      color: '#ec1f75',
      shadeTo: 'light',
      shadeIntensity: 0.1
    },
  },
  fill:{
    opacity :0.3,
    type:'gradient',
    gradient:{
      shade:'dark',
      opacityFrom:0.7,
      opacityTo:0.3,
    }
  }
} as const

const series = [
  { name: 'series1', data: [31, 120, 50, 75, 10, 20, 100] }
]

export default function DashBoard() {

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" aling="flex-start">
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4" >Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4" >Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>

      </Flex>
    </Flex>
  )
}

