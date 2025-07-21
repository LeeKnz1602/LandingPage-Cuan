import { Box, Container, Flex, Group, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

// Import CUAN logo - ganti dengan path yang benar
import CuanLogo from '@/asset/cuan-logo-footer.svg'; // Updated path

// Import social media icons - ganti dengan path yang benar
import TwitterIcon from '@/asset/twitter-icon.svg';
import FacebookIcon from '@/asset/facebook-icon.svg';
import LinkedinIcon from '@/asset/linkedin-icon.svg';
import InstagramIcon from '@/asset/instagram-icon.svg';

// Import shape backgrounds
import FooterShapeLeft from '@/asset/footer-shape-left.png';
import FooterShapeRight from '@/asset/footer-shape-right.png';
// Fallback jika hanya punya 1 gambar:
import FooterShape from '@/asset/footer-shape.png';

export function Footer() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleSocialClick = (platform: string) => {
    switch (platform) {
      case 'twitter':
        window.open('https://twitter.com/cuan_official', '_blank');
        break;
      case 'facebook':
        window.open('https://facebook.com/cuan.official', '_blank');
        break;
      case 'linkedin':
        window.open('https://linkedin.com/company/cuan', '_blank');
        break;
      case 'instagram':
        window.open('https://instagram.com/cuan_official', '_blank');
        break;
    }
  };

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      style={{ 
        position: 'relative',
        background: '#006F96',
        marginTop: '2rem',
        overflow: 'hidden',
      }}
    >
      {/* Footer Content */}
      <Container 
        size="xl" 
        style={{ 
          position: 'relative', 
          zIndex: 2,
          padding: isMobile ? '2rem 1rem' : '3rem 2rem',
        }}
      >
        {/* CUAN Logo - Top Center */}
        <Box style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Box
            style={{
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Image 
              src={CuanLogo} 
              alt="CUAN Logo" 
              width={isMobile ? 28 : 32}
              height="auto"
              fit="contain"
            />
          </Box>
        </Box>

        {/* Navigation Links - Center */}
        <Group 
          gap={isMobile ? "md" : "xl"}
          justify="center"
          style={{
            flexDirection: isMobile ? 'column' : 'row',
            marginBottom: '2rem',
          }}
        >
          <Text 
            c="white" 
            size={isMobile ? "md" : "sm"}
            fw={500}
            style={{ 
              cursor: 'pointer',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#43B7C7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'white';
            }}
            onClick={() => handleNavClick('about')}
          >
            About
          </Text>
          <Text 
            c="white" 
            size={isMobile ? "md" : "sm"}
            fw={500}
            style={{ 
              cursor: 'pointer',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#43B7C7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'white';
            }}
            onClick={() => handleNavClick('how-it-works')}
          >
            How It Works
          </Text>
          <Text 
            c="white" 
            size={isMobile ? "md" : "sm"}
            fw={500}
            style={{ 
              cursor: 'pointer',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#43B7C7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'white';
            }}
            onClick={() => handleNavClick('features')}
          >
            Features
          </Text>
          <Text 
            c="white" 
            size={isMobile ? "md" : "sm"}
            fw={500}
            style={{ 
              cursor: 'pointer',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#43B7C7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'white';
            }}
            onClick={() => handleNavClick('testimonials')}
          >
            Testimonials
          </Text>
          <Text 
            c="white" 
            size={isMobile ? "md" : "sm"}
            fw={500}
            style={{ 
              cursor: 'pointer',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#43B7C7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'white';
            }}
            onClick={() => handleNavClick('faq')}
          >
            FAQ
          </Text>
        </Group>
          {/* Copyright Text */}
        <Box style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <Text 
            c="rgba(255, 255, 255, 0.8)" 
            size={isMobile ? "xs" : "sm"}
            fw={400}
          >
            © {new Date().getFullYear()} CUAN. All rights reserved.
          </Text>
        </Box>

        {/* Social Media Icons - Bottom Center (replacing copyright) */}
        <Group 
          gap="lg"
          justify="center"
          style={{
            position: 'relative',
            zIndex: 3,
            top: isMobile ? '1rem' : '2rem',
          }}
        >
          {/* Twitter Icon */}
          <Box
            component="button"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onClick={() => handleSocialClick('twitter')}
          >
            <Image
              src={TwitterIcon}
              alt="Twitter"
              width={isMobile ? 32 : 28}
              height={isMobile ? 32 : 28}
              fit="contain"
            />
          </Box>

          {/* Facebook Icon */}
          <Box
            component="button"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onClick={() => handleSocialClick('facebook')}
          >
            <Image
              src={FacebookIcon}
              alt="Facebook"
              width={isMobile ? 32 : 28}
              height={isMobile ? 32 : 28}
              fit="contain"
            />
          </Box>

          {/* LinkedIn Icon */}
          <Box
            component="button"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onClick={() => handleSocialClick('linkedin')}
          >
            <Image
              src={LinkedinIcon}
              alt="LinkedIn"
              width={isMobile ? 32 : 28}
              height={isMobile ? 32 : 28}
              fit="contain"
            />
          </Box>

          {/* Instagram Icon */}
          <Box
            component="button"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onClick={() => handleSocialClick('instagram')}
          >
            <Image
              src={InstagramIcon}
              alt="Instagram"
              width={isMobile ? 32 : 28}
              height={isMobile ? 32 : 28}
              fit="contain"
            />
          </Box>
        </Group>
      </Container>

      {/* Background Shape Images - Fixed positioning */}
      {/* Left Shape - Smaller coverage */}
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '35%', // Smaller width untuk better spacing
          height: '60px', // Shorter height
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <Image
          src={FooterShapeLeft}
          alt="Footer Shape Left"
          width="100%"
          height="100%"
          fit="cover"
          style={{
            objectPosition: 'bottom right',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Right Shape - Smaller coverage */}
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '35%', // Smaller width untuk better spacing
          height: '60px', // Shorter height
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <Image
          src={FooterShapeRight}
          alt="Footer Shape Right"
          width="100%"
          height="100%"
          fit="cover"
          style={{
            objectPosition: 'bottom left',
            objectFit: 'cover',
            // Jika menggunakan gambar yang sama untuk kedua sisi:
            // transform: 'scaleX(-1)',
          }}
        />
      </Box>
    </Box>
  );
}