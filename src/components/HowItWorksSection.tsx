import { Box, Button, Container, Grid, Group, Image, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function HowItWorksSection({ id }: { id?: string }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  const steps = [
    {
      image: 'src/asset/step-1-login.svg',
      title: 'Cara Mendaftar',
      description: 'Panduan lengkap registrasi akun'
    },
    {
      image: 'src/asset/step-2-register.svg',
      title: 'Cara Bongkar',
      description: 'Proses penukaran koin/koin emas menjadi keuntungan'
    },
    {
      image: 'src/asset/step-3-verify.svg',
      title: 'Cara TopUp',
      description: 'Topup untuk membeli koin/koin emas'
    }
  ];

  // Determine grid columns based on screen size
  const getGridCols = () => {
    if (isMobile) return 2; // 2 columns on mobile
    if (isTablet) return 3; // 3 columns on tablet
    return 4; // 4 columns on desktop
  };

  return (
    <Container id={id} size="xl" py="xl" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
      <Title order={2} ta="center" c="white" mb="lg">
        Cara Kerja Aplikasi Cuan
      </Title>
      <Text ta="center" c="white" mb="xl" size="lg">
        Ikuti semua langkah mudah diawah ini untuk memulai mendapatkan keuntungan dengan aplikasi CUAN
      </Text>
      
      <Grid gutter="xl" justify="center">
        {steps.map((step, index) => (
          <Grid.Col key={index} span={{ base: 6, sm: 4, md: 3, lg: 3 }}>
            <Box 
              ta="center" 
              p="md" 
              style={{ 
                background: 'white', 
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              className="step-card"
              sx={{
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
                }
              }}
            >
              {/* Step Number */}
              {/* <Box 
                style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                  color: '#000',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px auto',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                {index + 1}
              </Box> */}
              
              {/* Image */}
              <Image 
                src={step.image} 
                alt={step.title}
                width={isMobile ? 120 : 150}
                height={isMobile ? 120 : 150}
                fit="contain"
                style={{ margin: '0 auto' }}
                fallbackSrc="/img/placeholder-step.png" // Fallback image
              />
              
              {/* Title */}
              <Title 
                order={5} 
                c="black" 
                mt="md" 
                mb="xs"
                size={isMobile ? "sm" : "md"}
                style={{ lineHeight: 1.3 }}
              >
                {step.title}
              </Title>
              
              {/* Description */}
              <Text 
                c="rgba(0, 0, 0, 0.7)" 
                size={isMobile ? "xs" : "sm"}
                style={{ lineHeight: 1.4 }}
              >
                {step.description}
              </Text>
            </Box>
          </Grid.Col>
        ))}
      </Grid>
      
      {/* Download Section */}
      <Group justify="center" mt="xl" gap="xl">
        <Box ta="center">
          <Image 
            src="src/asset/download-cuan.svg" 
            alt="Download CUAN App"
            width={isMobile ? 100 : 120}
            height={isMobile ? 35 : 40}
            fit="contain"
            style={{ cursor: 'pointer' }}
          />
        </Box>
        
        <Box ta="center">
          <Image 
            src="src/asset/download-neo-party.svg" 
            alt="Download Neo Party App"
            width={isMobile ? 100 : 120}
            height={isMobile ? 35 : 40}
            fit="contain"
            style={{ cursor: 'pointer' }}
          />
        </Box>
      </Group>
    </Container>
  );
}