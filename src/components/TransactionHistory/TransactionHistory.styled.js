import styled from 'styled-components';
export const TransactionTable = styled.table`
  width: 100%;
  max-width: 400px;
  font-size: 20px;
  margin: auto;
`;

export const TransactionHead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;
export const TransactionRow = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  text-align: center;
`;
export const TableHead = styled.th`
  font-size: 25px;
  color: white;
  border-color: white;
  background-color: rgb(112, 222, 221);
  text-transform: uppercase;
  padding: 8px;
`;
export const TransactionTableBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;
export const TableData = styled.td`
  text-align: center;
`;
export const TableRow = styled.tr`
&:nth-child(2n){ 
    background-color: #eaefef; 
`;
