import type { StoryObj, Meta } from '@storybook/react-vite'
import { Box, type BoxProps, Text } from '@hoekveld-ui/react'
import type { ControlType } from '@storybook/addon-docs/blocks'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <Text>Testando o elemento box</Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null as unknown as ControlType,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const Big: StoryObj<BoxProps> = {}
