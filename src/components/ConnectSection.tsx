import { Button, Container, Group, Text, Title } from '@mantine/core';

export function ConnectSection() {
  return (
    <Container size="xl" py="xl" style={{ background: 'rgba(255, 255, 255, 0.2)', borderRadius: 'md' }}>
      <Title order={2} ta="center" c="orange" mb="lg">
        Connect Your Chubs Account
      </Title>
      <Text ta="center" c="white" mb="xl">
        If you have any questions or need assistance, please contact our support team.
      </Text>
      <Group justify="center" gap="md">
        <Button variant="outline" color="white">Chat with Us</Button>
        <Button variant="outline" color="white">Contact Form</Button>
      </Group>
    </Container>
  );
}