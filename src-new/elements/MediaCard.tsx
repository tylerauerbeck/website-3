import React, { useState } from 'react';

import Image from 'next/image';

import { Box, SxProps, Typography } from '@mui/material';
import { COLORS, MQ } from 'src/theme';

import Link from 'src-new/elements/Link';
import VideoModal from 'src/elements/VideoModal';

import VideoPlayIcon from 'public/new-images/icons/video-play-icon.svg';

const rootBase: SxProps = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  overflow: 'hidden',
};

const rootVertical: SxProps = {
  ...rootBase,
  flexDirection: 'column',
};
const rootHorizontal: SxProps = {
  ...rootBase,
  flexDirection: 'row',
};

const root = {
  vertical: rootVertical,
  horizontal: rootHorizontal,
};

const videoPlayIconContainer: SxProps = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const pillStyle: SxProps = {
  zIndex: 100,
  height: 28,
  px: 2.5,
  borderRadius: 100,
  bgcolor: COLORS.cornflower,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Avenir-Heavy',
  fontSize: '12px',
  lineHeight: '20px',
  letterSpacing: '0',
  color: '#fff',
  width: 'fit-content',
  mt: '22px',
  ml: '16px',

  [MQ.xl]: {
    position: 'absolute',
    top: 12,
    right: 12,
    m: 0,
  },
};

const profilePicBase: SxProps = {
  position: 'absolute',
  right: 20,
  border: '1px solid #fff',
  borderRadius: 100,
  overflow: 'hidden',
};

const profilePicSmall: SxProps = {
  ...profilePicBase,
  top: -36,
  width: 58,
  height: 58,
  p: '3px',
};

const profilePicBig: SxProps = {
  ...profilePicBase,
  top: -80,
  width: 105,
  height: 105,
  p: '6px',
};

const profilePic = {
  small: profilePicSmall,
  big: profilePicBig,
};

const profilePicInner: SxProps = {
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: 100,
  overflow: 'hidden',
};

const smallTitleText: SxProps = {
  fontFamily: 'Avenir-Medium',
  fontSize: '13px',
  lineHeight: '24px',
  color: COLORS.linkWater,
  opacity: 0.41,
};

const typeText: SxProps = {
  ...smallTitleText,
  textTransform: 'capitalize',
};

const divider: SxProps = {
  ...smallTitleText,
  mx: 1,
};

const dateText: SxProps = {
  ...smallTitleText,
  fontFamily: 'Avenir-Oblique',
  mt: 'auto',
};

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

type Props = {
  layout?: 'vertical' | 'horizontal';
  noBg?: boolean;
  rounded?: boolean;
  img?: string | StaticImport | null;
  imgHeight?: number;
  imgWidth?: number;
  profileImg?: string | StaticImport | null;
  profileImgSize?: 'small' | 'big';
  person?: string;
  type?: string;
  title?: string;
  titleVariant?: 'h4_new' | 'h5_new';
  body?: string;
  bodyVariant?: 'body_xs' | 'body_small';
  date?: string;
  pillText?: string;
  href?: string;
  videoId?: string;
};

const MediaCard = ({
  layout = 'vertical',
  noBg,
  rounded = true,
  img,
  imgHeight,
  imgWidth,
  profileImg,
  profileImgSize = 'small',
  person,
  type,
  title,
  titleVariant = 'h5_new',
  body,
  bodyVariant = 'body_small',
  date,
  pillText,
  href,
  videoId,
}: Props) => {
  const [isVideoVisible, setVideoVisible] = useState(false);

  const RenderCard = () => (
    <>
      <Box
        sx={{
          ...root[layout],
          bgcolor: noBg ? 'transparent' : COLORS.bigStone,
          borderRadius: rounded ? '10px' : '0px',
          cursor: (type === 'video' && videoId) || href ? 'pointer' : 'default',
        }}
        onClick={() => setVideoVisible(true)}
      >
        {pillText && (
          <Box sx={pillStyle}>
            <Typography variant="inherit">{pillText}</Typography>
          </Box>
        )}
        {img && (
          <Box
            sx={{ position: 'relative', width: imgWidth || '100%', height: imgHeight || '100%' }}
          >
            <Image
              src={img}
              alt="card-img"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            {type === 'video' && videoId && (
              <Box sx={videoPlayIconContainer}>
                <Box sx={{ position: 'relative', maxWidth: '50%' }}>
                  <Image src={VideoPlayIcon} alt="video-play" />
                </Box>
              </Box>
            )}
          </Box>
        )}
        <Box
          sx={{
            flex: 1,
            position: 'relative',
            py: 2,
            px: '22px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {profileImg && (
            <Box sx={profilePic[profileImgSize]}>
              <Box sx={profilePicInner}>
                <Image src={profileImg} alt="profile-img" layout="fill" objectFit="cover" />
              </Box>
            </Box>
          )}
          {(person || type) && (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: '2px' }}>
              {person && <Typography sx={smallTitleText}>{person}</Typography>}
              {type && (
                <>
                  <Typography sx={divider}>|</Typography>
                  <Typography sx={typeText}>{type}</Typography>
                </>
              )}
            </Box>
          )}
          {title && (
            <Typography variant={titleVariant} sx={{ mb: titleVariant === 'h4_new' ? 1.5 : 1 }}>
              {title}
            </Typography>
          )}
          {body && (
            <Typography variant={bodyVariant} sx={{ mb: date ? 1 : 0 }}>
              {body}
            </Typography>
          )}
          {date && <Typography sx={dateText}>{date}</Typography>}
        </Box>
      </Box>
      {type === 'video' && videoId && (
        <VideoModal open={isVideoVisible} setOpen={setVideoVisible} videoId={videoId} />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <RenderCard />
      </Link>
    );
  }

  return <RenderCard />;
};

export default MediaCard;
