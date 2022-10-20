import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCurrencyData, fetchCurrencyHistory } from '../../api/service';
import { CurrencyHistoryData, RateData } from '../../api/types';
import visualizeBigDigit from '../../utils/visualizeBigDigit';
import baseTheme from '../../theme';
import CenterContainer from '../../styled/CenterContainer';
import * as F from '../../styled/Fonts';
import FlexWrapper from '../../styled/FlexWrapper';
import Chart from './Chart/Chart';
import Modal from '../../components/Modal/Modal';
import AddSettings from '../../components/AddSettings/AddSettings';

const LAST_24HR = -24;

const StyledCurrency = styled.section`
  padding: 20px 0;
`;

const AddButton = styled.button`
  padding: 12px 18px;
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
  font-weight: ${({ theme }) => theme.fonts.weights.w500};
  color: #fff;
  background-color: ${({ theme }) => theme.colors.bg};
  border: none;
  border-radius: 25px;
  box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
  transition: transform ${({ theme }) => theme.durations.ms200}ms ease 0s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Currency = () => {
  const { id } = useParams();

  const [data, setData] = useState<RateData>();
  const [history, setHistory] = useState<CurrencyHistoryData[]>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const dataResponse = await fetchCurrencyData(id as string);
      const currency = dataResponse.data;
      setData(currency[0]);

      const historyResponse = await fetchCurrencyHistory(id as string);
      const currencyHistory = historyResponse.data.slice(LAST_24HR);
      setHistory(currencyHistory);
    })();
  }, [id]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <StyledCurrency>
      <CenterContainer>
        {data && history ? (
          <>
            <FlexWrapper justifyContent="flex-start" alignItems="flex-start">
              <F.Title1 mRight={20} mBottom={20}>
                Топ {data.rank}: {data.name} ({data.id})
              </F.Title1>
              <AddButton type="button" onClick={handleAddBtnClick}>
                Добавить
              </AddButton>
            </FlexWrapper>

            <FlexWrapper justifyContent="space-between" alignItems="center">
              <div>
                <FlexWrapper justifyContent="flex-start" alignItems="center">
                  <F.Subtitle color="rgba(0, 0, 0, 0.7)" mRight={10}>
                    Стоимость:
                  </F.Subtitle>
                  <F.Title2 color="rgba(0, 0, 0, 0.7)" mRight={14}>
                    ${parseFloat(data.priceUsd).toFixed(2)}
                  </F.Title2>
                  <F.Subtitle
                    color={
                      Number(parseFloat(data.changePercent24Hr).toFixed(2)) > 0
                        ? baseTheme.colors.success
                        : baseTheme.colors.error
                    }
                  >
                    {parseFloat(data.changePercent24Hr).toFixed(2)}%
                  </F.Subtitle>
                </FlexWrapper>
                <FlexWrapper justifyContent="flex-start" alignItems="center">
                  <F.Subtitle color="rgba(0, 0, 0, 0.7)" mRight={10}>
                    Средняя стоимость:
                  </F.Subtitle>
                  <F.Title2 color="rgba(0, 0, 0, 0.7)">
                    ${parseFloat(data.vwap24Hr).toFixed(2)}
                  </F.Title2>
                </FlexWrapper>
              </div>

              <div>
                <FlexWrapper justifyContent="flex-start" alignItems="center">
                  <F.Subtitle color="rgba(0, 0, 0, 0.7)" mRight={10}>
                    Капитализация:
                  </F.Subtitle>
                  <F.Title2 color="rgba(0, 0, 0, 0.7)" mRight={14}>
                    ${visualizeBigDigit(Number(parseFloat(data.marketCapUsd).toFixed(2)))}
                  </F.Title2>
                </FlexWrapper>
                <FlexWrapper justifyContent="flex-start" alignItems="center">
                  <F.Subtitle color="rgba(0, 0, 0, 0.7)" mRight={10}>
                    Объём (24 ч.):
                  </F.Subtitle>
                  <F.Title2 color="rgba(0, 0, 0, 0.7)">
                    ${visualizeBigDigit(Number(parseFloat(data.volumeUsd24Hr).toFixed(2)))}
                  </F.Title2>
                </FlexWrapper>
              </div>

              <div>
                <FlexWrapper justifyContent="flex-start" alignItems="center">
                  <F.Subtitle color="rgba(0, 0, 0, 0.7)" mRight={10}>
                    Предложение:
                  </F.Subtitle>
                  <F.Title2 color="rgba(0, 0, 0, 0.7)" mRight={14}>
                    {visualizeBigDigit(Number(parseFloat(data.supply).toFixed(2)))}
                  </F.Title2>
                </FlexWrapper>
                <FlexWrapper justifyContent="flex-start" alignItems="center">
                  <F.Subtitle color="rgba(0, 0, 0, 0.7)" mRight={10}>
                    Максимум:
                  </F.Subtitle>
                  <F.Title2 color="rgba(0, 0, 0, 0.7)">
                    {data.maxSupply
                      ? visualizeBigDigit(Number(parseFloat(data.maxSupply).toFixed(2)))
                      : '–'}
                  </F.Title2>
                </FlexWrapper>
              </div>
            </FlexWrapper>

            <Chart history={history} />

            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <AddSettings data={data} />
            </Modal>
          </>
        ) : (
          <F.Subtitle>Не найдено</F.Subtitle>
        )}
      </CenterContainer>
    </StyledCurrency>
  );
};

export default Currency;
