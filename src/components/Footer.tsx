import { Box, Container, Flex, Group, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function Footer() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box bg="#055D7D" py="md" mt="xl">
      <Container size="xl">
        <Flex
          direction={isMobile ? 'column' : 'row'}
          align="center"
          justify="space-between"
          gap="md"
        >
          <Image src="/img/cuan-logo.png" alt="CUAN Logo" width={100} /> {/* Ganti nama file jika beda */}
          <Group gap="sm">
            <Text c="white" size="sm">About</Text>
            <Text c="white" size="sm">How It Works</Text>
            <Text c="white" size="sm">Features</Text>
            <Text c="white" size="sm">Testimonials</Text>
            <Text c="white" size="sm">FAQ</Text>
          </Group>
          <Group gap="sm">
            <Image src="/img/twitter-icon.png" alt="Twitter" width={20} /> {/* Ganti nama file jika beda */}
            <Image src="/img/facebook-icon.png" alt="Facebook" width={20} /> {/* Ganti nama file jika beda */}
            <Image src="/img/linkedin-icon.png" alt="LinkedIn" width={20} /> {/* Ganti nama file jika beda */}
          </Group>
        </Flex>
        <Text ta="center" c="white" size="xs" mt="md">
          © 2025 CUAN. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}