import { Box, Button, Container, Flex, Image, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function HeroSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container size="xl" py="xl">
      <Flex
        direction={isMobile ? 'column' : 'row'}
        align="center"
        justify="space-between"
        gap="xl"
        mt="xl"
      >
        <Box style={{ flex: 1 }}>
          <Title order={1} c="white" style={{ fontSize: isMobile ? '2rem' : '3rem' }}>
            Join CUAN and Start Earning Today!
          </Title>
          <Text c="white" size="lg" mt="md">
            Play games, complete missions, and convert your points into real cash. Invite friends to increase your earnings!
          </Text>
          <Button variant="filled" color="yellow" size="lg" mt="md">
            Get Started
          </Button>
        </Box>
        <Flex style={{ flex: 1 }} justify="center" align="center" gap="md">
          <Image src="/img/hero-phone.png" alt="CUAN App" width={isMobile ? 200 : 300} /> {/* Ganti nama file jika beda */}
          <Image src="/img/treasure-chest.png" alt="Treasure Chest" width={isMobile ? 150 : 200} /> {/* Ganti nama file jika beda */}
        </Flex>
      </Flex>
    </Container>
  );
}