import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Box, Flex, Image, Text, IconButton, VStack, Heading } from "@chakra-ui/react"
import { MpCard } from "../"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Mountain View",
    description: "Breathtaking peaks and valleys.",
    image: "/carousel-mountain.png",
  },
  {
    title: "Ocean Sunset",
    description: "Golden hour at the horizon.",
    image: "/carousel-ocean.png",
  },
  {
    title: "City Lights",
    description: "The vibrant pulse of the urban night.",
    image: "/carousel-city.png",
  },
]

const ShowcaseCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <MpCard title="Premium Carousel">
      <Box position="relative" w="full" px={10}>
        <Box overflow="hidden" ref={emblaRef} borderRadius="2xl">
          <Flex>
            {slides.map((slide, index) => (
              <Box key={index} flex="0 0 100%" minW={0} position="relative" h={{ base: "300px", md: "400px" }}>
                <Image
                  src={slide.image}
                  fallbackSrc={`https://images.unsplash.com/photo-${index === 0 ? "1464822759023-fed622ff2c3b" : index === 1 ? "1507525428034-b723cf961d3e" : "1477346611705-65d1883cee1e"}?w=1200&q=80`}
                  alt={slide.title}
                  w="full"
                  h="full"
                  objectFit="cover"
                />
                <Box position="absolute" inset={0} bg="blackAlpha.400" />
                <VStack
                  position="absolute"
                  inset={0}
                  justify="center"
                  align="center"
                  color="white"
                  spacing={2}
                  p={6}
                  textAlign="center"
                >
                  <Heading size="xl">{slide.title}</Heading>
                  <Text fontSize="lg" opacity={0.9}>
                    {slide.description}
                  </Text>
                  <Text fontSize="xs" opacity={0.6} mt={2}>
                    Slide {index + 1} of {slides.length}
                  </Text>
                </VStack>
              </Box>
            ))}
          </Flex>
        </Box>
        <IconButton
          aria-label="Previous"
          icon={<ChevronLeft />}
          onClick={scrollPrev}
          position="absolute"
          left={0}
          top="50%"
          transform="translateY(-50%)"
          variant="soft"
          borderRadius="full"
          colorScheme="blue"
        />
        <IconButton
          aria-label="Next"
          icon={<ChevronRight />}
          onClick={scrollNext}
          position="absolute"
          right={0}
          top="50%"
          transform="translateY(-50%)"
          variant="soft"
          borderRadius="full"
          colorScheme="blue"
        />
      </Box>
    </MpCard>
  )
}

export default ShowcaseCarousel
