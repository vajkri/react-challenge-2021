import { Button, ButtonProps } from './Button'
import { Meta, Story } from '@storybook/react'

export default {
	title: 'Components/Molecules/Button',
	component: Button,
} as Meta

const handleClick = () => {
	console.log('button clicked')
}

const Template: Story<ButtonProps> = args => <Button {...args}>Some Button</Button>

export const Default = Template.bind({})
Default.args = {
	onClick: handleClick,
}

export const ColorDark = Template.bind({})
ColorDark.args = {
	color: 'dark',
	onClick: handleClick,
}

export const ColorLight = Template.bind({})
ColorLight.args = {
	color: 'light',
	onClick: handleClick,
}
