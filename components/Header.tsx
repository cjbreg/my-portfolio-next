import { Box, Heading, Stack, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Blob } from "./Blob";
import Socials from "./Socials";

const Header = () => {
  return (
    <Stack>
      <Stack
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Box ml={{ base: 0, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              Coen Breg
            </Heading>
            <Box>
              <Text as={"span"} color={"gray.500"}>
                Student Software Engineering
              </Text>
            </Box>

            <Socials />
          </Box>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"130%"}
            position={"absolute"}
            top={"-10%"}
            left={0}
            zIndex={-1}
            color={"orange.100"}
          />
          <Box
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
              alt="Programming image"
              borderRadius={12}
              fit={"cover"}
              align={"center"}
            />
          </Box>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Header;
