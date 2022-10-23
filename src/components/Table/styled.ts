import styled from 'styled-components';
import * as Table from '../../styled/Table';

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

export const StyledTable = styled(Table.StyledTable)``;

export const TableHead = styled(Table.TableHead)`
  border-radius: 6px;
`;

export const TableBody = styled(Table.TableBody)``;

export const TableRow = styled(Table.TableRow)``;

export const TableCell = styled(Table.TableCell)`
  padding: 16px;

  &:nth-of-type(1) {
    max-width: 300px;
  }

  @media screen and ${({ theme }) => theme.media.mobileL} {
    padding: 12px;
  }
`;

export const AddButton = styled(Table.TableButton)`
  background-color: ${({ theme }) => theme.colors.bg};
`;
