import { Button, Container, Group, Text, Title } from '@mantine/core';

export function SupportSection() {
  return (
    <Container size="xl" py="xl">
      <Title order={2} ta="center" c="white" mb="lg">
        Support
      </Title>
      <Text ta="center" c="white" mb="xl">
        If you have any questions or need assistance, please contact our support team.
      </Text>
      <Group justify="center" gap="md">
        <Button variant="outline" color="white">Email</Button>
        <Button variant="outline" color="white">Chat with Us</Button>
        <Button variant="outline" color="white">Contact Form</Button>
      </Group>
    </Container>
  );
}