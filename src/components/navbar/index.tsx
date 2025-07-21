import { Burger, Button, Drawer, Flex } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";  // For full navigation on login/register

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
        h={isMobile ? '100vh' : '60px'}
        w="100%"
        justify={isMobile ? 'flex-start' : 'space-between'}  // Space-between to push Login/Register right
        align="center"
        direction={isMobile ? 'column' : 'row'}
        wrap="nowrap"
        px="md"
        py="lg"
        style={{
          background: '#43B7C7',
          position: isMobile ? 'relative' : 'fixed',
          top: 0,
          zIndex: 1000,
        }}
      >
        {isMobile ? (
          <Burger opened={opened} onClick={toggle} color="white" />
        ) : (
          <>
            {/* Centered Section Links */}
            <Flex
              direction="row"
              gap="md"
              align="center"
              style={{ flex: 1, justifyContent: 'center' }}  // Center the links
            >
              {links
                .filter(link => link.type === 'scroll')
                .map((link) => (
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
            {/* Login/Register (Far Right) */}
            <Flex direction="row" gap="md" align="center">
              {links
                .filter(link => link.type === 'route')
                .map((link) => (
                  <Button 
                    component={Link}
                    to={link.href}
                    color="transparent" 
                    variant="filled" 
                    key={link.label}
                  >
                    {link.label}
                  </Button>
                ))}
            </Flex>
          </>
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
              component={link.type === 'route' ? Link : 'a'}
              to={link.type === 'route' ? link.href : undefined}
              href={link.type === 'scroll' ? link.href : undefined}
              variant={link.type === 'route' ? 'filled' : 'subtle'}
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