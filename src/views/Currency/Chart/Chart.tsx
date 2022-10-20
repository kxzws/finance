import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { CurrencyHistoryData } from '../../../api/types';

const Chart = (props: { history: CurrencyHistoryData[] }) => {
  const { history } = props;

  const data = history.map((step) => {
    return {
      time: `${new Date(step.time).getHours()}ч`,
      price: parseFloat(step.priceUsd).toFixed(2),
    };
  });

  return (
    <LineChart
      width={1140}
      height={500}
      data={data}
      margin={{
        top: 40,
        right: 10,
        bottom: 40,
        left: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis domain={['auto', 'auto']} />
      <Tooltip />
      <Line type="linear" dataKey="price" stroke="#F0731C" activeDot={{ r: 6 }} />
    </LineChart>
  );
};

export default Chart;
