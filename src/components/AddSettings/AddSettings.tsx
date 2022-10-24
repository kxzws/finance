import { SubmitHandler, useForm } from 'react-hook-form';
import useAppDispatch from '../../hooks/useAppDispatch';
import parseFixedFloat from '../../utils/parseFixedFloat';
import { walletSlice } from '../../redux/wallet/slices';
import { IAddSettingsData, IAddSettingsProps } from '../../types/interfaces';
import baseTheme from '../../theme';
import * as F from '../../styled/Fonts';
import * as A from './styled';

const AddSettings = ({ data }: IAddSettingsProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddSettingsData>();

  const { addToWallet } = walletSlice.actions;
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IAddSettingsData> = (submitData) => {
    if (data) {
      dispatch(addToWallet({ data, amount: submitData.quantity }));
      reset();
    }
  };

  return data ? (
    <A.StyledAddSettings>
      <F.Title2 mBottom={20}>Добавить в портфель</F.Title2>
      <F.Subtitle mBottom={14}>
        {data?.name} – ${parseFixedFloat(data?.priceUsd, 2)}
      </F.Subtitle>

      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <A.AddInput
          type="number"
          min="0"
          step="0.01"
          {...register('quantity', {
            required: true,
            valueAsNumber: true,
            min: 0,
            validate: (value) => value > 0,
          })}
          style={errors.quantity ? { border: `1px solid ${baseTheme.colors.error}` } : undefined}
        />

        <A.AddButton type="submit">Добавить</A.AddButton>
      </form>
    </A.StyledAddSettings>
  ) : null;
};

export default AddSettings;
