import { Accordion, Container, Text, Title, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

// Import gambar awan - ganti dengan path yang benar
import CloudImage from '@/asset/Layer_1.svg'; // Update path sesuai file Anda

export function FAQSection({ id }: { id?: string }) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <Container 
      id={id} 
      size="xl" 
      py="xl" 
      style={{ 
        background: 'transparent',
        width: '100%',
        maxWidth: '100%',
        position: 'relative', // For absolute positioning of cloud
      }}
    >
      {/* Cloud Decoration - Right Side - Show only on desktop */}
      {(
        <Box
          style={{
            position: 'absolute',
            right: '-60px',
            top: '-10px', // Sejajar dengan judul yang lebih presisi
            zIndex: 1,
            opacity: 0.8, // Sedikit lebih terlihat
            pointerEvents: 'none', // Don't interfere with interactions
          }}
          className="cloud-decoration"
        >
          <img
            src={CloudImage}
            alt="Cloud decoration"
            style={{
              width: '300px', // Sedikit lebih besar
              height: 'auto',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            }}
          />
        </Box>
      )}

      {/* Title Section - Keep white for contrast on blue background */}
      <Title 
        order={2} 
        ta="center" 
        c="white" 
        mb="sm"
        fw={700} // Bold
        style={{
          fontSize: '36px',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        Pertanyaan Umum
      </Title>
      <Text 
        ta="center" 
        c="rgba(255,255,255,0.9)" 
        mb="xl"
        size="lg"
        fw={500} // Semi-bold
        style={{
          textShadow: '0 1px 2px rgba(0,0,0,0.3)',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        Temukan jawaban dari berbagai pertanyaan yang sering ditanyakan tentang CUAN
      </Text>

      {/* FAQ Accordion with Custom Styling */}
      <Box style={{ position: 'relative', zIndex: 2 }}>
        <Accordion 
          variant="separated"
          radius="md"
          styles={{
            root: {
              maxWidth: '800px',
              margin: '0 auto',
            },
            item: {
              backgroundColor: '#FFF2CF', // Box color sesuai permintaan
              border: '1px solid rgba(199, 109, 22, 0.2)',
              marginBottom: '12px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              '&[data-active]': {
                backgroundColor: '#FFF2CF', // Keep same color when active
                borderColor: '#C76D16',
              },
            },
            control: {
              backgroundColor: 'transparent',
              color: '#C76D16', // Text color sesuai permintaan
              fontWeight: 700, // Bold untuk question
              fontSize: '18px',
              padding: '16px 20px',
              borderRadius: '12px',
              '&:hover': {
                backgroundColor: 'rgba(199, 109, 22, 0.05)',
              },
              '&[data-active]': {
                color: '#C76D16',
                fontWeight: 700, // Keep bold when active
              },
            },
            panel: {
              backgroundColor: '#FFF2CF',
              color: '#C76D16',
              padding: '0 20px 16px 20px',
              fontSize: '14px',
              lineHeight: 1.6,
              fontWeight: 600, // Bold untuk answer text
            },
            content: {
              backgroundColor: 'transparent',
            },
            chevron: {
              color: '#C76D16',
              '&[data-rotate]': {
                transform: 'rotate(180deg)',
              },
            },
          }}
        >
          <Accordion.Item value="secure">
            <Accordion.Control>
              <Text fw={600}>
                 Apakah aplikasi CUAN Aman?
              </Text>
             </Accordion.Control>
            <Accordion.Panel>
                Ya, CUAN menggunakan langkah-langkah keamanan canggih untuk melindungi data dan transaksi Anda. 
                Kami menerapkan enkripsi tingkat bank dan mengikuti praktik terbaik industri untuk keamanan pengguna.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="tokens">
            <Accordion.Control>
               <Text fw={600}>
                 Apa yang bisa saya lakukan dengan Token di CUAN?
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
                  Anda dapat menukarkannya menjadi uang tunai, menariknya ke rekening bank, atau menggunakannya dalam permainan.
                  Token juga dapat digunakan untuk mendapatkan hadiah khusus dan fitur eksklusif dalam aplikasi.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="start">
            <Accordion.Control>
                 Bagaimana cara saya memulai?
            </Accordion.Control>
            <Accordion.Panel>
                Cukup daftarkan akun menggunakan email atau nomor telepon Anda, verifikasi akun Anda,
                dan mulailah menyelesaikan misi untuk mendapatkan token pertama Anda. Semudah itu!
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="missions">
            <Accordion.Control>
              <Text fw={600}>
                Apa fungsi dari misi harian?
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
                Misi harian adalah tugas seru yang diperbarui setiap 24 jam. Selesaikan misi untuk mendapatkan
                poin, token, dan hadiah spesial. Misi ini mencakup aktivitas seperti check-in,
                mini-game, dan interaksi sosial.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="invite">
            <Accordion.Control>
              <Text fw={600}>
                Bagaimana cara saya mengundang teman?
              </Text>
            </Accordion.Control>
            <Accordion.Panel>         
                Bagikan tautan rujukan unik Anda dari bagian undangan aplikasi. Saat teman bergabung menggunakan tautan Anda, Anda dan teman Anda akan menerima token bonus sebagai hadiah sambutan.
            </Accordion.Panel>
          </Accordion.Item>

        </Accordion>
      </Box>
    </Container>
  );
}