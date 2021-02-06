export interface SiteLink {
	label: string
	url: string
}

export const siteLinks: SiteLink[] = [
	{
		label: 'Home',
		url: '#!',
	},
	{
		label: 'Terms and Conditions',
		url: '#!',
	},
	{
		label: 'Privacy Policy',
		url: '#!',
	},
	{
		label: 'Collection Statement',
		url: '#!',
	},
	{
		label: 'Help',
		url: '#!',
	},
	{
		label: 'Manage Account',
		url: '#!',
	},
]

export interface SocialLink {
	id: string
	url: string
}

export const socialLinks: SocialLink[] = [
	{
		id: 'facebook',
		url: '#!',
	},
	{
		id: 'twitter',
		url: '#!',
	},
	{
		id: 'instagram',
		url: '#!',
	},
]

export interface ShopLink {
	id: string
	url: string
}

export const shopLinks: ShopLink[] = [
	{
		id: 'appStore',
		url: '#!',
	},
	{
		id: 'googlePlay',
		url: '#!',
	},
	{
		id: 'microsoft',
		url: '#!',
	},
]
