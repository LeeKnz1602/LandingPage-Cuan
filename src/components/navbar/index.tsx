import { Link } from 'react-router-dom';
import { Box, Burger, Button, Drawer, Flex, Group } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import logoCuan from '../../assets/CUAN-logo.png';

const links = [
  { label: 'ABOUT', href: '#about', type: 'scroll' },
  { label: 'HOW IT WORKS', href: '#how-it-works', type: 'scroll' },
  { label: 'FEATURES', href: '#features', type: 'scroll' },
  { label: 'TESTIMONIALS', href: '#testimonials', type: 'scroll' },
  { label: 'FAQ', href: '#faq', type: 'scroll' },
  { label: 'LOGIN', href: '/login', type: 'route' },
  { label: 'REGISTER', href: '/register', type: 'route' },
];

export function NavigationPage() {
  const [opened, { toggle }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        px="xl"
        style={{
          background: '#43b8c7d5',
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '74px',
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <Box>
          <img src={logoCuan} height={68} alt="CUAN logo" />
        </Box>
        {/* Desktop Menu */}
        {!isMobile && (
          <Flex justify="flex-end" align="center" style={{ flex: 1 }}>
            {links
              .filter((link) => link.type === 'scroll')
              .map((link) => (
                <Button
                  key={link.label}
                  component="a"
                  href={link.href}
                  color="white"
                  variant="subtle"
                  fz="sm"
                  px="md"
                >
                  {link.label}
                </Button>
              ))}
          </Flex>
        )}

        {/* Login/Register */}
        {!isMobile && (
          <Group gap="xl">
            {links
              .filter((link) => link.type === 'route')
              .map((link) => (
                <Button
                  key={link.label}
                  component={Link}
                  to={link.href}
                  color="white"
                  variant="subtle"
                  fz="sm"
                  px="xs"
                >
                  {link.label}
                </Button>
              ))}
          </Group>
        )}

        {/* Mobile Burger */}
        {isMobile && <Burger opened={opened} onClick={toggle} color="white" />}
      </Flex>

      {/* Drawer for Mobile */}
      <Drawer
        position="right"
        size="xs"
        opened={opened}
        onClose={toggle}
        title="Menu"
        padding="xs"
        styles={{
          body: {
            background: '#43B7C7',
          },
        }}
      >
        <Flex direction="column" gap="sm" mt="xl">
          {links.map((link) => (
            <Button
              key={link.label}
              component={link.type === 'route' ? Link : 'a'}
              to={link.type === 'route' ? link.href : undefined}
              href={link.type === 'scroll' ? link.href : undefined}
              variant="subtle"
              fullWidth
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
