import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import { Box, Text, TextArea, type TextAreaProps } from '@hoekveld-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const textarea = canvas.getByRole('textbox')

    await expect(textarea).toBeInTheDocument()

    await expect(
      canvas.getByPlaceholderText('Add any observations...'),
    ).toBeInTheDocument()

    await userEvent.type(
      textarea,
      'Lorem ipsum dolor sit amet.',
    )

    await expect(textarea).toHaveValue(
      'Lorem ipsum dolor sit amet.',
    )
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const textarea = canvas.getByRole('textbox')

    await expect(textarea).toBeDisabled()
  },
}