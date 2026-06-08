import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import { Box, Text, TextInput, type TextInputProps } from '@hoekveld-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByRole('textbox')

    await expect(input).toBeInTheDocument()

    await userEvent.type(input, 'Giselle')

    await expect(input).toHaveValue('Giselle')

    await expect(
      canvas.getByPlaceholderText('Type your name'),
    ).toBeInTheDocument()
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByRole('textbox')

    await expect(input).toBeDisabled()
  }
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(
      canvas.getByText('cal.com/'),
    ).toBeInTheDocument()
  }
}