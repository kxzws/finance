import { useCallback } from 'react';
import styled from 'styled-components';
import useAppDispatch from '../../hooks/useAppDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';
import CenterContainer from '../../styled/CenterContainer';
import getRatesData from '../../redux/rates/thunks';
import Table from '../../components/Table/Table';

const StyledMain = styled.main`
  padding: 20px 0;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Main = () => {
  const { rates, search, limit, offset, isLoading } = useTypedSelector((state) => state.rates);

  const dispatch = useAppDispatch();

  const loadData = useCallback(() => {
    dispatch(getRatesData({ search, limit, offset }));
  }, [dispatch, search, limit, offset]);

  return (
    <StyledMain>
      <CenterContainer>
        <Table data={rates} loadData={loadData} isLoading={isLoading} />
      </CenterContainer>
    </StyledMain>
  );
};

export default Main;
