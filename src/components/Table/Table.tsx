import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import visualizeBigDigit from '../../utils/visualizeBigDigit';
import { ITableProps } from '../../types/interfaces';
import { RateData } from '../../api/types';
import baseTheme from '../../theme';
import * as F from '../../styled/Fonts';
import * as T from './styled';

const Table = (props: ITableProps) => {
  const { data, loadData, isLoading } = props;

  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleRowClick = (e: React.MouseEvent<unknown>, row: RateData) => {
    navigate(`/id/${row.id}`);
  };

  return (
    <T.StyledTableCont>
      <T.StyledTable>
        <T.TableHead>
          <T.TableRow>
            {[
              'Название',
              'Стоимость',
              'Капитализация',
              'Средняя стоимость (24 ч.)',
              'Предложение',
              'Объём (24 ч.)',
              'Изменение (24 ч.)',
            ].map((name) => (
              <T.TableCell>
                <F.Text2>{name}</F.Text2>
              </T.TableCell>
            ))}
          </T.TableRow>
        </T.TableHead>
        <T.TableBody>
          {data.map((item) => {
            const price = Number(parseFloat(item.priceUsd).toFixed(2));
            const marketCap = Number(parseFloat(item.marketCapUsd).toFixed(2));
            const vwap24h = Number(parseFloat(item.vwap24Hr).toFixed(2));
            const supply = Number(parseFloat(item.supply).toFixed(2));
            const volume24h = Number(parseFloat(item.volumeUsd24Hr).toFixed(2));
            const percent24h = Number(parseFloat(item.changePercent24Hr).toFixed(2));

            const isPositive = percent24h > 0;

            return (
              <T.TableRow key={item.id} onClick={(event) => handleRowClick(event, item)}>
                <T.TableCell>
                  <F.Subtitle>{item.name}</F.Subtitle>
                </T.TableCell>
                <T.TableCell>${price}</T.TableCell>
                <T.TableCell>${visualizeBigDigit(marketCap)}</T.TableCell>
                <T.TableCell>${vwap24h}</T.TableCell>
                <T.TableCell>{visualizeBigDigit(supply)}</T.TableCell>
                <T.TableCell>${visualizeBigDigit(volume24h)}</T.TableCell>
                <T.TableCell>
                  <F.Text1 color={isPositive ? baseTheme.colors.success : baseTheme.colors.error}>
                    {percent24h}%
                  </F.Text1>
                </T.TableCell>
              </T.TableRow>
            );
          })}
        </T.TableBody>
      </T.StyledTable>
    </T.StyledTableCont>
  );
};

export default Table;
