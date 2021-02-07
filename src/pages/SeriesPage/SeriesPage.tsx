import React from 'react'
import { DataProps, Entry } from '../../types'

export const SeriesPage: React.FunctionComponent<{ data: DataProps }> = ({ data }) => {
	React.useEffect(() => {
		console.log(data)
	}, [data])

	return (
		<div>
			<h1>Series content here</h1>
			<p>
				{data.loading && 'Loading...'}
				{data.error && 'An error has occurred. Please try again.'}
			</p>

			<ul>
				{data.data?.entries?.map((item: Entry, i) => {
					return <li key={i}>{item.title}</li>
				})}
			</ul>
		</div>
	)
}
