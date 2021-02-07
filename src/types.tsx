export interface DataProps {
	data: Data | null
	loading: boolean
	error: string | null
}

export interface Data {
	entries: Entry[]
	total: 100
}

export interface Entry {
	title: string
	description: string
	programType: string
	images: any
	releaseYear: number
}
