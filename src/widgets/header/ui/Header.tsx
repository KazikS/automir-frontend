"use client";

import { useState } from "react";
import { ColorModeButton } from "@/shared/theme/color-mode";
import { MainLogo } from "@/shared/ui/MainLogo";
import { Flex, Box, Collapsible, IconButton } from "@chakra-ui/react";
import { LuMenu, LuX } from "react-icons/lu";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { label: "Автомобили", href: "/", active: true },
    { label: "Прицепы", href: "/" },
    { label: "Сервис", href: "/" },
    { label: "Контакты", href: "/" },
  ];

  return (
    <Box as="header" position="relative" mb="6">
      <Flex
        justifyContent="space-between"
        alignItems="end"
        px="5"
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "5",
          right: "5",
          height: "1px",
          bg: "border.default",
        }}
      >
        <MainLogo color="black" />

        {/* Desktop nav */}
        <Flex
          as="nav"
          display={{ base: "none", md: "flex" }}
          gap="5"
          alignItems="end"
        >
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

        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Меню"
          variant="ghost"
          size="sm"
          onClick={() => setMenuOpen((prev) => !prev)}
          mb="1"
        >
          {menuOpen ? <LuX size={25} /> : <LuMenu size={25} />}
        </IconButton>
      </Flex>

      <Collapsible.Root open={menuOpen}>
        <Collapsible.Content>
          <Flex
            display={{ base: "flex", md: "none" }}
            flexDirection="column"
            gap="1"
            px="5"
            py="3"
            borderBottom="1px solid"
            borderColor="border.default"
          >
            {NAV_ITEMS.map(({ label, active }) => (
              <Box
                key={label}
                py="2"
                cursor="pointer"
                fontWeight="medium"
                color={active ? "text.primary" : "text.secondary"}
                _hover={{ color: "text.primary" }}
              >
                {label}
              </Box>
            ))}
            <ColorModeButton alignSelf="start" mt="1" />
          </Flex>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
};
