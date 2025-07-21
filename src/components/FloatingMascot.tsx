import { Box } from '@mantine/core';

interface FloatingMascotProps {
  mascotImage: string;
  animated?: boolean;
}

export function FloatingMascot({ 
  mascotImage, 
  animated = true,
  behindContent = false
}: FloatingMascotProps) {
  return (
    <Box 
      style={{
        position: 'absolute',
        top: '30%',
        right: '-7rem',
        transform: 'translateY(-50%)',
        zIndex: 5,
        animation: animated ? 'float 3s ease-in-out infinite' : 'none',
        '@keyframes float': {
          '0%, 100%': { transform: 'translateY(-50%) translateX(0px)' },
          '50%': { transform: 'translateY(-50%) translateX(-10px)' }
        },
        '@media (max-width: 768px)': {
          position: 'static',
          transform: 'none',
          display: 'flex',
          justifyContent: 'center',
          margin: '2rem 0',
          animation: animated ? 'floatMobile 3s ease-in-out infinite' : 'none',
          '@keyframes floatMobile': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' }
          }
        }
      }}
    >
      <img 
        src={mascotImage}
        alt="CUAN Mascot"
        style={{ 
          width: '600px',
          height: '600px',
          objectFit: 'contain',
          filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
          '@media (max-width: 768px)': {
            width: '200px',
            height: '200px'
          },
          '@media (max-width: 480px)': {
            width: '150px',
            height: '150px'
          }
        }}
      />
    </Box>
  );
}