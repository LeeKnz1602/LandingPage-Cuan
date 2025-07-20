import { Box, Button, Container, Flex, Image, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Board from '../assets/board 1.png';
import Cloud3 from '../assets/Cloud3.png';
import Cloud4 from '../assets/Cloud4.png';
import Appneo from '../assets/cuanApk2.png';

export function AboutSection({ id }: { id?: string }) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container id={id} size="xl" py="xl">
      <Flex direction={isMobile ? 'column' : 'row'} justify="center" mt="xl" pos="relative">
        {/* Cloud4 di kiri */}
        <Box
          pos="absolute"
          top={isMobile ? '30%' : '35%'}
          left={isMobile ? '-10%' : '-9%'}
          w={isMobile ? '200px' : '240px'}
          style={{ zIndex: 0 }}
        >
          <Image src={Cloud4} w="100%" h="auto" />
        </Box>

        {/* Cloud3 di belakang */}
        <Box
          pos="absolute"
          top={isMobile ? '35%' : '-15%'}
          left={isMobile ? '30%' : '75%'}
          w={isMobile ? '250px' : '350px'}
          style={{ zIndex: 0 }}
        >
          <Image src={Cloud3} w="100%" h="auto" />
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
              transform: 'translate(-50%, -50%)',
              width: isMobile ? '350px' : '550px',
              zIndex: 2,
              height: isMobile ? '400px' : undefined,
            }}
          />
        </Box>

        {/* Board */}
        <Box pos="relative" w={isMobile ? '100%' : '750px'} h={isMobile ? '380px' : '100%'}>
          <Image
            src={Board}
            alt="CUAN App"
            w="100%"
            h="100%"
            style={{
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <Box
            pos="absolute"
            bottom={isMobile ? '20%' : '15%'}
            left={isMobile ? '5%' : '30%'}
            right={isMobile ? '5%' : 'auto'}
            w={isMobile ? '90%' : '60%'}
            p="lg"
            style={{ borderRadius: '8px' }}
          >
            <Title
              order={3}
              c="brown"
              mb="md"
              size="1.4rem"
              ta={isMobile ? 'center' : 'left'}
              style={{ fontSize: isMobile ? '1.2rem' : '1.7rem' }}
            >
              Pengalaman Seru Bersama CUAN
            </Title>
            <Text c="gray.6" size="md" mb="sm" ta={isMobile ? 'center' : 'left'} fw="bold">
              Cuan menghadirkan cara yang aman dan ramah untuk pengguna dan mengelola token
              gaming-mu secara mudah, memberikan kontrol dan fleksibilitas lebih.
            </Text>
            <Box
              component="ul"
              style={{
                color: 'gray',
                paddingLeft: isMobile ? '1rem' : '1rem',
                fontSize: '0.9rem',
                textAlign: isMobile ? 'left' : 'justify',
                marginBottom: '1rem',
              }}
            >
              <li>Platform aman untuk mengelola poin gaming</li>
              <li>Mudah untuk Topup, Bongkar, dan Melihat Saldo</li>
              <li>
                Tukarkan koin/koin emas untuk dijadikan keuntungan, yang bisa ditarik kapanpun
                dengan mudah
              </li>
            </Box>
            <Button
              variant="filled"
              color="blue"
              fullWidth={isMobile}
              size={isMobile ? 'sm' : 'md'}
            >
              Download CUAN Apk
            </Button>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
