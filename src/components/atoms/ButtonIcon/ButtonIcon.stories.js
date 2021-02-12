import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const RedBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.note};
`;

export const a = () => <ButtonIcon icon={bulbIcon} />;
export const b = () => <ButtonIcon icon={logoutIcon} />;
export const c = () => <ButtonIcon icon={penIcon} />;
export const d = () => <ButtonIcon icon={plusIcon} />;
export const e = () => <ButtonIcon icon={twitterIcon} />;

export const active = () => <ButtonIcon active icon={twitterIcon} />;

export default {
  title: 'atoms/ButtoIconn',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <RedBackground>
        <Story />
      </RedBackground>
    ),
  ],
};
