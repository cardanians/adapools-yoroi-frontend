import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }
  .tag {
    padding: 2px 8px;
    background: #c9ede5;
    border-radius: 8px;
    color: #2b2c32;
    margin-right: 9px;
    @media (max-width: 1023px) {
      margin-bottom: 9px;
    }
  }
  .value {
    color: #242838;
    font-size: 14px;
  }
`;
function CostsCard({ percentage, value }) {
  return (
    <Card>
      <div className="tag">{percentage}%</div>
      <p className="value">({value})</p>
    </Card>
  );
}

export default CostsCard;