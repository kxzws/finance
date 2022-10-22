import styled from 'styled-components';
import spinner from '../assets/spinner.gif';

const Loading = styled.div`
  margin: 5px auto;
  height: 50px;
  width: 50px;
  display: flex;
  background: 0 0 / cover url('${spinner}') no-repeat;
`;

export default Loading;
