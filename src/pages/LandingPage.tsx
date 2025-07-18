import { NavigationPage } from '@/components/navbar';
import { Box } from '@mantine/core';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { SupportSection } from '../components/SupportSection';
import { ConnectSection } from '../components/ConnectSection';
import { Footer } from '@/components/Footer';

export function LandingPage() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(to bottom, #42B6C5 0%, #56CAE9 35%, #1FBFF8 64%, #055D7D 94%)',
        position: 'relative',
      }}
    >
      <NavigationPage />
      <HeroSection />
      <AboutSection id="about" />
      <FeaturesSection id="features" />
      <HowItWorksSection id="how-it-works" />
      <TestimonialsSection id="testimonials" />
      <FAQSection id="faq" />
      <SupportSection />
      <ConnectSection />
      <Footer />
    </Box>
  );
}