import { Link, LinkProps } from './Link'
import { Meta, Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export default {
	title: 'Components/Atoms/Link',
	component: Link,
	decorators: [
		Story => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		),
	],
} as Meta

const Template: Story<LinkProps> = args => <Link {...args}>Some link</Link>

export const Default = Template.bind({})
Default.args = {
	href: '/',
}

export const ColorLight = Template.bind({})
ColorLight.args = {
	href: '/',
	colorLight: true,
}
ColorLight.parameters = {
	backgrounds: { default: 'dark' },
}
