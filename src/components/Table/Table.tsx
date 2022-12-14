import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import visualizeBigDigit from '../../utils/visualizeBigDigit';
import parseFixedFloat from '../../utils/parseFixedFloat';
import { ITableProps } from '../../types/interfaces';
import { RateData } from '../../api/types';
import baseTheme from '../../theme';
import FlexWrapper from '../../styled/FlexWrapper';
import AddSettings from '../AddSettings/AddSettings';
import Modal from '../Modal/Modal';
import Loading from '../../styled/Loading';
import * as F from '../../styled/Fonts';
import * as T from './styled';

const Table = ({ data, loadData, isLoading }: ITableProps) => {
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
    navigate(`/${row.id}`);
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
              const price = Number(parseFixedFloat(item.priceUsd, 2));
              const marketCap = Number(parseFixedFloat(item.marketCapUsd, 2));
              const vwap24h = Number(parseFixedFloat(item.vwap24Hr, 2));
              const supply = Number(parseFixedFloat(item.supply, 2));
              const volume24h = Number(parseFixedFloat(item.volumeUsd24Hr, 2));
              const percent24h = Number(parseFixedFloat(item.changePercent24Hr, 2));

              const isPositive = percent24h > 0;

              return (
                <T.TableRow key={item.id} onClick={(event) => handleRowClick(event, item)}>
                  <T.TableCell>
                    <FlexWrapper justifyContent="space-between" alignItems="baseline">
                      <F.Subtitle>{item.name}</F.Subtitle>
                      <T.AddButton
                        type="button"
                        onClick={(event) => handleAddBtnClick(event, item)}
                      >
                        +
                      </T.AddButton>
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
