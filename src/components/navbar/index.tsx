import { Burger, Button, Drawer, Flex } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";  // Import for actual navigation

const links = [
  { label: 'ABOUT', path: '/about' },
  { label: 'HOW IT WORKS', path: '/how-it-works' },
  { label: 'FEATURES', path: '/features' },
  { label: 'TESTIMONIALS', path: '/testimonials' },
  { label: 'FAQ', path: '/faq' },
];

export function NavigationPage() {
  const [opened, { toggle }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Flex
        h={isMobile ? '100vh' : '60px'}  // Full height on mobile, fixed short height on desktop
        w="100%"  // Always full width now (removes narrow 200px on desktop)
        justify={isMobile ? 'flex-start' : 'flex-end'}  // Left-align on mobile, right-align on desktop
        align="center"
        direction={isMobile ? 'column' : 'row'}  // Vertical on mobile, horizontal on desktop
        wrap="nowrap"
        px="md"
        py="lg"
        style={{
          background: '#1f5e66ff',  // Solid single color for both mobile and desktop
          position: isMobile ? 'relative' : 'fixed',  // Fixed top bar on desktop
          top: 0,
          zIndex: 1000,  // Ensures it stays on top
        }}
      >
        {isMobile ? (
          <Burger opened={opened} onClick={toggle} color="white" />
        ) : (
          <Flex direction="row" gap="md" align="center">  
            {links.map((link) => (
              <Button 
                component={Link}  // Make it a router link
                to={link.path}
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
            background: '#43B7C7',  // Updated to solid color for consistency
          },
        }}
      >
        <Flex direction="column" gap="sm">
          {links.map((link) => (
            <Button 
              component={Link}  // Router link in drawer too
              to={link.path}
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