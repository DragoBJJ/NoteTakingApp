import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: flex;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.white};
  outline: none;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
  background-color: ${({ active, theme }) => (active ? theme.white : 'transparent')};
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.white};
  }
`;

export default ButtonIcon;
