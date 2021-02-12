import React from 'react';
import Input from './Input';

export const Normal = () => <Input placeholder="login" />;
export const Search = () => <Input placeholder="search" search />;

export default {
  title: 'atoms/Input',
  component: Input,
};
