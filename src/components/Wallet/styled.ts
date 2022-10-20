import styled from 'styled-components';

export const StyledWallet = styled.div`
  padding: 20px;
`;

export const StyledTable = styled.table`
  margin: 20px 0;
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: rgba(0, 0, 0, 0.03);
`;

export const TableBody = styled.tbody`
  word-break: break-word;
`;

export const TableRow = styled.tr`
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  transition: background-color ${({ theme }) => theme.durations.ms150}ms ease;

  tbody & {
    cursor: pointer;
  }

  tbody &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const TableCell = styled.td`
  padding: 10px;

  &:nth-of-type(n + 2) {
    text-align: right;
  }
`;
