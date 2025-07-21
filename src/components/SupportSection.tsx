import { Container, Group, Text, Title, Box, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

// Import button images
import EmailButton from '@/asset/email-button.svg';
import ChatButton from '@/asset/chat-button.svg';
import ContactFormButton from '@/asset/contact-form-button.svg';
import ChatWithUsButton from '@/asset/chat-with-us-button.svg';

// Import single background image
import SupportBackground from '@/asset/support-background.svg'; // Single background untuk seluruh section

export function SupportSectionSingleBG() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleEmailClick = () => {
    window.open('mailto:support@cuan.com', '_blank');
  };

  const handleChatClick = () => {
    window.open('https://wa.me/your-whatsapp-number', '_blank');
  };

  const handleContactFormClick = () => {
    window.open('/contact-form', '_blank');
  };

  const handleConnectClick = () => {
    console.log('Connect button clicked');
  };

  const handleChatWithUsClick = () => {
    console.log('Chat with us button clicked');
  };

  return (
    <Container 
      size="xl" 
      py="xl"
      style={{ 
        background: 'transparent',
        width: '100%',
        maxWidth: '100%',
        position: 'relative',
      }}
    >
      {/* Single Background Image */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: -50,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <Image
          src={SupportBackground}
          alt="Support Background"
          width="100%"
          height="100%"
          fit="cover"
          style={{
            objectPosition: 'center',
            // opacity: , // Very subtle background
          }}
        />
      </Box>

      {/* Content Box */}
      <Box
        style={{
          background: 'rgba(255, 242, 207, 0.95)', // Semi-transparent cream
          maxWidth: '800px',
          margin: '0 auto',
          borderRadius: '16px',
          padding: isMobile ? '2rem 1.5rem' : '3rem 2rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          position: 'relative',
          zIndex: 1,
          backdropFilter: 'blur(5px)', // Glassmorphism effect
        }}
      >
        {/* Support Section Content - same as previous */}
        <Title order={2} ta="center" c="#C76D16" mb="sm" fw={700} style={{ fontSize: isMobile ? '28px' : '36px' }}>
          Bantuan
        </Title>
        <Text ta="center" c="#C76D16" mb="xl" size={isMobile ? 'md' : 'lg'} fw={600} style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          Apabila kamu memiliki pertanyaan atau membutuhkan bantuan, silakan dapat menghubungi team bantuan kami
        </Text>

        {/* Support Buttons */}
        <Group justify="center" gap={isMobile ? "sm" : "lg"} mb="xl" style={{ flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
          <Box component="button" style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, transition: 'transform 0.2s ease' }} onClick={handleEmailClick}>
            <Image src={EmailButton} alt="Email Support" width={isMobile ? 160 : 140} height="auto" fit="contain" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }} />
          </Box>
          <Box component="button" style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, transition: 'transform 0.2s ease' }} onClick={handleChatClick}>
            <Image src={ChatButton} alt="Chat With Us" width={isMobile ? 160 : 140} height="auto" fit="contain" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }} />
          </Box>
          <Box component="button" style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, transition: 'transform 0.2s ease' }} onClick={handleContactFormClick}>
            <Image src={ContactFormButton} alt="Contact Form" width={isMobile ? 160 : 140} height="auto" fit="contain" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }} />
          </Box>
        </Group>

        {/* Divider */}
        <Box style={{ position: 'relative', margin: '2rem 0', height: '2px', background: 'linear-gradient(90deg, transparent 0%, #C76D16 20%, #C76D16 80%, transparent 100%)' }}>
          <Box style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '8px', height: '8px', background: '#C76D16', borderRadius: '50%' }} />
          <Box style={{ position: 'absolute', left: 'calc(50% - 20px)', top: '50%', transform: 'translate(-50%, -50%)', width: '4px', height: '4px', background: '#C76D16', borderRadius: '50%' }} />
          <Box style={{ position: 'absolute', left: 'calc(50% + 20px)', top: '50%', transform: 'translate(-50%, -50%)', width: '4px', height: '4px', background: '#C76D16', borderRadius: '50%' }} />
        </Box>

        {/* Connect Section */}
        <Title order={2} ta="center" c="#C76D16" mb="sm" fw={700} style={{ fontSize: isMobile ? '24px' : '30px' }}>
          Hubungkan Chubs Account kamu
        </Title>
        <Text ta="center" c="#C76D16" mb="lg" size={isMobile ? 'sm' : 'md'} fw={600} style={{ maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
          Apabila kamu memiliki pertanyaan atau membutuhkan bantuan, silakan menghubungi team bantuan kami
        </Text>

        <Box ta="center">
          <Box component="button" style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, transition: 'transform 0.2s ease' }} onClick={handleChatWithUsClick}>
            <Image src={ChatWithUsButton} alt="Chat With Us" width={isMobile ? 160 : 180} height="auto" fit="contain" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}