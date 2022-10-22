import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { CurrencyHistoryData } from '../../../api/types';

const Wrapper = styled.div`
  @media screen and ${({ theme }) => theme.media.midLapTab} {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

const Chart = (props: { history: CurrencyHistoryData[] }) => {
  const { history } = props;

  const data = history.map((step) => {
    return {
      time: `${new Date(step.time).getHours()}ч`,
      price: parseFloat(step.priceUsd).toFixed(2),
    };
  });

  return (
    // <Wrapper>
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        width={1140}
        height={500}
        data={data}
        margin={{
          top: 40,
          right: 10,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip />
        <Line type="linear" dataKey="price" stroke="#F0731C" activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
    // </Wrapper>
  );
};

export default Chart;
