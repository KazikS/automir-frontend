"use client";

import { Flex, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex>
      <Flex flexDirection="column">
        <Text>Автомир</Text>
        <Text>Котлас</Text>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};
