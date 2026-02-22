import { Carousel, HStack, Box, Image } from "@chakra-ui/react";

export const CardCarousel = ({ images }: { images: string[] }) => {
  return (
    <Carousel.Root slideCount={images.length} maxW="full" allowMouseDrag zIndex={1}>
      <Carousel.ItemGroup>
        {images.map((image, index) => (
          <Carousel.Item key={image} index={index} snapAlign="center">
            <Box h="full">
              <Image alt="" fit="cover" src={image} />
            </Box>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
      <Carousel.Control justifyContent="center" gap="4" position="absolute" bottom="1">
        <HStack gap="1.5">
          {images.map((_, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              w="6px"
              h="6px"
              rounded="full"
              bg="gray.300"
              border="none"
              transition="all 0.2s"
              display="block"
              _current={{
                bg: "neutral.600",
                w: "18px",
                rounded: "full",
              }}
            />
          ))}
        </HStack>
      </Carousel.Control>
    </Carousel.Root>
  );
};
