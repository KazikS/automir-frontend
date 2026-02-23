import { CarCardType } from "@/entities/car/model/type";
import { TrailerCard } from "@/entities/trailer/ui/TrailerCard";
import { BenefitsList } from "@/widgets/benefits";
import { CarList } from "@/widgets/carList/ui/CarList";
import { Hero } from "@/widgets/hero";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  const CAR_MOCK: CarCardType[] = [
    {
      brand: "BMW",
      model: "5 Series",
      year: 2021,
      engineVolume: 2.0,
      mileage: 45000,
      price: 4200000,
      transmission: "Автомат",
      power: 184,
      category: "used",
      images: [
        "/images/bmw-1.jpeg",
        "/images/bmw-2.jpeg",
        "/images/bmw-3.jpeg",
      ],
      createdAt: "2024-02-10",
    },
    {
      brand: "Kia",
      model: "K5",
      year: 2022,
      engineVolume: 1.6,
      mileage: 30000,
      price: 2100000,
      transmission: "Робот",
      power: 180,
      category: "tradeIn",
      images: ["/images/kia-1.jpg", "/images/kia-2.webp", "/images/kia-3.jpg"],
      createdAt: "2024-03-05",
    },
    {
      brand: "Mercedes-Benz",
      model: "E-Class",
      year: 2023,
      engineVolume: 2.0,
      mileage: 5000,
      price: 6500000,
      transmission: "Автомат",
      power: 197,
      category: "new",
      images: [
        "/images/merc-1.jpeg",
        "/images/merc-2.webp",
        "/images/merc-3.jpg",
      ],
      createdAt: "2024-03-20",
    },
    {
      brand: "Hyundai",
      model: "Sonata",
      year: 2020,
      engineVolume: 2.0,
      mileage: 68000,
      price: 1750000,
      transmission: "Автомат",
      power: 150,
      category: "used",
      images: [
        "/images/sonata-1.webp",
        "/images/sonata-2.jpg",
        "/images/sonata-3.jpg",
      ],
      createdAt: "2024-01-28",
    },
  ];
  return (
    <>
      <Hero />
      <Flex flexDirection="column" px="5">
        <BenefitsList />
        <Box>
          <Text
            fontSize="xl"
            position="relative"
            w="fit-content"
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
            Актуальные предложения
          </Text>
          {/* <CarList cars={CAR_MOCK} isFullList={true} /> */}
          <TrailerCard
            product_category="used"
            model="Аляска 7143"
            capacity={750}
            width={1.91}
            length={3.69}
            height={0.34}
            price={89000}
            createdAt={"2026-02-24"}
            trailer_category={"бортовой"}
            year={2024}
          />
        </Box>
      </Flex>
    </>
  );
}
