import styled from 'styled-components';

export const StyledTable = styled.table`
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

  tbody &:hover button {
    visibility: visible;
  }
`;

export const TableCell = styled.td`
  &:nth-of-type(n + 2) {
    text-align: right;
  }
`;

export const TableButton = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23px;
  width: 23px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.bg};
  border: none;
  border-radius: 50%;
  transition: transform ${({ theme }) => theme.durations.ms150}ms ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  table & {
    visibility: hidden;
  }
`;
