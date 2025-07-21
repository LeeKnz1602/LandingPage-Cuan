import { Carousel } from '@mantine/carousel';
import { Container, Image, Box, Title, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

// Import images from src/assets/
import Testimonial from '@/asset/Testimonial.svg';
import Testimonial1 from '@/asset/Testimonial2.svg';
import Testimonial2 from '@/asset/Testimonial3.svg';
import Testimonial3 from '@/asset/Testimonial4.svg';

// Import button image - ganti dengan path yang benar
import StartNowButton from '@/asset/start-now-button.svg'; // Update path sesuai file Anda

export function TestimonialsSection({ id }: { id?: string }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  const testimonials = [
    { image: Testimonial },
    { image: Testimonial1 },
    { image: Testimonial2 },
    { image: Testimonial3 },
  ];

  // Responsive slide sizes
  const slideSize = isMobile ? '100%' : isTablet ? '50%' : '33.333%';

  return (
    <Container 
      id={id} 
      size="xl" 
      py="xl" 
      style={{ 
        background: 'transparent',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      {/* Title Section */}
      <Box ta="center" mb="xl">
        <Title 
          order={2}
          size={isMobile ? 'h2' : 'h1'}
          fw={700}
          c="white"
          mb="sm"
          style={{
            fontSize: isMobile ? '28px' : '36px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          What Our Users Say
        </Title>
        <Text 
          size={isMobile ? 'md' : 'lg'}
          c="rgba(255,255,255,0.9)"
          style={{
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          Hear from our community of satisfied users about their experience with CUAN
        </Text>
      </Box>

      {/* Carousel Section */}
      <div className="horizontal-carousel">
        <Carousel
          withIndicators
          withControls
          height={isMobile ? 200 : 240}
          slideSize={isMobile ? "300px" : "350px"}
          slideGap={0}  // Ubah dari "sm" ke angka kecil (5px)
          align="center" // Ubah dari "start" ke "center"
          loop
          controlsOffset="xs"
          controlSize={28}
          styles={{
            root: {
              width: '100%',
            },
            viewport: {
              overflow: 'hidden',
            },
            slides: {
              display: 'flex',
              flexDirection: 'row',
              margin: '0 !important',
              padding: '0 !important'
            },
            slide: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 0,
              padding: '0 2px', // Tambahkan padding minimal di slide
            },
            control: {
              '&[data-inactive]': {
                opacity: 0.3,
                cursor: 'default',
              },
              backgroundColor: 'rgba(255,255,255,0.9)',
              border: 'none',
              color: '#859499ff',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,1)',
              },
            },
            indicator: {
              backgroundColor: 'rgba(255,255,255,0.5)',
              '&[data-active]': {
                backgroundColor: 'white',
              },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Carousel.Slide key={index}>
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  width: '100%',
                  padding: '0px', // Kurangi dari 10px ke 2px
                  position: 'relative',
                }}
              >
                <Image 
                  src={testimonial.image} 
                  alt={`Testimonial ${index + 1}`} 
                  w={isMobile ? 290 : 340} // Perbesar sedikit untuk mengisi ruang
                  h={isMobile ? 175 : 205}
                  fit="contain"
                  style={{ 
                    borderRadius: '12px',
                    objectFit: 'contain',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    border: 'none',
                    background: 'transparent',
                  }} 
                />
              </Box>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>

      {/* Call to Action Button */}
      <Box ta="center" mt="xl">
        <Box
          component="button"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onClick={() => {
            // Add your download/start action here
            console.log('Start Now button clicked');
            // window.open('your-download-link', '_blank');
          }}
        >
          <Image
            src={StartNowButton}
            alt="Start Now - Download Button"
            width={isMobile ? 200 : 250}
            height="auto"
            fit="contain"
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}