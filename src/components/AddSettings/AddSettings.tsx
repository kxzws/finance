import { useState } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import parseFixedFloat from '../../utils/parseFixedFloat';
import { walletSlice } from '../../redux/wallet/slices';
import { IAddSettingsProps } from '../../types/interfaces';
import baseTheme from '../../theme';
import * as F from '../../styled/Fonts';
import * as A from './styled';

const AddSettings = (props: IAddSettingsProps) => {
  const { data } = props;

  const { addToWallet } = walletSlice.actions;
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<number | undefined>(0);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const toggleIsSuccess = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 1000);
  };

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
      toggleIsSuccess();
    }
  };

  return data ? (
    <A.StyledAddSettings>
      <F.Title2 mBottom={20}>Добавить в портфель</F.Title2>
      <F.Subtitle mBottom={14}>
        {data?.name} – ${parseFixedFloat(data?.priceUsd, 2)}
      </F.Subtitle>
      <A.AddInput type="number" value={value} step="0.01" min="0" onChange={handleChange} />
      <A.SuccessPar isSuccess={isSuccess}>
        <F.Text1 color={baseTheme.colors.success}>Транзакция успешна</F.Text1>
      </A.SuccessPar>
      <A.AddButton type="button" onClick={handleClick} disabled={!value}>
        Добавить
      </A.AddButton>
    </A.StyledAddSettings>
  ) : null;
};

export default AddSettings;
