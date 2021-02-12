import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  letter-spacing: 1px;
`;

export default Paragraph;
