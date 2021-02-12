import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: ${({ activeColor, theme }) => theme[activeColor] || '#ffd82b'};
  color: ${({ theme }) => theme.white};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  outline: none;
  font-family: 'Montserrat';
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.white};
      border: 1px solid ${({ activeColor, theme }) => theme[activeColor]};
      transition: all 0.3s ease-in-out;
      color: ${({ activeColor, theme }) => theme[activeColor]};
      width: 125px;
      height: 40px;
      font-size: 12px;

      &:hover {
        background-color: ${({ activeColor, theme }) => theme[activeColor]};
        color: ${({ theme }) => theme.white};
      }
    `}
`;
