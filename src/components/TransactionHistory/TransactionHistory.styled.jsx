import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);

  th {
    padding: 8px 0;
    text-transform: uppercase;
    background-color: #66d9ff;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }
  td {
    width: 33.3333%;
    padding: 8px 0;
    font-size: 12px;
    font-weight: 500;
  }
  td:first-letter {
    text-transform: uppercase;
  }
  td:first-of-type {
    text-align: start;
    padding-left: 95px;
  }
  td:nth-of-type(2) {
    text-align: center;
  }
  tr:nth-of-type(2n + 1) {
    background-color: #e7ecf2;
  }
  tr:nth-of-type(2n + 2) {
    background-color: #ffffff;
  }
`;
