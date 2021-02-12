import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ activeColor, theme }) => theme[activeColor]};
  letter-spacing: 5px;
`;

export default Heading;
