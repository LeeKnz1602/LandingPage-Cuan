import { Card, Container, Grid, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function TestimonialsSection({ id }: { id?: string }) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container id={id} size="xl" py="xl">
      <Title order={2} ta="center" c="white" mb="lg">
        What Our Users Say
      </Title>
      <Text ta="center" c="white" mb="xl">
        Hear from our community of satisfied users about their experience with CUAN.
      </Text>
      <Grid gutter="lg">
        <Grid.Col span={isMobile ? 12 : 3}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text>"CUAN has made managing my gaming points so easy!"</Text>
            <Text size="sm" mt="md">- Jane Doe</Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 3}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text>"I love how secure and user-friendly it is."</Text>
            <Text size="sm" mt="md">- John Smith</Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 3}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text>"Exchanging tokens for cash is a game changer."</Text>
            <Text size="sm" mt="md">- Alex Johnson</Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 3}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text>"CUAN is a game changer for gamers."</Text>
            <Text size="sm" mt="md">- Mei Lin</Text>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}