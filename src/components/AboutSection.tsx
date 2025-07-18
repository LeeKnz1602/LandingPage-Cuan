import { Box, Container, Flex, Image, Text, Title, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function AboutSection({ id }: { id?: string }) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container id={id} size="xl" py="xl" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
      <Title order={2} ta="center" c="white" mb="lg">
        About CUAN
      </Title>
      <Flex
        direction={isMobile ? 'column' : 'row'}
        align="center"
        justify="space-between"
        gap="xl"
      >
        <Box style={{ flex: 1 }}>
          <Text c="white" size="md">
            CUAN is a secure platform that allows you to manage your gaming points.
            You can deposit, withdraw, and check balances with ease.
          </Text>
        </Box>
        <Image src="/img/about-phone.png" alt="About Phone Mockup" width={isMobile ? 200 : 300} /> {/* Ganti nama file jika beda */}
      </Flex>
      <Box mt="xl" p="md" style={{ background: 'rgba(255, 255, 255, 0.2)', borderRadius: 'md' }}>
        <Title order={3} c="white">
          Discover the CUAN Experience
        </Title>
        <Text c="white">
          CUAN provides a user-friendly and secure way to manage gaming, giving more control over finances.
        </Text>
        <ul style={{ color: 'white' }}>
          <li>Secure platform for managing gaming points</li>
          <li>Easy to deposit and withdraw</li>
          <li>Convert gaming to real cash</li>
        </ul>
        <Button variant="filled" color="yellow" mt="md">
          Start Now
        </Button>
      </Box>
    </Container>
  );
}