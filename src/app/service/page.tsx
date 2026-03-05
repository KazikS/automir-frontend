import { MOCK_SERVICES } from "@/entities/service/lib/config";
import { ServiceCardFull } from "@/entities/service/ui/ServiceCardFull";
import {
  Button,
  Field,
  Fieldset,
  Grid,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Services() {
  return (
    <VStack px="5" align="start">
      <Text
        fontSize="xl"
        position="relative"
        w="48-content"
        _after={{
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "3",
          right: "-14",
          height: "1px",
          bg: "border.default",
        }}
      >
        Услуги
      </Text>
      <Grid
        w="full"
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
        gap="0"
      >
        {MOCK_SERVICES.map((service) => (
          <ServiceCardFull
            key={service.id}
            image={service.image}
            name={service.description}
            description={service.description}
            id={service.id}
          />
        ))}
      </Grid>
      <VStack
        my="28"
        w="full"
        border="1px solid"
        borderColor="border.default"
        rounded="xl"
        p="10"
      >
        <Text color="text.primary" fontSize="3xl" fontWeight="bold">
          Нужна консультация?
        </Text>
        <Text color="text.secondary" fontSize="md">
          Оставьте заявку ниже и мы с вами свяжемся
        </Text>

        <Fieldset.Root display="flex" alignItems="center">
          <Fieldset.Content
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            maxW="xl"
            w="fit"
            mt="10"
          >
            <Field.Root>
              <Input
                name="name"
                placeholder="ваше имя"
                _placeholder={{
                  textAlign: "center",
                }}
                rounded="xl"
                border="1px solid"
                borderColor="border.default"
                w="48"
              />
            </Field.Root>

            <Field.Root>
              <Input
                name="phone"
                placeholder="номер телефона"
                rounded="xl"
                border="1px solid"
                borderColor="border.default"
                w="48"
                _placeholder={{
                  textAlign: "center",
                }}
              />
            </Field.Root>
            <Button
              type="submit"
              alignSelf="flex-start"
              rounded="xl"
              border="1px solid"
              borderColor="border.default"
              bgColor="border.accent"
              w="48"
            >
              оставить заявку
            </Button>
          </Fieldset.Content>
        </Fieldset.Root>
      </VStack>
    </VStack>
  );
}
