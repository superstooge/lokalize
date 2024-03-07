import React from 'react';
import { action } from '../../.storybook/utils';
import Card from './Card';

const options = [
  { icon: 'edit-light', label: 'Edit', onClick: action('Edit') },
  { icon: 'bin', label: 'Delete', onClick: action('Delete'), className: 'has-text-danger' },
];

export default {
  title: 'Redesign/Card',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/idtJY81oMCF3g8yTYzIX1P/Onehub-Component-Library?node-id=4285%3A5152',
    },
  },
};

export const Default = () => <Card>This is a card.</Card>;

Default.story = {
  name: 'default',
};

export const WithTitle = () => <Card title='This is a title'>This is a card with a title.</Card>;

WithTitle.story = {
  name: 'with title',
};

export const WithSubtitle = () => (
  <Card subtitle='This is a subtitle'>This is a card with a subtitle.</Card>
);

WithSubtitle.story = {
  name: 'with subtitle',
};

export const Options = () => <Card options={options}>This is a card with options.</Card>;

Options.story = {
  name: 'options',
};

export const Info = () => <Card info>This is an information card.</Card>;

Info.story = {
  name: 'info',
};

export const Flat = () => <Card flat>This is a flat card.</Card>;

Flat.story = {
  name: 'flat',
};

export const Interactive = () => <Card interactive>This is an interactive card.</Card>;

Interactive.story = {
  name: 'interactve',
};
