import React, { FC } from 'react';
import styled from 'styled-components';
import { IAssignment } from '../types';
import ProductCard from './product-card';

const S = {
  Section: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
  `,
  Header: styled.h1`
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: bold;
    font-weight: 300;
  `,
  ProductListWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  `,
};

interface IAssignmentSection {
  assignment: IAssignment;
}

const AssignmentSection: FC<IAssignmentSection> = ({ assignment }) => {
  return (
    <S.Section>
      <S.Header>{assignment.name}</S.Header>
      <S.ProductListWrapper>
        {assignment.items.map((item) => (
          <ProductCard product={item.product} />
        ))}
      </S.ProductListWrapper>
    </S.Section>
  );
};

export default AssignmentSection;
