import { Button, Container, Grid, Group, Image, Paper, Text, Title, Box } from '@mantine/core';
import { link } from 'fs';
import { Link, Links } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      {/* Navbar: Menggunakan Box sebagai wrapper dengan background */}
      <Box bg="blue.7" py="md">
        <Container>
          <Group justify="space-between">
            <Title order={3} c="white">MyBrand</Title>
            <Group>
              <Button variant="subtle" c="white">Home</Button>
              <Button variant="subtle" c="white">Features</Button>
              <Button variant="subtle" c="white" component={Link} to="/about">Contact</Button>
            </Group>
          </Group> {/* Tambahkan closing tag ini */}
        </Container>
      </Box>

      {/* Hero Section: Grid dengan 2 kolom responsif */}
      <Box bg="gray.0" py="xl">
        <Container>
          <Grid gutter="lg">
            <Grid.Col span={{ base: 12, md: 6 }}> {/* Kolom teks: Full width di mobile, setengah di desktop */}
              <Title order={1}>Selamat Datang di Landing Page Kami</Title>
              <Text size="lg" mt="md">
                Ini adalah contoh landing page sederhana menggunakan Mantine. Kombinasi Grid, Col, dan Box membuat layout fleksibel dan responsif.
              </Text>
              <Button variant="filled" color="blue" mt="lg">Mulai Sekarang</Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}> {/* Kolom gambar */}
              <Image src="https://via.placeholder.com/600x400" alt="Hero Image" radius="md" />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Features Section: Grid dengan 3 kolom cards, masing-masing wrapped Paper (ganti dari Box) */}
      <Box py="xl">
        <Container>
          <Title order={2} ta="center" mb="lg">Fitur Utama</Title>
          <Grid gutter="md">
            <Grid.Col span={{ base: 12, sm: 4 }}> {/* Responsif: 1 kolom di mobile, 3 di desktop */}
              <Paper bg="white" p="md" shadow="sm" radius="md">
                <Title order={4}>Fitur 1</Title>
                <Text>Deskripsi fitur pertama yang menarik.</Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <Paper bg="white" p="md" shadow="sm" radius="md">
                <Title order={4}>Fitur 2</Title>
                <Text>Deskripsi fitur kedua yang inovatif.</Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <Paper bg="white" p="md" shadow="sm" radius="md">
                <Title order={4}>Fitur 3</Title>
                <Text>Deskripsi fitur ketiga yang berguna.</Text>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Footer: Box sederhana dengan Grid untuk alignment */}
      <Box bg="dark.7" py="md">
        <Container>
          <Grid>
            <Grid.Col span={12}>
              <Text c="white" ta="center">© 2025 MyBrand. All rights reserved.</Text>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default LandingPage;