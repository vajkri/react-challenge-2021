import { Icon, IconProps } from './Icon'
import { Meta, Story } from '@storybook/react'

export default {
	title: 'Components/Atoms/Icon',
	component: Icon,
} as Meta

const Template: Story<IconProps> = args => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
	id: 'clapperboard',
	size: 'lg',
}
