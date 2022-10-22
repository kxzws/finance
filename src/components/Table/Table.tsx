import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import visualizeBigDigit from '../../utils/visualizeBigDigit';
import { ITableProps } from '../../types/interfaces';
import { RateData } from '../../api/types';
import baseTheme from '../../theme';
import FlexWrapper from '../../styled/FlexWrapper';
import AddSettings from '../AddSettings/AddSettings';
import Modal from '../Modal/Modal';
import AddButton from '../../styled/AddButton';
import Loading from '../../styled/Loading';
import * as F from '../../styled/Fonts';
import * as T from './styled';

const Table = (props: ITableProps) => {
  const { data, loadData, isLoading } = props;

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [clickedCurrency, setClickedCurrency] = useState<RateData | null>(null);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const closeModal = () => {
    setIsModalOpen(false);
    setClickedCurrency(null);
  };

  const handleRowClick = (e: React.MouseEvent<unknown>, row: RateData) => {
    navigate(`/id/${row.id}`);
  };

  const handleAddBtnClick = (e: React.MouseEvent<HTMLButtonElement>, currency: RateData) => {
    e.stopPropagation();
    e.preventDefault();
    setIsModalOpen(true);
    setClickedCurrency(currency);
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
              <T.TableCell key={name}>
                <F.Text2>{name}</F.Text2>
              </T.TableCell>
            ))}
          </T.TableRow>
        </T.TableHead>
        <T.TableBody>
          {isLoading ? (
            <Loading />
          ) : (
            data.map((item) => {
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
                    <FlexWrapper justifyContent="space-between" alignItems="baseline">
                      <F.Subtitle>{item.name}</F.Subtitle>
                      <AddButton type="button" onClick={(event) => handleAddBtnClick(event, item)}>
                        +
                      </AddButton>
                    </FlexWrapper>
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
            })
          )}
        </T.TableBody>
      </T.StyledTable>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddSettings data={clickedCurrency} />
      </Modal>
    </T.StyledTableCont>
  );
};

export default Table;
