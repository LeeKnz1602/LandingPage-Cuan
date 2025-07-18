import { Box, Burger, Button, Drawer, Flex, Group } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "../../styles/login.module.css";

const links = ['ABOUT','HOW IT WORKS','FEATURES','TESTIMONIALS','FAQ'];

export function NavigationPage() {
  const [opened, { toggle }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
    <Flex
        mih={50}
        bg="rgba(0, 0, 0, .3)"
        justify="flex-end"
        align="flex-end"
        direction="row" 
        wrap="wrap"
        px="md"
    >       
        {isMobile ? (
          <Burger opened={opened} onClick={toggle} />
        ) : (
          <Group className={classes.nav} >
            {links.map((link) => (
              <Button color='white' variant="subtle" key={link}>
                {link}
              </Button>
            ))}
          </Group>
        )}
      </Flex>
     {/* Drawer muncul saat hamburger diklik */}
      <Drawer position="right" size="xs" opened={opened} onClose={toggle} title="Menu" padding="md">
        <Flex direction="column" gap="sm">
          {links.map((link) => (
            <Button variant="subtle" fullWidth key={link} onClick={toggle}>
              {link}
            </Button>
          ))}
        </Flex>
      </Drawer>
    </>
  );
}