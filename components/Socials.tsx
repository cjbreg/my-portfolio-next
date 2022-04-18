import { Stack } from "@chakra-ui/react";
import React from "react";
import { GitHub, Linkedin, Mail } from "react-feather";
import SocialsButton from "./SocialsButton";

const Socials = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      p={4}
      ml={{ base: 0, md: -10 }}
      maxW={"300px"}
    >
      <SocialsButton
        title={"LinkedIn"}
        hyperLink="https://linkedin.com/in/coen-breg"
      >
        <Linkedin color={"white"} />
      </SocialsButton>
      <SocialsButton title={"Email"} hyperLink="mailto: coenbreg@gmail.com">
        <Mail color={"white"} />
      </SocialsButton>
      <SocialsButton title={"github"} hyperLink="https://github.com/cjbreg">
        <GitHub color={"white"} />
      </SocialsButton>
    </Stack>
  );
};

export default Socials;
