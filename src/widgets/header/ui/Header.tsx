"use client";

import { ColorModeButton } from "@/shared/theme/color-mode";
import { Flex, Text, Box, Link } from "@chakra-ui/react";

export const Header = () => {
  const NAV_ITEMS = [
    { label: "Автомобили", href: "/", active: true }, //active - моковая переменная, после реализации роутинга будет замена проверки активной ссылки через usePathname()
    { label: "Прицепы", href: "/" },
    { label: "Сервис", href: "/" },
    { label: "Контакты", href: "/" },
  ];

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="end"
      px="5"
      position="relative"
      mb="6"
      _after={{
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "5", // отступ слева (равен padding)
        right: "5", // отступ справа
        height: "1px",
        bg: "border.default",
      }}
    >
      <Link flexDirection="column" textDecoration="none">
        <Text fontSize="6xl" lineHeight="1">
          Автомир
        </Text>
        <Text ml="40" fontSize="xl" color="text.secondary">
          Котлас
        </Text>
      </Link>

      <Flex as="nav" display="flex" gap="5" alignItems="end">
        {NAV_ITEMS.map(({ label, active }) => (
          <Box
            key={label}
            pb="2"
            cursor="pointer"
            fontWeight="medium"
            color={active ? "text.primary" : "text.secondary"}
            borderBottom="3px solid"
            borderColor={active ? "border.accent" : "transparent"}
            zIndex="1"
            transition="all 0.2s"
            _hover={{ color: "text.primary" }}
          >
            {label}
          </Box>
        ))}
        <ColorModeButton pb={2} />
      </Flex>
    </Flex>
  );
};
