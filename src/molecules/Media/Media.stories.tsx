import { Media, MediaProps } from './Media'
import { Meta, Story } from '@storybook/react'
import img from '../../assets/placeholder.png'

export default {
	title: 'Components/Molecules/Media',
	component: Media,
	decorators: [
		Story => (
			<div style={{ width: '240px', maxWidth: '90%' }}>
				<Story />
			</div>
		),
	],
} as Meta

const Template: Story<MediaProps> = args => <Media {...args} />

export const Default = Template.bind({})
Default.args = { title: 'Some Media', imgSrc: img }
