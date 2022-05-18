import React, { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';
import ReportDetailTile from './ReportDetailTile';
import productimage from '../../../asset/img/productimage.png';
const ReportProduct: FC = (): ReactElement => {
  return (
    <ReportProductWrapper>
      <ReportProductTitle>Product</ReportProductTitle>
      <ProductDetails container spacing={{ xs: 2, lg: 0 }}>
        <ProductImageWrapper item xs={6} lg={2}>
          <ProductImage src={productimage} alt="productimage" />
        </ProductImageWrapper>
        <ReportDetailTile
          itemsPerRow={{ xs: 6, lg: 2 }}
          title="Customer name"
          info="Bessie Cooper"
        />
        <ReportDetailTile
          itemsPerRow={{ xs: 6, lg: 2 }}
          title="Product ID"
          info="2939940319HT"
        />
        <ReportDetailTile
          itemsPerRow={{ xs: 6, lg: 2 }}
          title="Date of Purchase"
          info="05.12.2020"
        />
        <ProductWarranty item xs={6} lg={3}>
          <ProductWarrantyTitle>Warranty Due Date</ProductWarrantyTitle>
          <ProductWarrantyDateWrapper>
            <ProductWarrantyDate>05.10.2021</ProductWarrantyDate>
          </ProductWarrantyDateWrapper>
        </ProductWarranty>
      </ProductDetails>
    </ReportProductWrapper>
  );
};

export default ReportProduct;

const ReportProductWrapper = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const ReportProductTitle = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.custom.pxToRem(20),
  lineHeight: '120%',
  color: theme.palette.text.primary,
  marginBottom: theme.custom.pxToRem(32),
}));

const ProductDetails = styled(withTheme(Grid))(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const ProductImageWrapper = styled(withTheme(Grid))(({ theme }) => ({
  width: theme.custom.pxToRem(120),
  height: theme.custom.pxToRem(120),
  background: '#FFFFFF',
  border: '1px solid #E6E6E6',
  borderRadius: '8px',
  padding: '8.57px',
}));
const ProductImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

const ProductWarranty = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const ProductWarrantyTitle = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(12),
  lineHeight: '120%',
  color: theme.palette.text.secondary,
  marginBottom: theme.custom.pxToRem(6),
}));
const ProductWarrantyDateWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  //   padding: '3px 12px 0px',
  width: '94px',
  height: '24px',
  background: '#DF5555',
  borderRadius: '8px',
}));

const ProductWarrantyDate = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(14),
  lineHeight: '150%',
  color: '#FFFFFF',
}));
