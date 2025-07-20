import { Box, Button, Container, Flex, Image, Stack, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Banner from '../assets/Banner.png';
import Cloud from '../assets/Cloud.png';
import Cloud2 from '../assets/Cloud2.png';
import NeoApp from '../assets/NeoApp.png';

export function HeroSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container size="xl" py="xl">
      {/* Banner */}
      <Box pos="relative" w="100%" h={isMobile ? '100vw' : '300px'} mt="67px">
        <Image
          src={Banner}
          alt="Banner"
          w="100%"
          h="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            objectFit: 'fill',
            width: '100%',
            height: '100%',
            zIndex: 4,
          }}
        />
      </Box>

      {/* Teks + Tombol + Gambar + Cloud Layering */}
      <Flex
        direction={isMobile ? 'column' : 'row'}
        align="center"
        justify="center"
        mt="xl"
        pos="relative"
      >
        <Stack
          gap="md"
          align={isMobile ? 'center' : 'flex-start'}
          w={isMobile ? '100%' : '50%'}
          h="100%"
          style={{ zIndex: 2 }}
        >
          {/* Cloud2 */}
          <Box
            pos="absolute"
            top={isMobile ? '35%' : '1%'}
            left={isMobile ? '-3%' : '-6%'}
            w={isMobile ? '150px' : '170px'}
            style={{ zIndex: 2 }}
          >
            <Image src={Cloud2} w="100%" h="auto" />
          </Box>
          <Text c="white" size="xl" ta="center">
            Bergabung Dengan Cuan dan Mulai Dapatkan Penghasilanmu Hari ini
          </Text>
          <Text c="white" size="xl" ta="center">
            Main game, selesaikan misi, dan tukarkan poinmu untuk dijadikan keuntungan yang nyata.
            Ajak teman untuk meningkatkan penghasilanmu!
          </Text>
          <Flex
            direction={isMobile ? 'column' : 'row'}
            gap="md"
            justify="center"
            align="center"
            style={{ width: isMobile ? '100%' : 'auto' }}
          >
            <Button
              variant="filled"
              color="blue"
              size={isMobile ? 'xs' : 'md'}
              fullWidth={isMobile}
              style={{ fontSize: isMobile ? '0.65rem' : undefined }}
            >
              Download CUAN Apk
            </Button>
            <Button
              variant="subtle"
              color="white"
              size={isMobile ? 'xs' : 'md'}
              fullWidth={isMobile}
              style={{
                fontSize: isMobile ? '0.65rem' : undefined,
                border: '1px solid #ffffffff',
                borderRadius: '4px',
              }}
            >
              Download CUAN Apk
            </Button>
          </Flex>
        </Stack>

        {/* Wrapper Cloud dan NeoApp */}
        <Box
          pos="relative"
          w={isMobile ? '100%' : '50%'}
          h={isMobile ? '500px' : '400px'}
          mt={isMobile ? 'xl' : 0}
          mb={isMobile ? 'xl' : '25%'}
        >
          {/* Cloud1 */}
          <Box
            pos="absolute"
            top={isMobile ? '35%' : '-30%'}
            left={isMobile ? '75%' : '55%'}
            w={isMobile ? '300px' : '400px'}
            style={{ zIndex: 1 }}
          >
            <Image src={Cloud} w="100%" h="auto" />
          </Box>

          {/* NeoApp */}
          <Box
            pos="absolute"
            top={isMobile ? '8%' : -'50%'}
            left={isMobile ? '-21%' : '-10%'}
            style={{ zIndex: 3 }}
          >
            <Image src={NeoApp} alt="CUAN App" w={isMobile ? '480px' : '630px'} h="auto" />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
