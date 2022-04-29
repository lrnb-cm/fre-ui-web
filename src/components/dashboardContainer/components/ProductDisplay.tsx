import { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { ProductDisplayType } from '../types';
import { withTheme } from '@mui/styles';
import { Box, Stack } from '@mui/material';
import MuiAvatar from '@mui/material/Avatar';

const ProductDisplay: FC<ProductDisplayType> = ({
  img,
  title,
  subTitle,
  price,
}): ReactElement => {
  return (
    <ProductDisplayContent>
      <ProductLeftContent>
        <Avatar src={img} />
        <ProductContent direction="row">
          <ProductTitle>{title}</ProductTitle>
          <ProductSubTitle>{subTitle}</ProductSubTitle>
        </ProductContent>
      </ProductLeftContent>

      <ProductPrice>${price.toFixed(2)}</ProductPrice>
    </ProductDisplayContent>
  );
};

const ProductDisplayContent = styled(withTheme(Stack))(({ theme }) => ({
  padding: '12px 24px',
  background: theme.palette.background.paper,
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  width: '288px',
}));

const ProductLeftContent = styled(withTheme(Stack))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
}));

const Avatar = styled(withTheme(MuiAvatar))(({ theme }) => ({
  width: theme.typography.pxToRem(32),
  height: theme.typography.pxToRem(32),
}));

const ProductContent = styled(withTheme(Stack))(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  marginLeft: theme.typography.pxToRem(16),
}));

const ProductTitle = styled('div')(({ theme }) => ({
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: theme.typography.pxToRem(14),
  lineHeight: '150%',
  color: theme.palette.text.primary,
}));
const ProductSubTitle = styled('div')(({ theme }) => ({
  fontFamily: 'Intro Book',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: theme.typography.pxToRem(12),
  lineHeight: '120%',
  color: theme.palette.text.secondary,
}));

const ProductPrice = styled('div')(({ theme }) => ({
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '140%',
  //   textAlign: 'right',
  color: theme.palette.text.primary,
}));

export default ProductDisplay;
