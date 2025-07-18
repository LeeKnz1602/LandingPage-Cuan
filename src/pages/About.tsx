import { Box, Flex, Grid, Button, Text, Paper, Image, Container } from '@mantine/core';
import { Link } from 'react-router-dom';
export function About() {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.1" py="xl">
        <Container>
          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text fw={900} fz={{ base: 32, md: 48 }}>
                Selamat Datang di <span style={{ color: '#228be6' }}>Produk Hebat</span>
              </Text>
              <Text fz="lg" mt="md" mb="xl" c="dimmed">
                Solusi modern untuk kebutuhan Anda, desain responsif dan fitur lengkap untuk bisnis masa kini.
              </Text>
              <Button size="lg" component={Link} to="/">Coba Gratis Sekarang</Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image
                radius="md"
                src="https://dummyimage.com/400x300/228be6/fff&text=Ilustrasi"
                alt="Ilustrasi produk"
                w="100%"
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container py="xl">
        <Text ta="center" fw={700} fz="xl" mb="md">
          Kenapa Pilih Kami?
        </Text>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Paper p="md" shadow="xs" ta="center">
              <Text fw={500}>Fitur Unggulan 1</Text>
              <Text c="dimmed" fz="sm">Deskripsi singkat fitur 1.</Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Paper p="md" shadow="xs" ta="center">
              <Text fw={500}>Fitur Unggulan 2</Text>
              <Text c="dimmed" fz="sm">Deskripsi singkat fitur 2.</Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Paper p="md" shadow="xs" ta="center">
              <Text fw={500}>Fitur Unggulan 3</Text>
              <Text c="dimmed" fz="sm">Deskripsi singkat fitur 3.</Text>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Testimoni Section */}
      <Box bg="gray.1" py="xl">
        <Container>
          <Text ta="center" fw={700} fz="xl" mb="md">
            Apa Kata Mereka?
          </Text>
          <Flex direction={{ base: 'column', md: 'row' }} gap="md" justify="center">
            <Paper p="md" shadow="xs" maw={300} mx="auto">
              <Text>"Produk ini sangat membantu bisnis saya!"</Text>
              <Text c="dimmed" fz="sm" mt="sm">- Andi, CEO Startup</Text>
            </Paper>
            <Paper p="md" shadow="xs" maw={300} mx="auto">
              <Text>"Fitur lengkap dan mudah digunakan."</Text>
              <Text c="dimmed" fz="sm" mt="sm">- Siti, UMKM Owner</Text>
            </Paper>
            <Paper p="md" shadow="xs" maw={300} mx="auto">
              <Text>"Supportnya sangat cepat dan responsif."</Text>
              <Text c="dimmed" fz="sm" mt="sm">- Budi, Freelancer</Text>
            </Paper>
          </Flex>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container py="xl">
        <Flex direction="column" align="center" gap="md">
          <Text fw={700} fz="lg">Siap untuk mulai?</Text>
          <Button size="lg">Daftar Sekarang</Button>
        </Flex>
      </Container>

      {/* Footer */}
      <Box bg="dark.7" c="gray.3" py="md">
        <Container>
          <Text ta="center" fz="sm">
            &copy; 2025 Produk Hebat. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
