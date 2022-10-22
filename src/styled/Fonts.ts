import styled from 'styled-components';

interface ITextProps {
  mTop?: number;
  mRight?: number;
  mBottom?: number;
  mLeft?: number;
  color?: string;
}

export const Title1 = styled.h1<ITextProps>`
  margin-top: ${(props) => (props.mTop ? props.mTop : 0)}px;
  margin-right: ${(props) => (props.mRight ? props.mRight : 0)}px;
  margin-bottom: ${(props) => (props.mBottom ? props.mBottom : 0)}px;
  margin-left: ${(props) => (props.mLeft ? props.mLeft : 0)}px;
  font-size: ${({ theme }) => theme.fonts.sizes.title1}rem;
  font-weight: ${({ theme }) => theme.fonts.weights.w700};
  line-height: ${({ theme }) => theme.fonts.lineHeights.title1}rem;
  color: ${(props) => (props.color ? props.color : '#000')};
`;

export const Title2 = styled.h2<ITextProps>`
  margin-top: ${(props) => (props.mTop ? props.mTop : 0)}px;
  margin-right: ${(props) => (props.mRight ? props.mRight : 0)}px;
  margin-bottom: ${(props) => (props.mBottom ? props.mBottom : 0)}px;
  margin-left: ${(props) => (props.mLeft ? props.mLeft : 0)}px;
  font-size: ${({ theme }) => theme.fonts.sizes.title2}rem;
  font-weight: ${({ theme }) => theme.fonts.weights.w500};
  line-height: ${({ theme }) => theme.fonts.lineHeights.title2}rem;
  color: ${(props) => (props.color ? props.color : '#000')};
`;

export const Subtitle = styled.p<ITextProps>`
  margin-top: ${(props) => (props.mTop ? props.mTop : 0)}px;
  margin-right: ${(props) => (props.mRight ? props.mRight : 0)}px;
  margin-bottom: ${(props) => (props.mBottom ? props.mBottom : 0)}px;
  margin-left: ${(props) => (props.mLeft ? props.mLeft : 0)}px;
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle}rem;
  font-weight: ${({ theme }) => theme.fonts.weights.w400};
  line-height: ${({ theme }) => theme.fonts.lineHeights.subtitle}rem;
  color: ${(props) => (props.color ? props.color : '#000')};
`;

export const Text1 = styled.span<ITextProps>`
  margin-top: ${(props) => (props.mTop ? props.mTop : 0)}px;
  margin-right: ${(props) => (props.mRight ? props.mRight : 0)}px;
  margin-bottom: ${(props) => (props.mBottom ? props.mBottom : 0)}px;
  margin-left: ${(props) => (props.mLeft ? props.mLeft : 0)}px;
  font-size: ${({ theme }) => theme.fonts.sizes.text1}rem;
  font-weight: ${({ theme }) => theme.fonts.weights.w300};
  line-height: ${({ theme }) => theme.fonts.lineHeights.text1}rem;
  color: ${(props) => (props.color ? props.color : '#000')};
`;

export const Text2 = styled.span<ITextProps>`
  margin-top: ${(props) => (props.mTop ? props.mTop : 0)}px;
  margin-right: ${(props) => (props.mRight ? props.mRight : 0)}px;
  margin-bottom: ${(props) => (props.mBottom ? props.mBottom : 0)}px;
  margin-left: ${(props) => (props.mLeft ? props.mLeft : 0)}px;
  font-size: ${({ theme }) => theme.fonts.sizes.text2}rem;
  font-weight: ${({ theme }) => theme.fonts.weights.w300};
  line-height: ${({ theme }) => theme.fonts.lineHeights.text2}rem;
  color: ${(props) => (props.color ? props.color : '#000')};
`;
