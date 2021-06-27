import React from 'react';
import styled from 'styled-components';

const S = {
  PageLayout: styled.div`
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 1rem;
  `,
};

const AssignmentsPage = () => {
  return <S.PageLayout>Hello attensi's world !</S.PageLayout>;
};

export default AssignmentsPage;
