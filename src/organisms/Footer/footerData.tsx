import imgAppStore from '../../assets/store/app-store.svg'
import imgPlayStore from '../../assets/store/play-store.svg'
import imgWindowsStore from '../../assets/store/windows-store.svg'

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
	src: string
}

export const shopLinks: ShopLink[] = [
	{
		id: 'app-store',
		url: '#!',
		src: imgAppStore,
	},
	{
		id: 'play-store',
		url: '#!',
		src: imgPlayStore,
	},
	{
		id: 'windows-store',
		url: '#!',
		src: imgWindowsStore,
	},
]
