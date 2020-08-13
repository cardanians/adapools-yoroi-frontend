// @flow
import React from 'react';
import styled from 'styled-components';
import type { Pool } from '../API/api';

import StakingPoolCard from './StakingPoolCard';
import PoolSizeCard from './PoolSizeCard';
import CostsCard from './CostsCard';
import PledgeCard from './PledgeCard';
import { roundTwoDecimal, formatBigNumber, roundOneDecimal, formatCostLabel } from '../utils/utils';
import Button from './common/Button';

const CardMobile = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 24px;
  padding: 11px 16px;
`;
const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  @media (max-width: 1023px) {
    align-items: flex-start;
  }

  .label {
    color: #6b7384;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 22px;
    margin-bottom: 8px;
  }
  .item {
    flex: 1;
  }
`;
type Props = {|
  data: Pool,
  delegateFunction: Function
|};
function MobileTable({ data, delegateFunction }: Props) {
  if (data && Object.entries(data).length <= 0) {
    return <h1 style={{ fontWeight: 400 }}>Ups.. We havent found any data</h1>;
  }

  return (
    <>
      {data &&
        (Object.entries(data): any).map(([, value]) => (
          <CardMobile key={value.id}>
            <StakingPoolCard id={value.id} avatar={value.pool_pic} fullname={value.fullname} />
            <WrapperContent style={{ display: 'flex' }}>
              <div className="item">
                <div className="label">Pool Size</div>
                <PoolSizeCard
                  percentage={roundOneDecimal(value.total_size)}
                  value={formatBigNumber(value.total_stake)}
                />
              </div>
              <div className="item">
                <div className="label">Costs</div>
                <CostsCard
                  percentage={roundTwoDecimal(value.tax_computed)}
                  value={formatCostLabel(value.tax_computed, value.tax_fix)}
                />
              </div>
              <div className="item">
                <div className="label">Costs</div>
                <PledgeCard value={value.pledge} />
              </div>
            </WrapperContent>
            <div>
              <Button onClick={() => delegateFunction(value.id)}>Delegate</Button>
            </div>
          </CardMobile>
        ))}
    </>
  );
}

export default MobileTable;
