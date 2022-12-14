import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import parseFixedFloat from '../../../utils/parseFixedFloat';
import { CurrencyHistoryData } from '../../../api/types';

const Chart = ({ history }: { history: CurrencyHistoryData[] }) => {
  const data = history.map((step) => {
    return {
      time: `${new Date(step.time).getHours()}ч`,
      price: parseFixedFloat(step.priceUsd, 2),
    };
  });

  return (
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
  );
};

export default Chart;
