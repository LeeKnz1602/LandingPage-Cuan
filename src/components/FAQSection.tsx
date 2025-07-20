import { Accordion, Container, Text, Title } from '@mantine/core';

export function FAQSection({ id }: { id?: string }) {
  return (
    <Container id={id} size="xl" py="xl" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
      <Title order={2} ta="center" c="white" mb="lg">
        Frequently Asked Questions
      </Title>
      <Text ta="center" c="white" mb="xl">
        Find answers to common questions about CUAN.
      </Text>
      <Accordion variant="contained">
        <Accordion.Item value="secure">
          <Accordion.Control>Is CUAN secure?</Accordion.Control>
          <Accordion.Panel>
            Yes, CUAN uses advanced security measures to protect your data and transactions.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="tokens">
          <Accordion.Control>What can I do with my tokens on CUAN?</Accordion.Control>
          <Accordion.Panel>
            You can convert them to cash, withdraw, or use them in games.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="start">
          <Accordion.Control>How do I get started?</Accordion.Control>
          <Accordion.Panel>Register an account and start completing missions.</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="missions">
          <Accordion.Control>What are daily missions?</Accordion.Control>
          <Accordion.Panel>
            Daily tasks that reward you with points for completing them.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="invite">
          <Accordion.Control>How do I invite friends?</Accordion.Control>
          <Accordion.Panel>Share your referral link from the app.</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
