import { Box, Button, Container, Flex, Image, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Board from '../assets/board 1.png';
import Cloud3 from '../assets/Cloud3.png';
import Cloud4 from '../assets/Cloud4.png';
import Appneo from '../assets/cuanApk2.png';
import Island from '../assets/Tree.png';

export function AboutSection({ id }: { id?: string }) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container id={id} size="xl" py="xl" pos="relative">
      <Flex direction={isMobile ? 'column' : 'row'} justify="center" mt="xl">
        {/* Cloud4 */}
        <Box
          pos="absolute"
          top={isMobile ? '30%' : '35%'}
          left={isMobile ? '-10%' : '-4%'}
          w={isMobile ? '200px' : '240px'}
          style={{ zIndex: 0 }}
        >
          <Image src={Cloud4} w="100%" h="auto" />
        </Box>

        {/* Cloud3 */}
        <Box
          pos="absolute"
          top={isMobile ? '1%' : '-15%'}
          left={isMobile ? '78%' : '75%'}
          w={isMobile ? '250px' : '350px'}
          style={{ zIndex: 0 }}
        >
          <Image src={Cloud3} w="100%" h="auto" />
        </Box>

        {/* Island */}
        <Box pos="absolute" top="-45%" right="83%" w="270px" style={{ zIndex: 0 }}>
          {!isMobile ? <Image src={Island} w="100%" h="auto" /> : undefined}
        </Box>

        {/* Appneo */}
        <Box
          pos="relative"
          w={isMobile ? '100%' : 'auto'}
          h={isMobile ? '380px' : '500px'}
          style={{ zIndex: 2 }}
        >
          <Image
            src={Appneo}
            alt="CUAN App"
            pos="absolute"
            top="45%"
            left="50%"
            style={{
              transform: 'translate(-44%, -50%)',
              width: isMobile ? '350px' : '450px',
              zIndex: 2,
              height: isMobile ? '400px' : undefined,
            }}
          />
        </Box>

        {/* Board */}
        <Box
          pos="relative"
          w={isMobile ? '100%' : '700px'}
          h={isMobile ? '100%' : '100%'}
          style={{ overflow: 'auto' }}
        >
          <Image src={Board} alt="Board Background" w="100%" pos="relative" />
          <Box
            pos="absolute"
            bottom={isMobile ? '0' : '15%'}
            left={isMobile ? '0' : '24%'}
            right={isMobile ? '0' : 'auto'}
            style={{
              transform: isMobile ? 'none' : 'translateX(1%)',
              width: isMobile ? '100%' : '70%',
              height: isMobile ? '100%' : '80%',
              padding: isMobile ? '0.8rem' : '1.6rem',
              boxSizing: 'border-box',
            }}
          >
            <Title
              order={3}
              c="brown"
              mb="sm"
              ta="center"
              pb={isMobile ? 'xs' : 'xl'}
              style={{
                fontSize: isMobile ? '0.85rem' : '1.5rem',
                marginBottom: isMobile ? '0.5rem' : '1rem',
              }}
            >
              Pengalaman Seru Bersama CUAN
            </Title>
            <Text
              c="gray.6"
              fw="bold"
              style={{
                fontSize: isMobile ? '0.65rem' : '1rem',
                marginBottom: isMobile ? '0.5rem' : '1rem',
                textAlign: 'left',
              }}
            >
              Cuan menghadirkan cara yang aman dan ramah untuk pengguna dan mengelola token
              gaming-mu secara mudah, memberikan kontrol dan fleksibilitas lebih.
            </Text>
            <Box
              component="ul"
              style={{
                color: 'gray',
                paddingLeft: '1rem',
                fontSize: isMobile ? '0.6rem' : '0.9rem',
                textAlign: 'left',
                marginBottom: '0.8rem',
                listStylePosition: 'inside',
              }}
            >
              <li>Platform aman untuk mengelola poin gaming</li>
              <li>Mudah untuk Topup, Bongkar, dan Melihat Saldo</li>
              <li>
                Tukarkan koin/koin emas untuk dijadikan keuntungan, yang bisa ditarik kapanpun
                dengan mudah
              </li>
            </Box>
            <Flex
              direction={isMobile ? 'column' : 'row'}
              gap="xs"
              fz={isMobile ? 'sm' : 'md'}
              style={{ width: '100%' }}
            >
              <Button
                variant="filled"
                color="blue"
                size={isMobile ? 'xs' : 'sm'}
                fullWidth
                style={{ fontSize: isMobile ? '0.65rem' : 'inherit' }}
              >
                Download CUAN Apk
              </Button>
              <Button
                variant="subtle"
                color="blue.9"
                size={isMobile ? 'xs' : 'sm'}
                fullWidth
                style={{
                  fontSize: isMobile ? '0.65rem' : 'inherit',
                  border: '1px solid #1c7ed6',
                  borderRadius: '4px',
                }}
              >
                Download CUAN Apk
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
