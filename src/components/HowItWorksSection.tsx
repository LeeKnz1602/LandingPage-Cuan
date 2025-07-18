import { Box, Button, Container, Flex, Group, Image, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function HowItWorksSection({ id }: { id?: string }) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container id={id} size="xl" py="xl" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
      <Title order={2} ta="center" c="white" mb="lg">
        How It Works
      </Title>
      <Text ta="center" c="white" mb="xl">
        Follow these simple steps to start earning with CUAN.
      </Text>
      <Flex
        direction={isMobile ? 'column' : 'row'}
        align="center"
        justify="space-around"
        gap="xl"
      >
        <Box ta="center">
          <Image src="/img/step-register.png" alt="Register" width={isMobile ? 150 : 200} /> {/* Ganti nama file jika beda */}
          <Title order={4} c="white" mt="md">Register Account</Title>
          <Text c="white">Create your CUAN account to get started.</Text>
        </Box>
        <Box ta="center">
          <Image src="/img/step-missions.png" alt="Missions" width={isMobile ? 150 : 200} /> {/* Ganti nama file jika beda */}
          <Title order={4} c="white" mt="md">Complete Missions</Title>
          <Text c="white">Play games and complete tasks.</Text>
        </Box>
        <Box ta="center">
          <Image src="/img/step-convert.png" alt="Convert" width={isMobile ? 150 : 200} /> {/* Ganti nama file jika beda */}
          <Title order={4} c="white" mt="md">Convert to Cash</Title>
          <Text c="white">Withdraw your earnings.</Text>
        </Box>
      </Flex>
      <Group justify="center" mt="xl">
        <Button variant="filled" color="yellow" size="lg">
          Start Now
        </Button>
      </Group>
    </Container>
  );
}