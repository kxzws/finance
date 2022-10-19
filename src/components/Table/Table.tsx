import { useEffect } from 'react';
import styled from 'styled-components';
import { ITableProps } from '../../types/interfaces';
import visualizeBigDigit from '../../utils/visualizeBigDigit';
import baseTheme from '../../theme';
import * as F from '../../styled/Fonts';

const StyledTableCont = styled.section`
  margin: 0 20px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 6px;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  transition: background-color ${({ theme }) => theme.durations.ms150}ms ease;

  tbody & {
    cursor: pointer;
  }

  tbody &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const TableCell = styled.td`
  padding: 16px;

  &:nth-of-type(n + 2) {
    text-align: right;
  }
`;

const Table = (props: ITableProps) => {
  const { data, loadData, isLoading } = props;

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <StyledTableCont>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>
              <F.Text2>Название</F.Text2>
            </TableCell>
            <TableCell>
              <F.Text2>Стоимость</F.Text2>
            </TableCell>
            <TableCell>
              <F.Text2>Капитализация</F.Text2>
            </TableCell>
            <TableCell>
              <F.Text2>Средняя стоимость (24 ч.)</F.Text2>
            </TableCell>
            <TableCell>
              <F.Text2>Предложение</F.Text2>
            </TableCell>
            <TableCell>
              <F.Text2>Объём (24 ч.)</F.Text2>
            </TableCell>
            <TableCell>
              <F.Text2>Изменение (24 ч.)</F.Text2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            const price = Number(parseFloat(item.priceUsd).toFixed(2));
            const marketCap = Number(parseFloat(item.marketCapUsd).toFixed(2));
            const vwap24h = Number(parseFloat(item.vwap24Hr).toFixed(2));
            const supply = Number(parseFloat(item.supply).toFixed(2));
            const volume24h = Number(parseFloat(item.volumeUsd24Hr).toFixed(2));
            const percent24h = Number(parseFloat(item.changePercent24Hr).toFixed(2));

            const isPositive = percent24h > 0;

            return (
              <TableRow key={item.id}>
                <TableCell>
                  <F.Subtitle>{item.name}</F.Subtitle>
                </TableCell>
                <TableCell>${price}</TableCell>
                <TableCell>${visualizeBigDigit(marketCap)}</TableCell>
                <TableCell>${vwap24h}</TableCell>
                <TableCell>{visualizeBigDigit(supply)}</TableCell>
                <TableCell>${visualizeBigDigit(volume24h)}</TableCell>
                <TableCell>
                  <F.Text1 color={isPositive ? baseTheme.colors.success : baseTheme.colors.error}>
                    {percent24h}%
                  </F.Text1>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </StyledTable>
    </StyledTableCont>
  );
};

export default Table;
