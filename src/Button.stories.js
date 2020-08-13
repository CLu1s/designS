import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Button } from './Button';
import { Icon } from './Icon';
import { StoryLinkWrapper } from './StoryLinkWrapper';

const CustomButton = styled.button`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

function ButtonWrapper(props) {
  return <CustomButton onClick={action('button action click')} {...props} />;
}

export default {
  title: 'Design System|Button',
  component: Button,
};

export const allButtons = () => (
  <div>
    <Button appearance="primary">{text("Primary","Primary","active")}</Button>
    <Button appearance="secondary">{text("Secondary","Secondary","active")}</Button>
    <Button appearance="tertiary">{text("Tertiary","Tertiary","active")}</Button>
    <Button appearance="outline">{text("Outline","Outline","active")}</Button>
    <Button appearance="primaryOutline">{text("Outline primary","Outline primary","active")}</Button>
    <Button appearance="secondaryOutline">{text("Outline secondary","Outline secondary","active")}</Button>
    <Button appearance="primary" isDisabled>
    {text("Primary","Disabled","Disabled")}
    </Button>
    <br />
    <Button appearance="primary" isLoading>
    {text("Primary","Primary","Loading")}
    </Button>
    <Button appearance="secondary" isLoading>
    {text("Secondary","Secondary","Loading")}
    </Button>
    <Button appearance="tertiary" isLoading>
    {text("Tertiary","Tertiary","Loading")}
    </Button>
    <Button appearance="outline" isLoading>
    {text("Outline","Outline","Loading")}
    </Button>
    <Button appearance="outline" isLoading loadingText={text("Outline Custom","Custom...","Loading")}>
    Loaded
    </Button>
    <br />
    <Button appearance="primary" size="small">
    {text("Primary","Primary","small")}
    </Button>
    <Button appearance="secondary" size="small">
    {text("Secondary","Secondary","small")}
    </Button>
    <Button appearance="tertiary" size="small">
    {text("Tertiary","Tertiary","small")} 
    </Button>
    <Button appearance="outline" size="small">
    {text("Outline","Outline","small")}
    </Button>
    <Button appearance="primary" isDisabled size="small">
    {text("Disabled","Disabled","small")}
    </Button>
    <Button appearance="outline" size="small" containsIcon>
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button appearance="outline" size="small">
      <Icon icon="link" />
      {text("Link","Link","small")} 
    </Button>
  </div>
);

allButtons.story = {
  name: 'all buttons',
  decorators: [withKnobs],
};
