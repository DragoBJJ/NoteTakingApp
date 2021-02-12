import React from 'react';
import { Card } from './Card';

export default {
  title: 'Card',
  components: Card,
};

export const CardCompo = () => <Card />;
export const CardCompo2 = () => <Card cardType="article" />;
export const CardCompo3 = () => <Card cardType="twitter" />;
