import React from "react";
import { useList } from "@pankod/refine-core";

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from "components";
import { Box, Typography, Stack } from "@pankod/refine-mui";

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const latestProperties = data?.data ?? [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d" my={1}>
        Dashboard
      </Typography>

      <Box mt="20" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={654}
          series={[75, 25]}
          colors={["#475be8", "#E4e8ef"]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={["#475be8", "#E4e8ef"]}
        />
        <PieChart
          title="Average taxing"
          value={5665}
          series={[25, 75]}
          colors={["#4759e8", "#E4e8ef"]}
        />
        <PieChart
          title="Successful deals"
          value={65}
          series={[80, 20]}
          colors={["#475be8", "#E4e8ef"]}
        />
      </Box>
      <Stack
        gap={4}
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize={18} fontWeight={600} color="#11142d">
          Latest Properties
        </Typography>

        <Box display="flex" flexWrap="wrap" gap={4} mt={2.5}>
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              price={property.price}
              photo={property.photo}
              location={property.location}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
