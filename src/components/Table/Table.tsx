import { useEffect } from 'react';
import styled from 'styled-components';
import { ITableProps } from '../../types/interfaces';

const StyledTable = styled.section`
  margin: 0 10px;
`;

const Table = (props: ITableProps) => {
  const { data, loadData, isLoading } = props;

  useEffect(() => {
    loadData();
  }, [loadData]);

  return <StyledTable>таблица</StyledTable>;
};

export default Table;
