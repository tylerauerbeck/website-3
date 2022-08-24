import React from 'react';

import { Box, Typography, SxProps } from '@mui/material';

import * as routes from 'src/routes';

import Button from 'src-new/elements/Button';

import footerCTABackground from 'public/new-images/footer-bg.svg';

const wrapper: SxProps = {
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: { _: 'linear-gradient(286deg, #3DE2CB 0%, #6D64F5 47%)', xl: 'unset' },
};

const root: SxProps = {
  width: '100%',
  maxWidth: '1160px',
  minHeight: { md: 401 },
  py: 8,
  backgroundImage: { xl: `url(${footerCTABackground.src})` },
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  // clipPath: 'polygon(0 0, 100% 0, 95% 85%, 5% 100%)',
  // backgroundImage: 'linear-gradient(286deg, #3DE2CB 0%, #6D64F5 47%)',
};

const defaultTitle = 'Try Upbound for free';
const defaultParagraph =
  'Start your control-plane transformation for free by creating a free Upbound account.';
const defaultBtnText = 'Get started now';
const defaultBtnLink = routes.accountsRegisterUrl;

type Props = {
  title?: string;
  paragraph?: string;
  btnText?: string;
  btnLink?: string;
};

const CTACard = ({
  title = defaultTitle,
  paragraph = defaultParagraph,
  btnText = defaultBtnText,
  btnLink = defaultBtnLink,
}: Props) => {
  return (
    <Box sx={wrapper}>
      <Box sx={root}>
        <Typography variant="h2_new" color="#fff" sx={{ mb: 2.5 }}>
          {title}
        </Typography>
        <Typography
          variant="body_normal"
          color="#fff"
          sx={{ maxWidth: { _: 300, md: 640 }, mb: 5 }}
        >
          {paragraph}
        </Typography>
        <Button styleType="whiteContained" href={btnLink}>
          {btnText}
        </Button>
      </Box>
    </Box>
  );
};

export default CTACard;
