"use client";

import { useMemo, useState } from "react";
import { TRAILER_MOCK } from "@/entities/trailer/lib/config";
import useDebounce from "@/shared/hooks/useDebounce";
import { SearchField } from "@/shared/ui/SearchField/SearchField";
import { GridList } from "@/widgets";
import { Box, Text, VStack } from "@chakra-ui/react";

export default function Trailers() {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 300);

  const filteredTrailers = useMemo(() => {
    if (!debouncedSearch) return TRAILER_MOCK;
    const query = debouncedSearch.toLowerCase();
    return TRAILER_MOCK.filter((trailer) =>
      trailer.model.toLowerCase().includes(query),
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
          Доступно автомобилей: {filteredTrailers.length}
        </Text>
        <SearchField value={searchValue} setValue={setSearchValue} />
      </VStack>
      <GridList cards={filteredTrailers} isFullList={true} />
    </Box>
  );
}
