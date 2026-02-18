import { Flex, Text } from "@chakra-ui/react";

type BenefitProps = {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
};

export const BenefitCard = ({
  firstLine,
  secondLine,
  thirdLine,
}: BenefitProps) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      border="1px solid"
      borderColor="border.default"
      rounded="20px"
      w="190px"
      h="120px"
    >
      <Text fontWeight="bold">{firstLine}</Text>
      <Text>{secondLine}</Text>
      <Text>{thirdLine}</Text>
    </Flex>
  );
};
