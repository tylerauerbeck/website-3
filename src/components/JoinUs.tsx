import styled from '@emotion/styled';
import React from 'react';

import { Box } from '@mui/material';
import { COLORS, MQ } from 'src/theme';

import { AnchorButton } from 'src/elements/Button';
import { Flex } from 'src/elements/Div';
import Header from 'src/elements/Header';
import { Img } from 'src/elements/Img';

import ovalLeft from 'public/about/join-oval-left.svg';
import ovalRight from 'public/about/join-oval-right.svg';

type Type = 'light' | 'dark';

const getBackground = (type: Type) => {
  switch (type) {
    case 'dark': {
      return COLORS.darkSlateBlue;
    }
    case 'light':
    default:
      return COLORS.cornflower;
  }
};

const JoinUsContainer = styled(Box)<{ type: Type }>`
  background-color: ${({ type }) => getBackground(type)};
  max-width: 1140px;
  text-align: center;
  position: relative;
  z-index: 20;
  overflow: hidden;
  border-radius: 0;
  width: 100%;
  padding: 113px 30px 0 30px;
  margin: 0 auto;

  & > h4 {
    line-height: 48px;
  }

  ${MQ.lg} {
    border-radius: 16px;
    padding: 100px 30px 0 30px;
  }
`;

const JoinOvalBackgroundImg = styled(Img)<{ rt?: boolean }>`
  display: none;
  position: absolute;
  ${({ rt }) => (rt ? 'right: 0; top: 0; height: 100%;' : 'left: 0; top: 0;')}

  ${MQ.md} {
    display: block;
  }
`;

const JoinUs: React.FC<{
  title: string;
  subtitle: string;
  href: string;
  button: string;
  type: Type;
}> = ({ title, subtitle, href, button, type = 'light' }) => (
  <JoinUsContainer type={type}>
    <JoinOvalBackgroundImg src={ovalLeft} alt="oval" />
    <JoinOvalBackgroundImg src={ovalRight} alt="oval" rt={true} />
    <Flex flexDirection="column" position="relative" zIndex={20}>
      <Header variant="h4" bold={true} color="white" sx={{ mb: '23px' }}>
        {title}
      </Header>
      <Header variant="h6" color="white" sx={{ opacity: '0.6', mb: '17px' }}>
        {subtitle}
      </Header>
      <AnchorButton
        btnType="aquaMarineFill"
        href={href}
        sx={{
          p: { _: '12px 18px', lg: '15px 40px' },
          m: { _: '17px auto 100px auto', lg: '35px auto 90px auto' },
          fontSize: { _: '14px', lg: '20px' },
          lineHeight: { _: '16px', lg: '25px' },
          width: { _: '100%', md: 'auto' },
        }}
      >
        {button}
      </AnchorButton>
    </Flex>
  </JoinUsContainer>
);

export { JoinUs };
