import React, { FC } from 'react';
import styled from 'styled-components';
import * as Assignments from '../data-home.json';
import ProductCard from './components/product-card';
import AssignmentSection from './components/assigments-section';
import LeaderBoardDialog from './components/leader-board-dialog';

const S = {
  PageLayout: styled.div`
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 1rem;

    * {
      box-sizing: border-box;
    }
  `,
  ProductListWrapper: styled.div`
  display: flex;
  flex-direction: column;
    width: 100%;
  `,
};

const AssignmentsPage: FC = () => {
  const products = Assignments.assignments;

  return (
    <S.PageLayout>
      <LeaderBoardDialog/>
      <S.ProductListWrapper>
        {Assignments.assignments.map((assignment) => (
          <AssignmentSection assignment={assignment} />
        ))}
      </S.ProductListWrapper>
    </S.PageLayout>
  );
};

export default AssignmentsPage;
