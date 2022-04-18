import { Box, Stack, Center, Icon } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  hyperLink: string;
  children: React.ReactNode;
};

const SocialsButton = (props: Props) => {
  const { title, hyperLink, children } = props;

  const handleNavigate = () => {
    window.open(hyperLink);
  };

  return (
    <Stack
      flex={1}
      alignItems={"center"}
      pt={6}
      direction={{ base: "row", md: "column" }}
    >
      <Center
        backgroundColor={"orange.500"}
        w={"46px"}
        h={"46px"}
        borderRadius={12}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={handleNavigate}
        _hover={{
          backgroundColor: "orange.200",
          cursor: "pointer",
        }}
      >
        {children}
      </Center>
      <Box>{title}</Box>
    </Stack>
  );
};

export default SocialsButton;
