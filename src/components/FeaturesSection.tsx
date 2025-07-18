import { Card, Container, Grid, Image, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function FeaturesSection({ id }: { id?: string }) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container id={id} size="xl" py="xl">
      <Title order={2} ta="center" c="white" mb="lg">
        Key Features
      </Title>
      <Text ta="center" c="white" mb="xl">
        Discover all the amazing features CUAN has to offer for gamers.
      </Text>
      <Grid gutter="lg">
        <Grid.Col span={isMobile ? 12 : 4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Image src="/img/feature-easy.png" alt="Easy Point Management" height={150} fit="contain" /> {/* Ganti nama file jika beda */}
            <Title order={4} mt="md">Easy Point Management</Title>
            <Text size="sm">Deposit, withdraw, and check your token balances with our secure platform.</Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Image src="/img/feature-cash.png" alt="Cash Conversion" height={150} fit="contain" /> {/* Ganti nama file jika beda */}
            <Title order={4} mt="md">Cash Conversion</Title>
            <Text size="sm">Convert your gaming points into real cash quickly and securely.</Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Image src="/img/feature-daily.png" alt="Daily Missions" height={150} fit="contain" /> {/* Ganti nama file jika beda */}
            <Title order={4} mt="md">Daily Missions</Title>
            <Text size="sm">Complete additional tasks to earn more points every day.</Text>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}