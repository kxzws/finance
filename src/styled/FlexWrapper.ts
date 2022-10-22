import styled from 'styled-components';

interface IFlexWrapperProps {
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'center';
  alignItems: 'flex-start' | 'flex-end' | 'baseline' | 'center';
}

const FlexWrapper = styled.div<IFlexWrapperProps>`
  display: flexbox;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export default FlexWrapper;
