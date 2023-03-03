import type { NextPage } from "next";
import { Box, Button, Center, CSSObject, Text } from "@mantine/core";
import { LandingTierListImage } from "../components/home/LandingTierListImage";
import { landingTierListContainerSx } from "../components/common/styles";
import Head from "next/head";
import { SITE_NAME } from "../config/config";

// Playground while I tinker with styles.
// Will move these objs after brainstorming phase.
const junk: CSSObject = {
  textAlign: "center",
  margin: "auto",
  height: "80vh",
  width: "90%",
  maxWidth: "700px",
  flexDirection: "column",
};

const junk2: CSSObject = {
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
};

const junk3: CSSObject = {
  fontSize: "3rem",
  color: "white",
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`${SITE_NAME} - Home`}</title>
      </Head>

      <Box bg="black" sx={landingTierListContainerSx}>
        <LandingTierListImage overlayAlpha={0.6} />
      </Box>
      <Center sx={junk}>
        <Text component="h2" sx={junk3}>
          A{" "}
          <Text component="i" sx={{ textDecoration: "underline" }}>
            blazing fast
          </Text>{" "}
          open source tier list builder blah blah blah...
        </Text>
        <Button color="cyan" size="lg">
          Create Tier List
        </Button>
      </Center>
      <Box sx={junk2}>
        <Text
          component="h2"
          sx={{ fontSize: "2rem", color: "white" }}
          m={0}
          align="center"
          pt={20}
        >
          Recent Tier Lists
        </Text>
      </Box>
    </>
  );
};

export default Home;
