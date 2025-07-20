import { Box, createStyles } from '@mantine/core';
import CoconutTreeImage from '../assets/Tree.png';

interface FloatingTreeProps {
  CoconutTree?: string;
  animated?: boolean;
  behindContent?: boolean;
}

const useStyles = createStyles((theme, { animated }: { animated: boolean }) => ({
  container: {
    position: 'absolute',
    top: '30%',
    right: '-7rem',
    transform: 'translateY(-50%)',
    zIndex: 5,
    animation: animated ? 'float 3s ease-in-out infinite' : 'none',

    [theme.fn.smallerThan('md')]: {
      position: 'static',
      transform: 'none',
      display: 'flex',
      justifyContent: 'center',
      margin: '2rem 0',
      animation: animated ? 'floatMobile 3s ease-in-out infinite' : 'none',
    },
  },

  image: {
    width: '600px',
    height: '600px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',

    [theme.fn.smallerThan('md')]: {
      width: '200px',
      height: '200px',
    },
    [theme.fn.smallerThan('xs')]: {
      width: '150px',
      height: '150px',
    },
  },

  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(-50%) translateX(0px)',
    },
    '50%': {
      transform: 'translateY(-50%) translateX(-10px)',
    },
  },

  '@keyframes floatMobile': {
    '0%, 100%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
}));

export function FloatingTree({
  CoconutTree = CoconutTreeImage,
  animated = false,
  behindContent = false,
}: FloatingTreeProps) {
  const { classes, cx } = useStyles({ animated });

  return (
    <Box className={classes.container} style={{ zIndex: behindContent ? 0 : 5 }}>
      <img src={CoconutTree} alt="CUAN Mascot" className={classes.image} />
    </Box>
  );
}
