import { NavigationPage } from '../components/navbar';
import { Box } from '@mantine/core';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { SupportSectionSingleBG } from '../components/SupportSection';
import { Footer } from '../components/Footer';
import { FloatingMascot } from '../components/FloatingMascot';
import catImage from '../asset/cat-logo.svg';

export function LandingPage() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(to bottom, #43B7C7 0%, #56CAE9 35%, #1FBFF8 64%, #055D7D 94%, transparent 100%)', // Tambahkan transparan di akhir
        position: 'relative',
        '& > *': {
          position: 'relative', // Pastikan elemen anak tidak menutupi
        },
      }}
    >
      <NavigationPage />
      <HeroSection />
      <AboutSection id="about" />
      <FloatingMascot mascotImage={catImage}/>
      <HowItWorksSection id="how-it-works" />
      <TestimonialsSection id="testimonials" />
      <FAQSection id="faq" />
      <SupportSectionSingleBG />
      <Footer />
    </Box>
  );
}