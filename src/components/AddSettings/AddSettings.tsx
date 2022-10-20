import { useState } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import { walletSlice } from '../../redux/wallet/slices';
import { IAddSettingsProps } from '../../types/interfaces';
import * as F from '../../styled/Fonts';
import * as A from './styled';

const AddSettings = (props: IAddSettingsProps) => {
  const { data } = props;

  const { addToWallet } = walletSlice.actions;
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<number | undefined>(0);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!(e.target as HTMLInputElement).value) {
      setValue(undefined);
      return;
    }
    const input = (e.target as HTMLInputElement).value.replace(',', '.');
    setValue(parseFloat(input));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (data && value) {
      dispatch(addToWallet({ data, amount: value }));
    }
  };

  return data ? (
    <A.StyledAddSettings>
      <F.Title2 mBottom={20}>Добавить в портфель</F.Title2>
      <F.Subtitle mBottom={14}>
        {data?.name} – ${parseFloat(data?.priceUsd).toFixed(2)}
      </F.Subtitle>
      <A.AddInput type="number" value={value} step="0.01" min="0" onChange={handleChange} />
      <A.AddButton type="button" onClick={handleClick} disabled={!value}>
        Добавить
      </A.AddButton>
    </A.StyledAddSettings>
  ) : null;
};

export default AddSettings;
