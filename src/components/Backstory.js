// Backstory.js
import chefsImg1 from './assets/BackStoryA.jpg';
import chefsImg2 from './assets/BackStoryB.jpg';
import { VStack, Heading, Text, Image, HStack } from "@chakra-ui/react";

const Backstory = () => {
    return (
        <HStack>
            <VStack align="flex-start" spacing={0}>
                <Heading
                    fontFamily="Markazi Text"
                    fontSize="40pt"
                    >
                        Little Lemon
                </Heading>
                <Heading
                    fontFamily="Markazi Text"
                    fontSize="40pt"
                >Chicago</Heading>
                <Text>
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                </Text>
            </VStack>
            <div>
                <Image
                    src={chefsImg1}
                    alt="chefs"
                    borderRadius="16px"
                    objectFit="cover"
                    maxW="300px"
                    />
                <Image
                    src={chefsImg2}
                    alt="chefs"
                    borderRadius="16px"
                    objectFit="cover"
                    maxW="300px"
                    />
            </div>
        </HStack>
    )
}

export default Backstory;