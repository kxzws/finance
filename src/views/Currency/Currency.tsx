import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { fetchCurrencyData, fetchCurrencyHistory } from '../../api/service';
import { CurrencyHistoryData, RateData } from '../../api/types';
import baseTheme from '../../theme';
import CenterContainer from '../../styled/CenterContainer';
import * as F from '../../styled/Fonts';
import FlexWrapper from '../../styled/FlexWrapper';
import Chart from './Chart/Chart';

const StyledCurrency = styled.section`
  padding: 20px 0;
`;

const Currency = () => {
  const { id } = useParams();

  const [data, setData] = useState<RateData>();
  const [history, setHistory] = useState<CurrencyHistoryData[]>();

  useEffect(() => {
    (async () => {
      const dataResponse = await fetchCurrencyData(id as string);
      const currency = dataResponse.data;
      setData(currency[0]);

      const historyResponse = await fetchCurrencyHistory(id as string);
      const currencyHistory = historyResponse.data.slice(-24);
      setHistory(currencyHistory);
    })();
  }, [id]);

  return (
    <StyledCurrency>
      <CenterContainer>
        {data && history ? (
          <>
            <F.Title1 mBottom={20}>
              Топ {data.rank}: {data.name} ({data.id})
            </F.Title1>

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

            <Chart history={history} />
          </>
        ) : (
          <F.Subtitle>Не найдено</F.Subtitle>
        )}
      </CenterContainer>
    </StyledCurrency>
  );
};

export default Currency;
