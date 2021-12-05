import { Footer } from './Footer'
import { Meta, Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export default {
	title: 'Components/Organisms/Footer',
	component: Footer,
	decorators: [
		Story => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		),
	],
} as Meta

const Template: Story = () => <Footer />

export const Default = Template.bind({})
