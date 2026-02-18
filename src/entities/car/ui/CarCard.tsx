import { Card } from "@/shared/ui/Card";
import { Badge, Flex, Image, Text } from "@chakra-ui/react";

export const CarCard = () => {
  return (
    <Card>
      <Badge
        position="absolute"
        w="20"
        h="8"
        rounded="full"
        bgColor="badge.new"
        top="4"
        left="4"
        justifyContent='center'
        color='text.inverse'
        fontSize=''
      >
        новый
      </Badge>
      <Flex borderBottom="1px solid" borderColor="border.default">
        <Image
          alt=""
          fit="cover"
          src="https://images.hgmsites.net/lrg/2023-toyota-camry-se-auto-natl-angular-front-exterior-view_100857360_l.jpg"
        />
      </Flex>
      <Flex flexDirection="column" p="2.5">
        <Text fontSize="xl">Toyota Camry 2023</Text>
        <Text fontSize="sm" color="text.tertiary">
          2.5L/200 л.с. · АКПП · 12 000 км
        </Text>
        <Text fontSize="xl" color="text.accent">
          2 850 000 р.
        </Text>
      </Flex>
    </Card>
  );
};
