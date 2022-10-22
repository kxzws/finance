import styled from 'styled-components';

export const StyledWallet = styled.div`
  padding: 20px;
  padding-top: 0;

  @media screen and ${({ theme }) => theme.media.mobileL} {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
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

  tbody &:hover button {
    visibility: visible;
  }
`;

export const TableCell = styled.td`
  padding: 10px;

  &:nth-of-type(n + 2) {
    text-align: right;
  }
`;

export const RemoveButton = styled.button`
  height: 20px;
  width: 20px;
  font-size: 16px;
  color: #fff;
  background-color: #3366cc;
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
