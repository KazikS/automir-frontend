"use client";

import { useMemo, useState } from "react";
import { CAR_MOCK } from "@/entities/car/lib/config";
import useDebounce from "@/shared/hooks/useDebounce";
import { SearchField } from "@/shared/ui/SearchField/SearchField";
import { GridList } from "@/widgets";
import { Box, Text, VStack } from "@chakra-ui/react";

export default function Cars() {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 300);

  const filteredCars = useMemo(() => {
    if (!debouncedSearch) return CAR_MOCK;
    const query = debouncedSearch.toLowerCase();
    return CAR_MOCK.filter(
      (car) =>
        car.brand.toLowerCase().includes(query) ||
        car.model.toLowerCase().includes(query)
    );
  }, [debouncedSearch]);

  return (
    <Box px="8">
      <VStack w="fit" gap="6" alignItems="start">
        <Text
          fontSize="xl"
          position="relative"
          w="fit-content"
          textWrap="nowrap"
          mr="20"
          _after={{
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "5",
            right: "-10",
            height: "1px",
            bg: "border.default",
          }}
        >
          Доступно автомобилей: {filteredCars.length}
        </Text>
        <SearchField value={searchValue} setValue={setSearchValue} />
      </VStack>
      <GridList cards={filteredCars} isFullList={true} />
    </Box>
  );
}
