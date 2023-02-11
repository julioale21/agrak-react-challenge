import * as React from "react";

import { ButtonGroup, Container, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => (
  <Stack backgroundColor="teal.500">
    <Container
      as="footer"
      color="white"
      maxW="container.xl"
      py={{ base: "12", md: "16" }}
      role="contentinfo"
    >
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack align="center" direction="row" justify="space-between">
          <Heading as="h1" letterSpacing={"-.1rem"} size="lg">
            Agrak
          </Heading>
          <ButtonGroup variant="ghost">
            <IconButton
              aria-label="LinkedIn"
              as="a"
              href="#"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              aria-label="GitHub"
              as="a"
              href="#"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              aria-label="Twitter"
              as="a"
              href="#"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text color="subtle" fontSize="sm">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
        </Text>
      </Stack>
    </Container>
  </Stack>
);

export { Footer };
