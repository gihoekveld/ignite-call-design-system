import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, type AvatarProps } from '@hoekveld-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/gihoekveld.png',
    alt: 'Giselle Hoekveld',
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}