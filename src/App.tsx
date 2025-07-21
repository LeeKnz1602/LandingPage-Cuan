import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { theme } from './theme';

// Import CSS Mantine Core
import '@mantine/core/styles.css';

// Import CSS Mantine Carousel - INI YANG MISSING!
import '@mantine/carousel/styles.css';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}