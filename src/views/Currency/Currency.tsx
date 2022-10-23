import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCurrencyData, fetchCurrencyHistory } from '../../api/service';
import { CurrencyHistoryData, RateData } from '../../api/types';
import visualizeBigDigit from '../../utils/visualizeBigDigit';
import parseFixedFloat from '../../utils/parseFixedFloat';
import baseTheme from '../../theme';
import CenterContainer from '../../styled/CenterContainer';
import FlexWrapper from '../../styled/FlexWrapper';
import Modal from '../../components/Modal/Modal';
import AddSettings from '../../components/AddSettings/AddSettings';
import Loading from '../../styled/Loading';
import Chart from './Chart/Chart';
import * as F from '../../styled/Fonts';
import * as C from './styled';

const LAST_24HR = -24;

const Currency = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<RateData>();
  const [history, setHistory] = useState<CurrencyHistoryData[]>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const dataResponse = await fetchCurrencyData(id as string);
      const currency = dataResponse.data;
      setData(currency[0]);

      const historyResponse = await fetchCurrencyHistory(id as string);
      const currencyHistory = historyResponse.data.slice(LAST_24HR);
      setHistory(currencyHistory);

      setIsLoading(false);
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
    <C.StyledCurrency>
      {isLoading ? (
        <Loading />
      ) : (
        <CenterContainer>
          {data && history ? (
            <>
              <C.FlexTitle>
                <F.Title1 mRight={20}>
                  Топ {data.rank}: {data.name} ({data.id})
                </F.Title1>
                <C.AddButton type="button" onClick={handleAddBtnClick}>
                  Добавить
                </C.AddButton>
              </C.FlexTitle>

              <C.FlexInfo>
                <div>
                  <FlexWrapper justifyContent="flex-start" alignItems="center">
                    <F.Subtitle color="rgba(0, 0, 0, 0.7)" mRight={10}>
                      Стоимость:
                    </F.Subtitle>
                    <F.Title2 color="rgba(0, 0, 0, 0.7)" mRight={14}>
                      ${parseFixedFloat(data.priceUsd, 2)}
                    </F.Title2>
                    <F.Subtitle
                      color={
                        Number(parseFixedFloat(data.changePercent24Hr, 2)) > 0
                          ? baseTheme.colors.success
                          : baseTheme.colors.error
                      }
                    >
                      {parseFixedFloat(data.changePercent24Hr, 2)}%
                    </F.Subtitle>
                  </FlexWrapper>
                  <FlexWrapper justifyContent="flex-start" alignItems="center">
                    <F.Subtitle color="rgba(0, 0, 0, 0.7)" mRight={10}>
                      Средняя стоимость:
                    </F.Subtitle>
                    <F.Title2 color="rgba(0, 0, 0, 0.7)">
                      ${parseFixedFloat(data.vwap24Hr, 2)}
                    </F.Title2>
                  </FlexWrapper>
                </div>

                <div>
                  <FlexWrapper justifyContent="flex-start" alignItems="center">
                    <F.Subtitle color="rgba(0, 0, 0, 0.7)" mRight={10}>
                      Капитализация:
                    </F.Subtitle>
                    <F.Title2 color="rgba(0, 0, 0, 0.7)" mRight={14}>
                      ${visualizeBigDigit(Number(parseFixedFloat(data.marketCapUsd, 2)))}
                    </F.Title2>
                  </FlexWrapper>
                  <FlexWrapper justifyContent="flex-start" alignItems="center">
                    <F.Subtitle color="rgba(0, 0, 0, 0.7)" mRight={10}>
                      Объём (24 ч.):
                    </F.Subtitle>
                    <F.Title2 color="rgba(0, 0, 0, 0.7)">
                      ${visualizeBigDigit(Number(parseFixedFloat(data.volumeUsd24Hr, 2)))}
                    </F.Title2>
                  </FlexWrapper>
                </div>

                <div style={{ maxWidth: '400px', minWidth: '200px', flex: '1 1 400px' }}>
                  <FlexWrapper justifyContent="flex-start" alignItems="center">
                    <F.Subtitle color="rgba(0, 0, 0, 0.7)" mRight={10}>
                      Предложение:
                    </F.Subtitle>
                    <F.Title2 color="rgba(0, 0, 0, 0.7)" mRight={14}>
                      {visualizeBigDigit(Number(parseFixedFloat(data.supply, 2)))}
                    </F.Title2>
                  </FlexWrapper>
                  <FlexWrapper justifyContent="flex-start" alignItems="center">
                    <F.Subtitle color="rgba(0, 0, 0, 0.7)" mRight={10}>
                      Максимум:
                    </F.Subtitle>
                    <F.Title2 color="rgba(0, 0, 0, 0.7)">
                      {data.maxSupply
                        ? visualizeBigDigit(Number(parseFixedFloat(data.maxSupply, 2)))
                        : '–'}
                    </F.Title2>
                  </FlexWrapper>
                </div>
              </C.FlexInfo>

              <FlexWrapper justifyContent="center" alignItems="flex-start">
                <Chart history={history} />
              </FlexWrapper>

              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <AddSettings data={data} />
              </Modal>
            </>
          ) : (
            <F.Subtitle>Не найдено</F.Subtitle>
          )}
        </CenterContainer>
      )}
    </C.StyledCurrency>
  );
};

export default Currency;
