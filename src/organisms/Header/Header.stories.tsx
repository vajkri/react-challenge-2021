import { Header } from './Header'
import { Meta, Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export default {
	title: 'Components/Organisms/Header',
	component: Header,
	decorators: [
		Story => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		),
	],
} as Meta

const Template: Story = () => <Header />

export const Default = Template.bind({})
