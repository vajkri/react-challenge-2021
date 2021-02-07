import React from 'react'
import { DataProps, Entry } from '../../types'
import { Media } from '../../molecules/Media/Media'
import styles from './SeriesPage.module.scss'

export const SeriesPage: React.FunctionComponent<{ data: DataProps }> = ({ data }) => {
	React.useEffect(() => {
		console.log(data)
	}, [data])

	return (
		<div className={styles.wrapper}>
			{(data.loading || data.error) && (
				<p>
					{data.loading && 'Loading...'}
					{data.error && 'An error has occurred. Please try again.'}
				</p>
			)}

			<ul className={styles.seriesList}>
				{data.data?.entries?.map((item: Entry, i) => (
					<li className={styles.seriesItem} key={i}>
						<Media
							title={item.title}
							imgSrc={item.images['Poster Art']?.url || ''}
							imgWidth={item.images['Poster Art']?.width}
							imgHeight={item.images['Poster Art']?.height}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}
