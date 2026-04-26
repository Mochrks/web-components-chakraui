import React from "react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts"
import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import { MpCard } from "../"

const data = [
  { name: "Jan", sales: 4000, revenue: 2400 },
  { name: "Feb", sales: 3000, revenue: 1398 },
  { name: "Mar", sales: 2000, revenue: 9800 },
  { name: "Apr", sales: 2780, revenue: 3908 },
  { name: "May", sales: 1890, revenue: 4800 },
  { name: "Jun", sales: 2390, revenue: 3800 },
  { name: "Jul", sales: 3490, revenue: 4300 },
]

const pieData = [
  { name: "Direct", value: 400 },
  { name: "Social", value: 300 },
  { name: "Referral", value: 300 },
  { name: "Other", value: 200 },
]

const COLORS = ["#3182ce", "#805ad5", "#38a169", "#d69e2e"]

const ShowcaseCharts = () => {
  const gridColor = useColorModeValue("#E2E8F0", "#2D3748")
  const textColor = useColorModeValue("#4A5568", "#A0AEC0")

  return (
    <VStack spacing={6} align="stretch">
      <MpCard title="Analytics Dashboard (Recharts)">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
          <Box h="300px">
            <Text mb={4} fontWeight="bold">
              Monthly Performance
            </Text>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3182ce" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3182ce" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="name" stroke={textColor} fontSize={12} />
                <YAxis stroke={textColor} fontSize={12} />
                <RechartsTooltip />
                <Area type="monotone" dataKey="sales" stroke="#3182ce" fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </Box>

          <Box h="300px">
            <Text mb={4} fontWeight="bold">
              Sales Channels
            </Text>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </SimpleGrid>
      </MpCard>
    </VStack>
  )
}

import { VStack, Text } from "@chakra-ui/react"
export default ShowcaseCharts
