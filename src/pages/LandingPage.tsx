import { NavigationPage } from '@/components/navbar';
import { Box } from '@mantine/core';

export function LandingPage() {
  return (
    <Box
      style={{
        minHeight: '100vh',  // At least full viewport height (use minHeight to allow expansion if content is longer)
        width: '100%',
        background: 'linear-gradient(to bottom, #42B6C5 0%, #56CAE9 35%, #1FBFF8 64%, #055D7D 94%)',  // Updated gradient with the exact stops from the image
        position: 'relative',  // Allows absolute/fixed positioning for children if needed
      }}
    >
      <NavigationPage />  // Navbar sits on top with its own style
      {/* Add your main content here (e.g., hero section, text, images) – it will inherit the gradient background */}
      {/* Example placeholder content to fill the space below */}
      <Box px="md" py="xl" style={{ color: 'white', textAlign: 'center' }}>
        <h1>Welcome to the Landing Page</h1>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>
        <p>This area below the navbar has the extended gradient style.</p>

      </Box>
    </Box>
  );
}