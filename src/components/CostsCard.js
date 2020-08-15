// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  align-items: right;
  justify-content: space-between;
  font-size: 14px;
  line-height: 22px;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }
  .value {
    color: #242838;
    font-size: 14px;
  }
`;
type Props = {|
  percentage: number,
  value: number,
|};
function CostsCard({ value }: Props): Node {
  return (
    <Card>
      <p className="value">({value})</p>
    </Card>
  );
}

export default CostsCard;
