import styled from 'styled-components';
import * as Table from '../../styled/Table';

export const StyledWallet = styled.div`
  padding: 20px;
  padding-top: 0;
  max-height: 60vh;
  overflow-y: auto;

  @media screen and ${({ theme }) => theme.media.mobileL} {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

export const StyledTable = styled(Table.StyledTable)`
  margin: 20px 0;
`;

export const TableHead = styled(Table.TableHead)``;

export const TableBody = styled(Table.TableBody)`
  word-break: break-word;
`;

export const TableRow = styled(Table.TableRow)``;

export const TableCell = styled(Table.TableCell)`
  padding: 10px;
`;

export const RemoveButton = styled(Table.TableButton)`
  background-color: #3366cc;
`;
