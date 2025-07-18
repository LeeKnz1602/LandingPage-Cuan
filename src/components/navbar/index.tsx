import { Burger, Button, Drawer, Flex } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const links = [
  { label: 'ABOUT', href: '#about' },
  { label: 'HOW IT WORKS', href: '#how-it-works' },
  { label: 'FEATURES', href: '#features' },
  { label: 'TESTIMONIALS', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export function NavigationPage() {
  const [opened, { toggle }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Flex
        h={isMobile ? '100vh' : '60px'}
        w="100%"
        justify={isMobile ? 'flex-start' : 'flex-end'}
        align="center"
        direction={isMobile ? 'column' : 'row'}
        wrap="nowrap"
        px="md"
        py="lg"
        style={{
          background: '#72CED880',
          position: isMobile ? 'relative' : 'fixed',
          top: 0,
          zIndex: 1000,
        }}
      >
        {isMobile ? (
          <Burger opened={opened} onClick={toggle} color="white" />
        ) : (
          <Flex direction="row" gap="md" align="center">
            {links.map((link) => (
              <Button 
                component="a"
                href={link.href}
                color="white" 
                variant="subtle" 
                key={link.label}
              >
                {link.label}
              </Button>
            ))}
          </Flex>
        )}
      </Flex>
      <Drawer
        position="right"
        size="xs"
        opened={opened}
        onClose={toggle}
        title="Menu"
        padding="md"
        styles={{
          body: {
            background: '#43B7C7',
          },
        }}
      >
        <Flex direction="column" gap="sm">
          {links.map((link) => (
            <Button 
              component="a"
              href={link.href}
              variant="subtle" 
              fullWidth 
              key={link.label} 
              onClick={toggle} 
              color="white"
            >
              {link.label}
            </Button>
          ))}
        </Flex>
      </Drawer>
    </>
  );
}