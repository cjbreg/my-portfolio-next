import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/Header";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Home: NextPage = () => {
  return (
    <Container maxW={"7xl"}>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 2, type: "easeInOut" }}
        style={{ position: "relative" }}
      >
        <Header />
      </motion.div>
    </Container>
  );
};

export default Home;
