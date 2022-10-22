import styled from 'styled-components';

export const StyledTableCont = styled.section`
  margin: 20px 20px 0;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;

  @media screen and ${({ theme }) => theme.media.tablet} {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 6px;
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
  padding: 16px;

  &:nth-of-type(1) {
    max-width: 300px;
  }

  &:nth-of-type(n + 2) {
    text-align: right;
  }

  @media screen and ${({ theme }) => theme.media.mobileL} {
    padding: 12px;
  }
`;
