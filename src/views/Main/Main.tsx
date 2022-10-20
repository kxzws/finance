import { useCallback } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';
import { ratesSlice } from '../../redux/rates/slices';
import CenterContainer from '../../styled/CenterContainer';
import getRatesData from '../../redux/rates/thunks';
import Table from '../../components/Table/Table';
import FlexWrapper from '../../styled/FlexWrapper';
import * as F from '../../styled/Fonts';
import * as M from './styled';

const Main = () => {
  const { rates, limit, offset, isLoading } = useTypedSelector((state) => state.rates);

  const { firstPage, prevPage, nextPage } = ratesSlice.actions;
  const dispatch = useAppDispatch();

  const loadData = useCallback(() => {
    dispatch(getRatesData({ limit, offset }));
  }, [dispatch, limit, offset]);

  const getPageNumber = (lim: number, off: number): number => {
    let page = 1;
    if (off > 0) {
      page = off / lim + 1;
    }
    return page;
  };

  return (
    <M.StyledMain>
      <CenterContainer>
        <FlexWrapper justifyContent="flex-end" alignItems="baseline">
          <M.PageButton
            type="button"
            onClick={() => {
              dispatch(prevPage());
            }}
            disabled={offset === 0}
          >
            ←
          </M.PageButton>
          {offset === 0 ? null : (
            <M.FirstPageButton
              type="button"
              onClick={() => {
                dispatch(firstPage());
              }}
            >
              <F.Subtitle color="#a1a1a1">1..</F.Subtitle>
            </M.FirstPageButton>
          )}
          <F.Subtitle>{getPageNumber(limit, offset)}</F.Subtitle>
          <M.PageButton
            type="button"
            onClick={() => {
              dispatch(nextPage());
            }}
            disabled={rates.length < limit}
          >
            →
          </M.PageButton>
        </FlexWrapper>

        <Table data={rates} loadData={loadData} isLoading={isLoading} />
      </CenterContainer>
    </M.StyledMain>
  );
};

export default Main;
