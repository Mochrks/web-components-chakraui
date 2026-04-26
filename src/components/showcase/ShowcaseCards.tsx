import {
  VStack,
  HStack,
  Box,
  Image,
  Text,
  Badge,
  Button,
  SimpleGrid,
  AspectRatio,
  Avatar,
  Icon,
} from "@chakra-ui/react"
import { MpCard, MpButton, MpBadge } from "../"
import React from "react"
import { Heart, Share2, ShoppingCart } from "lucide-react"

const ShowcaseCards = () => {
  return (
    <VStack spacing={8} align="stretch">
      <MpCard title="Premium Card Layouts">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {/* Blog/Article Card */}
          <Box
            overflow="hidden"
            borderWidth="1px"
            borderRadius="xl"
            bg="white"
            _dark={{ bg: "gray.800", borderColor: "gray.700" }}
            transition="all 0.3s"
            _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
          >
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/blog-post.png"
                fallbackSrc="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
                alt="Blog Post"
                objectFit="cover"
              />
            </AspectRatio>
            <VStack p={5} align="start" spacing={3}>
              <HStack justify="space-between" w="full">
                <MpBadge colorScheme="blue">Technology</MpBadge>
                <Text fontSize="xs" color="gray.500">
                  5 min read
                </Text>
              </HStack>
              <Text fontSize="xl" fontWeight="bold" lineHeight="tight">
                The Future of Modern Web Development
              </Text>
              <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }} noOfLines={2}>
                Exploring how AI and edge computing are reshaping the landscape of building web applications in 2026.
              </Text>
              <MpButton variant="link" colorScheme="blue" size="sm" p={0}>
                Read more →
              </MpButton>
            </VStack>
          </Box>

          {/* Product Card */}
          <Box
            overflow="hidden"
            borderWidth="1px"
            borderRadius="xl"
            bg="white"
            _dark={{ bg: "gray.800", borderColor: "gray.700" }}
            transition="all 0.3s"
            _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
          >
            <Box position="relative">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/product-watch.png"
                  fallbackSrc="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
                  alt="Product"
                  objectFit="cover"
                />
              </AspectRatio>
              <MpButton
                position="absolute"
                top={2}
                right={2}
                size="sm"
                borderRadius="full"
                variant="soft"
                p={0}
                minW={8}
                h={8}
              >
                <Heart />
              </MpButton>
            </Box>
            <VStack p={5} align="start" spacing={3}>
              <HStack justify="space-between" w="full">
                <VStack align="start" spacing={0}>
                  <Text fontSize="lg" fontWeight="bold">
                    Nexus Smartwatch Pro
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    Next-gen health tracking
                  </Text>
                </VStack>
                <Text fontSize="xl" fontWeight="bold" color="blue.500">
                  $349
                </Text>
              </HStack>
              <HStack spacing={2}>
                <Badge variant="subtle" colorScheme="green">
                  New
                </Badge>
                <Badge variant="subtle" colorScheme="purple">
                  Best Seller
                </Badge>
              </HStack>
              <HStack w="full" spacing={2} pt={2}>
                <MpButton flex={1} leftIcon={<ShoppingCart size={18} />}>
                  Add to Cart
                </MpButton>
                <MpButton variant="outline" p={0} minW={10}>
                  <Share2 size={18} />
                </MpButton>
              </HStack>
            </VStack>
          </Box>
        </SimpleGrid>
      </MpCard>

      <MpCard title="Dashboard Stats & Info">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Box
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            bg="blue.50"
            _dark={{ bg: "blue.900", borderColor: "blue.800" }}
          >
            <Text fontSize="sm" color="blue.600" _dark={{ color: "blue.300" }} fontWeight="medium">
              Total Revenue
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              $45,231.89
            </Text>
            <Text fontSize="xs" color="green.500" fontWeight="bold">
              +20.1% from last month
            </Text>
          </Box>
          <Box
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            bg="purple.50"
            _dark={{ bg: "purple.900", borderColor: "purple.800" }}
          >
            <Text fontSize="sm" color="purple.600" _dark={{ color: "purple.300" }} fontWeight="medium">
              Active Users
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              +12,234
            </Text>
            <Text fontSize="xs" color="green.500" fontWeight="bold">
              +12% from last month
            </Text>
          </Box>
          <Box
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            bg="amber.50"
            _dark={{ bg: "amber.900", borderColor: "amber.800" }}
          >
            <Text fontSize="sm" color="amber.600" _dark={{ color: "amber.300" }} fontWeight="medium">
              Sales
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              +573
            </Text>
            <Text fontSize="xs" color="green.500" fontWeight="bold">
              +201 since last hour
            </Text>
          </Box>
        </SimpleGrid>
      </MpCard>
    </VStack>
  )
}

export default ShowcaseCards
