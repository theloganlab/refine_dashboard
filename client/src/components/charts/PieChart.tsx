import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box, Stack, Typography } from "@pankod/refine-mui";

import { PieChartProps } from "interfaces/home";

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
  return (
    <Box
      id="chart"
      display="flex"
      flex={1}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="#fcfcfc"
      pl={3.5}
      py={2}
      gap={2}
      borderRadius="10px"
      minHeight="110px"
      width="fit-content"
    >
      <Stack direction="column">
        <Typography fontSize={14} color="#808191">
          {title}
        </Typography>
        <Typography fontSize={14} fontWeight={700} mt={1} color="#11142d">
          {value}
        </Typography>
      </Stack>
      <ReactApexChart 
        options={{
          chart: {
            type: 'donut'},
            colors,
            legend: { show: false},
            dataLabels: { enabled: false },
          }}
        series={series}
        type="donut"
        width="120px"
      />
    </Box>
  );
};

export default PieChart;
