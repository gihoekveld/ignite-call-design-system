import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import { Box, Text, Checkbox, type CheckboxProps } from '@hoekveld-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          <Story />
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const checkbox = canvas.getByRole('checkbox', {
      name: 'Accept terms of use',
    })

    await expect(checkbox).toBeInTheDocument()

    await expect(checkbox).not.toBeChecked()

    await userEvent.click(checkbox)

    await expect(checkbox).toBeChecked()
  },
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const checkbox = canvas.getByRole('checkbox', {
      name: 'Accept terms of use',
    })

    await expect(checkbox).toBeDisabled()
  },
}