"use client";

import Script from "next/script";
import { useRef, useCallback, useState } from "react";
import { Box, BoxProps, Flex, Spinner } from "@chakra-ui/react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ymaps: any;
  }
}

type YandexMapProps = {
  center: [number, number];
  zoom?: number;
} & BoxProps;

export const YandexMap = ({
  center,
  zoom = 15,
  ...boxProps
}: YandexMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = useCallback(() => {
    window.ymaps.ready(() => {
      const map = new window.ymaps.Map(mapRef.current, {
        center,
        zoom,
        controls: [],
      });

      const placemark = new window.ymaps.Placemark(
        center,
        {},
        {
          iconLayout: "default#image",
          iconImageHref: "/images/icons/map-pin.svg",
          iconImageSize: [40, 48],
          iconImageOffset: [-20, -48],
        },
      );

      map.geoObjects.add(placemark);
      setIsLoading(false);
    });
  }, [center, zoom]);

  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_KEY}&lang=ru_RU`}
        strategy="afterInteractive"
        onLoad={onLoad}
      />
      <Box position="relative" w="full" h="400px" rounded="xl" overflow="hidden" {...boxProps}>
        {isLoading && (
          <Flex
            position="absolute"
            inset="0"
            zIndex="1"
            bg="bg"
            alignItems="center"
            justifyContent="center"
          >
            <Spinner size="lg" />
          </Flex>
        )}
        <Box ref={mapRef} w="full" h="full" />
      </Box>
    </>
  );
};
