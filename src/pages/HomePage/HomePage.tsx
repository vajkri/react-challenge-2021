import React from 'react'
import { Link } from '../../atoms/Link/Link'

export const HomePage: React.FunctionComponent = () => {
	return (
		<div>
			<Link href={'/movies'}>Movies</Link>
			<Link href={'/series'}>Series</Link>
		</div>
	)
}
