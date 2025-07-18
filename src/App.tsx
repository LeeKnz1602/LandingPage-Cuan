import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Tambahkan import i
import LandingPage from './pages/LandingPage';
import { theme } from './theme';
import { About } from './pages/About';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}