import React, { FC } from 'react';
import styled from 'styled-components';
import { IProduct } from '../types';
import { assignmentsActions } from '../redux';
import { useDispatch } from 'react-redux';

const S = {
  ProductCard: styled.div`
    cursor: pointer;
    position: relative;
    width: 200px;
    height: 200px;
    margin: 1rem;
    border-radius: 0.625rem;
    box-shadow: 0 2px 4px 0 grey;
    font-size: 0.75rem;
    text-transform: uppercase;
  `,
  Image: styled.img`
    width: 100%;
    height: 150px;
    border-radius: 0.625rem 0.625rem 0 0;
  `,
  ProductType: styled.span`
    position: absolute;
    top: 130px;
    left: 0.5rem;
  `,

  ProductTitle: styled.span`
    display: flex;
    flex-grow: 1;
    padding: 1rem 0.5rem;
  `,
};

interface IProductCard {
  product: IProduct;
}

const ProductCard: FC<IProductCard> = ({ product: { title, image, type } }) => {
  const dispatch = useDispatch();

  const openLeaderBoardDialog = () => dispatch(assignmentsActions.openProductDialog(title));

  return (
    <S.ProductCard role="link" onClick={openLeaderBoardDialog}>
      <S.Image src={image} alt={'image'} />
      <S.ProductType>{type.label}</S.ProductType>
      <S.ProductTitle>{title}</S.ProductTitle>
    </S.ProductCard>
  );
};

export default ProductCard;
